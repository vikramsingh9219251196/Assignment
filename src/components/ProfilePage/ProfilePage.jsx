import React, { useState } from 'react';
import "./profilepage.css"
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  const [location, setLocation] = useState('');
  const [avatarImage, setAvatarImage] = useState(null);

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    setAvatarImage(file);
  };

  const isNextButtonDisabled = !avatarImage || !location;

  return (
    <div className="create-profile-page">
      <div className="container">
        <div className="header">
          <h1 className="dribbble-text">Dribbble</h1>
        </div>
        <div className="profile-content">
          <h1>Welcome! Let's create your profile</h1>
          <p>Let others get to know you better! You can do these later</p>
          <h2>Add an Avatar</h2>
          <div className="avatar-section">
            <div className="avatar-circle">
              {avatarImage ? (
                <img
                  src={URL.createObjectURL(avatarImage)}
                  alt="Avatar"
                  className="avatar-image"
                />
              ) : (
                <i className="fas fa-camera"></i>
              )}
            </div>

            <div className='flex-rows'>
              <label htmlFor="avatar-upload" className="avatar-btn">
                Choose image
              </label>
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleAvatarUpload}
                style={{ display: 'none' }}
              />
              <p className="or-default"> Or choose one of our defaults</p>
            </div>
          </div>
          <div className="location-section">
            <label htmlFor="location">Add your location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Link to="/hero"><button className={`next-btn ${isNextButtonDisabled ? 'disabled' : ''}`} disabled={isNextButtonDisabled}>Next</button></Link>
          {!isNextButtonDisabled && <p className="or-return">or Press Return</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
