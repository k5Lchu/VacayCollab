/* global document, window, location */
/* exported mobileNavClick, addNewComment, scrollToEvent, addNewActivity, typeChange, showModal, clickBack, clickNext */

var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var daysInWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

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
    var dateItemId = ('date-' + newEvent.month + '-' + newEvent.dayOfMonth + '-' + newEvent.year).toLowerCase();
    if (locationItem === null) {
        var itemLocation = newEvent.location;
        if (newEvent.type === 'flight') {
            itemLocation = 'Get to ' + itemLocation;
        }
        var newLeftItem = '<li id="' + itemLocation.replace(/\s+/g, '-').toLocaleLowerCase() + '"><h5>' + itemLocation + '</h5><ul class="left-content-dates"><li><div id="' + dateItemId + '" onclick="scrollToEvent(\'' + scrollToId + '\',this)"><p class="left-content-date-month">' + newEvent.month + '</p><p class="left-content-date-day">' + newEvent.dayOfMonth + '</p></div></li></ul></li>';
        itineraryLeft.innerHTML += newLeftItem;
    } else {
        var locationItemDates = locationItem.querySelector('ul');
        locationItemDates.innerHTML += '<li><div id="' + dateItemId + '" onclick="scrollToEvent(\'' + scrollToId + '\',this)"><p class="left-content-date-month">' + newEvent.month + '</p><p class="left-content-date-day">' + newEvent.dayOfMonth + '</p></div></li>';
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
    'use strict';
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

var addNewActivity = function () {
    'use strict';
    var d, leftItineraryList, rightItineraryList;
    d = new Date(document.getElementById('date-input').value);
    leftItineraryList = document.getElementById('left-content').firstElementChild;
    rightItineraryList = document.getElementById('right-content').firstElementChild;

    var newActivity = {
        startLocation: document.getElementById('st-location-input').value,
        location: document.getElementById('dest-input').value,
        title: document.getElementById('title-input').value,
        month: months[d.getMonth()],
        dayOfMonth: d.getDate() + 1,
        dayOfWeek: daysInWeek[d.getDay()],
        year: d.getFullYear(),
        startTime: document.getElementById('start-time-input').value,
        endTime: document.getElementById('end-time-input').value,
        totalTime: document.getElementById('fl-dur-input').value,
        description: document.getElementById('description-input').value
    };

    if (document.getElementById('activity-mode-select').checked) {
        newActivity.type = 'activity';
    } else {
        newActivity.type = 'flight';
    }

    addToLeftList(newActivity, leftItineraryList);
    addToRightList(newActivity, rightItineraryList);

    if (currEventDateElement !== null && currEventElement !== null) {
        currEventDateElement = document.getElementById(currEventDateElement.getAttribute('id'));
        currEventElement = document.getElementById(currEventElement.getAttribute('id'));
    }

    document.getElementById('modal').style.display = 'none';

    return false;
};

var typeChange = function (newType) {
    'use strict';
    var i, flightInputs, activityInputs;
    flightInputs = document.getElementsByClassName('flight-fields');
    activityInputs = document.getElementsByClassName('activity-fields');
    if (newType === 'activity') {
        for (i = 0; i < flightInputs.length; i += 1) {
            flightInputs[i].style.display = 'none';
        }
        for (i = 0; i < activityInputs.length; i += 1) {
            activityInputs[i].style.display = 'block';
        }
    } else {
        for (i = 0; i < flightInputs.length; i += 1) {
            flightInputs[i].style.display = 'block';
        }
        for (i = 0; i < activityInputs.length; i += 1) {
            activityInputs[i].style.display = 'none';
        }
    }
};

var showModal = function () {
    'use strict';
    document.getElementById('modal').style.display = 'block';
};

var hideModal = function (event) {
    'use strict';
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
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

var clickBack = function () {
    'use strict';
    location.href = 'hotel.html';
};

var clickNext = function () {
    'use strict';
    location.href = 'summary.html';
};

window.onload = function () {
    'use strict';
    populateEventList();
    populateInitialComments();
    typeChange('activity');
};

window.onclick = function (event) {
    'use strict';
    hideModal(event);
};
