import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signup from '../components/signup.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let g = () => {
    return(
        <BrowserRouter><Signup/></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('signup page component', ()=>{
    it('renders title', () => {
        expect(wrapper.find('#main-container h1').text()).toEqual('Sign Up');
    });
});

describe('email', ()=>{
    it('change and store email input', () => {
        expect(wrapper.find('input[type="email"]').simulate('change', {
            target: { checked: true },
        }));
    });
});

describe('birthday', ()=>{
    it('change and store birthday input', () => {
        expect(wrapper.find('input[type="date"]').simulate('change', {
            target: { checked: true },
        }));
    });
});