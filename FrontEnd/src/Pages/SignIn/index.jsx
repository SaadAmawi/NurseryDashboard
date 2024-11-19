import React, { useEffect, useState,Nav } from "react";
import Image from "../../assets/images/image.png";
import Logo from "../../assets/images/knowledgeroomlogo.png";
import GoogleSvg from "../../assets/images/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import './signin.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        // If the response is successful
        const data = await response.json();
  
        if (response.ok) {
          alert("Login successful! Token: " + data.token);
          setToken(data.token);
          navigate('/'); // Navigate to the home page or dashboard
        } else {
          // If the response status is not OK (e.g., 401 Unauthorized)
          alert(data.response || "Error Logging in. Please check your email and password.");
        }
      } catch (error) {
        // Catching network errors or other issues
        alert("An error occurred while logging in: " + error.message);
      }
    };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" width='450px' />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
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
                <button type="submit" >Log In</button>
                </a>
                <button type="button" style={{backgroundColor:"lightgrey"}}>
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;