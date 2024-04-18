import React, { useState } from "react";
import "./hero.css";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [additionalText, setAdditionalText] = useState("");
  const [showAdditionalMessage, setShowAdditionalMessage] = useState(true); // Initialize to true

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    switch (option) {
      case "designer":
        setAdditionalText(
          "Great choice! You can share your design work with the world."
        );
        break;
      case "developer":
        setAdditionalText(
          "Excellent! Let's find the perfect designer for your project."
        );
        break;
      case "other":
        setAdditionalText(
          "Fantastic! Get inspired by exploring amazing designs."
        );
        break;
      default:
        setAdditionalText("");
    }
  };

  const handleFinishButtonClick = () => {
    setShowAdditionalMessage(!showAdditionalMessage); 
  };

  return (
    <div className="create-profile-page-container">
      <div className="profile-container">
        <div className="hero-header">
          <h1 className="dribbble-text">Dribbble</h1>
          <i className="fas fa-arrow-right header-arrow"></i>
        </div>
        <div className="profile-content-container">
          <h1>What brings you to Dribbble?</h1>
          <p style={{ color: "gray" }}>
            Select the options that best describe you. Don't worry, you can
            explore others later.
          </p>
          <div className="option-card-container">
            <div
              className={`option-card ${
                selectedOptions.includes("designer") ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("designer")}
            >
              <img
                src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Designer"
                className="option-card-icon"
                style={{
                  transform: selectedOptions.includes("designer")
                    ? "translateY(-60px)"
                    : "translateY(0)",
                }}
              />
              <p
                className="option-card-text"
                style={{
                  transform: selectedOptions.includes("designer")
                    ? "translateY(-60px)"
                    : "translateY(0)",
                }}
              >
                I'm a designer looking to share my work
              </p>
              {selectedOptions.includes("designer") ? (
                <FaCheck className="tick-icon" />
              ) : (
                <svg
                  className="hollow-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="#CCCCCC"
                    strokeWidth="2"
                  ></circle>
                </svg>
              )}
              {selectedOptions.includes("designer") && (
                <p className="additional-text">{additionalText}</p>
              )}
            </div>
            <div
              className={`option-card ${
                selectedOptions.includes("developer") ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("developer")}
            >
              <img
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Developer"
                className="option-card-icon"
                style={{
                  transform: selectedOptions.includes("developer")
                    ? "translateY(-60px)"
                    : "translateY(0)",
                }}
              />
              <p
                className="option-card-text"
                style={{
                  transform: selectedOptions.includes("developer")
                    ? "translateY(-60px)"
                    : "translateY(0)",
                    width:"70%"
                }}
              >
                I'm looking to hire a designer
              </p>
              {selectedOptions.includes("developer") ? (
                <FaCheck className="tick-icon" />
              ) : (
                <svg
                  className="hollow-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="#CCCCCC"
                    strokeWidth="2"
                  ></circle>
                </svg>
              )}
              {selectedOptions.includes("developer") && (
                <p className="additional-text">{additionalText}</p>
              )}
            </div>
            <div
              className={`option-card ${
                selectedOptions.includes("other") ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect("other")}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1664461662767-41fe84f7748d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Other"
                className="option-card-icon"
                style={{
                  transform: selectedOptions.includes("other")
                    ? "translateY(-60px)"
                    : "translateY(0)",
                }}
              />
              <p
                className="option-card-text"
                style={{
                  transform: selectedOptions.includes("other")
                    ? "translateY(-60px)"
                    : "translateY(0)",
                }}
              >
                I'm looking for design inspiration
              </p>
              {selectedOptions.includes("other") ? (
                <FaCheck className="tick-icon" />
              ) : (
                <svg
                  className="hollow-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="#CCCCCC"
                    strokeWidth="2"
                  ></circle>
                </svg>
              )}
              {selectedOptions.includes("other") && (
                <p className="additional-text">{additionalText}</p>
              )}
            </div>
          </div>
          <div className="hero-footer">
            {selectedOptions.length > 0 && (
              <div className="selected-options">
                <p>Anything else? You can select multiple</p>
              </div>
            )}
            <Link to="/homepage">
            <button
              className={`finish-btn ${
                selectedOptions.length > 0 ? "" : "disabled"
              }`}
              disabled={selectedOptions.length === 0}
              onClick={handleFinishButtonClick}
            >
              <span>Finish</span>
            </button>
            </Link>
            {selectedOptions.length > 0 && (
              <div className="selected-options">
                {showAdditionalMessage && (
                  <p style={{ color: "gray" }}>Or Press RETURN</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
