import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MarkAvailability from '../components/markavailability.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var daysInWeek = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var start = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var currentMonth = 2;
var saveDays = [];
var passedDays = [60];

let monthMap = new Map();
for(let i=0; i<months.length; i++){
    let map = [i, start[i], days[i]];
    monthMap.set(months[i], map);
}
let selectDaySave = function(save){saveDays = save;};
let selectDayPass = function(save){passedDays = save;};
let chat = [];

let g = () => {
    return(
        <BrowserRouter><MarkAvailability monthMap={monthMap} currentMonth={currentMonth} months={months} daysInWeek={daysInWeek} saveDays={passedDays} selectDay={selectDayPass} messages={chat} /></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('mark availability page components', () => {
    it('lists the correct months for selecting', ()=>{
        expect(wrapper.find('#month-select').childAt(0).children().length).toEqual(3);
    });
    it('days start on right cell for current month', ()=>{
        expect(wrapper.find('#cell'+start[currentMonth]).at(0).text()).toEqual(' 1 ');
    });
    it('arbitrary saved day is correctly removed', ()=>{
        wrapper.find('#cell'+start[currentMonth]).at(0).simulate('click');
        expect(passedDays.length).toEqual(0);
    });
});