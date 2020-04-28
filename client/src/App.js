import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Layout/Login/Login.js";
import Rooms from "./components/Layout/rooms/Rooms.js";
import SerachEvent from "./components/Common/SerachEvent/SearchEvent.js";
import Header from "./components/Common/Header/Header";

function App() {
  return (
    <Router>
      <Header />

      <switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/rooms" component={Rooms} />
      </switch>
    </Router>
  );
}
export default App;
