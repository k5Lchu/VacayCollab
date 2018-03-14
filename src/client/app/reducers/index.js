import {combineReducers} from 'redux';
import itineraryData from './itineraryReducer';
import commentsData from './commentsReducer';
import messagesData from './messagesReducer';
import locationData from './locationReducer';
// import your reducers here

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  messagesData,
  commentsData,
  itineraryData,
  locationData,
  ajaxCallsInProgress,
  // add your reducers here
});

export default rootReducer;