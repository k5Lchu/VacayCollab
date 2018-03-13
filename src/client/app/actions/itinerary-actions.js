import * as types from './actionTypes';
import itineraryApi from '../api/mockItineraryApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadItineraryData(data) {
  return { type: types.LOAD_ITINERARY_DATA, data};
}

export function createItineraryData(data) {
  return {type: types.CREATE_ITINERARY_DATA, data};
}

export function deleteItineraryData(data) {
  return {type: types.DELETE_ITINERARY_DATA, data};
}

export function updateItineraryData(data) {
  return {type: types.UPDATE_ITINERARY_DATA, data};
}


export function loadItinerary() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return itineraryApi.getAllData().then(data => {
      dispatch(loadItineraryData(data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveItineraryEvent(newEvent) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return itineraryApi.saveData(newEvent).then(event => {
      dispatch(createItineraryData(newEvent));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteItineraryEvent(eventId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return itineraryApi.deleteData(eventId).then(id => {
      dispatch(deleteItineraryData(id));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function updateItineraryEvent(eventUpdates) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return itineraryApi.updateData(eventUpdates).then(newData => {
      dispatch(updateItineraryData(newData));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
