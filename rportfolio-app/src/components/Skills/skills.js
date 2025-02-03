import React from 'react';
import "./skills.css";
import Uidesign from '../../assets/uidesign.jpg';
import Frontend from '../../assets/frontend.jpg';
import Webdev from '../../assets/webdeveloper.jpg';
import Backend from '../../assets/backendimg.png'; // Add this line

const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I Can Do</span>
        <span className='skillDesc'>I am a Full-Stack developer</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Uidesign} alt="UI/UX Design" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text; you can write your own content.</p>
                </div>
            </div>
        
            <div className='skillBar'>
                <img src={Frontend} alt="Frontend Development" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Frontend Development</h2>
                    <p>This is a demo text; you can write your own content.</p>
                </div>
            </div>
        
            <div className='skillBar'>
                <img src={Webdev} alt="Web Development" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>This is a demo text; you can write your own content.</p>
                </div>
            </div>
        
            <div className='skillBar'>
                <img src={Backend} alt="Backend Development" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Backend Development with Java Spring Boot and MySQL</h2>
                    <p>This is a demo text; you can write your own content.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
