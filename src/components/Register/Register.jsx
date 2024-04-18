import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const isFormValid = () => {
    return name.trim() !== '' && username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && isTermsChecked;
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="left-side">
          <img src="../../assets/register.png" alt="" />
        </div>
        <div className="right-side">
          <h2>Sign to Dribble</h2>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="name-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="6+ characters"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="checkbox-field">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                checked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
              />
              <label htmlFor="terms">
                Creating an account means you're okay with{' '}
                <a href="#">Term of Services</a>,<a href="#"> Privacy Policy</a>, and
                our default <a href="#">Notification Settings</a>.
              </label>
            </div>
            <Link to="/profilepage">
            <button
              type="submit"
              className={`submit-button ${!isFormValid() ? 'disabled' : ''}`}
              disabled={!isFormValid()}
            >
              Create Account
            </button>
            </Link>
          </form>
          <div className="bottom-text">
            <p>
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="#"> Privacy Policy</a>, <a href="#">Term of Services</a>{' '}
              apply.
            </p>
          </div>
        </div>
        <div className="top-bar">
          <p>
            Already have a member? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;