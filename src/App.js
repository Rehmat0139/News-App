// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,  Switch, Route,} from "react-router-dom"
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export class App extends Component {
  pageSize=6;
  render() {
    return (
      <div className='main'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/News-App/"><News key='general' pageSize={this.pageSize} country='in' category='general' /></Route>
            <Route exact path="/News-App/business"><News key='business' pageSize={this.pageSize} country='in' category='business' /></Route>
            <Route exact path="/News-App/entertainment"><News key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' /></Route>
            <Route exact path="/News-App/health"><News key='health' pageSize={this.pageSize} country='in' category='health' /></Route>
            <Route exact path="/News-App/science"><News key='science' pageSize={this.pageSize} country='in' category='science' /></Route>
            <Route exact path="/News-App/sports"><News key='sports' pageSize={this.pageSize} country='in' category='sports' /></Route>
            <Route exact path="/News-App/technology"><News key='technology' pageSize={this.pageSize} country='in' category='technology' /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
