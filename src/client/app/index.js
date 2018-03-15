import React from 'react';
import { render } from 'react-dom';

import { HashRouter, Router } from 'react-router-dom';

import routes from './routes.js';

import './styles/decidedate.css';
import './styles/hotel.css';

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import rootReducer from './reducers';

//import {loadItineraryData} from './actions/itinerary-actions';
import {loadComments} from './actions/comments-actions';
import {loadMessages} from './actions/messages-actions';
import {loadItinerary} from './actions/itinerary-actions';
import {loadLocations} from './actions/locations-actions';
import { loadLocMap } from './actions/locations-actions';
import { loadMonthMap } from './actions/calendar-actions';
import { loadCurrentMonth } from './actions/calendar-actions';
import { loadDaysPassed } from './actions/calendar-actions';
import { loadDaysSaved } from './actions/calendar-actions';
//add actions here

//const store = createStore(rootReducer);
const store = configureStore();
store.dispatch(loadLocations());
store.dispatch(loadLocMap());
store.dispatch(loadMonthMap());
store.dispatch(loadCurrentMonth());
store.dispatch(loadDaysPassed());
store.dispatch(loadDaysSaved());
store.dispatch(loadItinerary());
store.dispatch(loadComments());
store.dispatch(loadMessages());


store.subscribe(() => {
    console.log("store changed", store.getState());
});

render(
    <Provider store={store}>
        <HashRouter>
            <div>
                {routes}
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
