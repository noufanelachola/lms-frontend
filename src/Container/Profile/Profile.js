
import "./Profile.css";
import profileMale from "../resources/profile-male.png";
import { useEffect, useState } from "react";


function Profile({setFind,student,setAssignWithId,assignSubmit,deleteStudent}) {
    useEffect(() => {
        updatehistory();
    },[]);

    const onClickAssign = async(schoolId,transactionId,bookId) => {
        await assignSubmit(schoolId,transactionId,bookId);
        setHistory(prevHistory => 
            prevHistory.map(transaction => {
                if(transaction.transactionid === transactionId){
                    return({
                        ...transaction,
                        status:"submitted"
                    })
                }
                return transaction;
            })
        );
    }

    const onDelete = () => {
        deleteStudent(student.studentid);
    }

    const getSearch = () => {
        setFind({
            route : "search",
            index : ""
        });
        console.log("student",student);
    }

    const [history,setHistory] = useState([]);

    const returnBooksCount = () => {
        return history.reduce((count, transaction) => {
            return transaction.status === "pending" ? count + 1 : count;
        }, 0);
    }
    const submittedBooksCount = () => {
        return history.reduce((count, transaction) => {
            return transaction.status === "submitted" ? count + 1 : count;
        }, 0);
    }

    const updatehistory = () => {
        fetch(`http://localhost:3000/assign/get?schoolId=${student.schoolid}&studentId=${student.studentid}`)
        .then(res => res.json())
        .then(transaction => setHistory(transaction))
        .catch(error => {
            console.log("Error fetching student transaction")
        });
    }

    return(
        <div className="profile window">

            <div className="profileHead">
                <div className="navigation">
                    <div className="profileBtn btn" onClick={()=>getSearch()} >{`<`}</div>
                    <div className="profileBtn btn">Edit Information</div>
                </div>
                <div className="profileSection">
                    <div className="profileImg">
                        <img src={profileMale} />
                    </div>
                    <div className="profileDetails">
                        <div className="profileDetailsMain">
                            <p className="name white subTitle">{student.studentname}</p>
                            <p className="author white italic light">"A damn good reader"</p>
                        </div>
                        <div className="profileDetailsSub">
                            <div className="id profileBtn">{`#${student.studentid}`}</div>
                            <div className="class profileBtn">{`Class ${student.studentclass}`}</div>
                            <div className="admission profileBtn">{student.admissionnumber}</div>
                        </div>
                    </div>
                </div>
                <div className="absoluteDiv"></div>
            </div>

            <div className="readStats">
                <div>
                    <p className="medText white">Books Read</p>
                    <p className="medText white">{submittedBooksCount()}</p>
                </div>
                <div>
                    <p className="medText white">Books To Return</p>
                    <p className="medText white">{returnBooksCount()}</p>
                </div>
            </div>

            <div className="historySection">
                <div className="tableHead">
                    <p className="subTitle medium smallLineHeight" >History</p>
                    <p><span className="red medium">{returnBooksCount()}</span>{` book${returnBooksCount() > 1 ? "s " : " "}to return`}</p>
                </div>
                <div className="profileTableCont">
                    <table className="profileTable">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Book Name</th>
                                <th>Book Author</th>
                                <th>Date when acquired</th>
                                <th>Date to be submitted</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {history.length > 0 ? (
                            history.map((transaction, index) => (
                                <tr key={transaction.transactionid}>
                                    <td>{index + 1}</td>
                                    <td>{transaction.bookname}</td>
                                    <td>{transaction.bookauthor}</td>
                                    <td>{transaction.issue_date}</td>
                                    <td>{transaction.due_date}</td>
                                    <td>{transaction.status}</td>
                                    <td>{transaction.status === "pending" ? <button className="btn" onClick={() => onClickAssign(transaction.schoolid,transaction.transactionid,transaction.bookid)} >Mark as submitted</button> : ""}</td>
                                </tr>                                    
                            ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="lightmedium">No transactions found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="profileBtnSection">
                <div className="btn" onClick={()=>setAssignWithId(student.studentid)}>Assign a Book</div>
                <div className="btn white" onClick={()=>onDelete()} >Delete Profile</div>
            </div>

        </div>
    );
}

export default Profile;