import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Layout/Login/Login.js';

function App () {
  return (
    <Router>
      <switch>
        <Route exact path="/login">
          <Login />
        </Route>
      </switch>
    </Router>
  )
}
export default App
