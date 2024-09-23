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
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faGooglePlusG} size="2x" className="icon" /></a>
        </div>
      </div>
   
                                       {/* SKILL SECTION*/ }
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
  </div>

{/* resume
                                                
    <div id="fh5co-resume" class="fh5co-bg-color">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>My Resume</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-md-offset-0">
					<ul class="timeline">
						<li class="timeline-heading text-center animate-box">
							<div><h3>Work Experience</h3></div>
						</li>
						<li class="animate-box timeline-unverted">
							<div class="timeline-badge"><i class="icon-suitcase"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Senior Developer</h3>
									<span class="company">Company Name - 2016 - Current</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>
						<li class="timeline-inverted animate-box">
							<div class="timeline-badge"><i class="icon-suitcase"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Junior Developer</h3>
									<span class="company">Company Name - 2013 - 2015</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li>
						<li class="animate-box timeline-unverted">
							<div class="timeline-badge"><i class="icon-suitcase"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">UI/UX Designer</h3>
									<span class="company">Company Name - 2010 - 2012</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>

						{/* <br> */}
						{/* <li class="timeline-heading text-center animate-box">
							<div><h3>Education</h3></div>
						</li>
						<li class="timeline-inverted animate-box">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Masters Degree</h3>
									<span class="company">University Name - 2007 - 2009</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li>
						<li class="animate-box timeline-unverted">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Bachelors Degree</h3>
									<span class="company">University Name - 2002 - 2006</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>
						<li class="timeline-inverted animate-box">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Diploma Course</h3>
									<span class="company">College Name - 1999 - 2001</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								</div>
							</div>
						</li>
						<li class="animate-box timeline-unverted">
							<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h3 class="timeline-title">Graduation</h3>
									<span class="company">College Name - 1994 - 1998</span>
								</div>
								<div class="timeline-body">
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
								</div>
							</div>
						</li>
			    	</ul>
				</div>
			</div>
		</div>
	</div> */} 

<div style={{ position: 'relative', width: '100%', height: 'auto' }}>
<div style={{height:'12vh'}}></div>
      <h2 style={{ fontWeight: 'normal', fontFamily: 'Roboto Mono, monospace', fontSize: '7vh', textAlign: 'center' }}>
        My Resume
      </h2>
<div style={{height:'8vh'}}></div>
      {/* Vertical Line */}
      <div style={{
        position: 'absolute',
        height: '85%',
        borderLeft: '2px solid lightgray',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0 // Lower z-index so it's below the boxes
      }}></div>

      {/* Heading for Experience */}
      <div style={{
        width: '20%',
        maxWidth: '600px',
        margin: '0vh auto',
        borderRadius: '1vh',
        backgroundColor: 'lightgray',
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '4vh',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        top: '0'
      }}>
        My Experience
      </div>

      {/* Experience 1 */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '45%',
        marginLeft: '53%',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: '-50px', // Position icon to the left of the vertical line
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1 // Ensure the icon is above other elements
          }}>
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '30px' }} />
          </div>
          <div style={{
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '5vh', fontWeight: 'normal' }}>
              Software Intern
            </h3>
            <p style={{ color: 'grey' }}>Naxxa - Aug 2024 - Current, Feb 2024 - March 2024</p>
            <p>Doing hands-on practice on real-time <br /> projects while gaining knowledge of Reactjs <br /> and working on APIs.</p>
          </div>
        </div>
      </div>

      {/* Experience 2 */}
      <div style={{
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '45%',
  margin: '0 auto',
  marginBottom: '20px',
   marginLeft: '12%'
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative'
  }}>
    <div style={{
      position: 'absolute',
      right: '70px', // Adjusted to decrease the gap between the icon and the text
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1 // Ensure the icon is above other elements
    }}>
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '30px' }} />
          </div>
          <div style={{
            marginRight: '10px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'right'
          }}>
            <h3 style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '5vh', fontWeight: 'normal' }}>
              Intern
            </h3>
            <p style={{ color: 'grey' }}>PNRA - Jul 2024 - Aug 2024</p>
            <p>Working at PNRA in licensing and compliance <br /> monitoring of nuclear facilities while <br /> also contributing to cybersecurity measures.</p>
          </div>
        </div>
      </div>

      {/* Experience 3 */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '45%',
        marginLeft: '53%',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: '-50px', // Position icon to the left of the vertical line
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1 // Ensure the icon is above other elements
          }}>
            <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: '30px' }} />
          </div>
          <div style={{
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '5vh', fontWeight: 'normal' }}>
              Research Assistant
            </h3>
            <p style={{ color: 'grey' }}>Institute of Space & Technology - Jun 2023 - Sep 2023</p>
            <p>Contributing to research efforts by reviewing <br /> and analyzing data from specific papers <br /> accumulating required information and organizing it.</p>
          </div>
        </div>
      </div>

      {/* Heading for Education */}
      <div style={{
        width: '20%',
        maxWidth: '600px',
        margin: '2vh auto',
        borderRadius: '1vh',
        backgroundColor: 'lightgray',
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '4vh',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        Education
      </div>

      {/* Education 1 */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '45%',
        marginLeft: '53%',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: '-60px', // Position icon to the left of the vertical line
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1 // Ensure the icon is above other elements
          }}>
            <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '30px' }} />
          </div>
          <div style={{
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '5vh', fontWeight: 'normal' }}>
              Bachelors Degree
            </h3>
            <p style={{ color: 'grey' }}>Institute of Space & Technology - 2021 - Current</p>
            <p>Gaining technical knowledge with scoring <br /> highest CGPA 3.9, <br /> while securing a scholarship from IST.</p>
          </div>
        </div>
      </div>

      {/* Education 2 */}
      <div style={{
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '45%',
  margin: '0 auto',
  marginBottom: '20px',
   marginLeft: '12%'
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative'
  }}>
    <div style={{
      position: 'absolute',
      right: '70px', // Adjusted to decrease the gap between the icon and the text
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1 // Ensure the icon is above other elements
    }}>
      <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '30px' }} />
    </div>
    <div style={{
      marginRight: '10px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'right'
    }}>
      <h3 style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '5vh', fontWeight: 'normal' }}>
        Graduation
      </h3>
      <p style={{ color: 'grey' }}>FFCG - 2019 - 2021</p>
      <p>Passing the HSSC I and II with A1 grade <br /> attaining 96% results (1060/1100) <br /> in the Pre-Engineering Category.</p>
    </div>
  </div>
