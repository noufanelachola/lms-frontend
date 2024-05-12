import React from 'react';
import { useState } from 'react';

import Login from './Container/Login/Login';
import DashBoard from './Container/DashBoard';
import Home from './Container/Home/Home';
import './App.css';

function App() {
  const [route,setRoute] = useState("logIn");

  const routeChange = (rout) => {
    setRoute(rout);
    console.log(route);
  }

  return (
    <div className="App">
      {
        route === "logIn" ? 
        <Login routeChange={routeChange}/> :
        <div className="appDashBoard">
            <DashBoard/>
            <Home/>
          </div> 
      }

    </div>
  );
}

export default App;
