/* global document, window */
/* exported mobileNavClick, addNewComment, scrollToEvent */

var itineraryData = [
    {
        type: 'flight',
        startLocation: 'San Diego',
        location: 'Chiang Mai',
        month: 'MAR',
        dayOfMonth: 18,
        dayOfWeek: 'SUN',
        year: 2017,
        startTime: '9:00am',
        endTime: '9:00pm',
        totalTime: '21hr 15min'
    },
    {
        type: 'activity',
        location: 'Chiang Mai',
        title: 'Chiang Mai Attractions',
        month: 'MAR',
        dayOfMonth: 20,
        dayOfWeek: 'TUE',
        year: 2017,
        startTime: '9:00am',
        endTime: '8:00pm',
        description: 'Visit the Wat Suan Dok (3 hours) and Tha Phae Gate (4 hours)'
    },
    {
        type: 'activity',
        location: 'Chiang Mai',
        title: 'Chiang Mai Foodies',
        month: 'MAR',
        dayOfMonth: 21,
        dayOfWeek: 'WED',
        year: 2017,
        startTime: '11:00am',
        endTime: '7:00pm',
        description: 'Find and try all the street food!'
    },
    {
        type: 'activity',
        location: 'Chiang Mai',
        title: 'Chiang Mai Hiking Hell',
        month: 'MAR',
        dayOfMonth: 22,
        dayOfWeek: 'THU',
        year: 2017,
        startTime: '10:00am',
        endTime: '6:00pm',
        description: 'Visit hiking trail north of the city. Bring water!!!'
    }
];

var comments = [
    {
        author: 'Luffy',
        content: 'Why the scrub attitude Robin?',
        timestamp: 1
    },
    {
        author: 'Luffy',
        content: 'Robin it\'s full of trash down there...',
        timestamp: 2
    },
    {
        author: 'Robin',
        content: 'Let\'s go to the beach to see the ocean!',
        timestamp: 3
    }
];

var currEventDateElement = null;
var currEventElement = null;

var addToLeftList = function (newEvent, itineraryLeft) {
    'use strict';
    var locationItem = itineraryLeft.querySelector('#' + newEvent.location.replace(/\s+/g, '-').toLocaleLowerCase());
    var scrollToId = (newEvent.month + '-' + newEvent.dayOfMonth + '-' + newEvent.year).toLowerCase();
    if (locationItem === null) {
        var itemLocation = newEvent.location;
        if (newEvent.type === 'flight') {
            itemLocation = 'Get to ' + itemLocation;
        }
        var newLeftItem = '<li id="' + itemLocation.replace(/\s+/g, '-').toLocaleLowerCase() + '"><h5>' + itemLocation + '</h5><ul class="left-content-dates"><li><div onclick="scrollToEvent(\'' + scrollToId + '\',this)"><p class="left-content-date-month">' + newEvent.month + '</p><p class="left-content-date-day">' + newEvent.dayOfMonth + '</p></div></li></ul></li>';
        itineraryLeft.innerHTML += newLeftItem;
    } else {
        var locationItemDates = locationItem.querySelector('ul');
        locationItemDates.innerHTML += '<li><div onclick="scrollToEvent(\'' + scrollToId + '\',this)"><p class="left-content-date-month">' + newEvent.month + '</p><p class="left-content-date-day">' + newEvent.dayOfMonth + '</p></div></li>';
    }
};

