import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const commentsData = [
    {
        author: 'Scott',
        commentContent: '...',
        key: '5'
    },
    {
        author: 'Kevin',
        commentContent: 'Eww Fabian territory',
        key: '4'
    },
    {
        author: 'David',
        commentContent: 'Shut up Kevin. How does Tijuana sound?',
        key: '3'
    },
    {
        author: 'Scott',
        commentContent: 'David where do you want to go?',
        key: '2'
    },
    {
        author: 'Kevin',
        commentContent: 'David why aren\'t you saying anything?',
        key: '1'
    }
];

class CommentsApi {
  static getAllComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], commentsData));
      }, delay);
    });
  }

  static saveComment(data) {
    data = Object.assign({}, data); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {

      commentsData.unshift(data);
      
      resolve(data);
      }, delay);
    });
  }

}

export default CommentsApi;