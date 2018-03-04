import React from 'react';
import { Link } from 'react-router-dom';



const TopContainer = (props) => {
    
    let buttonRoute = '/login';
    
    let buttonStyles = {
        color: '#ffff',
        backgroundColor: 'transparent',
        borderColor: 'white',
        marginBottom: '5px'
    };

    return(
        <div className="jumbotron">
                <div className="container">
                    <h2>Explore the world with your friends.</h2>
                    <br></br>
                    <p>
                        <Link to={buttonRoute}><button className="btn btn-primary btn-lg" styles={buttonStyles} href="#">Start Planning!</button></Link>
                    </p>
                </div>
        </div>
    );
    
}

const FeaturesSection = (props) => {
    return(
        <section className="call-to-action">
            <div className="container">
                <h1>We make planning easy</h1>
                <br></br>
                <div className="row">
                    <div className="col-md-3">
                        <span className="glyphicon glyphicon-time glyphicon-large" aria-hidden="true"></span>
                        <h3>Date</h3>
                        <p>Decide when to go.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="glyphicon glyphicon-globe glyphicon-large" aria-hidden="true"></span>
                        <h3>Location</h3>
                        <p>Pick where to go.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="glyphicon glyphicon-home glyphicon-large" aria-hidden="true"></span>
                        <h3>Hotel</h3>
                        <p>Choose where to stay.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="glyphicon glyphicon-heart glyphicon-large" aria-hidden="true"></span>
                        <h3>Activities</h3>
                        <p>Do what you love doing!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const TipSection = (props) => {
    let tipStyles = {
        backgroundColor: '#eee',
	    textAlign: 'center',
	    paddingTop: '20px',
	    paddingBottom: '20px'
    };

    return(
        <section className="call-to-action">
                <div style={tipStyles}>
                    <div className="container">
                        <h3>TIP: Don't forget to leave comments for your group so they know what you like.</h3>
                    </div>
                </div>
        </section>
    );
}

const AgentSection = (props) => {
    return(
    <section className="call-to-action">
        <div className="container">
            <div className="row"><br></br>
                <div className="col-md-12">
                    <span className="glyphicon glyphicon-user glyphicon-large" aria-hidden="true"></span>
                        <h3>Talk with a travel agent</h3>
                        <p>Our travel agents are here for you 24/7. Ask them about anything!</p>
                </div>
            </div>
        </div>
    </section>
    );
}

const Footer = (props) => {
    return(
        <footer className="footer">
        
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-white">.</p>
                    </div>
                    
                </div>
            </div>
        
        </footer>
    );
}

const HomePage = (props) => {
    return(
        <div>
            <TopContainer/>,
            <FeaturesSection/>,
            <TipSection/>,
            <AgentSection/>,
            <Footer/>
        </div>
    );
}

export default HomePage