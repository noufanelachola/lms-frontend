import profileBook from "../resources/book.png";

function BookCard({index,id,setFind,book}) {

    const getBook = () => {
        setFind({
            route : "book",
            index : index
        });
        console.log(book)
    }

    return(
        <div className="searchItem" id={id}>
            <img src={profileBook} alt="profile" />
            <div className="searchItemSection ">
                <p className="white">{book.bookname}</p>
                <p className="white">{book.bookauthor}</p>
                <p className="white">{`${book.taken} Student${book.taken > 1 ? "s have" : " has"} taken before`}</p>
                <div className="btn searchItemBtn" onClick={()=>getBook()}>
                    <p className="medium" >View Details</p>
                </div>
                <div className="idSection">{book.bookid}</div>
            </div>
        </div>

                

    );
}

export default BookCard;