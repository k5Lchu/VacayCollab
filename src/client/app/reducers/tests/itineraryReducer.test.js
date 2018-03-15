import expect from 'expect';
import itineraryReducer from '../itineraryReducer.js';
import * as actions from '../../actions/itinerary-actions.js';
import * as types from '../../actions/actionTypes.js';

describe('Itinerary Reducer', () => {
  it('should return already planned events when passed LOAD_ITINERARY_DATA', () => {
    // arrange
    const initialState = [];

    let id1 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    let id2 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const plannedEvents = [
        {
            location: 'Chiang Mai',
            title: 'Chiang Mai Attractions',
            month: 2,
            dayOfMonth: 20,
            dayOfWeek: 1,
            year: 2018,
            startTime: '9:00am',
            endTime: '8:00pm',
            description: 'Visit the Wat Suan Dok (3 hours) and Tha Phae Gate (4 hours)',
            key: id1,
            id: id1
        },
        {
            location: 'Chiang Mai',
            title: 'Visit Chiang Mai Fast Food',
            month: 2,
            dayOfMonth: 21,
            dayOfWeek: 2,
            year: 2017,
            startTime: '11:00am',
            endTime: '7:00pm',
            description: 'Find and try all the street food!',
            key: id2,
            id: id2
        }
    ];

    const action = actions.loadItineraryData(plannedEvents);

    //act
    const newState = itineraryReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(2);
    expect(newState[0].id).toEqual(id1);
    expect(newState[1].id).toEqual(id2);
  });

  it('should add new event when passed CREATE_ITINERARY_DATA', () => {
    // arrange
    let id1 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    let id2 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const initialState = [
        {
            location: 'Chiang Mai',
            title: 'Chiang Mai Attractions',
            month: 2,
            dayOfMonth: 20,
            dayOfWeek: 1,
            year: 2018,
            startTime: '9:00am',
            endTime: '8:00pm',
            description: 'Visit the Wat Suan Dok (3 hours) and Tha Phae Gate (4 hours)',
            key: id1,
            id: id1
        },
        {
            location: 'Chiang Mai',
            title: 'Visit Chiang Mai Fast Food',
            month: 2,
            dayOfMonth: 21,
            dayOfWeek: 2,
            year: 2017,
            startTime: '11:00am',
            endTime: '7:00pm',
            description: 'Find and try all the street food!',
            key: id2,
            id: id2
        }
    ];

    let id3 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const newEvent = {
        location: 'Chiang Mai',
        title: 'Chiang Mai Hiking Hell',
        month: 4,
        dayOfMonth: 12,
        dayOfWeek: 3,
        year: 2017,
        startTime: '10:00am',
        endTime: '6:00pm',
        description: 'Visit hiking trail north of the city. Bring water!!!',
        key: id3,
        id: id3
    };

    const action = actions.createItineraryData(newEvent);

    // act
    const newState = itineraryReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].id).toEqual(id2);
    expect(newState[1].id).toEqual(id3);
    expect(newState[2].id).toEqual(id1);
  });

  it('should delete event when passed DELETE_ITINERARY_DATA', () => {
    // arrange
    let id1 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    let id2 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const initialState = [
        {
            location: 'Chiang Mai',
            title: 'Chiang Mai Attractions',
            month: 2,
            dayOfMonth: 20,
            dayOfWeek: 1,
            year: 2018,
            startTime: '9:00am',
            endTime: '8:00pm',
            description: 'Visit the Wat Suan Dok (3 hours) and Tha Phae Gate (4 hours)',
            key: id1,
            id: id1
        },
        {
            location: 'Chiang Mai',
            title: 'Visit Chiang Mai Fast Food',
            month: 2,
            dayOfMonth: 21,
            dayOfWeek: 2,
            year: 2017,
            startTime: '11:00am',
            endTime: '7:00pm',
            description: 'Find and try all the street food!',
            key: id2,
            id: id2
        }
    ];

    const action = actions.deleteItineraryData(id2);

    //act
    const newState = itineraryReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(1);
    expect(newState[0].id).toEqual(id1);
  });

  it('should update event when passed UPDATE_ITINERARY_DATA', () => {
    // arrange
    let id1 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    let id2 = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const initialState = [
        {
            location: 'Chiang Mai',
            title: 'Chiang Mai Attractions',
            month: 2,
            dayOfMonth: 20,
            dayOfWeek: 1,
            year: 2018,
            startTime: '9:00am',
            endTime: '8:00pm',
            description: 'Visit the Wat Suan Dok (3 hours) and Tha Phae Gate (4 hours)',
            key: id1,
            id: id1
        },
        {
            location: 'Chiang Mai',
            title: 'Visit Chiang Mai Fast Food',
            month: 2,
            dayOfMonth: 21,
            dayOfWeek: 2,
            year: 2017,
            startTime: '11:00am',
            endTime: '7:00pm',
            description: 'Find and try all the street food!',
            key: id2,
            id: id2
        }
    ];

    const updatedEvent = {
        location: 'Chiang Mai',
        title: 'Getting dem fooods~',
        month: 2,
        dayOfMonth: 21,
        dayOfWeek: 2,
        year: 2017,
        startTime: '11:00am',
        endTime: '7:00pm',
        description: 'Find and try all the street food and also nice restaurants!',
        key: id2,
        id: id2,
        index: 1
    };

    const action = actions.updateItineraryData(updatedEvent);

    //act
    const newState = itineraryReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(2);
    expect(newState[0].id).toEqual(id1);
    expect(newState[1].id).toEqual(id2);
    expect(newState[1].title).toEqual('Getting dem fooods~');
    expect(newState[1].description).toEqual('Find and try all the street food and also nice restaurants!');
  });
});
