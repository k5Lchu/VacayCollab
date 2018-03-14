import * as types from './actionTypes';
import locationAPI from '../api/mockLocationAPI';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function LoadLocationData(data){
    return {type: types.LOAD_LOCATION_DATA , data};
}

export function LoadMapData(data){
    return {type: types.LOAD_MAP_DATA , data}
}

export function UpvoteLocation(data){
    return {type: types.UPVOTE_LOCATION , data};
}

export function loadLocations() {
    return function(dispatch) {
      dispatch(beginAjaxCall());
      return locationAPI.getAllLocations().then(loc => {
        dispatch(LoadLocationData(loc));
      }).catch(error => {
        console.log(error);
        throw(error);
      });
    };
}

export function loadLocMap() {
    return function(dispatch) {
      dispatch(beginAjaxCall());
      return locationAPI.getLocMap().then(entry => {
        dispatch(LoadMapData(entry));
      }).catch(error => {
        console.log(error);
        throw(error);
      });
    };
}

export function upvoteLocation(name) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        locationAPI.upvoteLocation(name)
        return locationAPI.getAllLocations().then(loc => {
            dispatch(LoadLocationData(loc));
        }).catch(error => {
          dispatch(ajaxCallError(error));
          throw(error);
        });
    };
}