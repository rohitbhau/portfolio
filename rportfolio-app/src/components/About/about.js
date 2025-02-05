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
                        <strong>Name:</strong> <span>ROHIT KUMBHARE</span>
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Email:</strong> <span>rkumbhare12345@gmail.com</span> 
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Address:</strong> <span>Gadchiroli, Maharashtra, India</span> 
                    </div>
                </div>

                {/* Right Section - Professional Info */}
                <div className="aboutRight">
                    <div className="aboutDetailItem">
                        <strong>Qualification:</strong> <span>M.Sc. Computer Science</span>
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Achievement:</strong> <span>M-SET 2024 Qualified</span>
                    </div>
                    <div className="aboutDetailItem">
                        <strong>Experience:</strong> <span>Associate Software Engineer since April 1, 2024</span>
                    </div>
                </div>
            </div>

            {/* New Section - Company Experience */}
            <div className="experienceSection">
                <h2 className="experienceTitle">Professional Experience</h2>
                <p className="experienceDesc">
                    As an Associate Software Engineer, I have been actively involved in various critical tasks that contributed to the development and maintenance of enterprise applications:
                </p>
                <ul className="experienceList">
                    <li>✅ API Integration for seamless data communication between front-end and back-end services.</li>
                    <li>✅ Building RESTful APIs using Java Spring Boot to ensure scalable and efficient performance.</li>
                    <li>✅ Identifying and solving bugs to maintain smooth functionality and enhance user experience.</li>
                    <li>✅ Adding new features and functionalities to improve the overall product capabilities.</li>
                    <li>✅ Developing new modules to expand the system architecture and meet evolving business needs.</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
