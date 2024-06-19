import {React,useState} from "react";
import "./AddBook.css";

function AddBook({schoolId}) {

    const [book,setBook] = useState({
        bookName : "",
        bookAuthor : "",
        totalCopies : ""
    });

    const bookChange = (event) => {
        const {id,value} = event.target;
        setBook(prevState => ({
            ...prevState,
            [id] : value
        }));
    }

    const bookClear = () => {
        setBook({
            bookName : "",
            bookAuthor : "",
            totalCopies : ""
        });
    }

    const bookSubmit = () => {
        if(book.bookName && book.bookAuthor && book.totalCopies) {
            fetch("http://localhost:3000/book/add",{
                method : "post",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({
                    schoolId : schoolId,
                    bookName : book.bookName,
                    bookAuthor : book.bookAuthor,
                    totalCopies : book.totalCopies
                })
            })
            .then(response => response.json())
            .then(res => {
                res.bookid ? alert("Book added successfully") : alert("Error while adding book");
                bookClear();
            }).catch(error => {
                alert("Error while adding student");
                console.log(error);
            });    
        } else {
            alert("Error while adding student");
        }
    }

    return(
        <div className="window addBook">
            <p className="subTitle">Add Books</p>
            <p>{`Total Books - 1500`}</p>
            <div className="inputContainer">
                <input id="bookName" placeholder="Enter book's name here" onChange={(event)=>bookChange(event)} value={book.bookName}/>
                <input id="bookAuthor" placeholder="Enter author's name here" onChange={(event)=>bookChange(event)} value={book.bookAuthor}/>
                <input id="totalCopies" placeholder="Enter total number of copies" onChange={(event)=>bookChange(event)} value={book.totalCopies}/>
                <div className="inputBtnContainer">
                    <div className="addBookBtn btn" onClick={() => bookClear()} >
                        <p>Cancel</p>
                    </div>
                    <div className="addBookBtn btn" onClick={() => bookSubmit()} >
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBook;