import React from 'react';
import ProgressButtons from './progress_bottom_bar.jsx';

class InviteContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div id="invite-container">
                <h1> Invite Participants By Email Address</h1>
                    <p> Add as many or as little people as you like. 
                    <br></br> Separate email addresses with a comma.</p>
                <div className="center">
                    <form>
                        <input className="input" type="text" name="email" placeholder="XXX@XXX.com, YYY@YYY.com, ZZZ@ZZZ.com"/><br></br>
                    </form>
                    <button id="desktop-button" type="button">Start Planning!</button>
                </div>
            </div>
        );
    }    
}

const InvitePage = (props) => {

    let backRouteRef = '/';
    let nextRouteRef = '/itinerary';

    return(
        <div>
            <InviteContainer backRoute={backRouteRef} nextRoute={nextRouteRef}/>,
        </div>
    );
}

export default InvitePage