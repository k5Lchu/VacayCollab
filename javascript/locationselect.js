
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
        pic: 'assets/images/chiangmai-pic.jpg'
    },
    {
        name: 'Los Angeles',
        upvotes: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: 'assets/images/LA-pic.jpg'
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

var upvoted = null;

var addLocation = function (areaname) {
    var arealist = document.getElementById('area-container');
    var areaitem = document.getElementById('full-area');
    var areaname = document.getElementById('area-name');
    var upvotecount = document.getElementbyId('upvote-count');
    var areadesc = document.getElementById('area-desc');
    var areaupvote = document.getElementById('area-upvote');

};

var upVote = function () {
    'use strict';
    var placename = document.getElementById('area-name');
    var upcount = document.getElementById('upvote-count');
    if (upvoted == null) {
        upcount.innerHTML = upcount.innerHTML + 1;
        upvoted = placename.innerHTML;
    }
};