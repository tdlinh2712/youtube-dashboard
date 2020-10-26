const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    accessToken: String,
    refreshToken: String
});

//create model class
mongoose.model('users', userSchema);