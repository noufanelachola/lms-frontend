import "./Login.css"
import logo1 from "./logo1.png"

function Login() {
    return (
      <div className="login window">
        <img src={logo1} alt="Noof Logo" className="loginLogo logo"/>
        <div>
          <p className="title white">Welcome <span className="strongText">Champ!</span></p>
          <input className="loginUserName loginInput" placeholder="Enter username here.." />
          <input className="loginPassword loginInput" placeholder="Enter password here.." />
          <button className="loginBtn btn">Get me in!</button>
          <p className="white forgotPass">Goshh..! Forgot My Password</p>
        </div>
      </div>
    );
  }
  
  export default Login ;