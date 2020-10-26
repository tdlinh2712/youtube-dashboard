import {FETCH_AUDIENCE_DATA} from '../actions/types';

export default function (state = null, action) {
    switch(action.type) {
        case FETCH_AUDIENCE_DATA:
            return action.payload || false ;//user model
        default:
            return state;
    };
    
};