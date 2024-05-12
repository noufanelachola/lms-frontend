import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home window">

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
                    <p className="number smallLineHeight">1500</p>
                </div>
                <div className="counts">
                    <p className="text">With Books</p>
                    <p className="number smallLineHeight">1500</p>
                </div>
            </div>

            <div className="homeCont2">
                <div className="homeTableHeader">
                    <p className="medium subTitle smallLineHeight">To Return</p>
                    <p><span className="strong green smallLineHeight">112</span> Students have taken books...</p>
                </div>
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
                            <td><button>Mark as receivered</button></td>
                        </tr>
                        <tr>
                            <td>Aman Elachola</td>
                            <td>9-C</td>
                            <td>23GCS156</td>
                            <td>04-05-2024</td>
                            <td>Pending</td>
                            <td>5</td>
                            <td><button>Mark as receivered</button></td>
                        </tr>
                        <tr>
                            <td>Noufan Elachola</td>
                            <td>10-C</td>
                            <td>23GCS16</td>
                            <td>24-05-2024</td>
                            <td>Pending</td>
                            <td>50</td>
                            <td><button>Mark as receivered</button></td>
                        </tr>
                        <tr>
                            <td>Aman Elachola</td>
                            <td>9-C</td>
                            <td>23GCS156</td>
                            <td>04-05-2024</td>
                            <td>Pending</td>
                            <td>5</td>
                            <td><button>Mark as receivered</button></td>
                        </tr>
                    </tbody>    
                </table>
            </div>

            <div className="homeCont3">
                <div className="homeTableHeader">
                    <p className="medium subTitle smallLineHeight">Your Plan</p>
                    <p><span className="strong green smallLineHeight">112</span> Students have taken books...</p>
                </div>
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
                            <td>Ma'din Public School</td>
                            <td>24-25-2024</td>
                            <td>25-05-2026</td>
                            <td>Active</td>
                            <td>#00235</td>
                            <td><button>Cancel</button></td>
                        </tr>
                    </tbody>    
                </table>
            </div>

        </div> 
    )
}

export default Home;