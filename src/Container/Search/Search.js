import {useState} from "react";

import iconSearch from "../resources/searchLogo.png";

import "./Search.css";

function Search(){

    const [filter,setFilter] = useState("student");
    const [search,setSearch] = useState("");

    const filterChange = (sort) => {
        setFilter(sort);
    }

    const onSearchInputChange = (event) => {
        setSearch(event.target.value);
    }

    return(
        <div className="search window">
            <div className="searchCont1">
                <div>
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
                </div>

                <div className="searchInput">
                    <img className="searchIcon btn" src={iconSearch} />
                    <input className="searchInputBox" placeholder={`Search for ${filter}`} value={search} onChange={(event) => onSearchInputChange(event)} />
                </div>
                
                {search && <p className="subTitle">{`5 Results with "${search}"`}</p>}
            
            </div>
        </div>
    );
}

export default Search;