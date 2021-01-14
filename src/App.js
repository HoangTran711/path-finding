import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import PathfinderVisualizer from './PathfinderVisualizer/PathfinderVisualizer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/algorithm-visualize" component={PathfinderVisualizer} />
      </Switch>
    </div>
  );
}

export default App;
