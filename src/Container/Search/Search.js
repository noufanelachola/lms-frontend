import {useState,useEffect} from "react";

import ProfileCard from "./ProfileCard";

import iconSearch from "../resources/searchLogo.png";


import "./Search.css";

function Search({schoolId}){

    const [filter,setFilter] = useState("student");
    const [search,setSearch] = useState("");
    const [students,setStudents] = useState([]);
    
    useEffect(() => {
        getStudents();
    },[]);

    const filterChange = (sort) => {
        setFilter(sort);
    }

    const onSearchInputChange = (event) => {
        setSearch(event.target.value);
    }

    const getStudents = () => {
        fetch(`http://localhost:3000/student/get?schoolId=${schoolId}`)
        .then(response => response.json())
        .then(students => {
            setStudents(students);
        })
        .catch(error => console.log(error , "Error fetching students"));
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
            </div>
            
            <div className="searchContainer">
                {students.map(student => {
                    return(
                        <ProfileCard 
                            filter={filter} 
                            key={student.studentid} 
                            id={student.studentid} 
                            name={student.studentname}
                            stClas={student.studentclass}
                            admissionNumber={student.admissionnumber}
                        />
                    )
                })}    
            </div>

        </div>
    );
}

export default Search;