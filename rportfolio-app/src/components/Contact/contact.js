import React from 'react';
import './contact.css';
import Facebook from '../../assets/facebooklogo.jpg';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtubelogo.png';
import Whatsapp from '../../assets/whatsapplogo.png';

const Contact = () => {
  return (
   <section id='contactPage'>
    {/* <div id='clients'>
        <h1 className='contactPageTitle'>
            My Clients
        </h1>
        <p className='clientDesc'>I had the opportunity to work with a diverse group of companies.</p>
        <div className='clientImgs'>
            <img src='logo.png' alt='' className='clientImg'/>
            <img src='logo.png' alt='' className='clientImg'/>
            <img src='logo.png' alt='' className='clientImg'/>
            <img src='logo.png' alt='' className='clientImg'/>
        </div>
    </div> */}
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact me</h1>
        <span className='contactDesc'>please fill out the below to discuss</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your Email'/>
            <textarea name='message' rows='5' placeholder='Your Message' className='msg'/>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={Facebook} alt='' className='link'/>
                <img src={Instagram} alt='' className='link'/>
                <img src={Youtube} alt='' className='link'/>
                <img src={Whatsapp} alt='' className='link'/>
            </div>
        </form>
    </div>
   </section>
  );
}
export default Contact