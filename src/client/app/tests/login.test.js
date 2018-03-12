import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../components/login.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

let g = () => {
    return(
        <BrowserRouter><Login/></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('login page component', ()=>{
    it('renders title', () => {
        expect(wrapper.find('.form-signin-heading').text()).toEqual('Please login');
    });
});

describe('checkbox', ()=>{
    it('renders remember me input', () => {
        expect(wrapper.find('input[type="checkbox"]').simulate('change', {
            target: { checked: true },
        }));
    });
});

describe('email', ()=>{
    it('change and store email input', () => {
        expect(wrapper.find('input[type="email"]').simulate('change', {
            target: { checked: true },
        }));
    });
});

describe('password', ()=>{
    it('change and store password input', () => {
        expect(wrapper.find('input[type="password"]').simulate('change', {
            target: { checked: true },
        }));
    });
});

