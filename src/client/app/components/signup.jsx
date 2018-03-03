import React from 'react';
import { Link } from 'react-router-dom';

class SignupContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("Signup form was submitted");
        event.preventDefault();
    }

    render() {
        return(
        <div id="main-container">
            <h1>Sign Up</h1>
            <h4>Sign up today to start planning for your group's next BIG vacation!</h4>
            <form onSubmit={this.handleSubmit}>
                    <br></br>
                        First name:<br></br>
                        <input id="firstName" name="firstName" placeholder="Enter your first name" type="text" />
                    
                    <br></br>
                        Last name:<br></br>
                        <input id="lastName" name="lastName" placeholder="Enter your last name" type="text" />
                    
                    <br></br>
                        Email address:<br></br>
                        <input id="email" name="email" placeholder="Kevinisascrub@gmail.com" type="email" />
                   
                    <br></br>
                        Create a password:<br></br>
                        <input id="password" name="password" type="password" />
                    
                    <br></br>
                        Confirm your password:<br></br>
                        <input id="passwordRe" name="passwordRe" type="password" />
                   
                    <br></br>
                        Birthday:<br></br>
                    <input id="birthday" name="birthday" type="date" />
                    
                    <br></br>
                    <label for="country">Country: </label>
                    <select id="country" name="country">
                      <option value="australia">Australia</option>
                      <option value="canada">Canada</option>
                      <option value="china">China</option>
                      <option value="jabooty">Jabooty</option>
                      <option value="usa">USA</option>
                    </select>
                    <br></br>
                </form>
            <br></br>
            <button id="desktop-button" type="button">Sign Up!</button>    
        </div>
        );
    }    
}

const SignupPage = (props) => {
    return(
        <div>
            <SignupContainer/>,
        </div>
    );
}

export default SignupPage