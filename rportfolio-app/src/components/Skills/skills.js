import React from 'react';
import "./skills.css";
import Uidesign from '../../assets/uidesign.jpg';
import Frontend from '../../assets/frontend.jpg';
import Webdev from '../../assets/webdeveloper.jpg';
import Backend from '../../assets/backendimg.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className='skillTitle'>What I Can Do</span> <br/>
      <span className='skillDesc'>I am a Full-Stack Developer</span>

      {/* Skill Cards Container */}
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={Uidesign} alt="UI/UX Design" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>Designing intuitive user interfaces with Figma and Adobe XD, focusing on user-centric experiences.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Frontend} alt="Frontend Development" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Frontend Development</h2>
            <p>Building responsive web apps with ReactJS, JavaScript, HTML, CSS, and Tailwind CSS.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Webdev} alt="Web Development" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Development</h2>
            <p>Developing full-stack applications with API integration and optimized performance.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={Backend} alt="Backend Development" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Backend Development</h2>
            <p>Creating RESTful APIs with Java Spring Boot, managing data with MySQL, ensuring security and scalability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
