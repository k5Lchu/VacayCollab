import React from 'react';
import expect from 'expect';
import {shallow,mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationSelect from '../components/location.jsx';
import { BrowserRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

var locations = [
    {
        name: 'Chiang Mai',
        upvotes: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/chiangmai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Los Angeles',
        upvotes: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/LA-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'San Diego',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/sandiego-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'New York',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/newyork-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Dubai',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/dubai-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Toronto',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/toronto-pic.jpg',
        displayed: false,
        voted: false
    },
    {
        name: 'Paris',
        upvotes: 0,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun maximus kevin chu is a scrub, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
        pic: '/imgs/paris-pic.jpg',
        displayed: false,
        voted: false
    }
];

var locMap = new Map();
for(let i=0; i<locations.length; i++){
    let loc = locations[i];
    if(!locMap.has(loc.name)){
        locMap.set(loc.name, [i]);
    }else{
        locMap.get(loc.name).push(i);
    }
}

let upvoteLoc = function(name){
    locations[locMap.get(name)].upvotes += 1;
    locations[locMap.get(name)].voted = true;
};

let comments = [];
let chat = [];


let g = () => {
    return(
        <BrowserRouter><LocationSelect data={locations} map={locMap} upVoteLoc={upvoteLoc} comments={comments} messages={chat} /></BrowserRouter>
    );
};

const wrapper = mount(
    g()
);

describe('location select page components', () => {
    it('lists only locations with upvotes', ()=>{
        expect(wrapper.find('area-container').children().length).toEqual(2);
    });
    it('dropdown list is initialized with all locations', ()=>{
        expect(wrapper.find('#dropcon').children().length).toEqual(locations.length);
    });
    it('correct header for location select', ()=>{
        expect(wrapper.find('#top-prompt h1').text()).toEqual('Where does everyone want to go?');
    });
});