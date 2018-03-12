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

export function loadItinerary() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return itineraryApi.getAllData().then(data => {
      data.sort((a,b) => {
        let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
        let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
        return (aDateVal - bDateVal);
      });
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
