import React from 'react'

import SerachEvent from './components/Common/SerachEvent/SearchEvent.js'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Common/Header/Header'
// import UserHome from './components/Layout/UserHome/UserHome'

function App () {
  return (
    <Router>
      <Header />
      <SerachEvent/>
      <switch>
        {/* <Route exact path="/home" component={UserHome} /> */}
      </switch>
    </Router>
  )
}

export default App
