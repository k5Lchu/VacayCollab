import React from 'react';
import ProgressButtons from './progress_bottom_bar.jsx';
import CommentComponent from './comments.jsx';
import ChatContainer from './agent_chat.jsx';

class HotelContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("Redirecting to AirBnB");
        window.location = "https://www.airbnb.com/";
    }

    render() {
        return(
            <div id="main-container">

                <div id="top-prompt">
                    <h1>Where does everyone want to stay?</h1>
                    <h4>Vote on where you want to stay!<br></br>
                    Do you want to relax at the best hotel or live like a local?</h4>
                </div>
                
                <div id="outer-container">
                    <br></br>
                    
                    <p>While visiting Chiang Mai, keep in mind that the old town
                        district and area surrounding the famous night market offers both expensive and
                        inexpensive options. The riverside neighborhoods boast exclusive hotels whereas
                        the inner cities allow you to live like a local.</p>
                        <div id="hotel-container">
                            <img id="hotel-logo" src="/imgs/airbnb-logo.jpg" alt="hotel-logo"/>
                                <h4>Live like a local and find unique places to stay</h4>
                                <p>from 02/02/19<br></br> to 02/07/19</p>
                                <p>
                                    <button id="hotel-button" type="button" onClick={this.handleClick}>Check Out Homes on AirBnB</button>
                                </p>
                        </div>
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

    return(
        <div>
            <div style={progressBarContainerStyle}><div style={progressBarContentStyle}></div></div>
            <HotelContainer/>
            <CommentComponent comments={props.comments} />
            <ChatContainer data={props.messages} />
            <ProgressButtons backRoute={backRouteRef} nextRoute={nextRouteRef} />
        </div>
    );
}

export default HotelPage