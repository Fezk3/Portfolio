import React from 'react';
import './AboutMe.css';
import ProfileImage from '../Img/Me2.jpg'
import Curriculum from '../Docs/cv.pdf';

const AboutMe = () => {
  const handleDownload = () => {
    window.open(Curriculum, '_blank');
  };

  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="image-container">
          <img src={ProfileImage} alt="Profile" />
        </div>
        <div className="text-content">
          <h2>About Me</h2>
          <p>
            I'm a 24-year-old software engineer who graduated from the Universidad Nacional de Costa Rica (UNA).
            With a strong coding background and problem-solving skills, I'm passionate about creating innovative software solutions.
            I have a lot of dedication to delivering high-quality results.
            Continuously seeking growth and learning opportunities, I strive to stay up-to-date with the latest advancements in the field.
          </p>
          <h3>Experience</h3>
          <h4>· Web developer</h4>
          <p>
            I possess expertise in a range of backend technologies including Django Rest Framework, Express, Spring Boot, and Laravel,
            while my frontend proficiencies encompass React, HTML, CSS, JavaScript, and Bootstrap.
            My database proficiency spans SQL databases like MySQL, PostgreSQL, Oracle DB, and NoSQL databases such as MongoDB.
            I have actively contributed to the creation of a web application using Laravel for backend, React for frontend,
            and SQL for the database. My responsibilities primarily involved developing a robust REST API, setting up the database,
            and conducting thorough API testing using Postman.
          </p>
          <button className="download-button" onClick={handleDownload}>
            Download Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;



