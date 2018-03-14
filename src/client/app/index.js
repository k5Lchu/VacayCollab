import React from 'react';
import { render } from 'react-dom';

import { HashRouter, Router } from 'react-router-dom';

import routes from './routes.js';

import './styles/agent_chat.css';
import './styles/summary.css';
import './styles/progress_bottom.css';
import './styles/invite.css';
import './styles/location.css';
import './styles/markavailability.css';
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
import {loadLocMap} from './actions/locations-actions';
//add actions here

//const store = createStore(rootReducer);
const store = configureStore();
store.dispatch(loadItinerary());
store.dispatch(loadComments());
store.dispatch(loadMessages());
store.dispatch(loadLocations());
store.dispatch(loadLocMap());

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
