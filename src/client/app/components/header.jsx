import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

    return(
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">VacayCollab</a>
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">My Plans</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                            <ul className="bfh-selectbox bfh-languages" data-language="en_US" data-available="en_US,fr_CA,es_MX" data-flags="true">
                            </ul>
                    </li>
                </ul>
                </div>{/*navbar-collapse*/}
            </div>{/*container-fluid*/}
            </nav>
    );
};