import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Comments from '../comments.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let commentData = [
    {
        author: 'Roronoa Zoro',
        commentContent: 'Hey Luffy, trust me.If we go to Chiang Mai we can eat a lot of delicious food.',
        timestamp: 1
    },
    {
        author: 'Luffy',
        commentContent: 'NAMI! WE"RE SETTING SAIL TO CHIANG MAI NOW!',
        timestamp: 2
    },
    {
        author: 'Nami',
        commentContent: 'I want to see Hollywood!',
        timestamp: 3
    }
];

const wrapper = mount(
    <BrowserRouter><Comments comments={commentData}/></BrowserRouter>
);

describe('comments component', ()=>{
    it('renders h3', ()=>{
        expect(wrapper.find('h3').text()).toEqual('Comments');
    });
    it('has correct number of inital comments', ()=>{
        expect(wrapper.find('CommentList').childAt(0).childAt(1).children().length).toEqual(3);
    });
});