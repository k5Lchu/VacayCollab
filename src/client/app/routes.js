import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App.jsx';
import Itinerary from './components/itinerary.jsx';
import Summary from './components/summary.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Invite from './components/invite.jsx';

let commentsData = [
    {
        author: 'Scott',
        commentContent: '...',
        key: '5'
    },
    {
        author: 'Kevin',
        commentContent: 'Eww Fabian territory',
        key: '4'
    },
    {
        author: 'David',
        commentContent: 'Shut up Kevin. How does Tijuana sound?',
        key: '3'
    },
    {
        author: 'Scott',
        commentContent: 'David where do you want to go?',
        key: '2'
    },
    {
        author: 'Kevin',
        commentContent: 'David why aren\'t you saying anything?',
        key: '1'
    }
];

let messagesData = [
    {
        sender: 'user',
        message: 'I have a question'
    },
    {
        sender: 'agent',
        message: 'Sure thing! What\'s your question?'
    },
    {
        sender: 'user',
        message: 'Do you happen to know any places to visit in ChiangMai?'
    },
    {
        sender: 'agent',
        message: 'Not really'
    },
    {
        sender: 'user',
        message: '...'
    },
    {
        sender: 'user',
        message: 'Thank you...?'
    },
    {
        sender: 'agent',
        message: 'No problem'
    },
    {
        sender: 'agent',
        message: 'It\'s been a pleasure'
    }
];

/*let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let daysInWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let monthNumberMap = {
    JAN: 0,
    FEB: 1,
    MAR: 2,
    APR: 3,
    MAY: 4,
    JUN: 5,
    JUL: 6,
    AUG: 7,
    SEP: 8,
    OCT: 9,
    NOV: 10,
    DEC: 11
};*/

let itineraryData = [
    {
        location: 'Chiang Mai',
        title: 'Chiang Mai Attractions',
        month: 2,
        dayOfMonth: 20,
        dayOfWeek: 1,
        year: 2018,
        startTime: '9:00am',
        endTime: '8:00pm',
        description: 'Visit the Wat Suan Dok (3 hours) and Tha Phae Gate (4 hours)'
    },
    {
        location: 'Chiang Mai',
        title: 'Visit Chiang Mai Fast Food',
        month: 2,
        dayOfMonth: 21,
        dayOfWeek: 2,
        year: 2017,
        startTime: '11:00am',
        endTime: '7:00pm',
        description: 'Find and try all the street food!'
    },
    {
        location: 'Chiang Mai',
        title: 'Chiang Mai Bar Hoping',
        month: 2,
        dayOfMonth: 21,
        dayOfWeek: 2,
        year: 2017,
        startTime: '11:00am',
        endTime: '7:00pm',
        description: 'Find and try all the street booze!'
    },
    {
        location: 'Chiang Mai',
        title: 'Chiang Mai Hiking Hell',
        month: 4,
        dayOfMonth: 12,
        dayOfWeek: 3,
        year: 2017,
        startTime: '10:00am',
        endTime: '6:00pm',
        description: 'Visit hiking trail north of the city. Bring water!!!'
    }
];

for (let i = 0; i < messagesData.length; i++) {
    messagesData[i].key = 'msg-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

for (let i = 0; i < itineraryData.length; i++) {
    itineraryData[i].key = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

itineraryData.sort((a,b) => {
    let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
    let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
    return (aDateVal - bDateVal);
});

let startingPathname = window.location.pathname;

export default [<Route key="1" path={startingPathname + '/'} component={App}/>,
                <Route key="2" path={startingPathname + '/'} exact render={(props) => <Home starPathName={startingPathname}/> }/>,
                <Route key="3" path={startingPathname + '/login'} render={(props) => <Login starPathName={startingPathname}/> }/>,
                <Route key="4" path={startingPathname + '/signup'} render={(props) => <Signup starPathName={startingPathname}/> }/>,
                <Route key="5" path={startingPathname + '/invite'} render={(props) => <Invite starPathName={startingPathname}/> }/>,
                <Route key="6" path={startingPathname + '/itinerary'} render={(props) => <Itinerary data={itineraryData} comments={commentsData} messages={messagesData} starPathName={startingPathname} />} />,
                <Route key="7" path={startingPathname + '/summary'} render={(props) => <Summary data={itineraryData} comments={commentsData} messages={messagesData} starPathName={startingPathname} />} />
               ];
