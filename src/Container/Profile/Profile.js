
import "./Profile.css";
import profileMale from "../resources/profile-male.png";


function Profile() {
    return(
        <div className="profile window">

            <div className="profileHead">
                <div className="navigation">
                    <div className="profileBtn btn">{`<`}</div>
                    <div className="profileBtn btn">Edit Information</div>
                </div>
                <div className="profileSection">
                    <div className="profileImg">
                        <img src={profileMale} />
                    </div>
                    <div className="profileDetails">
                        <div className="profileDetailsMain">
                            <p className="name white subTitle">Aman Elachola</p>
                            <p className="author white">"A damn good reader"</p>
                        </div>
                        <div className="profileDetailsSub">
                            <div className="id profileBtn">#89</div>
                            <div className="class profileBtn">Class 10-A</div>
                            <div className="admission profileBtn">789865</div>
                        </div>
                    </div>
                </div>
                <div className="absoluteDiv"></div>
            </div>

            <div className="readStats">
                <div>
                    <p className="medText white">Books Read</p>
                    <p className="medText white">250</p>
                </div>
                <div>
                    <p className="medText white">Books Not Returned</p>
                    <p className="medText white">5</p>
                </div>
            </div>

            <div className="historySection">
                <div className="tableHead">
                    <p className="subTitle medium smallLineHeight" >History</p>
                    <p><span className="red medium">3</span> books to return</p>
                </div>
                <div className="profileTableCont">
                    <table className="profileTable">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Book Name</th>
                                <th>Date when acquired</th>
                                <th>Date to be submitted</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Aadujeevitham</td>
                                <td>12-04-2020</td>
                                <td>12-05-2020</td>
                                <td>Pending</td>
                                <td><button>Mark as submitted</button></td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Aadujeevitham</td>
                                <td>12-04-2020</td>
                                <td>12-05-2020</td>
                                <td>Pending</td>
                                <td><button>Mark as submitted</button></td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Aadujeevitham</td>
                                <td>12-04-2020</td>
                                <td>12-05-2020</td>
                                <td>Pending</td>
                                <td><button>Mark as submitted</button></td>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>Aadujeevitham</td>
                                <td>12-04-2020</td>
                                <td>12-05-2020</td>
                                <td>Pending</td>
                                <td><button>Mark as submitted</button></td>
                            </tr>

                            <tr>
                                <td>01</td>
                                <td>Aadujeevitham</td>
                                <td>12-04-2020</td>
                                <td>12-05-2020</td>
                                <td>Pending</td>
                                <td><button>Mark as submitted</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="profileBtnSection">
                <div className="btn">Assign a Book</div>
                <div className="btn white">Delete Profile</div>
            </div>

        </div>
    );
}

export default Profile;