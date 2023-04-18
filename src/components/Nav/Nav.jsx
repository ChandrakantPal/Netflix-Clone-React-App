import React, { useState, useEffect } from "react";
import "./Nav.css";
import netflixLogo from "../../assets/netflix.svg";
import avator from "../../assets/avator.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflixLogo} alt="Netflix Logo" />
      <img className="nav__avatar" src={avator} alt="avatar" />
    </nav>
  );
}

export default Nav;
