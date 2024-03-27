import { useState } from 'react';
import Login from './Container/Login/Login';

import './App.css';
import React from 'react';

function App() {
  const [route,setRoute] = useState("logIn");

  const routeChange = (rout) => {
    setRoute(rout);
    console.log(route);
  }

  return (
    <div className="App">
      <Login routeChange={routeChange} />
    </div>
  );
}

export default App;
