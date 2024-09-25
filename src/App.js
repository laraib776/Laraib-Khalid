import React from 'react';
import './App.css';


// import images
import me_profile_pic from './me_profile_pic.jpg';
import proj1 from './images/ed.jpg'
import proj2 from './images/mainimage.page.jpg'
import proj3 from './images/1.png'
import proj4 from './images/tranlator_app.png'
import proj5 from './images/car-rental-booking-app-vector.jpg'
import proj6 from './images/proj6.jpg'
import proj7 from './images/proj7.png'
import proj8 from './images/proj8.webp'
import contact from './images/contact.png'

//import fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp, faTwitter, faFacebook, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

function App() {

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'ReactJS', level: 85 },
    { name: 'React Native', level: 80 },
    { name: 'C++', level: 70 },
    { name: 'HTML5/CSS3', level: 85 },
    { name: 'MySQL', level: 78 },
    { name: 'AI/ML', level: 85 },
  ];

  const projects = [
    {
      title: "ValidatorHub",
      imageUrl: proj1 , // Use the imported image
      projectUrl: "https://github.com/laraib776/ValidatorHub",
    },
    {
      title: "Melodia",
      imageUrl: proj2 , // Use the imported image
      projectUrl: "https://github.com/laraib776/Melodia",
    },
    {
      title: "IU-Music-Hub-E-commerce-Store",
      imageUrl: proj3 , // Use the imported image
      projectUrl: "https://github.com/laraib776/IU-Music-Hub-E-commerce-Store",
    },
    {
      title: "LinguaMate-UniversalVoice-Translation-",
      imageUrl: proj4 , // Use the imported image
      projectUrl: "https://github.com/laraib776/LinguaMate-UniversalVoice-Translation-",
    },
    {
      title: "AutoBook",
      imageUrl: proj5 , // Use the imported image
      projectUrl: "https://github.com/laraib776/AutoBook",
    },
    {
      title: "Calenderium",
      imageUrl: proj6 , // Use the imported image
      projectUrl: "https://github.com/laraib776/Calenderium",
    },
    {
      title: "Satellite Imaging Segmentation Using DL",
      imageUrl: proj7 , // Use the imported image
      projectUrl: "https://github.com/laraib776/Satellite-Imaging-Segmentation-Using-Deep-Learning",
    },
    {
      title: "Attendence System using Facial Recognition",
      imageUrl: proj8 , // Use the imported image
      projectUrl: "https://github.com/laraib776/Attendence-System-using-Facial-Recognition",
    },
    // Add more projects here
  ];

  return (
    <div className="container">
                                       {/* PROFILE SECTION */ }
      <div className="profile-container">
        <div className="profile-inner">
          <img src={me_profile_pic} alt="profile_pic" className="profile-pic" />
          
          <div className="name-container">
            <div className="tilted-name">- Laraib Khalid -</div>
          </div>
          
          <div className="title">Web Developer / Python Developer / AI / ML</div>
          
          <div className="social-icons">
            <a href="https://github.com/laraib776" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/laraib-khalid-60b926232" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
            </a>
            <a href="https://wa.me/03335550807" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon" />
            </a>
            
          </div>
        </div>
      </div>
                                        {/* ABOUT ME SECTION*/ }
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-section">
          <div className="info-section">
            <div className="info-item">
              <div className="info-label">Full Name:</div>
              <div className="info-value">Laraib Khalid</div>
            </div>
            <div className="info-item">
              <div className="info-label">Phone:</div>
              <div className="info-value">03335550807</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email:</div>
              <div className="info-value">laraibkhalid776@gmail.com</div>
            </div>
            <div className="info-item">
              <div className="info-label">Website:</div>
              <div className="info-value">www.portfolio.com</div>
            </div>
            <div className="info-item">
              <div className="info-label">Address:</div>
              <div className="info-value">Bahria Town Rawalpindi, Pakistan</div>
            </div>
          </div>

          <div className="paragraph-section">
            <h2 className="paragraph-title">Hello There!</h2>
            <p className="paragraph">
             I'm an enthusiastic Full Stack Python Developer with a flair for crafting innovative solutions 🚀. From developing immersive health apps to dynamic music platforms, I've blended creativity technical prowess. Currently mastering Reactjs and delving into the world of data science, I'm all about versatility. 
           </p>
            <p className="paragraph">
            🎓  Studying Computer Science at the Institute of Space Technology , I'm actively contributing as an executive member of ACM and content lead at IES. I'm not just seeking opportunities; I'm on the lookout for connections that spark collaboration and innovation. Let's connect and bring some dynamism to the tech world! ✨
            </p>
          </div>
        </div>

        <div className="icons-section">
          <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" className="icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" className="icon" /></a>
          <a href="https://www.linkedin.com/in/laraib-khalid-60b926232"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faGooglePlusG} size="2x" className="icon" /></a>
        </div>
      </div>
   
      <div className="skill-container">
  <h2 className="skill-title">Skills</h2>
  {skills.map(skill => (
    <div key={skill.name} className="skill">
      <svg viewBox="0 0 36 36" className="svg-skill">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#ccc"
          strokeWidth="1"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#3B444B"
          strokeDasharray={`${skill.level}, 100`}
          strokeWidth="1"
        />
      </svg>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-level">{skill.level}%</div>
    </div>
  ))}
