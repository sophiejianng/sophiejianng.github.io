import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import "./Experience.css";
import autonomic_logo from "../assets/autonomic.jpeg";
import ix_logo from "../assets/ix.jpg";
import solium_logo from "../assets/solium.png";
import osc_logo from "../assets/osc.png";

function Experience() {

  const autonomicSkills = ["Java", "PostgreSQL", "Prometheus", "Grafana"]
  const ixSkills = ["Go", "Perl", "Prometheus"]
  const soliumSkills = ["Java", "SQL", "GWT", "React"]
  const oscSkills = ["Powershell"]

  const autonomicDescription = (
    <div className="experience-description">
      ✏️ SDK Team
      <ul>
        <li>Implemented key fail-over logic to support a high-availability clustering model</li>
        <li>Designed and developed data storage solution to allow activity and state tracking of each server running in the HA environment</li>
        <li>Load-testing experiments to determine resource bottlenecks and requirements for system scalability</li>
      </ul>
    </div>
  )

  const ixDescription = (
    <div className="exeperience-description">
      ✏️ Core Engineering
      <ul>
        <li>Designed and prototyped audit logging service, eliminating all repetitive communication between supply and demand auction services</li>
        <li>Developed metrics package to benchmark the performance of new auction services</li>
        <li>Participated in redesign of auction engine architecture, investigating potential solutions and building out stories according to technical spike results</li>
      </ul>
    </div>
  )

  const soliumDescription = (
    <div className="experience-description">
      ✏️ Client Facing Team 
      <ul>
        <li>Developed internal logger to track API calls and database queries, allowing reduction of feature testing efforts by up to 25%</li>
        <li>Redesigned and built frontend features of core product</li>
        <li>Implemented customer-requested functionality from end to end - meeting with clients to discuss product design and scope, present proof of concepts and demo ready to ship features</li>
      </ul>
    </div>
  )

  const oscDescription = (
    <div>
      ✏️ Internal Client support
      <ul>
        <li>Provided technical support to over 600 users, troubleshooting hardware and software issues</li>
        <li>Contributed scripts to modify user database access rights and remotely monitor network activity</li>
        <li>Imaged and configured laptops, working with windows registry and BIOS to implement suitable deployment settings</li>
      </ul>
    </div>
  )

  return (
    <div className="Experience fade-in-up">
      <div className="experience-title">
        learning experiences ✌️
      </div>
      <div className="experience-cards-container">
        <ExperienceCard
            company="Autonomic"
            position="👨‍💻  Software Engineer Intern"
            time="🗓 Jan - Apr 2021"
            description={autonomicDescription}
            skills={autonomicSkills}
            logo={autonomic_logo}
            link="https://autonomic.ai/">
          </ExperienceCard>
          <ExperienceCard
            company="Index Exchange"
            position="👨‍💻 Software Engineer Intern"
            time="🗓 Jan - Apr 2020"
            description={ixDescription}
            skills={ixSkills}
            logo={ix_logo}
            link="https://www.indexexchange.com/">
          </ExperienceCard>
          <ExperienceCard
            company="Solium Capital"
            position="👨‍💻 Full Stack Software Developer Intern"
            time="🗓 Jan - Apr 2019"
            description={soliumDescription}
            skills={soliumSkills}
            logo={solium_logo}
            link="https://www.shareworks.com/">
          </ExperienceCard>
          <ExperienceCard
            company="Ontario Securities Commission"
            position="👨‍💻 IT Client Support Specialist Intern"
            time="🗓 May - Aug 2018"
            description={oscDescription}
            skills={oscSkills}
            logo={osc_logo}
            link="https://www.osc.ca/en">
          </ExperienceCard>
      </div>
    </div>
  );
}

export default Experience;
