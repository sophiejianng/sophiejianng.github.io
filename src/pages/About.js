import React from "react";
import "./About.css";
import me from "../assets/about_me.png";

function About() {
  return (
    <div className="About fade-in-up">
      <div className="about-image">
        <img
          src={me}
          alt="this should be me!"
        ></img>
      </div>
      <div className="about-text-content">
        <div className="about-title">
          a little bit about me
        </div>
        <div className="about-blurb">
          <p>I am currently a fifth year computer science student studying at the
            <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link"
            > University of Waterloo</a>. I'm a big fan of learning and am always ready to take on new challenges!
          </p>
          <p>             
            I love the process of creating and bringing ideas to life. That's how I discovered the world of software development! With just a laptop, you can create almost anything. The entire world is at your fingertips and I am so <span className="italics">so</span> excited to be a part of it. 
            {/* I would love to give everything a try -- specific items on my bucket list include working in the fintech industry, developing for the social good, dabbling in some design, and perhaps taking a stab at product management. */}
          </p>
          <p>
            Outside of school and software, I like to enjoy my time playing badminton, hiking with friends, trying out new snacks, updating my music playlists, and voluntarily falling down the Wikipedia rabbit hole <span role="img" aria-label="sweat-smile">  😅</span>
          </p>
        </div>
      </div>
    </div>
  );

}

export default About;