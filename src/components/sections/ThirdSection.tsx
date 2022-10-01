import React, { useState, useRef } from "react";
import gsap from "gsap";

const ThirdSection = () => {
  // we will create the slideshow here
  const [currentImage, setCurrentImage] = useState(0);

  const projectDisplayRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      title: "Bluvows.com",
      src: "/assets/1.jpg",
    },
    {
      title: "Rayandates.com",
      src: "/assets/2.jpg",
    },
    {
      title: "Mahawib",
      src: "/assets/3.jpg",
    },
    {
      title: "Danash",
      src: "/assets/4.jpg",
    },
  ];

  const nextImage = () => {
    gsap.fromTo(
      projectDisplayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.inOut" }
    );

    if (currentImage === images.length - 1) setCurrentImage(0);
    else setCurrentImage(currentImage + 1);
  };

  const prevImage = () => {
    gsap.fromTo(
      projectDisplayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.inOut" }
    );

    if (currentImage === 0) setCurrentImage(images.length - 1);
    else setCurrentImage(currentImage - 1);
  };

  return (
    <section className="thirdSection">
      <div className="thirdSectionCon">
        <div className="thirdSectionHeader">
          <h2>Our Work</h2>
          <div className="controls">
            <span onClick={prevImage}>
              <svg
                width="16"
                height="29"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 2L2 14.5L14.5 27"
                  stroke="black"
                  stroke-width="2.34375"
                  stroke-linecap="round"
                />
              </svg>
            </span>

            <span onClick={nextImage}>
              <svg
                width="17"
                height="29"
                viewBox="0 0 17 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.09375 27L14.5938 14.5L2.09375 2"
                  stroke="black"
                  stroke-width="2.34375"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="projectDisplayCon">
          <div
            className="projectDisplay"
            style={{
              backgroundImage: `url(${images[currentImage].src})`,
            }}
            ref={projectDisplayRef}
          >
            <div className="details">
              <p>Case Study</p>
              <p className="projectName">{images[currentImage].title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
