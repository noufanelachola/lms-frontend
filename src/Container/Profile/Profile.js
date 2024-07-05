
import "./Profile.css";
import profileMale from "../resources/profile-male.png";
import profileBook from "../resources/book-only.png";
import { useEffect, useState } from "react";


function Profile({url,item,setFind,profile,setAssignWithId,assignSubmit,deleteStudent,deleteBook}) {
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
        if(item === "student"){
            deleteStudent(profile.studentid);
        }
        else if(item === "book"){
            deleteBook(profile.bookid);
        }
    }

    const getSearch = () => {
        setFind({
            route : "search",
            index : ""
        });
        console.log("student",profile);
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
        if(item === "student"){
            fetch(`${url}/assign/get?schoolId=${profile.schoolid}&studentId=${profile.studentid}`)
            .then(res => res.json())
            .then(transaction => setHistory(transaction))
            .catch(error => {
            console.log("Error fetching student transaction")
            });
        } else if(item === "book") {
            fetch(`${url}/assign/get?schoolId=${profile.schoolid}&bookId=${profile.bookid}`)
            .then(res => res.json())
            .then(transaction => setHistory(transaction))
            .catch(error => {
            console.log("Error fetching student transaction")
        });
        }
    }

    return(
        <div className="profile window">

            <div className="profileHead">
                <div className="navigation">
                    <div className="profileBtn btn" onClick={()=>getSearch()} >{`<`}</div>
                    <div className="profileBtn btn">Edit Information</div>
                </div>
                <div className="profileSection">
                    {
                        item === "student"?
                            <div className="profileImg studentImage">
                                <img src={profileMale} />
                            </div>
                        :
                            <div className="profileImg">
                                <img src={profileBook} />
                            </div>
                    }
                    <div className="profileDetails">
                        <div className="profileDetailsMain">
                            <p className="name white subTitle">{item === "student" ? profile.studentname : profile.bookname}</p>
                            <p className="author white italic light">{item === "student" ? "A damn good reader" : profile.bookauthor}</p>
                        </div>
                        <div className="profileDetailsSub">
                            <div className="id profileBtn">{`#${item === "student" ? profile.studentid : profile.bookid}`}</div>
                            {item === "student" && 
                                <>
                                    <div className="class profileBtn">{`Class ${profile.studentclass}`}</div>
                                    <div className="admission profileBtn">{profile.admissionnumber}</div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className="absoluteDiv"></div>
            </div>

            <div className="readStats">
                <div>
                    <p className="medText white">{item === "student" ? "Books Read" : "Total Copies"}</p>
                    <p className="medText white">{item === "student" ? submittedBooksCount() : profile.totalcopies}</p>
                </div>
                <div>
                    <p className="medText white">{item === "student" ? "To Return" : "Available Copies"}</p>
                    <p className="medText white">{item === "student" ? returnBooksCount() : profile.availablecopies}</p>
                </div>
            </div>

            <div className="historySection">
                <div className="tableHead">
                    <p className="subTitle medium smallLineHeight" >History</p>
                    <p><span className="red medium">{returnBooksCount()}</span>{` book${returnBooksCount() > 1 ? "s " : " "}to return`}</p>
                </div>
                <div className="profileTableCont">
                    <table className="profileTable">
                        {
                            item === "student" ?
                                <>
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
                                </>
                            :    
                                <>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Student Name</th>
                                            <th>Class</th>
                                            <th>Admission No</th>
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
                                                    <td>{transaction.studentname}</td>
                                                    <td>{transaction.studentclass}</td>
                                                    <td>{transaction.admissionnumber}</td>
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
                                </>
                        }
                    </table>
                </div>
            </div>

            <div className="profileBtnSection">
                {
                    item === "student" &&
                    <>
                        <div className="btn" onClick={()=>setAssignWithId(profile.studentid,"")}>Assign a Book</div>
                        <div className="btn white" onClick={()=>onDelete()} >Delete Profile</div>
                    </>
                }
                {
                    item === "book" &&
                    <>
                        <div className="btn" onClick={()=>setAssignWithId("",profile.bookid)}>Assign To</div>
                        <div className="btn white" onClick={()=>onDelete()} >Delete Book</div>
                    </>
                }
            </div>

        </div>
    );
}

export default Profile;