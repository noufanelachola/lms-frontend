import {useState,useEffect} from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

function Find({schoolId,setAssignWithId,assignSubmit,updateStudent}) {

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
    
    const deleteStudent = (studentId) => {
        fetch(`http://localhost:3000/student/delete?schoolId=${schoolId}&studentId=${studentId}`,{
            method: 'DELETE',
        }).then(response => response.json())
        .then(res => {
            if(res.status){
                alert(res.message);
                updateStudent();
                getStudents();
                setFind({
                    route : "search",
                    index : ""
                });
            } else {
                alert(res.message);
            }
        })
    }

    const filterChange = (sort) => {
        setFilter(sort);
        console.log(filter);
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
            filter === "student" ?
                <Profile 
                    item={"student"}
                    setFind={setFind} 
                    profile={students[find.index]} 
                    setAssignWithId={setAssignWithId}
                    assignSubmit={assignSubmit}
                    deleteStudent={deleteStudent}
                />  
                :
                <Profile 
                    item={"book"}
                    setFind={setFind} 
                    profile={books[find.index]} 
                    setAssignWithId={setAssignWithId}
                    assignSubmit={assignSubmit}
                    deleteStudent={deleteStudent}
                />              
    );
}

export default Find;