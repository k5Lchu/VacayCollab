import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItinerearyPageContent from '../itinerary.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let messagesData = [];

let commentData = [];

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

for (let i = 0; i < itineraryData.length; i++) {
    itineraryData[i].key = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

itineraryData.sort((a,b) => {
    let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
    let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
    return (aDateVal - bDateVal);
});

let g = () => {
    return(
        <BrowserRouter><ItinerearyPageContent data={itineraryData} comments={commentData} messages={messagesData} /></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('itinerary page component', ()=>{
    it('renders title', () => {
        expect(wrapper.find('#top-prompt h1').text()).toEqual('Where does everyone want to go?');
    });
    it('left side has correct number of dates', () => {
        expect(wrapper.find('.itinerary-container-left').children().length).toEqual(3);
    });
    it('right side has correct number of events', () => {
        expect(wrapper.find('.itinerary-container-right').children().length).toEqual(4);
    });
});
