import {combineReducers} from 'redux';
import itineraryData from './itineraryReducer';
import commentsData from './commentsReducer';
import messagesData from './messagesReducer';
// import your reducers here

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  messagesData,
  commentsData,
  itineraryData,
  ajaxCallsInProgress,
  // add your reducers here
});

export default rootReducer;