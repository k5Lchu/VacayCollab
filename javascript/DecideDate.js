
var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var daysInWeek = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

var start = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];

var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var currentMonth = 1;
var currdays = [];

var dayspassed;

if (localStorage.getItem('dates-selected') != null) {
    dayspassed = JSON.parse(localStorage.getItem('dates-selected'));
}

var chngMonth = function(mon){
    var newMonth = mon;
    var bM = newMonth-1;
    var nM = newMonth+1;
    if(newMonth < 0){
        newMonth = 11;
        bM = 10;
        nM = 0;
    }
    else if(newMonth == 0){
        bM = 11;
    }
    else if(newMonth == 11){
        nM = 0;
    }
    else if(newMonth > 11){
        newMonth = 0;
        bM = 11;
        nM = 1;
    }
    currentMonth = newMonth;
    var monthselect = document.getElementById("month-select");
    monthselect.innerHTML = '<h1><button type="button" onclick="chngMonth('+bM+')">'+months[bM]+'</button>'+months[newMonth]+'<button type="button" onclick="chngMonth('+nM+')">'+months[nM]+'</button></h1>';
    makeCalendar();
};

var makeCalendar = function(){
    var startday = start[currentMonth];
    var line = [];
    var i;
    clearCalendar();
    for(i=0; i<days[currentMonth]; i+=1){
        var day = startday+i;
        var curr = document.getElementById('d'+day);
        curr.innerHTML = i+1;
    }
    for (i = 0; i < dayspassed.length; i += 1){
        var translate = translateMonthDay(currentMonth, dayspassed[i]);
        if(translate > -1){
            var day = startday+translate;
            var curr = document.getElementById('d'+day);
            curr.style.backgroundColor = "gray";
        }
    }
    for (i = 0; i < currdays.length; i += 1) {
        var translate = translateMonthDay(currentMonth, currdays[i]);
        if (translate > -1) {
            var day = startday + translate;
            var curr = document.getElementById('d' + day);
            if (curr.style.backgroundColor == "gray") { curr.style.backgroundColor = "teal"; }
            else { curr.style.backgroundColor = "lightblue";}
        }
    }
};

var clearCalendar = function(){
    var i;
    for(i=0; i<42; i+=1){
        var clear = document.getElementById('d'+i);
        clear.innerHTML = '';
        clear.style.backgroundColor = "white";
    }
};

var selectDay = function(day){
    var date = day-start[currentMonth];
    if(date < 0 || date >= days[currentMonth]) return false;
    var cell = document.getElementById('d'+day);
    var i = 0;
    var select = 0;
    while(i < currentMonth){
        select += days[i];
        i+=1;
    }
    select += date;
    var contains = currdays.indexOf(select);
    if(contains == -1) {
        currdays.push(select);
        if (cell.style.backgroundColor == "gray") { cell.style.backgroundColor = "teal"; }
        else { cell.style.backgroundColor = "lightblue";}
        console.log("added day: "+select);
    }
    else{
        currdays.splice(contains, 1);
        if (cell.style.backgroundColor == "teal") { cell.style.backgroundColor = "gray"; }
        else { cell.style.backgroundColor = "white"; }
        console.log("removed day: "+select);
    }
    return true;
};

var translateMonthDay = function(month, yearday){
    var range = 0;
    var i =0;
    while(i<currentMonth){
        range += days[i];
        i+=1;
    }
    var bound = range+days[i];
    if(yearday < range || yearday >= bound) return -1;
    return yearday-range;
};

var initialMonth = function(){
    chngMonth(currentMonth);
};

window.onload = function(){
    initialMonth();
};

var clickBack = function () {
    'use strict';
    localStorage.setItem('dates-selected', JSON.stringify(dayspassed))
    location.href = 'MarkAvailability.html';
};

var clickNext = function () {
    'use strict';
    location.href = 'locationselect.html';
};