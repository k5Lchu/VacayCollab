import React from 'react';
import ProgressButtons from './progress_bottom_bar.jsx';
import CommentComponent from './comments.jsx';
import ChatContainer from './agent_chat.jsx';

import styles from '../styles/hotel.css';

const Hotel = (props) => {

    let hotelStyles = {
        border: '1px solid lightgray',
        margin: '10px',
        padding: '10px',
        boxShadow: '0px 3px 3px #888888',
        display: 'grid',
        gridTemplateAreas: 'left right',
    };

    let titleStyles = {
        fontWeight: 'bold',
        fontSize: '40px'
    };

    let buttonStyles = {
        textAlign: 'center',
    };

    let handleClick = () => {
        console.log("Redirecting to AirBnB");
        window.location = "https://www.airbnb.com/";
    };

    return(
        <div className={`${styles['hotel-card']}`}>
            <div className={`${styles['left-content']}`}>
                <div style={titleStyles}>Chiang Mai</div>
                    <img className={`${styles['hotel-img']}`} src='/imgs/chiangmai-pic.jpg' alt='hotel-pic'/>
            </div>
            
            <div className={`${styles['right-content']}`}>
                <div className={`${styles['airbnb-container']}`}>
                    <img className={`${styles['airbnb-logo']}`} src="/imgs/airbnb-logo-s.png" alt="hotel-logo"/>
                    <h4>Live like a local and find unique places to stay</h4>
                    <div className={`${styles['airbnb-datebox']}`}>
                        Friday 3/16 - Saturday 3/17
                    </div>
                    <div style={buttonStyles}>
                        <button className={`${styles['airbnb-button']}`} type="button" onClick={handleClick}>Find Places!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

class HotelList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div>
                <div className={`${styles['hotel-container']}`}>
                    <Hotel/>
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
        marginBottom: '20px',
        minWidth: '565px',
    };

    let promptStyles = {
        textAlign: 'center',
    };

    return(
        <div>
            <div style={progressBarContainerStyle}><div style={progressBarContentStyle}></div></div>
            <div style={mainContainerStyles}>

                <div style={promptStyles}>
                    <h1>Where does everyone want to stay?</h1>
                    <h4>Pick out a place to stay with Airbnb.</h4>
                </div>
                <HotelList/>
                <CommentComponent/>
                <ChatContainer/>
            </div>
            <ProgressButtons backRoute={backRouteRef} nextRoute={nextRouteRef} />
        </div>
    );
}

/* Converts saved days to a map with the month abbreviations as keys (make sure you map the state to props for CalendarData*/
let saveDaysToMonth = () => {
    let saved = props.saveDays;
    let monthMap = props.monthMap;
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let dayMap = new Map();
    let floor = 0;
    for (let j = 0; j < months.length; j += 1) {
        if (j > 0) {
            floor += monthMap.get(months[j - 1])[2];
        }
        let ceiling = floor + monthMap.get(months[j])[2];
        let ret = [];
        for (let x = 0; x < saved.length; x++) {
            let val = saved[x];
            if (val > floor && val <= ceiling) { ret.push((val - floor)); }
        }
        dayMap.set(months[j], ret);
    }
    return dayMap;
};
/*              */

export default HotelPage