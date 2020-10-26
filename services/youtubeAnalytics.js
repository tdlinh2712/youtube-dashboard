const { google } = require("googleapis");
const { STATES } = require("mongoose");
module.exports =  {
  getOverviewStat: async function(auth, startDate, endDate) {
    const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
    const result = await youtubeAnalytics.reports
      .query({
        dimensions: "day",
        endDate: `${endDate}`,
        ids: "channel==MINE",
        metrics: "views,subscribersGained,estimatedMinutesWatched",
        sort: "day",
        startDate: `${startDate}`,
      })
      .catch(error => {console.log(error)});
    return result.data;
  },

  getChannelInfo: async function(auth) {
    const youtube = google.youtube({version:"v3", auth});
    const result = await youtube.channels.list({
      part:"snippet,contentDetails,statistics",
      mine:"true"
    })
    return result.data.items[0];
  },
  
  getTopVideos: async function(auth, startDate, endDate) {
    const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
    const result = await youtubeAnalytics.reports
      .query({
        dimensions: "video",
        endDate: `${endDate}`,
        ids: "channel==MINE",
        maxResults: "5",
        metrics: "estimatedMinutesWatched,views,likes,subscribersGained",
        sort: "-estimatedMinutesWatched",
        startDate: `${startDate}`,
      })
      .catch(error => {console.log(error)});
    return result.data;
  },

  getTrafficSourceTypes: async function (auth, startDate, endDate) {
    const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
    const result = await youtubeAnalytics.reports
      .query({
        dimensions: "insightTrafficSourceType",
        endDate: `${endDate}`,
        ids: "channel==MINE",
        maxResults: "5",
        metrics: "views,estimatedMinutesWatched",
        sort: "-views",
        startDate: `${startDate}`,
      })
      .catch(error => {console.log(error)});
    return result.data;
  },

  getSubscribedStatusData: async function (auth, startDate, endDate) {
    const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
    const result = await youtubeAnalytics.reports
      .query({
        dimensions: "subscribedStatus",
        endDate: `${endDate}`,
        ids: "channel==MINE",
        maxResults: "5",
        metrics: "views,estimatedMinutesWatched,averageViewPercentage,likes,dislikes",
        sort: "-views",
        startDate: `${startDate}`,
      })
      .catch(error => {console.log(error)});
    return result.data;
  },

  getAudienceData: async function (auth, startDate, endDate) {
    const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth });
    const SUBSCRIBED = await youtubeAnalytics.reports
      .query({
        dimensions: "ageGroup,gender",
        filters:`subscribedStatus==SUBSCRIBED`,
        endDate: `${endDate}`,
        ids: "channel==MINE",
        metrics: "viewerPercentage",
        sort: "ageGroup,gender",
        startDate: `${startDate}`,
      })
      .catch(error => {console.log(error)});
    
    const UNSUBSCRIBED = await youtubeAnalytics.reports
      .query({
        dimensions: "ageGroup,gender",
        filters:`subscribedStatus==UNSUBSCRIBED`,
        endDate: `${endDate}`,
        ids: "channel==MINE",
        metrics: "viewerPercentage",
        sort: "ageGroup,gender",
        startDate: `${startDate}`,
      })
      .catch(error => {console.log(error)});
    
    return {SUBSCRIBED: SUBSCRIBED.data, UNSUBSCRIBED: UNSUBSCRIBED.data};
  },

  getVideoInfo: async function(auth, videoId) {
    const youtube = google.youtube({version:"v3", auth});
    const result = await youtube.videos.list({
      part:"snippet",
      id:`${videoId}`,
    })
    .catch(error => {error});
    return result.error ? result : result.data;
  },

  
}