import React from "react";
import Footer from "../Footer";

const SixthSection = () => {
  return (
    <section className="sixthSection">
      <div className="sixthSectionCon">
        <div className="subscribe">
          <p>Subscribe here for news and updates:</p>
          <form>
            <input type="text" placeholder="Name" id="name" />
            <br />
            <input type="text" placeholder="E-mail address" id="email" />
            <button className="subBtn">Subscribe</button>
          </form>

          <div className="footerImg">
            <img src="/assets/footerLogo.png" alt="" />
          </div>
        </div>

        <div className="identity">
          <img src="/assets/footerLogoMain.png" alt="footerLogo" />
          <div className="socials">
            <Footer />
          </div>
        </div>
        <div className="footerMenu">
          <ul>
            <p>Explore</p>
            <li>About</li>
            <li>Our Work</li>
            <li>Career</li>
          </ul>

          <div className="copyright">
            Copyright ©2022 | All rights reserved | Site by Reboost
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
