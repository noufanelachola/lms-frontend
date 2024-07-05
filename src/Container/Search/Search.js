import {useState,useEffect} from "react";

import ProfileCard from "./ProfileCard";
import BookCard from "./BookCard";

import iconSearch from "../resources/searchLogo.png";


import "./Search.css";

function Search({students,books,filter,filterChange,search,keyPress,onSearchInputChange,setFind}){
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
                    <input className="searchInputBox" placeholder={`Search for ${filter}`} value={search} onChange={(event) => onSearchInputChange(event)} onKeyDown={(event) => keyPress(event)} />
                </div>
                
                {
                    filter === "student" ?
                    <p className="medText">{`${students.length} Result${students.length>1?"s":""} ${search ? `with "${search}"` : ""}`}</p> :
                    <p className="medText">{`${books.length} Result${books.length>1?"s":""} ${search ? `with "${search}"` : ""}`}</p> 

                }


                {/* {search && <p className="medText">{`5 Results with "${search}"`}</p>} */}
            </div>
            
            <div className="searchContainer">
                {filter === "student" && students.map((student,index) => {
                    return(
                        <ProfileCard 
                            index={index}
                            key={student.studentid} 
                            student={student}
                            setFind={setFind}
                            />
                        )
                    })}    

                {filter === "book" && books.map((book,index) => {
                    return(
                        <BookCard 
                            index={index}
                            setFind={setFind}
                            key={book.bookid} 
                            id={book.bookid} 
                            book={book}
                        />
                    )
                })}    



            </div>

        </div>
    );
}

export default Search;