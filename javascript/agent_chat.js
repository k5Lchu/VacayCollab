/* global document */
/* exported sendMessage, populateChat, hideChat, showChat */

var chatData = [
    {
        author: 'user',
        message: 'I have a question'
    },
    {
        author: 'agent',
        message: 'Sure thing! What\'s your question?'
    },
    {
        author: 'user',
        message: 'Do you happen to know any places to visit in ChiangMai?'
    },
    {
        author: 'agent',
        message: 'Not really'
    },
    {
        author: 'user',
        message: '...'
    },
    {
        author: 'user',
        message: 'Thank you...?'
    },
    {
        author: 'agent',
        message: 'No problem'
    }
];

var toggleChat = function () {
    'use strict';
    if (document.getElementById('advisor-chat-container').style.display !== 'none') {
        hideChat();
    } else {
        showChat();
    }
}

var hideChat = function () {
    'use strict';
    document.getElementById('advisor-chat-container').style.display = 'none';
}

var showChat = function () {
    'use strict';
    document.getElementById('advisor-chat-container').style.display = 'block';
}

var sendMessage = function () {
    'use strict';
    var messageInput = document.getElementById('message-input');
    var newMessage = messageInput.value

    if (newMessage === '') {
        messageInput.style.border = '1px solid red';
        return false;
    } else {
        messageInput.style.border = '';
        messageInput.style.borderTop = '1px solid lightgray';
    }

    document.getElementById('message-input').value = '';
    document.getElementById('chat').firstElementChild.innerHTML += '<li class="' + 'user' + '"><p>' + newMessage + '</p></li>' + '<li class="agent"><p>Go away</p></li>';

    var chat = document.getElementById('chat');
    chat.scrollTop = chat.firstElementChild.offsetHeight;

    return false;
}

var populateChat = function () {
    'use strict';
    var i, chat;
    chat = document.getElementById('chat');

    for (i = 0; i < chatData.length; i += 1) {
        chat.firstElementChild.innerHTML += '<li class="' + chatData[i].author + '"><p>' + chatData[i].message + '</p></li>';
    }

    chat.scrollTop = chat.firstElementChild.offsetHeight;
    hideChat();
}
