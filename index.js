const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const { google } = require("googleapis");


require('./models/User');
require('./services/passport.js');

mongoose.connect(keys.mongoURI);
const oauth2Client = new google.auth.OAuth2();

oauth2Client._clientId = keys.googleClientId;
oauth2Client._clientSecret = keys.googleClientSecret;

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app, oauth2Client);
require('./routes/youtubeRoutes.js')(app,oauth2Client);


const PORT = process.env.PORT || 5000;
app.listen(PORT);