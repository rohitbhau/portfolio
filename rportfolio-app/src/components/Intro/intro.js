import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import Profile from '../../assets/profile.png';
import Hire from '../../assets/hire.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello</span>
        <span className='introText'>I'm <span className='introName'>Rohit</span><br/>
        Web Developer
        </span>
        <p className='introPara'>I am a skilled web developer with developing user freindly <br/> website projects </p>
        <Link><button className='btn'><img src={Hire} alt="Logo" className='btnImg'/>Hire me</button></Link>
       
      </div>
      <img src={Profile} alt="" className="bg"/>
    </section>
  )
}

export default Intro