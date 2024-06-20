import {React,useState} from "react";
import "./AddStudent.css";

function AddStudent ({schoolId,totalStudents,updateStudentsCount}) {

    const [student,setStudent] = useState({
        name : "",
        class : "",
        admissionNumber : ""
    }); 

    const studentChange = (event) => {
        const {id,value} = event.target;
        setStudent(prevState => ({
            ...prevState,
            [id] : value
        }));
        console.log(student);
    }

    const studentClear = () => {
        setStudent({
            name : "",
            class : "",
            admissionNumber : ""
        })
    }

    const studentSubmit = () => {
        if(student.name && student.class && student.admissionNumber) {
            fetch("http://localhost:3000/student/add",{
                method : 'post',
                      headers : {"Content-Type" : 'application/json'},
                      body : JSON.stringify({
                          schoolId : schoolId,
                          studentName : student.name,
                          studentClass : student.class,
                          admissionNumber : student.admissionNumber
                        })
              }).then(response => response.json())
              .then(res => {
                res.studentid ? alert("Student added seccessfully") : alert("Error while adding student");
                studentClear();
                updateStudentsCount();
              })
              .catch(error => console.error("Error: ",error));
        }
        else {
            alert("Error while adding student");
        }
    }


    return(
        <div className="window addStudent">
            <p className="subTitle">Add Students</p>
            <p>{`Total Students - ${totalStudents}`}</p>
            <div className="inputContainer">
                <input id="name" placeholder="Enter student's name here" onChange={(event)=>studentChange(event)} value={student.name}/>
                <input id="class" placeholder="Class (eg:10-C,5-B)" onChange={(event)=>studentChange(event)} value={student.class}/>
                <input id="admissionNumber" placeholder="Admission Number" onChange={(event)=>studentChange(event)} value={student.admissionNumber}/>
                <div className="inputBtnContainer">
                    <div className="addStudentBtn btn" onClick={() => studentClear()} >
                        <p>Cancel</p>
                    </div>
                    <div className="addStudentBtn btn" onClick={() => studentSubmit()} >
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddStudent;