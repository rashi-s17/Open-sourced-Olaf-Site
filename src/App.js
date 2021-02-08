import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Snowman from './pages/snowman';

function App() {
  return (
    <Router>
        <Route path='/' exact component={Home} />
        <Route path='/snowman' component={Snowman}/>
    </Router>
  );
}

export default App;
