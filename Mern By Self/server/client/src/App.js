import React from 'react'
import Navbar from './components/Navbar';
import { Switch,Route } from 'react-router-dom';
import Detail from './components/Detail';
import Surprize from './components/Surprize';
import Home from './components/Home';
const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route exact path='/detail'>
        <Detail/>
        </Route>
        <Route exact path='/surprize'>
        <Surprize/>
        </Route>
      </Switch>
    </>
  )
}

export default App;
