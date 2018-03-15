import React from 'react';
import ProgressButtons from './progress_bottom_bar.jsx';
import CommentComponent from './comments.jsx';
import ChatContainer from './agent_chat.jsx';

const Hotel = (props) => {

    let hotelStyles = {
        border: '1px solid lightgray',
        margin: '10px',
        padding: '10px',
        boxShadow: '0px 3px 3px #888888',
    }

    let titleStyles = {
        fontWeight: 'bold',
        margin: '10px',
    }

    let cityPicStyles = {

    }

    render(
        <div style={eventContainerStyles}>
            <div className='row'>
                <div style={titleStyles}>
                    <h2>Location Title</h2>
                </div>
                <div style={cityPicStyles}>
                    
                </div>
            </div>
        </div>
    );
}

class HotelList extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleOnClick(event) {
        console.log("Redirecting to AirBnB");
        window.location = "https://www.airbnb.com/";
    }

    render() {
        return(
            <div>
                <div className={`${styles['hotel-container']}`}>

                </div>
            </div>
        );
    }
}

const HotelPage = (props) => {

    let backRouteRef = '/location';
    let nextRouteRef = '/itinerary';

    let progressBarContainerStyle = {
        width: '70%',
        height: '20px',
        margin: 'auto',
        border: '1px solid black',
        marginBottom: '50px',
        marginTop: '50px'
    };

    let progressBarContentStyle = {
        width: '50%',
        height: '20px',
        backgroundColor: 'dodgerblue'
    };

    let mainContainerStyles = {
        margin: 'auto',
        border: '1px solid black',
        padding: '10px',
        width: '80%',
        borderRadius: '25px',
        marginBottom: '20px'
    };

    return(
        <div>
            <div style={progressBarContainerStyle}><div style={progressBarContentStyle}></div></div>
            <div style={mainContainerStyles}>

                <div className={`${styles['top-prompt']}`}>
                    <h1>Where does everyone want to stay?</h1>
                    <h4>Vote on where you want to stay!</h4>
                </div>
                <HotelList/>
                <CommentComponent/>
                <ChatContainer/>
            </div>
            <ProgressButtons backRoute={backRouteRef} nextRoute={nextRouteRef} />
        </div>
    );
}

export default HotelPage