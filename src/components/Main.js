import React from "react";
import { About } from "./About";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Sidebar } from "./Sidebar";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="img-container">
        <Hero />
      </div>
      <div className="detail-container">
        <About />
        <Services />
      </div>
    </div>
  );
};
