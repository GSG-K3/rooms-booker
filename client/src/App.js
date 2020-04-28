import React from 'react'

import SerachEvent from './components/Common/SerachEvent/SearchEvent.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Common/Header/Header'
import UserHome from './components/Layout/UserHome/UserHome'

import NavBar from './components/Common/NavBar/NavBar'

function App () {
  return (
    <Router>
      <Header />
      <SerachEvent/>
      <Switch>
        <Route exact path="/home" component={UserHome} />
        <Route exact path='/'component={NavBar}/>
      </Switch>
    </Router>
  )
}

export default App
