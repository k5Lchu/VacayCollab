import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App.jsx';
import Itinerary from './components/itinerary.jsx';
import Summary from './components/summary.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Invite from './components/invite.jsx';
import Hotel from './components/hotel.jsx';
import LocationSelect from './components/location.jsx';

//import MarkAvailability from './components/markavailability.jsx';

const imageReq = require.context('./images', false, /\.(png|jpg)$/);

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

var locations = [
    {
        name: 'Chiang Mai',
        upvotes: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/chiangmai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Los Angeles',
        upvotes: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/LA-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'San Diego',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/sandiego-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'New York',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/newyork-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Dubai',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/dubai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Toronto',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/toronto-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Paris',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/paris-pic.jpg',
        displayed: false,
        voted: false
    }
];

var locMap = new Map();
for(let i=0; i<locations.length; i++){
    let loc = locations[i];
    if(!locMap.has(loc.name)){
        locMap.set(loc.name, [i]);
    }else{
        locMap.get(loc.name).push(i);
    }
}

let upvoteLoc = function(name){
    locations[locMap.get(name)].upvotes += 1;
    locations[locMap.get(name)].voted = true;
};

var locCommentsData = [
    {
        author: 'Roronoa Zoro',
        commentContent: 'Hey Luffy, trust me.If we go to Chiang Mai we can eat a lot of delicious food.',
        timestamp: 1
    },
    {
        author: 'Luffy',
        commentContent: 'NAMI! WE"RE SETTING SAIL TO CHIANG MAI NOW!',
        timestamp: 2
    },
    {
        author: 'Nami',
        commentContent: 'I want to see Hollywood!',
        timestamp: 3
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

export default [<Route key="1" path={'/'} component={App}/>,

                <Route key="2" path={'/'} exact render={(props) => <Home/> }/>,
                <Route key="3" path={'/login'} render={(props) => <Login/> }/>,
                <Route key="4" path={'/signup'} render={(props) => <Signup/> }/>,
                <Route key="5" path={'/invite'} render={(props) => <Invite/> }/>,
                
                <Route key="8" path={'/location'} render={(props) => <LocationSelect data={locations} map={locMap} upVoteLoc={upvoteLoc} comments={locCommentsData} messages={messagesData} />} />,
                <Route key="9" path={'/hotel'} render={(props) => <Hotel/>}/>,
                <Route key="10" path={'/itinerary'} render={(props) => <Itinerary data={itineraryData} comments={commentsData} messages={messagesData} />} />,
                <Route key="11" path={'/summary'} render={(props) => <Summary data={itineraryData} comments={commentsData} messages={messagesData}  />} />,
               ];
