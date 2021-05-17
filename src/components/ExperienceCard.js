import React, { useState } from 'react'
// import { Collapse } from 'reactstrap';
import './ExperienceCard.css'

function ExperienceCard({company, position, time, description, skills, logo, link}) {
    // const [isCollapsed, setCollapsed] = useState(false);
    // const toggleCard = () => setCollapsed(!isCollapsed);

    return (
        <div className="ExperienceCard">
            <div className="excard-image-container">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img 
                    src={logo} 
                    alt="logo"
                    ></img> 
                </a>
            </div>
            <div className="excard-content">
                <div className="excard-company">
                    {company}
                </div>
                <div className="excard-position">
                    {position}
                </div>
                <div className="excard-time">
                    {time}
                </div>
                <div className="excard-description">
                    {description}
                </div>
                <div className="excard-skills">
                    {skills.map(skill => <div className="skill-highlight">  {skill}  </div>)}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard