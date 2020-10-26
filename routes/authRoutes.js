const passport = require('passport');
const {getChannelInfo} = require("../services/youtubeAnalytics")
module.exports = (app, oauth2Client) => {
    app.get('/auth/google',passport.authenticate('google', {
        scope:['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/yt-analytics.readonly',
                'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
                'https://www.googleapis.com/auth/youtube',
                'https://www.googleapis.com/auth/youtubepartner',
                'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
                'https://www.googleapis.com/auth/youtube.force-ssl',
                'https://www.googleapis.com/auth/youtube.upload',
                'https://www.googleapis.com/auth/youtubepartner-channel-audit' 
        ],
        accessType: 'offline'
    }))
    
    app.get('/auth/google/callback', passport.authenticate('google'),
        (req, res) => {
            res.redirect('/settings')
        }
    );
    
    app.get('/api/logout', (req,res) => {
        req.logout();
        res.redirect('/');
    });

    app.get(
        '/api/current_user', async (req,res) => {
            if(req.user) {
                oauth2Client.setCredentials({refresh_token: req.user.refreshToken});
                const channelInfo = await getChannelInfo(oauth2Client);
                res.send({user: req.user, channelInfo});
            } else {
                res.send(null);
            }
        }
    );
}
