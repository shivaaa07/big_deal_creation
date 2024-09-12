import React from "react";
import AboutBanner from "../components/AboutBanner";
import Process from "../components/Process";

const About = () => {
  const aboutInfo = [
    {
      title: "The Big Deal Creation Story",
      firstPara:
        "Big Ceal Creation was founded by a Devendra Sahani and Ravindra Mishra from Bombay - A graduate from the life sciences field with minimal experience in software and even less in print joined forces with a group of passionate individuals. The growing teamsoon included experts such as a seasoned print engineer and a pre-press specialist, bringing much-needed industry knowledge. United by a common goal, the founding team was motivated by the gap they saw in the market: a lack of accessible, high-quality print services tailored to the needs of small businesses and individual customers, whose orders often fell short of the volume required by traditional print providers.",
      secondPara:
        "What began as a print shop exclusively serving businesses soon evolved into a comprehensive printing service for all. Driven by a vision to create a space where passionate people deliver exceptional experiences, Big Deal Creation was founded to meet the printing needs of everyone, regardless of order size. Today, it stands as a trusted name in the industry, recognized for its unwavering commitment to customer satisfaction and high-quality, vibrant printing solutions.",
    },
    {
      title: "What Does Big Deal Creation Do ?",
      firstPara:
        "Big Deal Creation is a one-stop retail chain offering comprehensive print and personalized gift services. Our mission is to simplify the printing process for both businesses and individuals. Whether you need business cards, letterheads, packaging, marketing brochures, or exhibition banners, we collaborate with you to bring your vision to life. We also provide a wide selection of templates for creating invitation cards, personalized gifts, and photo prints — all at competitive prices.",
      secondPara:
        "Our mission is two-fold: to put a smile on our customers' faces by making their printing experience effortless and enjoyable, and to achieve scalability and efficiency without ever compromising the quality of our service.",
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
          <p className="leading-6">
            Small, medium and large enterprises, creators and consumers today
            depend on Big Deal Creation to deliver high-quality print services
            and ship across Maharastra All Cities.
          </p>
          {aboutInfo.map((data, index) => (
            <div className="story-wrapper" key={index}>
              <h5 className="text-[22px] sm:text-2xl lg:text-3xl font-semibold font-protest leading-10 mt-4 mb-2">
                {data.title}
              </h5>
              <p className="text-base sm:text-base font-poppins lg:leading-8">
                {data.firstPara}
              </p>
              <p className="text-base sm:text-base font-poppins lg:leading-8 mt-4">
                {data.secondPara}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Process />
    </section>
  );
};

export default About;
