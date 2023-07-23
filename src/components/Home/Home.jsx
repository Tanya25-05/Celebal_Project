import React from "react";
import AboutCard from "../AboutUs/AboutCard";
import HeadBlog from "./HeadBlog";
import HeadAbout from "./HeadAbout";
import Hero from "./Hero/Hero";
import HeadPrice from "./HeadPrice";
import Testimonal from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HeadAbout />
      <Testimonal />
      <HeadBlog />
      <HeadPrice />
    </>
  );
};

export default Home;
