import {useState,useEffect} from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

function Find({schoolId,setAssignWithId,assignSubmit}) {

    const [filter,setFilter] = useState("student");
    const [search,setSearch] = useState("");
    const [students,setStudents] = useState([]);
    const [books,setBooks] = useState([]);
    const [find,setFind] = useState({
        route : "search",
        index : ""
    });
    
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

    return (
        find.route === "search" ? 
            <Search 
                schoolId={schoolId} 
                students={students}
                books={books}
                filter={filter}
                filterChange={filterChange}
                search={search}
                keyPress={keyPress}
                onSearchInputChange={onSearchInputChange}
                setFind={setFind}
            />
        :   
            <Profile 
                setFind={setFind} 
                student={students[find.index]} 
                setAssignWithId={setAssignWithId}
                assignSubmit={assignSubmit}
            />    
    );
}

export default Find;