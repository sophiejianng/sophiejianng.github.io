import React from "react";
import "./Home.css";
import profile from "../assets/home_profile.png";
import MailIcon from "../components/icons/MailIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon"

function Home() {
  return (
    <div className="Home fade-in-up"> 
      <div className="home-profile">
        <img
          src={profile}
          alt="oops my face should be here!"
        ></img>
      </div>
      <div className="home-text-content">
        <div className="home-title">
          <span className="highlight">hey there 
              <span role="img" aria-label="wave">  👋</span>
            </span>   
        </div>
        <div className="home-blurb">
          I'm Sophie! I'm currently a fourth year computer science student at the University of Waterloo, interested in all things software and always on the lookout for new learning opportunities. Right now, I am on the search for <span className="bold-text">Fall 2021 internship</span> opportunities!
        </div>
        <div className="home-icons">
          <a href="mailto:ss3jiang@edu.uwaterloo.ca">
            <MailIcon className="icon"/>
          </a>
          <a href="https://www.linkedin.com/in/sophiejianng/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="icon"/>
          </a>
          <a href="https://github.com/sophiejianng" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
