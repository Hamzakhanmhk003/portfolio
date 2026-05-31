import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <p className="section-subtitle">Projects</p>
        <h2 className="h2 section-title">My Amazing Works</h2>
        <p className="section-text">
          Here are the projects that I have completed.
        </p>

        <ul className="portfolio-list">
          <li>
            <a 
              href="https://khybermushroom.000webhostapp.com" 
              className="portfolio-card" 
              style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/Mushroom-1.jpg)`
              }} // Ensure correct file name
            >
              <div className="card-content">
                <p className="card-subtitle">Website</p>
                <h3 className="h3 card-title">Web Application for Khyber Mushroom</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </a>
          </li>

          <li>
            <a 
              href="https://charsaddachappals.000webhostapp.com" 
              className="portfolio-card" 
              style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/chappals-1.jpg)` // Ensure correct file name
              }}
            >
              <div className="card-content">
                <p className="card-subtitle">Website</p>
                <h3 className="h3 card-title">Web Application for Desiverse</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </a>
          </li>

          <li>
            <a 
              href="#" 
              className="portfolio-card" 
              style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/portfolio-3.jpg)` // Ensure correct file name
              }}
            >
              <div className="card-content">
                <p className="card-subtitle">Soundcloud</p>
                <h3 className="h3 card-title">Web Application for Desiverse</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </a>
          </li>

          <li>
            <a 
              href="#" 
              className="portfolio-card" 
              style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/portfolio-4.jpg)` // Ensure correct file name
              }}
            >
              <div className="card-content">
                <p className="card-subtitle">Details</p>
                <h3 className="h3 card-title">Web Application for Desiverse</h3>
                <span className="btn-link">
                  <span>View Project</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
