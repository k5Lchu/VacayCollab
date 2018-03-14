import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function LocationReducer(state=[], action) {
    switch(action.type){
        case types.LOAD_LOCATION_DATA:
            return action.data;
        case types.LOAD_MAP_DATA:
            return action.data;
        case types.UPVOTE_LOCATION:
            return action.data;
        default:
            return state;
    }
};

