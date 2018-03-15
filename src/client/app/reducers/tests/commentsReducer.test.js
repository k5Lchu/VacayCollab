import expect from 'expect';
import commentsReducer from '../commentsReducer.js';
import * as actions from '../../actions/comments-actions.js';
import * as types from '../../actions/actionTypes.js';

describe('Comments Reducer', () => {
  it('should return old comments when passed LOAD_COMMENTS_DATA', () => {
    // arrange
    const initialState = [];

    const comments = [
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

    const action = actions.loadCommentsData(comments);

    //act
    const newState = commentsReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(2);
    expect(newState[0].commentContent).toEqual('David where do you want to go?');
    expect(newState[1].commentContent).toEqual('David why aren\'t you saying anything?');
  });

  it('should add new comment when passed CREATE_COMMENTS_DATA', () => {
    // arrange
    const initialState = [
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

    const newComment = {
        author: "David",
        commentContent: 'Hello my friends!!!!!!!',
        key: 3
    };

    const action = actions.createCommentsData(newComment);

    // act
    const newState = commentsReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].commentContent).toEqual('Hello my friends!!!!!!!');
  });
});
