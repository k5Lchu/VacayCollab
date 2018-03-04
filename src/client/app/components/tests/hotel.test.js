import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hotel from '../hotel.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let messagesData = [];

let commentData = [];

let g = () => {
    return(
        <BrowserRouter><Hotel comments={commentData} messages={messagesData}/></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('hotel page component', ()=>{
    it('renders title', () => {
        expect(wrapper.find('#top-prompt h1').text()).toEqual('Where does everyone want to stay?');
    });
});