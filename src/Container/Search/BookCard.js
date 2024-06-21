import profileBook from "../resources/book.png";

function BookCard({id,bookName,bookAuthor,takenStudents}) {

    return(
        <div className="searchItem" id={id}>
            <img src={profileBook} alt="profile" />
            <div className="searchItemSection ">
                <p className="white">{bookName}</p>
                <p className="white">{bookAuthor}</p>
                <p className="white">{`${takenStudents} Student${takenStudents > 1 ? "s have" : " has"} taken before`}</p>
                <div className="btn searchItemBtn">
                    <p className="medium">View Details</p>
                </div>
            </div>
        </div>

                

    );
}

export default BookCard;