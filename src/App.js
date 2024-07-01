import React from 'react';
import { useState,useEffect } from 'react';

import Login from './Container/Login/Login';
import DashBoard from './Container/DashBoard';
import Home from './Container/Home/Home';
// import Search from './Container/Search/Search';
import Find from './Container/Find/Find';
import AddStudent from './Container/AddStudent/AddStudent';
import AddBook from './Container/AddBook/AddBook';
import AssignBook from './Container/AssignBook/AssignBook';
import Profile from "./Container/Profile/Profile";

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
  );
  const [assignStudents,setAssignStudents] = useState([]);

  const [assign,setAssign] = useState({
    studentId : "",
    bookId : ""
  });

  

  const routeChange = (rout) => {
    setRoute(rout);
  }

  const setAssignWithId = (id) => {
    routeChange("assignBook");
    setAssign({
      studentId : id,
      bookId : ""
    })
  }


  const updateAccount = (school) => {
    setAccount(prevState => ({
      ...prevState,
      schoolName : school.school_name,
      dop : school.start_date,
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
    setAssignStudents([]);
    routeChange("logIn");
  }
  
  useEffect(() => {
    if(account.schoolId){
      updateStudentsCount();
      updateBooksCount();
      updateStudentWithBooks();
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

  const updateStudentWithBooks = () => {
    fetch(`http://localhost:3000/student/withbookscount?schoolId=${account.schoolId}`)
    .then(response => response.json())
    .then(count => {
      setAccount(prevState => ({
        ...prevState,
        withBooks : count
      }))
    })
    .catch(error => {
      console.log("error updating students with books");
    });
  }

  const updateBooksCount = () => {
    updateBookTotalCount();
    updateBookStockCount();
  }

  const updateStudent = () => {
    updateStudentsCount();
    updateStudentWithBooks();
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

  const updateAssignStudent = () => {
    if(account.schoolId){
      fetch(`http://localhost:3000/assign/get?schoolId=${account.schoolId}&status=pending`)
    .then(response => response.json())
    .then(transaction => {
      if(transaction.length){
        if (transaction[0].transactionid) {
          setAssignStudents(transaction);
          console.log(transaction);
        } else {
          throw new Error(transaction[0]);
        }
      } else {
        setAssignStudents([])
      }
    })
    .catch(error => {
      console.log(error,"Error fetching students with books");
    })
    }
  }

  const assignSubmit = (id,transactionId,bookId) => {
    fetch(`http://localhost:3000/assign/submit?schoolId=${account.schoolId}&transactionId=${transactionId}&bookId=${bookId}`,{
      method : "put",
      headers : {"Content-Type" : 'application/json'}
    }).then((response) => response.json())
    .then(result => {
      alert("submitted succesfully");
      setAssignStudents(assignStudents.filter((student,index) => index !== id));
      updateBookStockCount();
      updateStudentWithBooks();
    })
    .catch(error => {
      console.log("error submittiong books");
    })
  }

  useEffect(() => {
    if(account.schoolId){
      updateAssignStudent();
    }
  },[account.schoolId,account.stockBooks,account.withBooks]);


  return (
    <div className="App">
      {
        route === "logIn" ? 
        <Login routeChange={routeChange} updateAccount={updateAccount} /> :
        <div className="appDashBoard">
            <DashBoard route={route} routeChange={routeChange} signOut={signOut} />
            {route === "home" && <Home account={account} totalStudents={account.totalStudents} totalBooks={account.totalBooks} stockBooks={account.stockBooks} withBooks={account.withBooks} assignStudents={assignStudents} assignSubmit={assignSubmit} />}
            {route === "search" && <Find schoolId={account.schoolId} routeChange={routeChange} setAssignWithId={setAssignWithId} assignSubmit={assignSubmit} updateStudent={updateStudent} />}
            {route === "addStudent" && <AddStudent schoolId={account.schoolId} totalStudents={account.totalStudents} updateStudentsCount={updateStudentsCount} />}
            {route === "addBook" && <AddBook schoolId={account.schoolId} totalBooks={account.totalBooks} updateBooksCount={updateBooksCount} />}
            {route === "assignBook" && <AssignBook updateBookStockCount={updateBookStockCount} updateStudentWithBooks={updateStudentWithBooks} schoolId={account.schoolId} assign={assign} setAssign={setAssign} />}
            {route === "profile" && <Profile routeChange={routeChange} />}
          </div> 
      }

    </div>
  );
}

export default App;
