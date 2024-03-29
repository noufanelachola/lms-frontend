import React from 'react';
import { useState } from 'react';

import Login from './Container/Login/Login';
import DashBoard from './Container/DashBoard';

import './App.css';

function App() {
  const [route,setRoute] = useState("logIn");

  const routeChange = (rout) => {
    setRoute(rout);
    console.log(route);
  }

  return (
    <div className="App">
      {/* <Login routeChange={routeChange} /> */}
      <DashBoard/>
    </div>
  );
}

export default App;
