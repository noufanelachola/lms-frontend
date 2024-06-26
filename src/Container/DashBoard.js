import logo2 from "./resources/logo2.png";
import iconHome from "./resources/icon-home.png";
import iconSearch from "./resources/icon-search.png";
import iconAddStudent from "./resources/icon-addBook.png";
import iconAddBook from "./resources/icon-book.png";

import "./DashBoard.css";

function DashBoard ({route,routeChange,signOut}) {

    return(
        <div className='dashBoard'>
            <img src={logo2} alt='Noof logo' className='logo dashIcon'/>
            <div className='dashCont1'>
                <button className={`iconBtn btn ${route ==="home"?"hovered":""}`} onClick={() => routeChange("home")} >
                    <img src={iconHome} className="icon" />
                    <p className="iconText">Home</p>
                </button>
                <button className={`iconBtn btn ${route ==="search"?"hovered":""}`} onClick={() => routeChange("search")} >
                    <img src={iconSearch} className="icon" />
                    <p className="iconText">Search</p>
                </button>
                <button className={`iconBtn btn ${route ==="addStudent"?"hovered":""}`} onClick={() => routeChange("addStudent")} >
                    <img src={iconAddStudent} className="icon" />
                    <p className="iconText">Add Student</p>
                </button>
                <button className={`iconBtn btn ${route ==="addBook"?"hovered":""}`} onClick={() => routeChange("addBook")} >
                    <img src={iconAddBook} className="icon" />
                    <p className="iconText">Add Book</p>
                </button>
            </div>
            <div className='dashCont2'>
                <div>
                    <a className="btn" href="#">Contact Support</a>
                    <a className="btn" href="#">Become an Affiliate</a>
                </div>
                <button className="dashBtn btn" onClick={() => routeChange("assignBook")}>
                    <p className="iconText">Assign a New Book</p>
                </button>
                <button className="dashBtn btn" onClick={()=>signOut()} >
                    <p className="iconText white">Sign Out</p>
                </button>
            </div>
        </div>
    );
}

export default DashBoard;