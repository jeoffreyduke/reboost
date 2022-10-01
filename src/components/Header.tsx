import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap"; // we will use gsap for animations
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Header.css";
import Footer from "./Footer";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger); // register ScrollTrigger plugin

  const logoRef = useRef<HTMLImageElement>(null);
  const hamburgerRef = useRef<SVGSVGElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const dropIconRef = useRef<SVGSVGElement>(null);

  const [open, setOpen] = useState(false);

  // we are going to use scrolltrigger to animate the logo
  useEffect(() => {
    gsap.to(logoRef.current, {
      scrollTrigger: {
        trigger: document.body.querySelector(".secondSection"),
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      attr: { src: "/assets/blackLogo.png" },
    });
    // we are going to use scrolltrigger to animate the hamburger to black
    gsap.to(hamburgerRef.current?.children!, {
      scrollTrigger: {
        trigger: document.body.querySelector(".secondSection"),
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      fill: "#000",
    });
  }, []);

  // we will show the menu when the hamburger icon is clicked
  const handleShowNav = () => {
    gsap.to(endRef.current, {
      duration: 0.4,
      x: -230,
      ease: "power3.inOut",
    });
    gsap.to(navRef.current, {
      duration: 0.4,
      width: window.innerWidth < 900 ? "100vw" : "32.5vw",
      ease: "power4.inOut",
    });
    gsap.to(closeRef.current, {
      duration: 0.8,
      display: "block",
      ease: "power4.inOut",
    });
  };

  // we will hide the menu when the close icon is clicked
  const handleHideNav = () => {
    gsap.to(endRef.current, {
      duration: 0.4,
      x: 0,
      ease: "power3.inOut",
    });
    gsap.to(navRef.current, {
      duration: 0.4,
      width: 0,
      ease: "power4.inOut",
    });
    gsap.to(closeRef.current, {
      duration: 0.2,
      display: "none",
      ease: "power4.inOut",
    });
  };

  // we will show the dropdown menu when the dropdown icon is clicked
  const handleDropDown = () => {
    setOpen(!open);

    // if the dropdown menu is open, we will hide it, otherwise we will show it
    if (!open) {
      gsap.to(dropDownRef.current, {
        duration: 0.3,
        display: "block",
        ease: "power4.inOut",
      });
      gsap.to(dropIconRef.current, {
        duration: 0.3,
        rotate: 180,
        ease: "power4.inOut",
      });
    } else if (open) {
      gsap.to(dropDownRef.current, {
        duration: 0.3,
        display: "none",
        ease: "power4.inOut",
      });
      gsap.to(dropIconRef.current, {
        duration: 0.3,
        rotate: 0,
        ease: "power4.inOut",
      });
    }
  };

  return (
    <header>
      <div className="logo">
        <img src="/assets/logo.png" alt="logo" ref={logoRef} />
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
            onClick={handleShowNav}
            ref={hamburgerRef}
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
        <div className="close" onClick={handleHideNav} ref={closeRef}>
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="29.8834"
              y1="0.883884"
              x2="0.88422"
              y2="29.8831"
              stroke="white"
              stroke-width="2.5"
            />
            <line
              x1="0.883883"
              y1="1.23819"
              x2="29.8831"
              y2="30.2374"
              stroke="white"
              stroke-width="2.5"
            />
          </svg>
        </div>
        <ul>
          <li>Home</li>
          <li onClick={handleDropDown}>
            Services
            <span>
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ref={dropIconRef}
              >
                <path
                  d="M2 2L10 10L18 2"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <div className="dropDown" ref={dropDownRef}>
              <p>UI/UX Design</p>
              <p>Web Development</p>
              <p>Branding & Social Media</p>
              <p>SEO & Copywriting</p>
            </div>
          </li>
          <li>About Us</li>
          <li>Work</li>
          <li>Career</li>
          <li>Sign Up / Login</li>
        </ul>

        <Footer />
      </nav>
    </header>
  );
};

export default Header;
