import React, { useState } from 'react';
import './contact.css';
import Facebook from '../../assets/facebooklogo.jpg';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtubelogo.png';
import Whatsapp from '../../assets/whatsapplogo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss</span>
        <form className='contactForm' onSubmit={handleSubmit}>
          <input
            type='text'
            className='name'
            placeholder='Your Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            className='email'
            placeholder='Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            rows='5'
            placeholder='Your Message'
            className='msg'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type='submit' className='submitBtn'>
            Submit
          </button>
          <div className='links'>
          <a href='https://www.facebook.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <img src={Facebook} alt='Facebook' className='link' />
          </a>
          <a href='https://www.instagram.com/yourprofile' target='_blank' rel='noopener noreferrer'>
            <img src={Instagram} alt='Instagram' className='link' />
          </a>
          <a href='https://www.youtube.com/yourchannel' target='_blank' rel='noopener noreferrer'>
            <img src={Youtube} alt='YouTube' className='link' />
          </a>
          <a href='https://wa.me/yourphonenumber' target='_blank' rel='noopener noreferrer'>
            <img src={Whatsapp} alt='WhatsApp' className='link' />
          </a>
        </div>
        </form>
       
      </div>
    </section>
  );
};

export default Contact;
