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
/*import MarkReducer from './components/reducers/markReducer.js';
import DecideReducer from './components/reducers/decideReducer.js';
import LocationReducer from './components/reducers/locationReducer.js';*/
import configureStore from './store/configureStore';
import rootReducer from './reducers';

//import {loadItineraryData} from './actions/itinerary-actions';
import {loadComments} from './actions/comments-actions';
import {loadMessages} from './actions/messages-actions';
import {loadItinerary} from './actions/itinerary-actions';
//add actions here

/** Add reducer file imports to this combineReducer */
/*const reducers = combineReducers({
    decideDate: DecideReducer,
    markAvail: MarkReducer,
    location: LocationReducer,
});*/

//const store = createStore(rootReducer);
const store = configureStore();
store.dispatch(loadItinerary());
store.dispatch(loadComments());
store.dispatch(loadMessages());

/*const store = createStore(reducers,
    {
        //this is where the initial state goes,
        //still trying to figure out a way to squeeze 
        //all of our data in routes from here without
        //being ridiculous 
    },
    window.devToolsExtension && window.devToolsExtension()
);*/

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
