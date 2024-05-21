import React from 'react';
import { useState } from 'react';

import Login from './Container/Login/Login';
import DashBoard from './Container/DashBoard';
import Home from './Container/Home/Home';
import Search from './Container/Search/Search';
import './App.css';

function App() {
  const [route,setRoute] = useState("logIn");
  const [account,setAccount] = useState(
    {
      schoolName : "",
      dop : "",
      doe : "",
      status : "",
      schoolId : "",
      totalBooks : 0,
      stockBooks : 0,
      totalStudents : 0,
      withBooks : 0
    }
  )

  const routeChange = (rout) => {
    setRoute(rout);
    console.log(route);
  }

  const updateAccount = (school) => {
    console.log(school.date,typeof(school.date));
    setAccount(prevState => ({
      ...prevState,
      schoolName : school.school_name,
      dop : school.date.split("T")[0],
      doe : school.end_date,
      status : school.is_active ? "Active" : "Not Active",
      schoolId : school.id
    }));
  }

  return (
    <div className="App">
      {
        route === "logIn" ? 
        <Login routeChange={routeChange} updateAccount={updateAccount} /> :
        <div className="appDashBoard">
            <DashBoard route={route} routeChange={routeChange} />
            {route === "home" && <Home account={account}/>}
            {route === "search" && <Search/>}
          </div> 
      }

    </div>
  );
}

export default App;
