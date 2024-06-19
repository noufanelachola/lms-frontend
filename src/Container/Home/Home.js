import React from "react";
import "./Home.css";

function Home({account,totalStudents}) {

    return (
        <div className="window home">

            <div className="homeCont1">
                <div className="counts">
                    <p className="text smallLineHeight">Total books</p>
                    <p className="number smallLineHeight">1500</p>
                </div>
                <div className="counts">
                    <p className="text">In Stock</p>
                    <p className="number smallLineHeight">1500</p>
                </div>
                <div className="counts">
                    <p className="text">Total Students</p>
                    <p className="number smallLineHeight">{`${totalStudents}`}</p>
                </div>
                <div className="counts">
                    <p className="text">With Books</p>
                    <p className="number smallLineHeight">1500</p>
                </div>
            </div>

            <div className="homeCont2 homeCont">
                <div className="homeTableHeader">
                    <p className="medium subTitle smallLineHeight">To Return</p>
                    <p><span className="strong green smallLineHeight">112</span> Students have taken books...</p>
                </div>
                <div className="homeTableCont">
                    <table className="returnTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Admission No</th>
                                <th>Date when acquired</th>
                                <th>status</th>
                                <th>Fine</th>
                                <th></th>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                <td>Noufan Elachola</td>
                                <td>10-C</td>
                                <td>23GCS16</td>
                                <td>24-05-2024</td>
                                <td>Pending</td>
                                <td>50</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Aman Elachola</td>
                                <td>9-C</td>
                                <td>23GCS156</td>
                                <td>04-05-2024</td>
                                <td>Pending</td>
                                <td>5</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Noufan Elachola</td>
                                <td>10-C</td>
                                <td>23GCS16</td>
                                <td>24-05-2024</td>
                                <td>Pending</td>
                                <td>50</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Aman Elachola</td>
                                <td>9-C</td>
                                <td>23GCS156</td>
                                <td>04-05-2024</td>
                                <td>Pending</td>
                                <td>5</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Noufan Elachola</td>
                                <td>10-C</td>
                                <td>23GCS16</td>
                                <td>24-05-2024</td>
                                <td>Pending</td>
                                <td>50</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Aman Elachola</td>
                                <td>9-C</td>
                                <td>23GCS156</td>
                                <td>04-05-2024</td>
                                <td>Pending</td>
                                <td>5</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Noufan Elachola</td>
                                <td>10-C</td>
                                <td>23GCS16</td>
                                <td>24-05-2024</td>
                                <td>Pending</td>
                                <td>50</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Aman Elachola</td>
                                <td>9-C</td>
                                <td>23GCS156</td>
                                <td>04-05-2024</td>
                                <td>Pending</td>
                                <td>5</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Noufan Elachola</td>
                                <td>10-C</td>
                                <td>23GCS16</td>
                                <td>24-05-2024</td>
                                <td>Pending</td>
                                <td>50</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Aman Elachola</td>
                                <td>9-C</td>
                                <td>23GCS156</td>
                                <td>04-05-2024</td>
                                <td>Pending</td>
                                <td>5</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Noufan Elachola</td>
                                <td>10-C</td>
                                <td>23GCS16</td>
                                <td>24-05-2024</td>
                                <td>Pending</td>
                                <td>50</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Aman Elachola</td>
                                <td>9-C</td>
                                <td>23GCS156</td>
                                <td>04-05-2024</td>
                                <td>Pending</td>
                                <td>5</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
                            <tr>
                                <td>Noufan Elachola</td>
                                <td>10-C</td>
                                <td>23GCS16</td>
                                <td>24-05-2024</td>
                                <td>Pending</td>
                                <td>50</td>
                                <td><button className="btn" >Mark as receivered</button></td>
                            </tr>
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