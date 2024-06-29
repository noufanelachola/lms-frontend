import {React,useState} from "react";
import "./AssignBook.css";

function AssignBook({schoolId,updateBookStockCount,updateStudentWithBooks,assign,setAssign}) {

    // const [assign,setAssign] = useState({
    //     studentId : "",
    //     bookId : ""
    // });

    const onInputChange = (state,event) => {
        setAssign(prevState => ({
            ...prevState,
            [state] : event.target.value
        }));
    }

    const onClear = () => {
        setAssign({
            studentId : "",
            bookId : ""
        });
    }

    const onSubmit = () => {
        if(assign.studentId && assign.bookId){
            fetch("http://localhost:3000/assign",{
                method : "post",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({
                    schoolId : schoolId,
                    studentId : assign.studentId,
                    bookId : assign.bookId
                })
            })
            .then(response => response.json())
            .then(transaction => {
                if(transaction.transactionid){
                    console.log(transaction);
                    alert("transaction successful");
                    onClear();
                    updateBookStockCount();
                    updateStudentWithBooks();
                }
            }).catch(error => console.error("Error: ",error));
        }
    }

    return(
        <div className="window assignBook">
            <p className="subTitle">Assign Books</p>
            <div className="inputContainer">
                <input placeholder="Enter Student ID" onChange={event => onInputChange("studentId",event)} value={assign.studentId} />
                <input placeholder="Enter Book ID" onChange={event => onInputChange("bookId",event)} value={assign.bookId} />
                <div className="inputBtnContainer">
                    <div className="assignBookBtn btn" onClick={() => onClear()} >
                        <p>Cancel</p>
                    </div>
                    <div className="assignBookBtn btn" onClick={() => onSubmit()} >
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssignBook;