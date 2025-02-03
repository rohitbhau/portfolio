import React from 'react';
import "./skills.css";
import Uidesign from '../../assets/uidesign.jpg';
import Frontend from '../../assets/frontend.jpg';
import Webdev from '../../assets/webdeveloper.jpg';

 const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>what i can do</span>
        <span className='skillDesc'> i am an web developer</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Uidesign} alt="uidesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX design</h2>
                    <p>this is a demo text,you can write your own content</p>
                </div>
            </div>
        
        <div className='skillBar'>
                <img src={Frontend} alt="webdesign" className='skillBarImg'/>
                <div className='skillBarText'>
                <h2>web design design</h2>
                    <p>this is a demo text,you can write your own content</p>
                </div>
        </div>
        <div className='skillBar'>
                <img src={Webdev} alt="web developer" className='skillBarImg'/>
                <div className='skillBarText'>
                <h2>web developer</h2>
                    <p>this is a demo text,you can write your own content</p>
                </div>
         </div>
         </div>
    </section>
  );
}
export default Skills;
