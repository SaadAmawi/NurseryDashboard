import React, { useEffect, useState } from "react";
import Image from "../../assets/images/image.png";
import Logo from "../../assets/images/knowledgeroomlogo.png";
import GoogleSvg from "../../assets/images/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import './signup.scss'
import { useNavigate } from 'react-router-dom';
  

const SignUp = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [fullname, setfullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullname, email, password, role: 'teacher' }),
    });
    const data = await response.json();
    if(response.ok){
      navigate('/login');
    }else{
      alert(data.message);}
    }
  return (
    <div className="login-main">
      <div className="login-left-su">
      <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" width='450px' />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSignUp}>
              <input type="text" placeholder="Full Name" onChange={(e) => setfullname(e.target.value)} />
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <a href="/">
                <button type="submit" >Sign Up</button>
                </a>
                <button type="button" style={{backgroundColor:"lightgrey"}}>
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <a href="login">Sign In</a>
          </p>
        </div>
      </div>
      <div className="login-right-su">
        <img src={Image} alt="" />
        
      </div>
    </div>
  );
};

export default SignUp;