import { skillSet } from "@/data/data";
import React from "react";
import Card from "./card";
import Fade from "react-reveal/Fade";

const SkillCards = () => {
  return (
    <div className="py-[50px] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] auto-rows-auto gap-[2rem]">
      {skillSet.map((skill, i) => (
        <Fade top left delay={i * 200} duration={1000} key={i}>
          <Card skill={skill} key={i} />
        </Fade>
      ))}
    </div>
  );
};

export default SkillCards;
