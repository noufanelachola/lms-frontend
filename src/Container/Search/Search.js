import {useState} from "react";

import iconSearch from "../resources/searchLogo.png";
import profileMale from "../resources/profile-male.png";
import profileBook from "../resources/book.png";

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
                            <p className="medium">Student</p>
                        </div>
                        <div className={`searchFilterBtn btn ${filter === "book" ? "active" : ""}`} onClick={() => filterChange("book")} >
                            <p className="medium">Book</p>
                        </div>
                        <div className={`searchFilterSlider ${filter === "book" ? "active" : ""}`}></div>
                    </div>
                </div>

                <div className="searchInput">
                    <img className="searchIcon btn" src={iconSearch} />
                    <input className="searchInputBox" placeholder={`Search for ${filter}`} value={search} onChange={(event) => onSearchInputChange(event)} />
                </div>
                
                {search && <p className="medText">{`5 Results with "${search}"`}</p>}

                <div className="searchContainer">
                    <div className="searchItem">
                        <img src={filter === "student" ? profileMale : profileBook} alt="profile" />
                        <div className="searchItemSection ">
                            <p className="white">Noufan Elachola</p>
                            <p className="white">{`Admission : 23GCS16 | 10-C`}</p>
                            <p className="white">{`Taken 25 books before`}</p>
                            <div className="btn searchItemBtn">
                                <p className="medium">View Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Search;