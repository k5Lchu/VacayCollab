import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commentsReducer(state = initialState.commentsData, action) {
  switch (action.type) {
    case types.LOAD_COMMENTS_DATA:
      return action.data;

    case types.CREATE_COMMENTS_DATA:
      return [
        Object.assign({}, action.data),
        ...state
      ];

    default:
      return state;
  }
}
