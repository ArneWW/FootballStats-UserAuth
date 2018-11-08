import React, { Component } from 'react';
import App from '../App';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
             <Home/>
            )
        }
        {
          !isAuthenticated() && (
              <App/>
            )
        }
      </div>
    );
  }
}

export default Home;
