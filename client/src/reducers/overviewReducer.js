import {FETCH_OVERVIEW_DATA} from '../actions/types';

export default function (state = null, action) {
    switch(action.type) {
        case FETCH_OVERVIEW_DATA:
            return action.payload || false ;//user model
        default:
            return state;
    };
    
};