import * as types from './actionTypes';
import itineraryApi from '../api/mockItineraryApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadItineraryData(data) {
  return { type: types.LOAD_ITINERARY_DATA, data};
}

export function createItineraryData(data) {
  return {type: types.CREATE_ITINERARY_DATA, data};
}

export function updateItineraryData(data) {
  return {type: types.UPDATE_ITINERARY_DATA, data};
}

export function loadData() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return itineraryApi.getAllData().then(data => {
      dispatch(loadItineraryData(data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
