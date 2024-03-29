import logo2 from "./resources/logo2.png";
import iconHome from "./resources/icon-home.png";
import iconSearch from "./resources/icon-search.png";
// import iconHome from "./resources/icon-home.png";

import "./DashBoard.css";

function DashBoard () {
    return(
        <div className='window dashBoard'>
            <img src={logo2} alt='Noof logo' className='logo dashIcon'/>
            <div className='dashCont1'>
                <button className="iconBtn btn">
                    <img src={iconHome} className="icon" />
                    <p className="iconText">Home</p>
                </button>
                <button className="iconBtn btn">
                    <img src={iconSearch} className="icon" />
                    <p className="iconText">Search</p>
                </button>
            </div>
            <div className='dashCont2'>
                <div>
                    <a className="btn" href="#">Contact Support</a>
                    <a className="btn" href="#">Become an Affiliate</a>
                </div>
                <button className="dashBtn btn">
                    <p className="iconText">Assign a New Book</p>
                </button>
                <button className="dashBtn btn">
                    <p className="iconText">Sign Out</p>
                </button>
            </div>
        </div>
    );
}

export default DashBoard;