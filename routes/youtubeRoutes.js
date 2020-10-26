const { google } = require("googleapis");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");
const keys = require('../config/keys');

const requireLogin=require("../middlewares/requireLogin");

const {getOverviewStat, getTopVideos, getVideoInfo, getAudienceData, getSubscribedStatusData, getTrafficSourceTypes} = require("../services/youtubeAnalytics")

//fetch data
module.exports = (app, oauth2Client) => {
    app.get('/api/dashboard', requireLogin, async (req,res) => {
        oauth2Client.setCredentials({refresh_token: req.user.refreshToken});
        const generalStat = await getOverviewStat(oauth2Client, req.query.startDate, req.query.endDate);
        res.send(generalStat);
    });

    app.get('/api/topVideos', requireLogin, async (req,res) => {
        oauth2Client.setCredentials({refresh_token: req.user.refreshToken});
        const topVideos = await getTopVideos(oauth2Client, req.query.startDate, req.query.endDate);
        let videosInfo = [];
        for( i=0;i<topVideos.rows.length;i++) {
            const video = await getVideoInfo(oauth2Client, topVideos.rows[i][0]);
            const {id, snippet} = video.items[0];
            videosInfo.push({id,snippet});
        }
        topVideos.videosInfo = videosInfo;
        res.send(topVideos);
    });

    app.get('/api/audience', requireLogin, async (req,res) => {
        oauth2Client.setCredentials({refresh_token: req.user.refreshToken});
        const audienceData = await getAudienceData(oauth2Client, req.query.startDate, req.query.endDate);
        res.send(audienceData);
    });

    app.get('/api/audience/subscribedStatus', requireLogin, async (req,res) => {
        oauth2Client.setCredentials({refresh_token: req.user.refreshToken});

        const subscribedStatusData = await getSubscribedStatusData(oauth2Client, req.query.startDate, req.query.endDate);
        res.send(subscribedStatusData);
    });

    app.get('/api/audience/trafficSources', requireLogin, async (req, res) => {
        oauth2Client.setCredentials({refresh_token: req.user.refreshToken});

        const traffic = await getTrafficSourceTypes(oauth2Client, req.query.startDate, req.query.endDate);
        res.send(traffic);
    })

}


