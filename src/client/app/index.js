import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Router } from 'react-router-dom';

import routes from './routes.js';

import './styles/agent_chat.css';
import './styles/itinerary.css';
import './styles/summary.css';
import './styles/progress_bottom.css';
import './styles/home.css';
import './styles/login.css';
import './styles/signup.css';
import './styles/invite.css';
import './styles/location.css';
//import './styles/markavailability.css';

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <BrowserRouter>
        <div>
            {routes}
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);
