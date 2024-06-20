import React from 'react';
import { useState,useEffect } from 'react';

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
  }

  const updateAccount = (school) => {
    setAccount(prevState => ({
      ...prevState,
      schoolName : school.school_name,
      dop : school.date,
      doe : school.end_date,
      status : school.is_active ? "Active" : "Not Active",
      schoolId : school.id
    })); 
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
  
  useEffect(() => {
    if(account.schoolId){
      updateStudentsCount();
      updateBooksCount();
    }
  },[account.schoolId]);

  const updateStudentsCount = () => {
    fetch(`http://localhost:3000/student/count?schoolId=${account.schoolId}`)
    .then(res => res.json())
    .then(count => {
      setAccount(prevState => ({
        ...prevState,
        totalStudents : count
      }));
    }).catch(error => console.log("error occured"));

  }

  const updateBooksCount = () => {
    updateBookTotalCount();
    updateBookStockCount();
  }

  const updateBookTotalCount = () => {
    fetch(`http://localhost:3000/book/totalcount?schoolId=${account.schoolId}`)
    .then(res => res.json())
    .then(count => {
      setAccount(prevState => ({
        ...prevState,
        totalBooks : count === null ? "0" : count
      }));
    }).catch(error => console.log("error occured while total count books"));
  }
  
  const updateBookStockCount = () => {
    fetch(`http://localhost:3000/book/stockcount?schoolId=${account.schoolId}`)
    .then(res => res.json())
    .then(count => {
      setAccount(prevState => ({
        ...prevState,
        stockBooks : count === null ? "0" : count
      }));
    }).catch(error => console.log("error occured while stock count books"));
  }

  return (
    <div className="App">
      {
        route === "logIn" ? 
        <Login routeChange={routeChange} updateAccount={updateAccount} /> :
        <div className="appDashBoard">
            <DashBoard route={route} routeChange={routeChange} signOut={signOut} />
            {route === "home" && <Home account={account} totalStudents={account.totalStudents} totalBooks={account.totalBooks} stockBooks={account.stockBooks} />}
            {route === "search" && <Search schoolId={account.schoolId} />}
            {route === "addStudent" && <AddStudent schoolId={account.schoolId} totalStudents={account.totalStudents} updateStudentsCount={updateStudentsCount} />}
            {route === "addBook" && <AddBook schoolId={account.schoolId} totalBooks={account.totalBooks} updateBooksCount={updateBooksCount} />}
          </div> 
      }

    </div>
  );
}

export default App;
