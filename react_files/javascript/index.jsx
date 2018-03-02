class Home extends React.Component {
    
    startPlan = () => {
        //window.location = "login.html";
        
    }
    
    render() {
    return(
        <div>
        <div className="jumbotron">
        <div className="container">
            <h2>Explore the world with your friends.</h2>
            <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick="{this.startPlan}">Start Planning!</a></p>
        </div>
        </div>

        <section className="call-to-action">
              <div className="container">
                <h1>We make planning easy</h1><br></br>
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

      <section className="call-to-action">
              <div className="jumbotron-gray">
                  <div className="container">
                      <h3>TIP: Don't forget to leave comments for your group so they know what you like.</h3>
                  </div>
              </div>
      </section>

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

      

      </div>
    );
    }
}

const Login = () => (
    <div>Test</div>
);

ReactDOM.render(<Home/>, document.getElementById('content'))