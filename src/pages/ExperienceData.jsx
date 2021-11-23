import React from "react";
import autonomic_logo from "../assets/autonomic.jpeg";

class ExperienceData {
    constructor (
        company, 
        position, 
        description, 
        skills,
        logo
    ) {
        this.company = company;
        this.position = position;
        this.description = description;
        this.skills = skills;
        this.logo = logo;
    }
}

export const Experiences = [
    new ExperienceData(
        "Autonomic",
        "Software Engineering Intern",
        (
            <div>
                description goes here 
            </div>
        ),
        ["Java", "PostgreSQL"],
        autonomic_logo
    ),
    new ExperienceData(
        "Index Exchange",
        "Software Engineering Intern",
        (
            <div>
                description goes here 
            </div>
        ),
        ["Java", "PostgreSQL"],
        autonomic_logo
    ),
    new ExperienceData(
        "Solium Capital",
        "Full Stack Software Developer Intern",
        (
            <div>
                description goes here 
            </div>
        ),
        ["Java", "PostgreSQL"],
        autonomic_logo
    ),
    new ExperienceData(
        "Ontario Securities Commission",
        "Software Engineer Intern",
        (
            <div>
                description goes here 
            </div>
        ),
        ["Java", "PostgreSQL"],
        autonomic_logo
    ),
    
]
