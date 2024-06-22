import {React,useState} from "react";
import "./AssignBook.css";

function AssignBook() {

    const [assign,setAssign] = useState({
        studentId : "",
        bookId : ""
    });

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
                    <div className="assignBookBtn btn" >
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssignBook;