import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/header';
import About from './pages/about';
import Members from './pages/members';
import Projects from './pages/projects';
import Home from './pages/index';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/members' component={Members} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
