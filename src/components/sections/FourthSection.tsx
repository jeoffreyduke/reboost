import React from "react";

const FourthSection = () => {
  return (
    <section className="fourthSection">
      <div className="aboutUs">
        <h2>About us</h2>
        <p>
          An international, multicultural and multidisciplinary team with
          expertise in web development, design, marketing, PR and SEO will live
          up to the expectations and deliver beyond your imaginations.{" "}
        </p>

        <p>
          The organisation's culture is based on the belief that employees need
          a ‘Reboost’ too so we not only provide them with an opportunity to
          work but to learn too. Founder Melhem Dirani and Project Manager Ryan
          Slayen have successfully created a healthy, collaborative and
          competitive workspace where the team can bring out-of-the-box ideas
          that are later refined by constructive discussions. We come up with
          innovative ideas to give your business a push to stand out.
        </p>

        <p>
          Our experts can provide all the solutions you need for your business
          and we would love it if we could be of any help to you. What are you
          waiting for? Contact us for a quick boost.{" "}
        </p>

        <div className="aboutUsBtnCon">
          <button className="aboutUsBtn">More Info...</button>
        </div>
      </div>
      <div className="aboutLogo">
        <img src="/assets/aboutLogo.png" alt="aboutLogo" />
      </div>
    </section>
  );
};

export default FourthSection;
