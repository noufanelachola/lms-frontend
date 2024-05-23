import {useState} from "react";

import "./Search.css";

function Search(){

    const [filter,setFilter] = useState("student");

    const filterChange = (sort) => {
        setFilter(sort);
    }

    return(
        <div className="search window">
            <section className="searchCont1">
                <p className="medText">Search for</p>
                <div className="searchFilter">
                    <div className={`searchFilterBtn btn ${filter === "student" ? "active" : ""}`} onClick={() => filterChange("student")} >
                        <p>Student</p>
                    </div>
                    <div className={`searchFilterBtn btn ${filter === "book" ? "active" : ""}`} onClick={() => filterChange("book")} >
                        <p>Book</p>
                    </div>
                    <div className={`searchFilterSlider ${filter === "book" ? "active" : ""}`}></div>
                </div>
            </section> 
        </div>
    );
}

export default Search;