import React from 'react';
import ProgressButtons from './progress_bottom_bar.jsx';

class HotelContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div id="main-container">
                <h1> Invite Participants By Email Address</h1>

            </div>
        );
    }    
}

const HotelPage = (props) => {

    let backRouteRef = '/location';
    let nextRouteRef = '/itinerary';

    return(
        <div>
            <HotelContainer backRoute={backRouteRef} nextRoute={nextRouteRef}/>,
        </div>
    );
}

export default HotelPage