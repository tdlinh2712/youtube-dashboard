import {FETCH_TRAFFIC_SOURCES} from '../actions/types';

export default function (state = null, action) {
    switch(action.type) {
        case FETCH_TRAFFIC_SOURCES:
            return action.payload || false ;
        default:
            return state;
    };
    
};