import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/header.css';

export default (props) => {

    let fontSize = {
        fontSize: '27px',
        textAlign: 'center',
        lineHeight: '50px'
    };

    return(
        <nav className={`navbar ${styles['navbar']} navbar-inverse`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigationbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" href="#" style={fontSize}>VacayCollab</Link>
          </div>
          <div className="collapse navbar-collapse" id="navigationbar">
            <ul className={`nav navbar-nav ${styles['navbar-nav']} navbar-right`}>
              <li><Link to="/itinerary"><span className="glyphicon glyphicon-briefcase"></span> My Plans</Link></li>
              <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
              <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    
    );
};
