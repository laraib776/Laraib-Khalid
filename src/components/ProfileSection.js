import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import me_profile_pic from './me_profile_pic.jpg'; // Adjust the path if needed

function ProfileSection() {
  return (
    <div className="profile-section">
      <img src={me_profile_pic} alt="profile_pic" className="profile-pic" />
      
      <div className="name-section">
        <div className="name">- Laraib Khalid -</div>
      </div>
      
      <div className="title">Web Developer / Python Developer / AI / ML</div>
      
      <div className="social-icons">
        <a href="https://github.com/laraib776" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/laraib-khalid-60b926232" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://wa.me/03335550807" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default ProfileSection;
