import React from 'react'

import NavBar from './Components/Common/NavBar/NavBar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <NavBar />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
