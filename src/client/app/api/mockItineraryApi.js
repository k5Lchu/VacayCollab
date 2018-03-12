import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const itineraryData = [
    {
        location: 'Chiang Mai',
        title: 'Chiang Mai Attractions',
        month: 2,
        dayOfMonth: 20,
        dayOfWeek: 1,
        year: 2018,
        startTime: '9:00am',
        endTime: '8:00pm',
        description: 'Visit the Wat Suan Dok (3 hours) and Tha Phae Gate (4 hours)'
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
        description: 'Find and try all the street food!'
    },
    {
        location: 'Chiang Mai',
        title: 'Chiang Mai Bar Hoping',
        month: 2,
        dayOfMonth: 21,
        dayOfWeek: 2,
        year: 2017,
        startTime: '11:00am',
        endTime: '7:00pm',
        description: 'Find and try all the street booze!'
    },
    {
        location: 'Chiang Mai',
        title: 'Chiang Mai Hiking Hell',
        month: 4,
        dayOfMonth: 12,
        dayOfWeek: 3,
        year: 2017,
        startTime: '10:00am',
        endTime: '6:00pm',
        description: 'Visit hiking trail north of the city. Bring water!!!'
    }
];

const generateId = (data) => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

class ItineraryApi {
  static getAllData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], itineraryData));
      }, delay);
    });
  }

  static saveData(data) {
    data = Object.assign({}, data); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        //Just simulating creation here.
        //The server would generate ids for new authors in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
        data.id = generateId(data);
        itineraryData.push(data);

        resolve(data);
      }, delay);
    });
  }

  static deleteData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfDataToDelete = itineraryData.findIndex(data => {
          return data.dataId == dataId;
        });
        itineraryData.splice(indexOfDataToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItineraryApi;
