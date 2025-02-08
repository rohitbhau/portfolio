import React from 'react';
import './works.css';
import Mywork from '../../assets/calculator-min.png';
import Myworkone from '../../assets/whatsapplogo.png';
import Myworktwo from '../../assets/uidesign.jpg';

const Works = () => {
  return (
    <section id="projects">
      <span className='projectsTitle'>My Projects</span> <br/>
      <span className='projectsDesc'>Here are some of the projects I've worked on</span>

      {/* Projects Grid */}
      <div className='projectsGrid'>
        <div className='projectCard'>
          <img src={Mywork} alt="Calculator App" className='projectImg' />
          <div className='projectDetails'>
            <h2>Calculator App</h2>
            <p>A simple calculator app built with React for performing basic arithmetic operations.</p>
            <a href="https://github.com/rohitbhau/calculator" target="_blank" rel="noreferrer" className='projectBtn'>View Project</a>
          </div>
        </div>

        <div className='projectCard'>
          <img src={Myworkone} alt="Chat App" className='projectImg' />
          <div className='projectDetails'>
            <h2>TMS</h2>
            <p>A Task Management System for Organizations with frontend and backend.</p>
            <a href="https://github.com/rohitbhau/chat-app" target="_blank" rel="noreferrer" className='projectBtn'>View Project</a>
          </div>
        </div>

        <div className='projectCard'>
          <img src={Myworktwo} alt="UI Design Portfolio" className='projectImg' />
          <div className='projectDetails'>
            <h2>UI Design Portfolio</h2>
            <p>Showcase of modern UI/UX designs created using Figma, focusing on user-friendly experiences.</p>
            <a href="https://www.figma.com/proto/rohit-designs" target="_blank" rel="noreferrer" className='projectBtn'>View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
