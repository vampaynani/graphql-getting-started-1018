import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Students } from './components/Students';
import { Person } from './components/Person';
import { CreateUser } from './components/CreateUser';
import { Login } from './components/Login';

class App extends Component {
  componentDidMount(){
    var query = `{
      person(id: 1){
        name
        height
        mass
      }
    }`;
    
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    })
      .then(res => res.json())
      .then(res => console.log(res.data));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <main>
            <nav>
              <ul className="menu">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/students">Students</Link></li>
                <li><Link to="/person">Person</Link></li>
                <li><Link to="/createuser">Create User</Link></li>
              </ul>
            </nav>
            <Route exact path="/login" component={Login} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/person" component={Person} />
            <Route exact path="/createuser" component={CreateUser} />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
