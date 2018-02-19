/* global document, window, location, populateChat, localStorage */
/* exported clickBack, clickNext, editEvent, submitEdits */

/*var itineraryData = [
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
];*/

var itineraryData = JSON.parse(localStorage.getItem('itinerary'));

var populateList = function () {
    'use strict';
    var i, itineraryList;
    itineraryList = document.getElementById('itinerary-list').firstElementChild;

    for (i = 0; i < itineraryData.length; i += 1) {
        var currEvent, eventTitle, description, itemId;
        currEvent = itineraryData[i];
        eventTitle = currEvent.title;
        description = currEvent.description;

        if (currEvent.type === 'flight') {
            eventTitle = 'Get to ' + currEvent.location;
            description = 'Fly from' + currEvent.startLocation + ' to ' + currEvent.location;
        }

        itemId = (currEvent.month + '-' + currEvent.dayOfMonth + '-' + currEvent.year).toLowerCase();

        itineraryList.innerHTML += '<li id="' + itemId + '"><h3>' + eventTitle + '</h3><p class="event-description">' + description + '</p><button class="edit-button" onclick="editEvent(this)" parentid="' + itemId + '" type="button">Edit</button></li>';
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

var editEvent = function (editButtonElement) {
    'use strict';
    var parentEvent = document.getElementById(editButtonElement.getAttribute('parentid'));

    document.getElementById('title-input').value = parentEvent.querySelector('h3').innerHTML;
    document.getElementById('description-input').value = parentEvent.querySelector('p').innerHTML;

    document.getElementById('modal').setAttribute('parentid', editButtonElement.getAttribute('parentid'));

    showModal();
};

var submitEdits = function () {
    'use strict';
    var parentid = document.getElementById('modal').getAttribute('parentid');
    var listElement = document.getElementById(parentid).parentElement.children;
    var eventIndx = 0;

    for (var i = 0; i < listElement.length; i += 1) {
        if (document.getElementById(parentid) === listElement.item(i)) {
            eventIndx = i;
            break;
        }
    }

    var newTitle = document.getElementById('title-input').value;
    var newDescription = document.getElementById('description-input').value;

    if (itineraryData[eventIndx].type !== 'flight') {
        itineraryData[eventIndx].title = newTitle;
        itineraryData[eventIndx].description = newDescription;
    }

    document.getElementById(parentid).querySelector('h3').innerHTML = newTitle;
    document.getElementById(parentid).querySelector('p').innerHTML = newDescription;

    document.getElementById('modal').style.display = 'none';

    return false;
};

var clickBack = function () {
    'use strict';
    localStorage.setItem('itinerary', JSON.stringify(itineraryData));
    location.href = 'itinerary.html';
};

var clickNext = function () {
    'use strict';
    location.href = 'https://www.andrew.cmu.edu/user/gkesden/images/gkesden2.jpg';
};

window.onload = function () {
    'use strict';
    populateList();
    populateChat();
};

window.onclick = function (event) {
    'use strict';
    hideModal(event);
};
