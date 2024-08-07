import { useState } from "react";
import "./Login.css";
import logo1 from "../resources/logo1.png";

function Login({url,routeChange,updateAccount}) {
  
  const [user,setUser] = useState({
    userName:"",
    password:""
  });

  const userNameChange = (event) => {
    setUser(prevState => ({
      ...prevState,
      userName: event.target.value
    }));
  }
  
  const passwordChange = (event) => {
    setUser(prevState => ({
      ...prevState,
      password: event.target.value
    }));
  }

  const OnLoginSubmit = () => {

    fetch(`${url}/school/signin`,{
      method : 'post',
            headers : {"Content-Type" : 'application/json'},
            body : JSON.stringify({
                username : user.userName,
                password : user.password
              })
    }).then(response => response.json())
    .then(res => {
      if(res.is_active){
        updateAccount(res);
        setUser(prevState => ({
          ...prevState,
          password: ""
        }));
        console.log(res);
        routeChange("home");
      }
    }).catch(error => console.error("Error: ",error));


  }
  
    return (
      <div className="login window">
        <img src={logo1} alt="Noof Logo" className="loginLogo logo"/>
        <div>
          <p className="title white">Welcome <span className="strongText">Champ!</span></p>
          <input className="loginUserName loginInput" placeholder="Enter username here.." onChange={(event)=>userNameChange(event)} value={user.userName} />
          <input className="loginPassword loginInput" placeholder="Enter password here.." onChange={(event)=>passwordChange(event)} value={user.password} type="password" />
          <button className="loginBtn btn" onClick={OnLoginSubmit}>Get me in!</button>
          <a href="whatsapp://send?phone=919995914362&text=Hey noof, I forgot my pass" target="blank" className="white forgotPass">Goshh..! Forgot My Password</a>
        </div>
      </div>
    );
  }
  
  export default Login ;