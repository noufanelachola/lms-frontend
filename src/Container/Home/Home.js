import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home window">
            <div className="homeCont1">
                <div className="counts">
                    <p className="text">Total books</p>
                    <p className="number">1500</p>
                </div>
                <div className="counts">
                    <p className="text">In Stock</p>
                    <p className="number">1500</p>
                </div>
                <div className="counts">
                    <p className="text">Total Students</p>
                    <p className="number">1500</p>
                </div>
                <div className="counts">
                    <p className="text">With Books</p>
                    <p className="number">1500</p>
                </div>
            </div>
        </div>
    )
}

export default Home;