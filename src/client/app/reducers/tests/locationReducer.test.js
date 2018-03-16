import expect from 'expect';
import itineraryReducer from '../locationReducer.js';
import * as actions from '../../actions/locations-actions.js';
import * as types from '../../actions/actionTypes.js';
import LocationReducer from '../locationReducer.js';

describe('location reducer', () => {
    it('load in correct locations', () => {
        let locs = [{
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
        }];

        const initialState = [[], new Map()];
        const action = actions.LoadLocationData(locs);
        const newState = LocationReducer(initialState, action);

        expect(newState[0].length).toEqual(locs.length);
    });

    it('get location map', () => {
        let locs = [{
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
        }];
        var locMap = new Map();
        for(let i=0; i<locs.length; i++){
            let loc = locs[i];
            if(!locMap.has(loc.name)){
                locMap.set(loc.name, [i]);
            }else{
                locMap.get(loc.name).push(i);
            }
        }
        const initialState = [[], new Map()];
        const action = actions.LoadMapData(locMap);
        const newState = LocationReducer(initialState, action);

        expect(newState[1].size).toEqual(3);
        expect(newState[1].get(locs[0].name)).toEqual([0]);
    });
});

