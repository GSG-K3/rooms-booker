import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Rooms from "./components/Layout/Rooms/Rooms.js";
import SerachEvent from './components/Common/SerachEvent/SearchEvent.js'
import Header from './components/Common/Header/Header'
import Events from './components/Layout/Events/Events'
import UserHome from './components/Layout/UserHome/UserHome'


function App() {
  return (
    <Router>
      <Header />

      <SerachEvent/>
      <Switch>
        <Route exact path = '/' component={Events}/>
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/rooms" component={Rooms} />

      </Switch>
    </Router>
  );
}
export default App;
