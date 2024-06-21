
import profileMale from "../resources/profile-male.png";
import profileBook from "../resources/book.png";

function ProfileCard({filter,id,name,stClas,admissionNumber,takenBooks}) {

    return(
        <div className="searchItem" id={id}>
            <img src={filter === "student" ? profileMale : profileBook} alt="profile" />
            <div className="searchItemSection ">
                <p className="white">{name}</p>
                <p className="white">{`Admission : ${admissionNumber} | ${stClas}`}</p>
                <p className="white">{`Taken ${takenBooks} book${takenBooks > 1 ?"s":""} before`}</p>
                <div className="btn searchItemBtn">
                    <p className="medium">View Details</p>
                </div>
            </div>
        </div>

                

    );
}

export default ProfileCard;