</div>


                                                 {/* Projects SECTION*/}

<div className="projects-section">
    <h2>Work</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
        >
          <img
            src={project.imageUrl}
            alt={`${project.title} image`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div className="project-description">
            <h3>{project.title}</h3>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
    <div style={{backgroundColor:'lightgray',width:'100%',height:'15vh',color:'lightgray'}}>......</div>
  </div>

{/* resume */}

<div className="resume-container">
    <div style={{height:'12vh'}}></div>
    <h2 className="resume-title">My Resume</h2>
    <div style={{height:'8vh'}}></div>

    {/* Vertical Line */}
    <div className="vertical-line"></div>

    {/* Heading for Experience */}
    <div className="experience-heading">My Experience</div>

    {/* Experience 1 */}
    <div className="experience-box left">
        <div className="iconn left">
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '30px' }} />
        </div>
        <div className="experience-text">
            <h3>Software Intern</h3>
            <p>Naxxa - Aug 2024 - Current, Feb 2024 - March 2024</p>
            <p>Doing hands-on practice on real-time projects while gaining knowledge of Reactjs and working on APIs.</p>
        </div>
    </div>

    {/* Experience 2 */}
    <div className="experience-box right">
        <div className="iconn right">
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '30px' }} />
        </div>
        <div className="experience-text">
            <h3>Intern</h3>
            <p>PNRA - Jul 2024 - Aug 2024</p>
            <p>Working at PNRA in licensing and compliance monitoring of nuclear facilities while also contributing to cybersecurity measures.</p>
        </div>
    </div>

    {/* Experience 3 */}
    <div className="experience-box left">
        <div className="iconn left">
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '30px' }} />
        </div>
        <div className="experience-text">
            <h3>Research Assistant</h3>
            <p>Institute of Space & Technology - Jun 2023 - Sep 2023</p>
            <p>Contributing to research efforts by reviewing and analyzing data from specific papers accumulating required information and organizing it.</p>
        </div>
    </div>

    {/* Heading for Education */}
    <div className="education-heading">Education</div>

    {/* Education 1 */}
    <div className="experience-box right">
        <div className="iconn right">
            <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '30px' }} />
        </div>
        <div className="experience-text">
            <h3>Bachelors Degree</h3>
            <p>Institute of Space & Technology - 2021 - Current</p>
            <p>Gaining technical knowledge with scoring highest CGPA 3.9, while securing a scholarship from IST.</p>
        </div>
    </div>

    {/* Education 2 */}
    <div className="experience-box left">
        <div className="iconn left">
            <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '30px' }} />
        </div>
        <div className="experience-text">
            <h3>Graduation</h3>
            <p>FFCG - 2019 - 2021</p>
            <p>Passing the HSSC I and II with A1 grade attaining 96% results (1060/1100) in the Pre-Engineering Category.</p>
        </div>
    </div>
</div>


 {/* Hire Me */}

<div className="hireMeContainer">....</div>
<div className="hireMeSection">
  <h1 className="hireMeTitle">Hire Me!</h1>
  <p className="hireMeText">
    If you're looking for a motivated individual who is ready to make a meaningful impact, I would love to connect! Feel free to adjust it to better fit your style or specific skills!
  </p>
  <a href="https://www.linkedin.com/in/laraib-khalid-60b926232" target="_blank" rel="noopener noreferrer">
    <button className="hireMeButton">
      CONTACT US
    </button>
  </a>
</div>


{/* Contact Me  */}

<div className="contactContainer">
  <div className="contactWrapper">
    <div className="contactImageWrapper">
      <img
        src={contact} // Replace with your image path
        alt="Contact"
        className="contactImage"
      />
    </div>

    {/* <div className="spacer"></div> */}

    <div className="contactFormWrapper">
      <div className="contactTitle">Send us a message</div>
      <p className="contactDescription">
        If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.
      </p>
      <form action="#">
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Enter your name"
            className="contactInput"
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Enter your email"
            className="contactInput"
          />
        </div>
        <div className="textareaWrapper">
          <textarea
            placeholder="Enter your message"
            className="contactTextarea"
          ></textarea>
        </div>
        <div className="sendButtonWrapper">
          <input
            type="button"
            value="Send Now"
            className="sendButton"
          />
        </div>
      </form>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;
