import React, { useState } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import resume from "../assets/resume.pdf";
import logo from "../assets/logo.png";
import logoHover from "../assets/logo_hover.png"
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [homePage, setHomePage] = useState("active");
  const [aboutPage, setAboutPage] = useState("");
  const [experiencePage, setExperiencePage] = useState("");
  const setActive = (page) => {
    setHomePage("");
    setAboutPage("");
    setExperiencePage("");
    if (page === "homePage") {
      setHomePage("active");
    } else if (page === "aboutPage") {
      setAboutPage("active");
    } else if (page === "experiencePage") {
      setExperiencePage("active");
    }
    setIsOpen(false);
  };

  return (
    <Router>
      <div>
        <Navbar light expand="md" fixed="top">
          <NavLink href="/" id="logo-link">
            <img
              src={logo}
              className="logo"
              alt="logo"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                });
                setActive("homePage");
              }}
              onMouseOver={e => (e.currentTarget.src = logoHover)}
              onMouseLeave={e => (e.currentTarget.src = logo)}
            ></img>
          </NavLink>
          <NavbarToggler onClick={toggle} id="toggle-icon" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="rightNav ml-auto" navbar>
              <NavItem>
                <NavLink href="#about" onClick={() => setActive("aboutPage")}>
                  <span className={"about-link " + aboutPage}>
                    about
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience" onClick={() => setActive("experiencePage")}>
                  <span className={"experience-link " + experiencePage}>
                    experience
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={resume} target="_blank">
                  <span className={"resume-link"}>
                    resume
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/" component={Home} />
      </Switch>
    </Router >
  );
}

export default NavBar;
