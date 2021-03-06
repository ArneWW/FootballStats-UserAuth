import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Teams from './components/Teams';
import TeamPlayers from './components/TeamPlayers';
import Background from './components/Background';
import Players from './components/Players';
import PlayerProfile from './components/PlayerProfile';
import Matches from './components/Matches';

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  renderHeader = () => {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/teams'>Teams</Link></li>
            <li><Link to='/players'>Players</Link></li>
            <li><Link to='/matches'>Matches</Link></li>
          </ul>
          <ul className='account-nav'>
            <li><a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>USER LOGIN</a></li>
          </ul>
        </nav>
      </header>
    )
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return <div className="App">
        <Background />
        {this.renderHeader()}
        <Switch>
        {
              !isAuthenticated() && (
          <Route path="/matches" component={Matches} />
          )
        }
        </Switch>
        {
              isAuthenticated() && (
                <Switch>
          <Route path="/players/:id" component={PlayerProfile} />
          <Route path="/players" component={Players} />
          <Route path="/teams/:id" component={TeamPlayers} />
          <Route path="/teams" component={Teams} />
          <Route exact path="/" component={LandingPage} />
          
        </Switch>
        )
            }
      </div>;
  }
}

export default App;
