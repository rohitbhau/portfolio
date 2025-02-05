import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h1 className="aboutTitle">About Me</h1>

            <div className="aboutContainer">
                {/* Left Section - Personal Info */}
                <div className="aboutLeft">
                    <div className="aboutDetailItem">
                        <strong>Name:</strong> <span>Rohit Kumbhare</span>
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Email:</strong> <span>rohit@example.com</span> {/* Replace with your email */}
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Address:</strong> <span>Pune, Maharashtra, India</span> {/* Replace with your address */}
                    </div>
                </div>

                {/* Right Section - Professional Info */}
                <div className="aboutRight">
                    <div className="aboutDetailItem">
                        <strong>Qualification:</strong> <span>MSC Computer Science</span>
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Achievement:</strong> <span>M-SET 2024 Qualified</span>
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Experience:</strong> <span>Associate Software Engineer since April 1, 2024</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
