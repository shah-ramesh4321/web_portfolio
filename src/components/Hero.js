import React from "react";
import "./Hero.css";
import { Title } from "./Title";

export const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-img">
          <img src="/images/ramesh.jpg" alt="" />
        </div>
        <div className="intro">
          <h3>
            <Title title={"Ramesh Kumar Shah"} />
          </h3>
          <h5>Developer</h5>
          <div className="social-logo">
            <img src="/images/facebook.svg" alt="" />
            <img src="/images/linkedin.svg" alt="" />
            <img src="/images/whatsapp.svg" alt="" />
            <img src="/images/instagram.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
