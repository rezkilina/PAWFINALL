import React from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

function LoginPage() {
    const navigate = useNavigate(); // Initialiser useNavigate

  return (
    <div className="containerL">
      <div className="left-panel">
        <h2>Your partner in productivity and task management.</h2>
      </div>
      <div className="right-panel">
        <div className="logo">
          <h1>DAISY DAYS</h1>
        </div>
        <form className="form">
          <h2>Login</h2>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="sign-in">
            Sign in
          </button>
          <div className="links">
            <a href="#">Forgot your password?</a>
          </div>
          <p>or sign in with</p>
          <div className="social-icons">
            <button className="social-btn">F</button>
            <button className="social-btn">G</button>
            <button className="social-btn">A</button>
            <button className="social-btn">X</button>
            <button className="social-btn">L</button>
          </div>
          <p>
            Don’t have an account? 
          
             <button
              type="button"
              className="link-button"
              onClick={() => navigate("/Dashboard")}
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;