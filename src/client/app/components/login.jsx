import React from 'react';
import { Link } from 'react-router-dom';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.signupRoute = props.starPathName + '/signup';
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("Login form was submitted");
        event.preventDefault();
    }

    render() {
        return(
        <div className="container">
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading">Please login</h2>
                    <label htmlFor="inputEmail" className="sr-only"></label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                    
                    <label htmlFor="inputPassword" className="sr-only"></label> 
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>   
                        
                    <div className="checkbox">
                        <input type="checkbox" value="remember-me"/> Remember me
                    </div>
                        
                    <button className="btn btn-lg btn-primary btn-block" type="submit"><Link to={signupRoute}>Login</Link></button>
                    <br></br>
                    <div className="signup">
                        <a href="signup.html">New User? Sign Up!</a>
                    </div>
            </form>

        </div>
        );
    }    
}

const LoginPage = (props) => {
    return(
        <div>
            <LoginContainer starPathName={props.starPathName}/>,
        </div>
    );
}

export default LoginPage