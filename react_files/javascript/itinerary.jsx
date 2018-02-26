let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let daysInWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let monthNumberMap = {
    JAN: 0,
    FEB: 1,
    MAR: 2,
    APR: 3,
    MAY: 4,
    JUN: 5,
    JUL: 6,
    AUG: 7,
    SEP: 8,
    OCT: 9,
    NOV: 10,
    DEC: 11
};

let itineraryData = [
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

for (let i = 0; i < itineraryData.length; i++) {
    itineraryData[i].key = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

itineraryData.sort((a,b) => {
    return parseInt(a.year.toString() + a.month.toString() + a.dayOfMonth.toString()) - parseInt(b.year.toString() + b.month.toString() + b.dayOfMonth.toString());
});

const Event = (props) => {
    let eventContainerStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 0.5fr',
        border: '1px solid black',
        margin: '10px',
        paddingTop: '10px'
    };

    let dateContainerStyles = {
        textAlign: 'center',
        gridColumn: '1/2',
        gridRow: '1/2',
        margin: 'auto'
    };

    let timeStyles = {
        borderTop: '1px solid black',
        borderRight: '1px solid black',
        gridColumn: '1/2',
        gridRow: '2/3',
        textAlign: 'center',
        marginRight: '0',
        padding: '10px',
        marginBottom: '0'
    };

    let descirptionStyles = {
        borderTop: '1px solid black',
        gridColumn: '2/6',
        gridRow: '2/3',
        padding: '10px',
        paddingLeft: '10%',
        marginBottom: '0'
    };

    let deleteButtonStyles = {
        height: '20px',
        width: '20px',
        gridColumn: '5/6',
        gridRow: '1/2',
        margin: 'auto',
        borderRadius: '50%'
    };

    let deleteClick = () => {
        let dateKey = months[props.month] + ' ' + props.dayOfMonth.toString() + ' ' + props.year.toString();
        props.deleteElement(props.id, dateKey);
    };

    return(
        <div id={props.id} style={eventContainerStyles}>
            <div style={dateContainerStyles}>
                <p style={{color: 'lightgray', fontSize: '0.7em', margin: '0'}}>{months[props.month]}</p>
                <p style={{fontSize: '1.5em', margin: '0', fontWeight: 'bold'}}>{props.dayOfMonth}</p>
                <p style={{fontSize: '0.7em', margin: '0'}}>{daysInWeek[props.dayOfWeek]}</p>
            </div>
            <p style={{gridColumn: '2/5', gridRow: '1/2', margin: 'auto', fontSize: '1.3em'}}>{props.title}</p>
            <img className="event-delete-button" style={deleteButtonStyles} src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/close_red.png" alt="delete" onClick={deleteClick}/>
            <p style={timeStyles}>{props.startTime} - {props.endTime}</p>
            <p style={descirptionStyles}>{props.description}</p>
        </div>
    );
};

const DateTab = (props) => {
    let key = 'date-event-' + props.fullDate;
    let parsedDate = props.fullDate.split(' ');

    let containerStyles = {
        margin: '15px',
        border: '1px solid lightgray',
        width: '40px',
        textAlign: 'center',
        cursor: 'pointer'
    };

    let dateClicked = (e) => {
        props.scrollToDateEvents(document.getElementById(props.data[0].key));
    };

    return(
        <div className="date-tab-container" style={containerStyles} onClick={dateClicked}>
            <div style={{fontSize: '0.7em'}}>{parsedDate[0]}</div>
            <div style={{fontSize: '1.3em'}}>{parsedDate[1]}</div>
            <div style={{fontSize: '0.7em'}}>{parsedDate[2]}</div>
        </div>
    );
};

class AddEventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            destination: '',
            date: '',
            startTime: '',
            endTime: '',
            description: '',
            hidden: true
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDestinationChange = this.handleDestinationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    toggleModal(e) {
        if (e.target === document.getElementById('modal') || e.target === document.getElementById('add-activity-button')) {
            this.setState({
                title: this.state.title,
                destination: this.state.destination,
                date: this.state.date,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                description: this.state.description,
                hidden: !this.state.hidden
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let newEventDate = new Date(this.state.date);
        console.log(this.state.date);
        console.log(newEventDate);

        let newEvent = {
            key: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            location: this.state.destination,
            title: this.state.title,
            month: newEventDate.getUTCMonth(),
            dayOfMonth: newEventDate.getUTCDate(),
            dayOfWeek: newEventDate.getUTCDay(),
            year: newEventDate.getFullYear(),
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: this.state.description
        };

        this.setState({
            title: '',
            destination: '',
            date: '',
            startTime: '',
            endTime: '',
            description: '',
            hidden: !this.state.hidden
        });

        this.props.addEvent(newEvent);
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value,
            destination: this.state.destination,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: this.state.description,
            hidden: false
        });
    }

    handleDestinationChange(e) {
        this.setState({
            title: this.state.title,
            destination: e.target.value,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: this.state.description,
            hidden: false
        });
    }

    handleDateChange(e) {
        this.setState({
            title: this.state.title,
            destination: this.state.destination,
            date: e.target.value,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: this.state.description,
            hidden: false
        });
    }

    handleStartTimeChange(e) {
        this.setState({
            title: this.state.title,
            destination: this.state.destination,
            date: this.state.date,
            startTime: e.target.value,
            endTime: this.state.endTime,
            description: this.state.description,
            hidden: false
        });
    }

    handleEndTimeChange(e) {
        this.setState({
            title: this.state.title,
            destination: this.state.destination,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: e.target.value,
            description: this.state.description,
            hidden: false
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            title: this.state.title,
            destination: this.state.destination,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: e.target.value,
            hidden: false
        });
    }

    render() {
        let displayStyle = {
            display: 'block'
        };

        if (this.state.hidden) {
            displayStyle.display = 'none';
        }


        return(
            <div>
                <div id="add-activity-button-container">
                    <button id="add-activity-button" type="button" onClick={this.toggleModal}>Add Activity</button>
                </div>
                <div id="modal" style={displayStyle} onClick={this.toggleModal}>
                    <div id="modal-content">
                        <h4>Add an Activity</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div id="input-container">
                                <div id="title-input" className="form-input-groups"><p>Title</p> <input value={this.state.title} onChange={this.handleTitleChange} type="text" placeholder="Enter a title"/></div>
                                <div id="destination-input" className="form-input-groups"><p>Location</p> <input value={this.state.destination} onChange={this.handleDestinationChange} type="text" placeholder="Enter a destination"/></div>
                                <div id="date-input" className="form-input-groups"><p>Date</p> <input value={this.state.date} onChange={this.handleDateChange} type="date"/></div>
                                <div id="start-time-input" className="form-input-groups"><p>Start Time</p> <input value={this.state.startTime} onChange={this.handleStartTimeChange} type="time"/></div>
                                <div id="end-time-input" className="form-input-groups"><p>End Time</p> <input value={this.state.endTime} onChange={this.handleEndTimeChange} type="time"/></div>
                                <div id="description-input" className="form-input-groups"><p>Description</p> <textarea value={this.state.description} onChange={this.handleDescriptionChange} type="text" rows="5" cols="100" placeholder="Write a descirption"></textarea></div>
                            </div>
                            <button id="submit-activity-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class EventList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itineraryDataSorted: new Map(),
            data: props.data
        };

        for (let i = 0; i < props.data.length; i++) {
            let cEvent = props.data[i];
            let key = months[cEvent.month] + ' ' + cEvent.dayOfMonth.toString() + ' ' + cEvent.year.toString();
            if (!this.state.itineraryDataSorted.has(key)) {
                this.state.itineraryDataSorted.set(key, [cEvent]);
            } else {
                this.state.itineraryDataSorted.get(key).push(cEvent);
            }
        }

        this.leftContainerStyles = {
            border: '1px solid black',
            padding: '10px',
            margin: '10px'
        };

        this.rightContainerStyles = {
            position: 'relative'
        };

        this.createLeftMenu = this.createLeftMenu.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
        this.scrollToEvent = this.scrollToEvent.bind(this);
        this.addElement = this.addElement.bind(this);
    }

    scrollToEvent(eventReference) {
        this.rightItinerary.scrollTop = eventReference.offsetTop;
    }

    createLeftMenu() {
        let dateTabs = [];
        let iter = this.state.itineraryDataSorted.keys();
        let currIter = iter.next();

        let keys = [];

        while (!currIter.done) {
            keys.push(currIter.value);
            currIter = iter.next();
        };

        keys.sort((a,b) => {
            let aDate = a.split(' ');
            let bDate = b.split(' ');

            return parseInt(aDate[2].toString() + monthNumberMap[aDate[0]].toString() + aDate[1].toString()) - parseInt(bDate[2].toString() + monthNumberMap[bDate[0]].toString() + bDate[1].toString());
        });

        console.log(keys);

        for(let i = 0; i < keys.length; i++) {
            let key = 'date-' + keys[i];
            dateTabs.push(<DateTab fullDate={keys[i]} data={this.state.itineraryDataSorted.get(keys[i])} key={key} scrollToDateEvents={this.scrollToEvent} />);
        }

        return dateTabs;
    }

    addElement(newEvent) {
        console.log(newEvent);

        let key = months[newEvent.month] + ' ' + newEvent.dayOfMonth.toString() + ' ' + newEvent.year.toString();
        if (!this.state.itineraryDataSorted.has(key)) {
            this.state.itineraryDataSorted.set(key, [newEvent]);
        } else {
            this.state.itineraryDataSorted.get(key).push(newEvent);
        }

        this.state.data.push(newEvent);

        this.state.data.sort((a,b) => {
            return parseInt(a.year.toString() + a.month.toString() + a.dayOfMonth.toString()) - parseInt(b.year.toString() + b.month.toString() + b.dayOfMonth.toString());
        });

        this.setState({
            itineraryDataSorted: this.state.itineraryDataSorted,
            data: this.state.data
        });
    }

    deleteElement(dataId, dateKey) {
        let dateDataArr = this.state.itineraryDataSorted.get(dateKey);
        let indx = 0;

        if (dateDataArr.length < 2) {
            this.state.itineraryDataSorted.delete(dateKey);
        } else {
            for (let i = 0; i < dateDataArr.length; i++) {
                if (dateDataArr[i].key === dataId) {
                    indx = i;
                    break;
                }
            }

            dateDataArr.splice(indx, 1);
        }

        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].key === dataId) {
                indx = i;
                break;
            }
        }

        this.state.data.splice(indx, 1);

        this.setState({
            itineraryDataSorted: this.state.itineraryDataSorted,
            data: this.state.data
        });
    }

    render() {
        return(
            <div>
                <AddEventModal addEvent={this.addElement} />
                <div className="itinerary-container">
                    <div className="itinerary-container-left" style={this.leftContainerStyles}>
                        {this.createLeftMenu()}
                    </div>
                    <div className="itinerary-container-right" style={this.rightContainerStyles} ref={(el) => {this.rightItinerary = el;}}>
                        {this.props.data.map(event => <Event {...event} id={event.key} deleteElement={this.deleteElement} />)}
                    </div>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<EventList data={itineraryData} />, document.getElementById('content'));
