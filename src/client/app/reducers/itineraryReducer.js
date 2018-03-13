import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itineraryReducer(state = initialState.itineraryData, action) {
  switch (action.type) {
    case types.LOAD_ITINERARY_DATA:
      return action.data;

    case types.CREATE_ITINERARY_DATA:
      let newItineraryList = [...state, Object.assign({}, action.data)];
      newItineraryList.sort((a,b) => {
        let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
        let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
        return (aDateVal - bDateVal);
      });
      return newItineraryList;

    case types.DELETE_ITINERARY_DATA:
      return [...state.filter(event => event.key !== action.data)];

    case types.UPDATE_ITINERARY_DATA:
      let newDataList = [...state];
      newDataList[action.data.index] = action.data;
      delete action.data['index'];
      return newDataList;

    default:
      return state;
  }
}
