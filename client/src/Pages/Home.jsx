import React, { useRef } from "react";
import Banner from "../components/Home/Banner";
import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import Testimonial from "../components/Testimonial/Testimonial";
import CallToAction from "../components/Call to action/CallToAction";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const featureRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Banner />

      {/* pass refs to Hero */}
      <div className="flex flex-col gap-4">
        <Hero
          onFeatureClick={() =>
            featureRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onTestimonialClick={() =>
            testimonialRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onContactClick={() =>
            footerRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />

        {/* attach refs to sections */}
        <div ref={featureRef}>
          <Feature />
        </div>

        <div className=" mb-8 " ref={testimonialRef}>
          <Testimonial />
        </div>

        <div className="" ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
