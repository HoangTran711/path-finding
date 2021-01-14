import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import PathfinderVisualizer from './PathfinderVisualizer/PathfinderVisualizer'
import { HomePage } from './home-page/home-page'
import { Navbar } from './components/navbar'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route path="/algorithm-visualize" exact component={PathfinderVisualizer} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
