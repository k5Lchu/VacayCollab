var comments = [
    {
        author: 'Tony Tony Chopper',
        content: 'Hey Zoro, can we pls stay at a cheaper place? I spent all my money on cotton candy :(',
        timestamp: 1
    },
    {
        author: 'Roronoa Zoro',
        content: 'Not my problem!',
        timestamp: 2
    },
    {
        author: 'Franky',
        content: 'Guys! Wouldnt it be SUPER to stay at a place using AirBNB?',
        timestamp: 3
    }
];

function checkAirBnB() {
    'use strict';
    location.href = "https://www.airbnb.com"
}

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
    location.href = 'locationselect.html';
};

var clickNext = function () {
    'use strict';
    location.href = 'itinerary.html';
};


window.onload = function() {
    'use strict';
    populateChat();
    populateInitialComments();
};