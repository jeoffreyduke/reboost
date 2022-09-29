import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">logo</div>
      <div className="headerEnd">
        <div className="contact">
          <button>Contact</button>
        </div>
        <div className="navSection">
          ham
          <nav></nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
