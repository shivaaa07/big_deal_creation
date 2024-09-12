import React from "react";
import AboutBanner from "../components/AboutBanner";

const About = () => {
  const aboutInfo = [
    {
      title: "The Big Deal Creation Story",
      firstPara:
        "Big Ceal Creation was founded by a Devendra Sahani and Ravindra Mishra from Bombay - A graduate from the life sciences field with minimal experience in software and even less in print joined forces with a group of passionate individuals. The growing teamsoon included experts such as a seasoned print engineer and a pre-press specialist, bringing much-needed industry knowledge. United by a common goal, the founding team was motivated by the gap they saw in the market: a lack of accessible, high-quality print services tailored to the needs of small businesses and individual customers, whose orders often fell short of the volume required by traditional print providers.",
    },
  ];
  return (
    <section>
      <AboutBanner />
      <div className="container mx-auto">
        <div className="aboutInfo px-4 lg:px-0">
          <h4 className="font-poppins leading-10">
            Welcome to Big Deal Creation! We make printing and gifting easy.
          </h4>
          <p className="leading-6">
            We are Mumbai's largest print-on-demand platform with a vision to be
            the India's largest. We have over 5 years of experience in the print
            industry and have serviced more than 1000 customers online &
            offline.
          </p>
          <p className="leading-10">
            Small, medium and large enterprises, creators and consumers today
            depend on Big Deal Creation to deliver high-quality print services
            and ship across Maharastra All Cities.
          </p>
          <div className="story-wrapper">
            <h5 className="text-base sm:text-2xl lg:text-3xl font-semibold font-protest leading-10 mt-4 mb-2">
              The Big Deal Creation Story
            </h5>
            <p className="text-xs sm:text-base font-poppins lg:leading-8">
              Big Ceal Creation was founded by a Devendra Sahani and Ravindra
              Mishra from Bombay - A graduate from the life sciences field with
              minimal experience in software and even less in print joined
              forces with a group of passionate individuals. The growing team
              soon included experts such as a seasoned print engineer and a
              pre-press specialist, bringing much-needed industry knowledge.
              United by a common goal, the founding team was motivated by the
              gap they saw in the market: a lack of accessible, high-quality
              print services tailored to the needs of small businesses and
              individual customers, whose orders often fell short of the volume
              required by traditional print providers.
            </p>
            <p className="text-xs sm:text-base font-poppins lg:leading-8 mt-4">
              What began as a print shop exclusively serving businesses soon
              evolved into a comprehensive printing service for all. Driven by a
              vision to create a space where passionate people deliver
              exceptional experiences, Big Deal Creation was founded to meet the
              printing needs of everyone, regardless of order size. Today, it
              stands as a trusted name in the industry, recognized for its
              unwavering commitment to customer satisfaction and high-quality,
              vibrant printing solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
