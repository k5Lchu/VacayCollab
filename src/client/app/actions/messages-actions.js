import * as types from './actionTypes';
import messagesApi from '../api/mockMessagesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadMessagesData(data) {
  return { type: types.LOAD_MESSAGES_DATA, data};
}

export function createMessagesData(data) {
  return {type: types.CREATE_MESSAGES_DATA, data};
}

export function loadMessages() {
  console.log("LoadMessages() called");
  return function(dispatch) {
    dispatch(beginAjaxCall());
    console.log("hi");
    return messagesApi.getAllMessages().then(data => {
      console.log(data);
      dispatch(loadMessagesData(data));
    }).catch(error => {
      console.log(error);
      throw(error);
    });
  };
}

export function saveMessage(comment) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return messagesApi.saveMessage(comment).then(comment => {
        dispatch(createMessagesData(comment));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
