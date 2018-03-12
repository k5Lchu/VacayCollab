import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messagesReducer(state = initialState.messagesData, action) {
  switch (action.type) {
    case types.LOAD_MESSAGES_DATA:
      return action.data;

    case types.CREATE_MESSAGES_DATA:
      return [
        ...state,
        Object.assign({}, action.data)
      ];

    default:
      return state;
  }
}