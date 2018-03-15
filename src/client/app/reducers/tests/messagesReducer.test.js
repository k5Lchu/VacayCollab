import expect from 'expect';
import messagesReducer from '../messagesReducer.js';
import * as actions from '../../actions/messages-actions.js';
import * as types from '../../actions/actionTypes.js';

describe('Messages Reducer', () => {
  it('should return old messages when passed LOAD_MESSAGES_DATA', () => {
    // arrange
    const initialState = [];

    const messages = [
        {
            sender: 'user',
            message: 'I have a question'
        },
        {
            sender: 'agent',
            message: 'Sure thing! What\'s your question?'
        }
    ];

    const action = actions.loadMessagesData(messages);

    //act
    const newState = messagesReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(2);
    expect(newState[0].message).toEqual('I have a question');
    expect(newState[1].message).toEqual('Sure thing! What\'s your question?');
  });

  it('should send a new message when passed CREATE_MESSAGES_DATA', () => {
    // arrange
    const initialState = [
        {
            sender: 'user',
            message: 'I have a question'
        },
        {
            sender: 'agent',
            message: 'Sure thing! What\'s your question?'
        }
    ];

    let newMsg = {
        sender: 'user',
        message: 'What is the color of Hong Kong?'
    };

    const action = actions.createMessagesData(newMsg);

    // act
    const newState = messagesReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[2].message).toEqual('What is the color of Hong Kong?');
  });
});
