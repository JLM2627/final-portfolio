import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
// import PortfolioWrapper from './components/static/PortfolioWrapper'
import styled from "styled-components";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/about/Contact';
import Projects from './components/projects/Projects'
import NavBar from './components/static/NavBar'
// import logo from './logo.svg';
import './App.css';
 

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <div><NavBar />
          
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/About' component={About} />    
              <Route exact path='/Projects' component={Projects} />             
              <Route exact path='/Contact' component={Contact} />
            </Switch>
          </div>  
            {/* <div><Projects /></div> */}
            </div>  
        </Router>
      </div>
     
      
    );
  }
}

export default App;
