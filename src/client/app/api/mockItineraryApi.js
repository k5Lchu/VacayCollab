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

for (let i = 0; i < itineraryData.length; i++) {
    itineraryData[i].key = generateId(itineraryData[i]);
    itineraryData[i].id = itineraryData[i].key;
}

itineraryData.sort((a,b) => {
    let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
    let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
    return (aDateVal - bDateVal);
});

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
        itineraryData.push(data);
        itineraryData.sort((a,b) => {
            let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
            let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
            return (aDateVal - bDateVal);
        });

        resolve(data);
      }, delay);
    });
  }

  static deleteData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfDataToDelete = itineraryData.findIndex(data => {
          return data.id === dataId;
        });
        itineraryData.splice(indexOfDataToDelete, 1);
        resolve(dataId);
      }, delay);
    });
  }

  static updateData(newData) {
    newData = Object.assign({}, newData);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfDataToUpdate = itineraryData.findIndex(data => {
          return data.id === newData.id;
        });

        let newDataObject = Object.assign({}, itineraryData[indexOfDataToUpdate]);

        newDataObject.title = newData.title;
        newDataObject.description = newData.description;

        newDataObject.index = indexOfDataToUpdate;
        itineraryData[indexOfDataToUpdate] = newDataObject;

        resolve(newDataObject);
      }, delay);
    });
  }
}

export default ItineraryApi;
