import React from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import "../styles/Registration.css"; // Styles CSS dédiés

function RegistrationPage() {
  const navigate = useNavigate(); // Initialiser useNavigate

  return (
    <div className="containerR">
      <div className="left-panel">
        <h2>Your partner in productivity and task management.</h2>
      </div>
      <div className="right-panel">
        <div className="logo">
          <h1>DAISY DAYS</h1>
        </div>
        <form className="form">
          <h2>Registration</h2>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm your password" required />
          <div className="terms">
            <input type="checkbox" required />
            <span>
              Creating an account means you're okay with our{" "}
              <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>,
              and our default <a href="#">Notification Settings</a>.
            </span>
          </div>
          <button type="submit" className="sign-up">
            Sign up
          </button>
          <p>or sign up with</p>
          <div className="social-icons">
            <button className="social-btn">F</button>
            <button className="social-btn">G</button>
            <button className="social-btn">A</button>
            <button className="social-btn">X</button>
            <button className="social-btn">L</button>
          </div>
          <p>
            Already have an account?{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate("/LoginPage")}
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
