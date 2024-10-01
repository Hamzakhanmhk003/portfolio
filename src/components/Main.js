import React, { useEffect, useState } from 'react'; // Ensure React and hooks are imported
import './Main.css'; // Your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faCss3Alt, faJsSquare, faAngular } from '@fortawesome/free-brands-svg-icons'; // FontAwesome icons
import { Link } from 'react-router-dom'; // Link component for routing

const Main = () => {
  const images = [
    "bg7.jpg",
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg6.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // For fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out the current image

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change the image
        setFade(true); // Fade in the new image
      }, 1000); // Timeout for fade out duration
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  // Function to scroll to the about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the about section
    }
  };

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${images[currentImageIndex]})` }}>
        <div className="container">
          <div className="hero-banner">
            <img
              src={`${process.env.PUBLIC_URL}/mhk.png`}
              width="800"
              height="652"
              loading="lazy"
              alt="Hamza Khan"
              className="img-cover"
            />
            <div className="elem elem-1">
              <p className="elem-title">3</p>
              <p className="elem-text">Years of Success</p>
            </div>
            <div className="elem elem-2">
              <p className="elem-title">Quick</p>
              <p className="elem-text">Learner</p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/rotate-img.png`} // Add a leading slash here
              width="169"
              height="172"
              alt="I'm a developer from Peshawar"
              className="rotate-img"
            />
          </div>

          <div className={`hero-content ${fade ? 'fade-in' : 'fade-out'}`}>
            <h2 className="hero-title">
              <span>Hello I'm</span>
              <strong>Hamza Khan</strong> Software Engineer from Peshawar
            </h2>
            <p className="hero-text">
              I have completed a BS-SE degree from Abasyn University, Peshawar
            </p>
            <div className="btn-group">
              <a href="mailto:hamzakhant9@gmail.com" className="btn btn-primary blue">Hire Me</a>
              <button className="btn btn-about" onClick={scrollToAbout}>About Me</button> {/* Use button instead of link */}
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <figure className="about-banner">
            <img
              src={`${process.env.PUBLIC_URL}/mhk.png`}
              width="800"
              height="652"
              loading="lazy"
              alt="Hamza Khan"
              className="img-cover"
            />
            <img
              src={`${process.env.PUBLIC_URL}/hamza.png`}
              width="800"
              height="717"
              loading="lazy"
              alt="Hamza Khan"
              className="abs-img"
            />
            <div className="abs-icon abs-icon-1">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="abs-icon abs-icon-2">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="abs-icon abs-icon-3">
              <FontAwesomeIcon icon={faAngular} />
            </div>
          </figure>

          <div className="about-content">
            <p className="section-subtitle">I'm a Developer</p>
            <h2 className="h2 section-title">I Develop Applications that Help People</h2>
            <p className="section-text">
              As a BS-SE undergraduate student, I am actively pursuing a degree in Software Engineering. This program has provided me with a strong academic foundation in the field. I am dedicated to expanding my knowledge and skills to become a proficient software engineer.
            </p>
            <p className="section-text">
              Collaborating with peers on group projects has enhanced my communication and teamwork skills. I am passionate about staying up-to-date with the latest industry trends and technologies.
            </p>
            <Link to="/projects" className="btn btn-primary blue">View Projects</Link>
          </div>
        </div>
      </section>

      {/* Skills section remains unchanged */}
      <section className="section skills" id="skills">
        <div className="container">
          <p className="section-subtitle">My Skills</p>
          <h2 className="h2 section-title">I Develop Skills Regularly</h2>
          <p className="section-text">
            I continuously enhance my skills to stay current in the ever-evolving tech landscape, ensuring that I deliver high-quality results in every project I undertake.
          </p>

          <ul className="skills-list">
            {/* Skill items remain unchanged */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
