import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './components/Layout/Login/Login.js';
import Rooms from './components/Layout/rooms/Rooms.js';

function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/rooms" component={Rooms} />
      </switch>
    </Router>
  );
}
export default App;
