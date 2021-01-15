import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import PathfinderVisualizer from './PathfinderVisualizer/PathfinderVisualizer'
import { HomePage } from './home-page/home-page'
import { Navbar } from './components/navbar'
import { ErrorPage } from './components/404/404'
import { AboutUs } from './about-us/AboutUs'
import { Theory } from './Theory/Theory'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route path="/algorithm-visualize" exact component={PathfinderVisualizer} />
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/theory" exact component={Theory} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