</div>
    </div>

 {/* Hire Me */}
 <div style={{height:'20vh',color:'white'}}>....</div>
 <div style={{ backgroundColor: 'lightgray', color: '#3B444B', textAlign: 'center', padding: '50px 0', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Hire Me!</h1>
  <p style={{ fontSize: '18px', marginBottom: '30px', width: '60%', textAlign: 'center' }}>
    Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
    reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
  </p>
  <button style={{ backgroundColor: '#3B444B', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>CONTACT US</button>
</div>


{/* Contact Me  */}

<div
  style={{
    width: '85%',
    background: '#fff',
    borderRadius: '6px',
    padding: '20px 60px 30px 40px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    }}
  >
    <div
      style={{
        width: '25%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15px',
        position: 'relative',
      }}
    >
      <img
        src={contact} // Replace with your image path
        alt="Contact"
        style={{
          width: '150%',
          height: '190%',
          borderRadius: '6px',
        }}
      />
    </div>

    <div style={{ height: '20vh', color: 'white' }}>....</div>

    <div
      style={{
        width: '75%',
        marginLeft: '75px',
      }}
    >
      <div
        style={{
          fontSize: '23px',
          fontWeight: '600',
          color: '#3B444B',
        }}
      >
        Send us a message
      </div>
      <p style={{ color: '#afafb6' }}>
        If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.
      </p>
      <form action="#">
        <div
          style={{
            height: '50px',
            width: '100%',
            margin: '12px 0',
          }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            style={{
              height: '100%',
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              background: 'lightgray',
              borderRadius: '6px',
              padding: '0 15px',
            }}
          />
        </div>
        <div
          style={{
            height: '50px',
            width: '100%',
            margin: '12px 0',
          }}
        >
          <input
            type="text"
            placeholder="Enter your email"
            style={{
              height: '100%',
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              background: 'lightgray',
              borderRadius: '6px',
              padding: '0 15px',
            }}
          />
        </div>
        <div
          style={{
            minHeight: '110px',
            paddingTop: '6px',
            height: '100%',
            width: '100%',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            background: 'lightgray',
            borderRadius: '6px',
            padding: '0 15px',
          }}
        >
          <textarea
            placeholder="Enter your message"
            style={{
              height: '100%',
              width: '90%',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              background: 'lightgray',
              borderRadius: '6px',
              padding: '0 0',
              resize: 'none',
              marginTop:'2vh',
              
            }}
          ></textarea>
        </div>
        <div
          style={{
            display: 'inline-block',
            marginTop: '12px',
          }}
        >
          <input
            type="button"
            value="Send Now"
            style={{
              margin: '3vh',
              color: '#fff',
              fontSize: '18px',
              outline: 'none',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              background: '#3B444B',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
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
