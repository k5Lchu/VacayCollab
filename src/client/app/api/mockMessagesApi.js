import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const messagesData = [
    {
        sender: 'user',
        message: 'I have a question'
    },
    {
        sender: 'agent',
        message: 'Sure thing! What\'s your question?'
    },
    {
        sender: 'user',
        message: 'Do you happen to know any places to visit in ChiangMai?'
    },
    {
        sender: 'agent',
        message: 'Not really'
    },
    {
        sender: 'user',
        message: '...'
    },
    {
        sender: 'user',
        message: 'Thank you...?'
    },
    {
        sender: 'agent',
        message: 'No problem'
    },
    {
        sender: 'agent',
        message: 'It\'s been a pleasure'
    }
];

class MessagesApi {
  static getAllMessages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], messagesData));
      }, delay);
    });
  }

  static saveMessage(data) {
    data = Object.assign({}, data); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {

      messagesData.push(data);
      
      resolve(data);
      }, delay);
    });
  }

}

export default MessagesApi;