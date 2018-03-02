class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    login() {
        
    }

    render() {
        return(
            <div class="container">
                <form class="form-signin">
                    <h2 class="form-signin-heading">Please login</h2>

                    <label for="inputEmail" class="sr-only"></label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" onChange = {(event,newValue) => this.setState({email:newValue})} required autofocus></input>
                    <label for="inputPassword" class="sr-only"></label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" onChange = {(event,newValue) => this.setState({password:newValue})} required></input>
        
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me">Remember me</input>
                        </label>
                    </div>
        
                    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={(event) => this.login(event)}>Login</button>
                </form>
      
            <p><a href="signup.html">New User? Sign Up!</a></p>

            </div>

        );
    }
}

export default Login;