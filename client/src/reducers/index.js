import { combineReducers } from 'redux';
import authReducer from './authReducer';
import overviewReducer from './overviewReducer';
import topVideos from './topVideosReducer'
import audienceReducer from './audienceReducer'
import subscribedStatusReducer from './subscribedStatusReducer';
import trafficSourceReducer from './trafficSourceReducer';

export default combineReducers({
    auth: authReducer,
    topVideos: topVideos,
    overviewData: overviewReducer,
    audienceData: audienceReducer,
    subscribedStatusData: subscribedStatusReducer,
    trafficSources: trafficSourceReducer
});