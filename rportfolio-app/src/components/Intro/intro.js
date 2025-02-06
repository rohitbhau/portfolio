import React from 'react';
import './intro.css';
import Profile from '../../assets/profile.png';

const Intro = () => {
  return (
    <section id="home">
      <div className='introContent'>
        <span className='hello'>Hello</span>
        <span className='introText'>I'm <span className='introName'>Rohit</span><br/>
        FullStack Developer
        </span>
        <p className='introPara'>I am a skilled full stack developer with developing user freindly <br/> website projects </p>
        {/* <Link><button className='btn'><img src={Hire} alt="Logo" className='btnImg'/>Hire me</button></Link> */}
       
      </div>
      <img src={Profile} alt="" className="bg"/>
    </section>
  )
}

export default Intro