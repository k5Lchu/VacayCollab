import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itineraryReducer(state = initialState.itineraryData, action) {
  switch (action.type) {
    case types.LOAD_ITINERARY_DATA:
      return action.itineraryData;

    case types.CREATE_ITINERARY_DATA:
      return [
        ...state,
        Object.assign({}, action.itineraryData)
      ];

    case types.UPDATE_ITINERARY_DATA:
      return [
        ...state.filter(course => itineraryData.id !== action.itineraryData.id),
        Object.assign({}, action.itineraryData)
      ];

    default:
      return state;
  }
}