import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

//Global Pages

import Home from '/pages/Home';
import Projects from '/pages/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  };
};
export default App;
