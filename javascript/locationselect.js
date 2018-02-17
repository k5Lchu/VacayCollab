
var searchlist = [
    'Chiang Mai',
    'Los Angeles',
    'San Diego',
    'New York',
    'Dubai',
    'Toronto',
    'Paris'
];

var locations = [
    {
        name: 'Chiang Mai',
        upvotes: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/chiangmai-pic.jpg',
        displayed: true,
        voted: false
    },
    {
        name: 'Los Angeles',
        upvotes: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/LA-pic.jpg',
        displayed: true,
        voted: false
    }
];

var comments = [
    {
        author: 'Roronoa Zoro',
        content: 'Hey Luffy, trust me.If we go to Chiang Mai we can eat a lot of delicious food.',
        timestamp: 1
    },
    {
        author: 'Luffy',
        content: 'NAMI! WE"RE SETTING SAIL TO CHIANG MAI NOW!',
        timestamp: 2
    },
    {
        author: 'Nami',
        content: 'I want to see Hollywood!',
        timestamp: 3
    }
];

var addLocation = function(areaid) {
    'use strict';
    var arealist = document.getElementById('area-container');
    if(areaid >= locations.length) return false;
    var area = locations[areaid];
    var areaname = '<area-name>'+area.name+'</area-name>';
    var areadesc = '<area-info><p>'+area.description+'</p></area-info>';
    var upvote = '<upvote-count>'+area.upvotes+'</upvote-count>';
    var areapic = '<area-pic><img src="'+area.pic+'" alt:"Picture Not Found"></area-pic>';

    arealist.innerHTML += '<full-area>'+areapic+'<area-desc>'+areaname+upvote+areadesc+'<area-upvote><button type="button" onclick="upVote('+areaid+')">UpVote</button></area-upvote></area-desc></full-area>';
};

var upVote = function (areaid) {
    'use strict';
    if (locations[areaid].voted == false) {
        locations[areaid].upvotes += 1;
        locations[areaid].voted = true;
        if(clearLocations()){initialLocations();}
        return true;
    }
    return false;
};

var searchList = function() {
    var search = document.getElementById('search-input');
    var dropdown = document.getElementById('dropcon');
    var list,ids = [];
    var i;
    for(i=0; i<searchlist.length; i+=1){
        if(searchlist[i].toLowerCase().substring(search.value.toLowerCase())){
            list.push(searchlist[i]);
            ids.push(i);
            dropdown.innerHTML += '<a onclick="addLocation('+i+')">'+searchlist[i]+'</a>';
        }
    }
    dropdown.classList.toggle("show");
};

var initialSearch = function() {
    'use strict';
    var searchfilt = document.getElementById("search-filter");
    searchfilt.innerHTML = '<input id="search-input" type="text" placeholder="Search For Destinations...."><button id="filter-button" onkeyup="searchList()" class="dropbtn">Filter</button><div id="dropdown"><div id="dropcon" class="dropdown-content"></div></div>';
};

var initialLocations = function(){
    'use strict';
    var i;
    for(i=0; i<locations.length; i+=1){
        if(locations[i].displayed) {addLocation(i);}
    }
};

var clearLocations = function(){
    'use strict';
    var fullarea = document.getElementById('area-container');
    fullarea.innerHTML = "";
    return true;
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

var populateInitialComments = function () {
    'use strict';
    var commentsList, i;

    commentsList = document.getElementById('chat-comments-all');
    for (i = 0; i < comments.length; i += 1) {
        var currComment = comments[i];
        commentsList.innerHTML += '<li><p class="comment-author">' + currComment.author + ':</p><p class="comment-content">' + currComment.content + '</p></li>';
    }
};

window.onload = function() {
    'use strict';
    initialSearch();
    initialLocations();
    populateInitialComments();
};

var clickBack = function () {
    'use strict';
    location.href = 'DecideDate.html';
};

var clickNext = function () {
    'use strict';
    location.href = 'hotel.html';
};