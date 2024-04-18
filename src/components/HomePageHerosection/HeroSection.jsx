import React from 'react';
import './HeroSection.css';
import {FaCheck } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="message">
          <h1 className="heading">Please verify your email...</h1>
          <div className="message-actions">
            <div className="like-icon">
            <i class="fa-regular fa-envelope"></i>
            <div className="hero-tick-icon">
              <FaCheck />
            </div>
            </div>
          </div>
        </div>
        <div className='content'>
        <p className="email-message">
          Please verify your email address. We've sent a confirmation email to:{' '}
          <span className="bold-text" style={{color:"black"}}>account@refero.design</span>
        </p>
        <p className="email-confirmation">
          Click the confirmation link in the email to begin using Dribble.
        </p>
        <p className="email-resend">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{' '}
          <a href="#" className="resend-link">
              resend the confirmation email.
          </a>
        </p>
        <p className="email-change">
        Wrong email address? 
          <a href="#" className="change-link">
            Change it.
          </a>
        </p>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;