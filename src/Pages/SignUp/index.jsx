import React, { useEffect, useState } from "react";
import Image from "../../assets/images/image.png";
import Logo from "../../assets/images/knowledgeroomlogo.png";
import GoogleSvg from "../../assets/images/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import './signup.scss'


const SignUp = () => {
  const [ showPassword, setShowPassword ] = useState(false);


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
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
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
                <button type="button" >Sign Up</button>
                </a>
                <button type="button" style={{backgroundColor:"lightgrey"}}>
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Already have an account? <a href="sign#">Sign In</a>
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