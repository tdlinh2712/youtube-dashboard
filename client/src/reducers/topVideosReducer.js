import {FETCH_TOP_VIDEOS} from '../actions/types';

export default function (state = null, action) {
    switch(action.type) {
        case FETCH_TOP_VIDEOS:
            return action.payload || false ;
        default:
            return state;
    };
    
};