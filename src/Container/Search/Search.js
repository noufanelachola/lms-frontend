import {useState,useEffect} from "react";

import ProfileCard from "./ProfileCard";
import BookCard from "./BookCard";

import iconSearch from "../resources/searchLogo.png";


import "./Search.css";

function Search({schoolId}){

    const [filter,setFilter] = useState("student");
    const [search,setSearch] = useState("");
    const [students,setStudents] = useState([]);
    const [books,setBooks] = useState([]);
    
    useEffect(() => {
        getStudents();
        getBooks();
    },[]);

    const filterChange = (sort) => {
        setFilter(sort);
    }

    const onSearchInputChange = (event) => {
        setSearch(event.target.value);
    }

    const keyPress = (event) => {
        if(event.key === "Enter" && search){
            filter === "student" ? getStudents() : getBooks();
        }
    }

    const getStudents = () => {
        fetch(`http://localhost:3000/student/get?schoolId=${schoolId}&search=${search}`)
        .then(response => response.json())
        .then(students => {
            setStudents(students);
        })
        .catch(error => console.log(error , "Error fetching students"));
    }

    const getBooks = () => {
        fetch(`http://localhost:3000/book/get?schoolId=${schoolId}&search=${search}`)
        .then(response => response.json())
        .then(books => {
            setBooks(books);
        })
        .catch(error => console.log("Error fetching books"));
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
                {filter === "student" && students.map(student => {
                    return(
                        <ProfileCard 
                            filter={filter} 
                            key={student.studentid} 
                            id={student.studentid} 
                            name={student.studentname}
                            stClas={student.studentclass}
                            admissionNumber={student.admissionnumber}
                            takenBooks={student.taken}
                        />
                    )
                })}    

                {filter === "book" && books.map(book => {
                    return(
                        <BookCard 
                            key={book.bookid} 
                            id={book.bookid} 
                            bookName={book.bookname}
                            nookAuthor={book.bookauthor}
                            takenStudents={book.taken}
                        />
                    )
                })}    



            </div>

        </div>
    );
}

export default Search;