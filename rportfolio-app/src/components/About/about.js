import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h1 className="aboutTitle">About Me</h1>
            {/* <p className="aboutDesc">
                I am an MSC Computer Science graduate, M-SET 2024 qualified, and currently working as an Associate Software Engineer since April 1, 2024.
            </p> */}
            <div className="aboutDetails">
                <div className="aboutDetailItem">
                    <span>MSC Computer Science</span>
                </div>
                <div className="aboutDetailItem">
                    <span>M-SET 2024 Qualified</span>
                </div>
                <div className="aboutDetailItem">
                    <span>Associate Software Engineer since April 1, 2024</span>
                </div>
            </div>
        </section>
    );
};

export default About;
