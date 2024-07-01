import React from "react";
import "./Home.css";

function Home({account,totalStudents,totalBooks,stockBooks,withBooks,assignStudents,assignSubmit}) {

    return (
        <div className="window home">

            <div className="homeCont1">
                <div className="counts">
                    <p className="text smallLineHeight">Total books</p>
                    <p className="number smallLineHeight">{totalBooks}</p>
                </div>
                <div className="counts">
                    <p className="text">In Stock</p>
                    <p className="number smallLineHeight">{stockBooks}</p>
                </div>
                <div className="counts">
                    <p className="text">Total Students</p>
                    <p className="number smallLineHeight">{totalStudents}</p>
                </div>
                <div className="counts">
                    <p className="text">With Books</p>
                    <p className="number smallLineHeight">{withBooks}</p>
                </div>
            </div>

            <div className="homeCont2 homeCont">
                <div className="homeTableHeader">
                    <p className="medium subTitle smallLineHeight">To Return</p>
                    <p><span className="strong green smallLineHeight">{assignStudents.length}</span>{` Student${assignStudents.length > 1 ? "s have" : " has"} taken books...`}</p>
                </div>
                <div className="homeTableCont">
                    <table className="returnTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Admission No</th>
                                <th>Book Name</th>
                                <th>Date when acquired</th>
                                <th>Submit Before</th>
                                <th>status</th>
                                <th></th>
                            </tr>
                        </thead>    
                        <tbody>
                            {
                                assignStudents.length ?
                                    (assignStudents.map((student,index) => {
                                        return (
                                            <tr>
                                                <td>{student.studentname}</td>
                                                <td>{student.studentclass}</td>
                                                <td>{student.admissionnumber}</td>
                                                <td>{student.bookname}</td>
                                                <td>{student.issue_date}</td>
                                                <td>{student.due_date}</td>
                                                <td>{student.status}</td>
                                                <td><button className="btn" onClick={() => assignSubmit(index,student.transactionid,student.bookid)} >Mark as receivered</button></td>
                                            </tr>
                                            
                                        )
                                    }))
                                :
                                    <tr>
                                        <td colSpan="10" className="light" >No books to return</td>
                                    </tr>    
                            }
                        </tbody>    
                    </table>
                </div>
            </div>

            <div className="homeCont3 homeCont">
                <div className="homeTableHeader">
                    <p className="medium subTitle smallLineHeight">Your Plan</p>
                    <p><span className="strong green smallLineHeight">{account.doe}</span> Students have taken books...</p>
                </div>
                <div className="homeTableCont">  
                    <table className="returnTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>D.O.P</th>
                                <th>D.O.E</th>
                                <th>Status</th>
                                <th>Customer ID</th>
                                <th></th>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                <td>{account.schoolName}</td>
                                <td>{account.dop}</td>
                                <td>{account.doe}</td>
                                <td>{account.status}</td>
                                <td>{account.schoolId}</td>
                                <td><button className="btn" >Cancel</button></td>
                            </tr>
                        </tbody>    
                    </table>
                </div>      
            </div>

        </div> 
    )
}

export default Home;