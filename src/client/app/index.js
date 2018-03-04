import React from 'react';
import { render } from 'react-dom';

import { HashRouter, Router } from 'react-router-dom';

import routes from './routes.js';

import './styles/agent_chat.css';
import './styles/itinerary.css';
import './styles/summary.css';
import './styles/progress_bottom.css';
import './styles/location.css';
import './styles/markavailability.css';
import './styles/decidedate.css';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <HashRouter>
        <div>
            {routes}
        </div>
    </HashRouter>,
    document.getElementById('app')
);
