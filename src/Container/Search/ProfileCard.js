import profileMale from "../resources/profile-male.png";

function ProfileCard({id,stId,name,stClas,admissionNumber,takenBooks}) {

    return(
        <div className="searchItem" id={id}>
            <img src={profileMale} alt="profile" />
            <div className="searchItemSection ">
                <p className="white">{name}</p>
                <p className="white">{`Admission : ${admissionNumber} | ${stClas}`}</p>
                <p className="white">{`Taken ${takenBooks} book${takenBooks > 1 ?"s":""} before`}</p>
                <div className="btn searchItemBtn">
                    <p className="medium">View Details</p>
                </div>
            </div>
            <div className="idSection">{stId}</div>
        </div>

                

    );
}

export default ProfileCard;