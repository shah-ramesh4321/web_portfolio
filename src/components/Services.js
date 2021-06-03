import React from "react";
import "./Services.css";
import { Card } from "./Card";
import { Title } from "./Title";

export const Services = () => {
  let development = {
    title: "development",
    imgUrl: "/images/desktop-icon.svg",
    desc: "Building a custom tailored solution based on your technical specification.",
  };
  let optimization = {
    title: "SEO optimization",
    imgUrl: "/images/rocket.svg",
    desc: "Audit your website, perform technical improvements and write meta tags.",
  };
  let database = {
    title: "database",
    imgUrl: "/images/database.svg",
    desc: "SSL certificate installation and configuration, redirection configuration on your website.",
  };
  let dataSecurity = {
    title: "data Security",
    imgUrl: "/images/shield.svg",
    desc: "Strategy with leading data protection technology to safeguard your critical data.",
  };
  return (
    <>
      <div className="services">
        <h3>
          <Title title={"my services"} />
        </h3>
        <div className="first-row">
          <Card {...development} />
          <Card {...optimization} />
        </div>
        <div className="second-row">
          <Card {...database} />
          <Card {...dataSecurity} />
        </div>
      </div>
    </>
  );
};
