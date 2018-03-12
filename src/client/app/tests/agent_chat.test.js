import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChatContainer from '../components/agent_chat.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let messagesData = [
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

let numMessages = messagesData.length;

const wrapper = mount(
    <BrowserRouter><ChatContainer data={messagesData}/></BrowserRouter>
);

describe('agent_chat component', ()=>{
    it('renders title', ()=>{
        expect(wrapper.find('h3').text()).toEqual('Chat With us');
    });
    it('has correct inital number of chat messages', ()=>{
        expect(wrapper.find('MessageList').childAt(0).childAt(0).children().length).toEqual(numMessages);
    });
});
