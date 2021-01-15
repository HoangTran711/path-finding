import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import {MyContext} from './Context/Context'
import PathfinderVisualizer from './PathfinderVisualizer/PathfinderVisualizer'
import { HomePage } from './home-page/home-page'
import { Navbar } from './components/navbar'
import { ErrorPage } from './components/404/404'
import { AboutUs } from './about-us/AboutUs'
import { Theory } from './Theory/Theory'
import Loading from './assets/loading.gif'
import { Message } from './message/message'

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [successMessage, setSuccessMessage] = React.useState('Find path successfully!')
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])
  React.useEffect(() => {
    setTimeout(() => {
      setErrorMessage('')
      setSuccessMessage('')
    } ,5000)
  }, [errorMessage, successMessage])
  if(isLoading) {
    return (
      <div className="loading">
        <img src={Loading} alt="Loading"/>
      </div>
    )
  } else {
    return (
      <MyContext.Provider value={{
        setErrorMessage,
        setSuccessMessage
      }} >
        <div className="App">
          <Navbar/>
          {(successMessage || errorMessage) ? <Message errorMessage={errorMessage} successMessage={successMessage} /> : null}
            <Switch>
              <Route path="/algorithm-visualize" exact component={PathfinderVisualizer} />
              <Route path="/" exact component={HomePage} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/theory" exact component={Theory} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
      </MyContext.Provider>
    );
  }
}

export default App;
