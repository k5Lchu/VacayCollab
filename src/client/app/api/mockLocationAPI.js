import delay from './delay';

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

class locationAPI {
    static getAllLocations() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign([], locations));
            }, delay);
        });
    }

    static getLocMap() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(Object.assign(new Map(), locMap));
            }, delay);
        });
    }

    static upvoteLocation(name){
        return new Promise((resolve, reject) => {
        setTimeout(() => {

        upvoteLoc(name);
        
        resolve(name);
        }, delay);
        });
    }
}

export default locationAPI;