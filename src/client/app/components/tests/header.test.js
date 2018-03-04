import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../header.jsx';



configure({adapter: new Adapter()});



const wrapper = mount(
    <Header/>
);




/*describe('comments component', ()=>{
    it('renders h3', ()=>{
        expect(wrapper.find('h3').text()).toEqual('Comments');
    });
});*/