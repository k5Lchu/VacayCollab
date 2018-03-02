import React from 'react';
import CommentComponent from './comments.jsx';
import ChatContainer from './agent_chat.jsx';
import ProgressButtons from './progress_bottom_bar.jsx';

const Event = (props) => {
    let eventContainerStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 0.5fr',
        border: '1px solid lightgray',
        margin: '10px',
        padding: '10px',
        boxShadow: '0px 3px 3px #888888'
    };

    let dateContainerStyles = {
        textAlign: 'center',
        gridColumn: '1/2',
        gridRow: '1/2',
        margin: 'auto'
    };

    let timeStyles = {
        borderTop: '1px solid lightgray',
        borderRight: '1px solid lightgray',
        gridColumn: '1/2',
        gridRow: '2/3',
        textAlign: 'center',
        marginRight: '0',
        padding: '10px',
        marginBottom: '0'
    };

    let descirptionStyles = {
        borderTop: '1px solid lightgray',
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

    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let daysInWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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

        let startTimeSplit = this.state.startTime.split(':');
        let endTimeSplit = this.state.endTime.split(':');

        let startTimeHour = parseInt(startTimeSplit[0]) % 12;
        let meridianIndicatorS = (parseInt(startTimeSplit[0]) > 11) ? 'pm' : 'am';

        let endTimeHour = parseInt(endTimeSplit[0]) % 12;
        let meridianIndicatorE = (parseInt(endTimeSplit[0]) > 11) ? 'pm' : 'am';

        let convertedStartTime = startTimeHour + ':' + startTimeSplit[1] + meridianIndicatorS;
        let convertedEndTime = endTimeHour + ':' + endTimeSplit[1] + meridianIndicatorE;

        let newEvent = {
            key: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            location: this.state.destination,
            title: this.state.title,
            month: newEventDate.getUTCMonth(),
            dayOfMonth: newEventDate.getUTCDate(),
            dayOfWeek: newEventDate.getUTCDay(),
            year: newEventDate.getFullYear(),
            startTime: convertedStartTime,
            endTime: convertedEndTime,
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

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

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

            let aDate = a.split(' ');
            let bDate = b.split(' ');

            let aDateVal = parseInt(aDate[2].toString() + ((monthNumberMap[aDate[0]] > 10) ? monthNumberMap[aDate[0]].toString() : '0' + monthNumberMap[aDate[0]].toString()) + ((parseInt(aDate[1]) > 10) ? aDate[1].toString() : '0' + aDate[1].toString()));
            let bDateVal = parseInt(bDate[2].toString() + ((monthNumberMap[bDate[0]] > 10) ? monthNumberMap[bDate[0]].toString() : '0' + monthNumberMap[bDate[0]].toString()) + ((parseInt(bDate[1]) > 10) ? bDate[1].toString() : '0' + bDate[1].toString()));

            return (aDateVal - bDateVal);
        });

        for(let i = 0; i < keys.length; i++) {
            let key = 'date-' + keys[i];
            dateTabs.push(<DateTab fullDate={keys[i]} data={this.state.itineraryDataSorted.get(keys[i])} key={key} scrollToDateEvents={this.scrollToEvent} />);
        }

        return dateTabs;
    }

    addElement(newEvent) {
        console.log(newEvent);

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        let key = months[newEvent.month] + ' ' + newEvent.dayOfMonth.toString() + ' ' + newEvent.year.toString();
        if (!this.state.itineraryDataSorted.has(key)) {
            this.state.itineraryDataSorted.set(key, [newEvent]);
        } else {
            this.state.itineraryDataSorted.get(key).push(newEvent);
        }

        this.state.data.push(newEvent);

        this.state.data.sort((a,b) => {
            let aDateVal = parseInt(a.year.toString() + ((a.month > 10) ? a.month.toString() : '0' + a.month.toString()) + ((a.dayOfMonth > 10) ? a.dayOfMonth.toString() : '0' + a.dayOfMonth.toString()));
            let bDateVal = parseInt(b.year.toString() + ((b.month > 10) ? b.month.toString() : '0' + b.month.toString()) + ((b.dayOfMonth > 10) ? b.dayOfMonth.toString() : '0' + b.dayOfMonth.toString()));
            return (aDateVal - bDateVal);
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

const ItinerearyPageContent = (props) => {
    let mainContainerStyles = {
        margin: 'auto',
        border: '1px solid black',
        padding: '10px',
        width: '80%',
        borderRadius: '25px',
        marginBottom: '20px'
    };

    let contentPromptStyles = {
        textAlign: 'center'
    };

    let promptHeaderMainStyles = {
        marginBottom: '10px'
    };

    let promptHeaderSubStyles = {
        marginTop: '10px',
        marginLeft: '10%',
        marginRight: '10%'
    };

    let progressBarContainerStyle = {
        width: '70%',
        height: '20px',
        margin: 'auto',
        border: '1px solid black',
        marginBottom: '50px',
        marginTop: '50px'
    };

    let progressBarContentStyle = {
        width: '80%',
        height: '20px',
        backgroundColor: 'dodgerblue'
    };

    let backRouteRef = props.starPathName + '/';
    let nextRouteRef = props.starPathName + '/summary';

    return(
        <div>
            <div style={progressBarContainerStyle}><div style={progressBarContentStyle}></div></div>
            <div style={mainContainerStyles}>
                <div id="top-prompt" style={contentPromptStyles}>
                    <h1 style={promptHeaderMainStyles}>Where does everyone want to go?</h1>
                    <h4 style={promptHeaderSubStyles}>Vote on where to want to go! Leave comments for each other and the leader of this group to back up why your spot should be part of the vacation</h4>
                </div>
                <EventList data={props.data} />
                <CommentComponent comments={props.comments} />
                <ChatContainer data={props.messages} />
            </div>
            <ProgressButtons backRoute={backRouteRef} nextRoute={nextRouteRef} />
        </div>
    );
};

export default ItinerearyPageContent;

//ReactDOM.render(<ItinerearyPageContent data={itineraryData} comments={commentsData} messages={messagesData} />, document.getElementById('content'));
