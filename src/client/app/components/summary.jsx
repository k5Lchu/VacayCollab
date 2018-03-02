import React from 'react';
import CommentComponent from './comments.jsx';
import ChatContainer from './agent_chat.jsx';
import ProgressButtons from './progress_bottom_bar.jsx';

class EditEventSummaryModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.currEventTitle,
            description: props.currEventDescription
        };

        this.modalHeaderStyles = {
            margin: '0px',
            padding: '5px',
            backgroundColor: 'orange',
            borderRadius: '50px',
            color: 'white'
        };

        this.inputLabelStyles = {
            margin: '0',
            textAlign: 'left',
            marginTop: '10px'
        };

        this.inputTitleStyles = {
            width: '97%',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid lightgray',
            padding: '5px'
        };

        this.inputDescriptionStyles = {
            width: '97%',
            height: '100px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid lightgray',
            padding: '5px'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let newSummary = {
            title: this.state.title,
            description: this.state.description,
            id: this.props.currEventId
        };

        this.props.submitEdit(newSummary);
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value,
            description: this.state.description
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            title: this.state.title,
            description: e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        this.state.title = nextProps.currEventTitle;
        this.state.description = nextProps.currEventDescription;
    }

    render() {
        let modalDisplayStyles = {
            display: 'block'
        };

        if(this.props.modalHidden) {
            modalDisplayStyles.display = 'none';
        }

        return(
            <div id="summary-modal" onClick={this.props.hide} style={modalDisplayStyles}>
                <div id="summary-modal-content">
                    <h4 style={this.modalHeaderStyles}>Edit Event Summary</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <p style={this.inputLabelStyles}>Title</p>
                            <input style={this.inputTitleStyles} type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Type new title..."></input>
                        </div>
                        <div>
                            <p style={this.inputLabelStyles}>Description</p>
                            <textarea style={this.inputDescriptionStyles} value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Write new description here..."></textarea>
                        </div>
                        <button className="submit-summary-edit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

class EventSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description
        };

        this.containerStyles = {
            border: '1px solid lightgray',
            margin: '10px',
            padding: '10px',
            boxShadow: '0px 3px 3px #888888'
        };

        this.headerStyles = {
            margin: '5px 0px'
        };

        this.desciprtionStyles = {
            margin: '0'
        };

        this.handleEditClick = this.handleEditClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.state.title = nextProps.title;
        this.state.description = nextProps.description;
    }

    handleEditClick(e) {
        let currEvent = {
            title: this.state.title,
            description: this.state.description,
            id: this.props.id
        };

        this.props.showEditSummaryModal(currEvent);
    }

    render() {
        return(
            <div className="event-summary-container" style={this.containerStyles}>
                <h3 style={this.headerStyles}>{this.state.title}</h3>
                <p style={this.desciprtionStyles}>{this.state.description}</p>
                <button onClick={this.handleEditClick} className="edit-summary-button" type="button">Edit</button>
            </div>
        );
    }
}

class EventSummaryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currEventId: '',
            currEventTitle: '',
            currEventDescription: '',
            modalHidden: true,
            data: props.data
        };

        this.listStyles = {
            height: '400px',
            overflow: 'auto',
            marginBottom: '20px',
            border: '1px solid lightgray',
            borderRadius: '5px'
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleNewEdit = this.handleNewEdit.bind(this);
    }

    showModal(event) {
        this.setState({
            currEventId: event.id,
            currEventTitle: event.title,
            currEventDescription: event.description,
            modalHidden: false,
            data: this.state.data
        });
    }

    hideModal(e) {
        if (e.target === document.getElementById('summary-modal')) {
            this.setState({
                currEventId: this.state.currEventId,
                currEventTitle: this.state.currEventTitle,
                currEventDescription: this.state.currEventDescription,
                modalHidden: true,
                data: this.state.data
            });
        }
    }

    handleNewEdit(newEventSummary) {
        console.log(newEventSummary);

        for (let i = 0; i < this.state.data.length; i++) {
            let currEvent = this.state.data[i];
            if (currEvent.key === newEventSummary.id) {
                currEvent.title = newEventSummary.title;
                currEvent.description = newEventSummary.description;
                break;
            }
        }

        this.setState({
            currEventId: '',
            currEventTitle: '',
            currEventDescription: '',
            modalHidden: true,
            data: this.state.data
        });
    }

    render() {
        return(
            <div style={this.listStyles}>
                <EditEventSummaryModal currEventId={this.state.currEventId} currEventTitle={this.state.currEventTitle} currEventDescription={this.state.currEventDescription} modalHidden={this.state.modalHidden} hide={this.hideModal} submitEdit={this.handleNewEdit} />
                <div>
                    {this.state.data.map(event => <EventSummary {...event} id={event.key} showEditSummaryModal={this.showModal} />)}
                </div>
            </div>
        );
    }
}

const SummaryPage = (props) => {
    let mainContainerStyles = {
        margin: 'auto',
        border: '1px solid black',
        padding: '10px',
        width: '80%',
        borderRadius: '25px',
        marginBottom: '20px'
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
        width: '95%',
        height: '20px',
        backgroundColor: 'dodgerblue'
    };

    let backRouteRef = props.starPathName + '/';
    let nextRouteRef = props.starPathName + '/summary';

    return(
        <div>
            <div style={progressBarContainerStyle}><div style={progressBarContentStyle}></div></div>
            <div style={mainContainerStyles}>
                <h1 id="summary-h1-header" style={{textAlign: 'center'}}>Does this plan work with everyone?</h1>
                <EventSummaryList data={props.data} />
                <CommentComponent comments={props.comments} />
            </div>
            <ProgressButtons backRoute={backRouteRef} nextRoute={nextRouteRef} />
            <ChatContainer data={props.messages} />
        </div>
    );
};

export default SummaryPage;

//ReactDOM.render(<SummaryPage data={eventsData} comments={commentsData} messages={messagesData} />, document.getElementById('content'));
