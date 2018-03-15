import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function DecideReducer(state = [initialState.monthMap, initialState.currentMonth, initialState.passedDays, initialState.savedDays], action) {
    switch (action.type) {
        case types.LOAD_MONTHMAP_DATA:
            return [action.data, state[1], state[2], state[3]];
        case types.LOAD_CURRENT_MONTH_DATA:
            return [state[0], action.data, state[2], state[3]];
        case types.LOAD_DAYS_PASSED_DATA:
            return [state[0], state[1], action.data, state[3]];
        case types.LOAD_DAYS_SAVED_DATA:
            return [state[0], state[1], state[2], action.data];
        case types.SELECT_DAY_PASSED:
            return [state[0], state[1], action.data, state[3]];
        case types.SELECT_DAY_SAVED:
            return [state[0], state[1], state[2], action.data];
        default:
            return state;
    }
};

