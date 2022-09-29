import React from "react";
import "../styles/ServiceBox.css";

// we will pass the props to the ServiceBox components while specifying the types of the props
interface ServiceBoxProps {
  title: string;
  text: string;
  iconSrc: string;
}

const ServiceBox = ({ title, text, iconSrc }: ServiceBoxProps) => {
  return (
    <div className="ServiceBox">
      <div className="serviceBoxCon">
        <div className="boxTitle">
          <h3>{title}</h3>
          <img src={iconSrc} alt="icon" />
        </div>
        <div className="boxTxt">{text}</div>
        <div className="boxBtn">
          <button>More info</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
