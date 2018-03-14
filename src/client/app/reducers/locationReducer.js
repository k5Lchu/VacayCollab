import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function LocationReducer(state = [initialState.locations, initialState.locMap] , action) {
    switch(action.type){
        case types.LOAD_LOCATION_DATA:
            return [action.data, state[1]];
        case types.LOAD_MAP_DATA:
            return [state[0], action.data];
        case types.UPVOTE_LOCATION:
            return [action.data, state[1]];
        default:
            return state;
    }
};

