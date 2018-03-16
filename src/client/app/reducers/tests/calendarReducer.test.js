import expect from 'expect';
import calendarReducer from '../calendarReducer.js';
import * as actions from '../../actions/calendar-actions.js';
import * as types from '../../actions/actionTypes.js';


describe('calendar reducer', () =>{
    it('should load in 12 months, with their respective start and duration, into monthMap', ()=>{
        const initialState = [new Map(), 2, [], []];
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var start = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let monthMap = new Map();
        for (let i = 0; i < months.length; i++) {
            let map = [i, start[i], days[i]];
            monthMap.set(months[i], map);
        }
        const action = actions.LoadMonthMapData(monthMap);
        const newState = calendarReducer(initialState, action);
        expect(newState[0].size).toEqual(months.length);
        for(let i=0; i<months.length; i+=1){
            let entry = newState[0].get(months[i]);
            expect(entry[0]).toEqual(i);
            expect(entry[1]).toEqual(start[i]);
            expect(entry[2]).toEqual(days[i]);
        }
    });

    it('should load current month into state', ()=>{
        const initialState = [new Map(), 2, [], []];
        const action = actions.LoadCurrentMonthData(10);
        const newState = calendarReducer(initialState, action);

        expect(newState[1]).toEqual(10);
    });

    it('passed and saved days should load and be selected correctly', () => {
        const initialState = [new Map(), 2, [], []];
        let pass = [11,22,33,44,55];
        let save1 = [18,19,20,21,22];
        const action = actions.LoadDaysPassedData(pass);
        const action1 = actions.LoadDaysSavedData(save1);
        const newState = calendarReducer(initialState, action);
        const newState1 = calendarReducer(newState, action1);

        let pass2 = [22,44];
        let save3 = [23, 24, 25, 42, 43, 44];
        const action2 = actions.SelectDayPassed(pass2);
        const action3 = actions.SelectDaySaved(save3);
        const newState2 = calendarReducer(newState1, action2);
        const newState3 = calendarReducer(newState2, action3);

        expect(newState1[2].length).toEqual(5);
        expect(newState3[2].length).toEqual(2);
        expect(newState1[2][0]).toEqual(11);
        expect(newState3[2][0]).toEqual(22);

        expect(newState1[3].length).toEqual(5);
        expect(newState3[3].length).toEqual(6);
        expect(newState1[3][0]).toEqual(18);
        expect(newState3[3][0]).toEqual(23);
    });
    

});