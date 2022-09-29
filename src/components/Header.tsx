import React, { useState, useRef } from "react";
import gsap from "gsap"; // we will use gsap for animations
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // we will show the menu when the hamburger icon is clicked
  const handleShowNav = () => {
    gsap.to(endRef.current, {
      duration: 0.5,
      x: -230,
      ease: "power3.inOut",
    });
    gsap.to(navRef.current, {
      duration: 0.4,
      width: "32.5vw",
      ease: "power4.inOut",
    });

    setMenuOpen(true);
  };

  // we will hide the menu when the close icon is clicked
  const handleHideNav = () => {
    gsap.to(endRef.current, {
      duration: 0.5,
      x: 0,
      ease: "power3.inOut",
    });
    gsap.to(navRef.current, {
      duration: 0.4,
      width: 0,
      ease: "power4.inOut",
    });

    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div className="headerEnd" ref={endRef}>
        <div className="contact">
          <button>Contact</button>
        </div>
        <div className="navSection">
          <svg
            width="30"
            height="20"
            viewBox="0 0 30 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={menuOpen ? handleHideNav : handleShowNav}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 2.06897H0V0H30V2.06897Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 11.0345H0V8.96551H30V11.0345Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30 20H0V17.931H30V20Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <nav ref={navRef}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Work</li>
          <li>Career</li>
          <li>Sign Up / Login</li>
        </ul>

        <footer></footer>
      </nav>
    </header>
  );
};

export default Header;
