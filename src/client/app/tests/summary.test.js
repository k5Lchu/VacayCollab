import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryPage from '../components/summary.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let messagesData = [];

let commentData = [];

let eventsData = [
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

for (let i = 0; i < eventsData.length; i++) {
    eventsData[i].key = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

eventsData.sort((a,b) => {
    let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
    let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
    return (aDateVal - bDateVal);
});

let g = () => {
    return(
        <BrowserRouter><SummaryPage data={eventsData} comments={commentData} messages={messagesData} /></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('itinerary page component', ()=>{
    it('renders title', () => {
        expect(wrapper.find('#summary-h1-header').text()).toEqual('Does this plan work with everyone?');
    });
    it('has correct number of events listed', () => {
        expect(wrapper.find('EventSummaryList').childAt(0).childAt(1).children().length).toEqual(4);
    });
});
