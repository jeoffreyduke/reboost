import React from "react";
import ServiceBox from "../ServiceBox";

const SecondSection = () => {
  return (
    <section className="secondSection">
      <div className="secondSectionCon">
        <h2>What we do...</h2>
        <div className="services">Services</div>
        <div className="content">
          <ServiceBox
            title="UI/UX Design"
            text="Our design team has vast experience in designing apps 
          and B2B solutions and together we will create a system that 
          your users will love. Our experts smoothly blend into the 
          software development process to conveniently deliver the 
          products you want."
            iconSrc="/assets/uiIcon.svg"
          />
          <ServiceBox
            title="Web & Mobile App Development"
            text="The largest department of our organization contains expert 
          web developers who are anxiously waiting to work with you and turn 
          your website dream into a reality. We provide web development 
          services including a content management system (CMS), Informational 
          website or an e-commerce store, you name it and we create it. "
            iconSrc="/assets/webdevIcon.svg"
          />
          <ServiceBox
            title="Branding & Social Media"
            text="Our Marketing team makes efforts to nourish and support the unprecedented growth of your business. We believe in bringing your aspiring brand into reality and fanning the flames of the existing ones with aims, values and growth. We provide expertise in impressive branding, fascinating designs and extraordinary creativity to sky-rocket your brand."
            iconSrc="/assets/socialIcon.svg"
          />
          <ServiceBox
            title="SEO & Copywriting"
            text="Imaging, you have invested a good budget on the design, outlook and management of your website but still, you fail to get the engagement. Ever wondered why? This could be because of the unclear content available on the site that fails to get you loyal customers and increase your online visibility. For that, you need a professional team for publishing clear content that can not only bring you long-term customers but rank your brand higher on the search engine."
            iconSrc="/assets/seoIcon.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
