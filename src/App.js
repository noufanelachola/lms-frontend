import React from 'react';
import { useState } from 'react';

import Login from './Container/Login/Login';
import DashBoard from './Container/DashBoard';
import Home from './Container/Home/Home';
import Search from './Container/Search/Search';
import AddStudent from './Container/AddStudent/AddStudent';
import AddBook from './Container/AddBook/AddBook';

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
    console.log(school);
    setAccount(prevState => ({
      ...prevState,
      schoolName : school.school_name,
      dop : school.date,
      doe : school.end_date,
      status : school.is_active ? "Active" : "Not Active",
      schoolId : school.id
    }));
    updateStudentsCount();
  }

  const signOut = () => {
    setAccount(
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
    );
    routeChange("logIn");
  }

  const updateStudentsCount = () => {
    fetch("http://localhost:3000/student/count")
    .then(res => res.json())
    .then(count => {
      setAccount(prevState => ({
        ...prevState,
        totalStudents : count
      }));
    }).catch(error => console.log("error occured"));

  }


  return (
    <div className="App">
      {
        route === "logIn" ? 
        <Login routeChange={routeChange} updateAccount={updateAccount} /> :
        <div className="appDashBoard">
            <DashBoard route={route} routeChange={routeChange} signOut={signOut} />
            {route === "home" && <Home account={account} totalStudents={account.totalStudents} />}
            {route === "search" && <Search/>}
            {route === "addStudent" && <AddStudent schoolId={account.schoolId}/>}
            {route === "addBook" && <AddBook schoolId={account.schoolId}/>}
          </div> 
      }

    </div>
  );
}

export default App;
