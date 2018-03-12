import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Invite from '../components/invite.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let g = () => {
    return(
        <BrowserRouter><Invite/></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('invite page component', ()=>{
    it('renders title', () => {
        expect(wrapper.find('#invite-container h1').text()).toEqual('Invite Participants By Email Address');
    });
});