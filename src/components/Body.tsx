import React from "react";
import "../styles/Body.css";
import FifthSection from "./sections/FifthSection";
import FirstSection from "./sections/FirstSection";
import FourthSection from "./sections/FourthSection";
import SecondSection from "./sections/SecondSection";
import SixthSection from "./sections/SixthSection";
import ThirdSection from "./sections/ThirdSection";

const Body = () => {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </main>
  );
};

export default Body;
