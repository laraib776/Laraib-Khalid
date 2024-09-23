import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

function AboutMeSection() {
  return (
    <div className="about-me-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-me-content">
        <div className="personal-info">
          <div className="info-item">
            <div className="label">Full Name:</div>
            <div className="value">Laraib Khalid</div>
          </div>
          <div className="info-item">
            <div className="label">Phone:</div>
            <div className="value">03335550807</div>
          </div>
          <div className="info-item">
            <div className="label">Email:</div>
            <div className="value">laraibkhalid776@gmail.com</div>
          </div>
          <div className="info-item">
            <div className="label">Website:</div>
            <div className="value">www.portfolio.com</div>
          </div>
          <div className="info-item">
            <div className="label">Address:</div>
            <div className="value">Bahria Town Rawalpindi, Pakistan</div>
          </div>
        </div>

        <div className="about-me-text">
          <div className="greeting">Hello There!</div>
          <p className="description">
            There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in bookmarksgrove there live the blind texts far from the countries.
          </p>
          <p className="description">
            Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita.
            Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      
      <div className="social-icons">
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faGooglePlusG} size="2x" /></a>
      </div>
    </div>
  );
}

export default AboutMeSection;
