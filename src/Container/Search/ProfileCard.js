import profileMale from "../resources/profile-male.png";

function ProfileCard({index,id,setFind,student}) {

    const getProfile = () => {
        setFind({
            route : "profile",
            index : index
        });
    }

    return(
        <div className="searchItem" id={id}>
            <img src={profileMale} alt="profile" />
            <div className="searchItemSection ">
                <p className="white">{student.studentname}</p>
                <p className="white">{`Admission : ${student.admissionNumber} | ${student.studentclass}`}</p>
                <p className="white">{`Taken ${student.taken} book${student.taken > 1 ?"s":""} before`}</p>
                <div className="btn searchItemBtn" onClick={()=>getProfile()}>
                    <p className="medium">View Details</p>
                </div>
            </div>
            <div className="idSection">{student.studentid}</div>
        </div>

                

    );
}

export default ProfileCard;