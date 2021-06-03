import React from "react";
import "./About.css";
import { Title } from "./Title";

export const About = () => {
  return (
    <>
      <div className="about">
        <h2>
          <Title title={"about us"} />
        </h2>
        <h5>10 years / Lviv / Freelance</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          deleniti iusto accusantium itaque ratione at voluptas voluptatem odit?
          Magni consectetur numquam maiores iste, amet impedit non adipisci
          aliquam reiciendis! Modi!
        </p>
      </div>
    </>
  );
};
