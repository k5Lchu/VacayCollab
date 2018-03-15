import delay from './delay';

var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var daysInWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var start = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var currentMonth = 2;
var saveDays = [];
var passedDays = [];

let monthMap = new Map();
for (let i = 0; i < months.length; i++) {
    let map = [i, start[i], days[i]];
    monthMap.set(months[i], map);
}

let selectDaySave = function (save) {
    saveDays = save;
};

let selectDayPass = function (save) {
    passedDays = save;
};

class calendarApi {
    static getMonthMap() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign(new Map(), monthMap));
            }, delay);
        });
    }

    static getCurrentMonth() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign(new Var(), currentMonth));
            }, delay);
        });
    }

    static getPassedDays() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], passedDays));
            }, delay);
        });
    }

    static getSavedDays() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], saveDays));
            }, delay);
        });
    }

    static selectPassDay(save) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                selectDayPass(save);
            }, delay);
        });
    }
    static selectSaveDay(save) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                selectDaySave(save);
            }, delay);
        });
    }
}

export default calendarApi;