var addToRightList = function (newEvent, itineraryRight) {
    'use strict';
    var itemId = (newEvent.month + '-' + newEvent.dayOfMonth + '-' + newEvent.year).toLowerCase();
    if (newEvent.type === 'flight') {
        var newFlightItem = '<li id="' + itemId + '"><div class="right-content-dates"><p class="right-content-date-month">' + newEvent.month + '</p><p class="right-content-date-day-of-month">' + newEvent.dayOfMonth + '</p><p class="right-content-date-day">' + newEvent.dayOfWeek + '</p></div><p class="right-content-activity-title">Get to ' + newEvent.location + '</p><p class="right-content-activity-times">' + newEvent.startTime + ' - ' + newEvent.endTime + '</p><p class="right-content-activity-description"><img class="flight-icons" src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png" alt="flight"><span>' + newEvent.startLocation + '</span><img class="flight-icons" src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Arrow-OutRight-icon.png" alt="to"><span>' + newEvent.location + '</span> <span class="duration">(' + newEvent.totalTime + ')</span> <a href="https://google.com">Check prices</a></p></li>';
        itineraryRight.innerHTML += newFlightItem;
    } else {
        var newEventItem = '<li id="' + itemId + '"><div class="right-content-dates"><p class="right-content-date-month">' + newEvent.month + '</p><p class="right-content-date-day-of-month">' + newEvent.dayOfMonth + '</p><p class="right-content-date-day">' + newEvent.dayOfWeek + '</p></div><p class="right-content-activity-title">' + newEvent.title + '</p><p class="right-content-activity-times">' + newEvent.startTime + ' - ' + newEvent.endTime + '</p><p class="right-content-activity-description">' + newEvent.description + '</p></li>';
        itineraryRight.innerHTML += newEventItem;
    }
};

var addNewComment = function () {
    'use strict';
    var commentInput = document.getElementById('new-comment-input');
    if (commentInput.value === '') {
        commentInput.style.border = '3px solid red';
    } else {
        var commentList = document.getElementById('chat-comments-all');
        commentList.innerHTML = '<li><p class="comment-author">' + 'Nico' + ':</p><p class="comment-content">' + commentInput.value + '</p></li>' + commentList.innerHTML;

        commentInput.value = '';
        commentInput.style.border = 'none';
        commentInput.style.borderBottom = '1px solid black';
    }
    return false;
};

/* scrolls and highlights main event in right content when corresponding date on the left is clicked
 *
 * @param id - id of the corresponding element in the right content
 * @param clickedDate - refernece to date element that was clicked on
 */
var scrollToEvent = function (id, clickedDate) {
    var eventElement = document.getElementById(id);

    // set right content div to scroll to desired event item
    document.getElementById('right-content').scrollTop = eventElement.offsetTop;

    // reset old selected element styles
    if (currEventElement === null || currEventDateElement === null) {
        currEventDateElement = clickedDate;
        currEventElement = eventElement;
    } else {
        currEventDateElement.style.border = '';
        currEventElement.style.border = '';
        currEventDateElement.style.backgroundColor = 'white';
        currEventDateElement.style.color = 'gray';
    }

    // record new selected elements
    currEventDateElement = clickedDate;
    currEventElement = eventElement;

    // style the new selected elements
    currEventDateElement.style.backgroundColor = 'black';
    currEventDateElement.style.color = 'white';
    currEventDateElement.style.border = '1px solid black';
    currEventElement.style.border = '4px solid black';
};

var populateEventList = function () {
    'use strict';
    var i, leftItineraryList, rightItineraryList;
    leftItineraryList = document.getElementById('left-content').firstElementChild;
    rightItineraryList = document.getElementById('right-content').firstElementChild;

    for (i = 0; i < itineraryData.length; i += 1) {
        addToLeftList(itineraryData[i], leftItineraryList);
        addToRightList(itineraryData[i], rightItineraryList);
    }
};

var populateInitialComments = function () {
    'use strict';
    var commentsList, i;

    commentsList = document.getElementById('chat-comments-all');
    for (i = 0; i < comments.length; i += 1) {
        var currComment = comments[i];
        commentsList.innerHTML += '<li><p class="comment-author">' + currComment.author + ':</p><p class="comment-content">' + currComment.content + '</p></li>';
    }
};

window.onload = function () {
    'use strict';
    populateEventList();
    populateInitialComments();
};
