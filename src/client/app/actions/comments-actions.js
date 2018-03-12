import * as types from './actionTypes';
import commentsApi from '../api/mockCommentsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCommentsData(data) {
  return { type: types.LOAD_COMMENTS_DATA, data};
}

export function createCommentsData(data) {
  return {type: types.CREATE_COMMENTS_DATA, data};
}

export function loadComments() {
  console.log("LoadComments() called");
  return function(dispatch) {
    dispatch(beginAjaxCall());
    console.log("hi");
    return commentsApi.getAllComments().then(data => {
      console.log(data);
      dispatch(loadCommentsData(data));
    }).catch(error => {
      console.log(error);
      throw(error);
    });
  };
}

export function saveComment(comment) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return commentsApi.saveComment(comment).then(comment => {
        dispatch(createCommentsData(comment));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
