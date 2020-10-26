import axios from 'axios'
import moment from 'moment'
import {FETCH_USER, FETCH_TOP_VIDEOS, FETCH_OVERVIEW_DATA, FETCH_AUDIENCE_DATA, FETCH_SUBSCRIBED_STATUS_DATA, FETCH_TRAFFIC_SOURCES} from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data });
};

export const fetchOverviewData = () => async dispatch => {
    const res = await axios.get('/api/dashboard', {
        params: {
            endDate:moment().format('YYYY-MM-DD'),
            startDate:moment().subtract(365,'days',).format('YYYY-MM-DD')
        }
    });
    dispatch({type: FETCH_OVERVIEW_DATA, payload: res.data});

};

export const fetchTopVideos = () => async dispatch => {
    const res = await axios.get('/api/topVideos', {
        params: {
            endDate:moment().format('YYYY-MM-DD'),
            startDate:moment().subtract(90,'days',).format('YYYY-MM-DD')
        }
    });
    dispatch({type: FETCH_TOP_VIDEOS, payload: res.data});
};

export const fetchAudienceData = () => async dispatch => {
    const res = await axios.get('/api/audience', {
        params: {
            endDate:moment().format('YYYY-MM-DD'),
            startDate:moment().subtract(90,'days',).format('YYYY-MM-DD')
        }
    });
    dispatch({type: FETCH_AUDIENCE_DATA, payload: res.data});
};

export const fetchSubscribedStatusData = () => async dispatch => {
    const res = await axios.get('/api/audience/subscribedStatus', {
        params: {
            endDate:moment().format('YYYY-MM-DD'),
            startDate:moment().subtract(90,'days',).format('YYYY-MM-DD')
        }
    });
    dispatch({type: FETCH_SUBSCRIBED_STATUS_DATA, payload: res.data});
};

export const fetchTrafficSources = () => async dispatch => {
    const res = await axios.get('/api/audience/trafficSources', {
        params: {
            endDate:moment().format('YYYY-MM-DD'),
            startDate:moment().subtract(90,'days',).format('YYYY-MM-DD')
        }
    });
    dispatch({type: FETCH_TRAFFIC_SOURCES, payload: res.data});
};

