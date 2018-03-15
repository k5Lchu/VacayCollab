import React from 'react';
import ProgressButtons from './progress_bottom_bar.jsx';

import styles from '../styles/invite.css';

class InviteContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={`${styles['invite-container']}`}>
                <h1>Invite Participants By Email Address</h1>
                    <p> Add as many or as little people as you like. 
                    <br></br> Separate email addresses with a comma.</p>
                <div className="center">
                    <form>
                        <input className={`${styles['input']}`} type="text" name="email" placeholder="XXX@XXX.com, YYY@YYY.com, ZZZ@ZZZ.com"/><br></br>
                    </form>
                </div>
            </div>
        );
    }    
}

const InvitePage = (props) => {

    let backRouteRef = '/';
    let nextRouteRef = '/markavailability';

    let progressBarContainerStyle = {
        width: '70%',
        height: '20px',
        margin: 'auto',
        border: '1px solid black',
        marginBottom: '50px',
        marginTop: '50px'
    };

    let progressBarContentStyle = {
        width: '10%',
        height: '20px',
        backgroundColor: 'dodgerblue'
    };

    return(
        <div>
            <div style={progressBarContainerStyle}><div style={progressBarContentStyle}></div></div>
            <InviteContainer/>
            <ProgressButtons backRoute={backRouteRef} nextRoute={nextRouteRef} />
        </div>
    );
}

export default InvitePage
