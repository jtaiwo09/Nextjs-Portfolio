import React from "react";

const Card = ({ skill }) => {
  return (
    <div className="p-[15px] cursor-pointer bg-card-bg rounded-[5px] shadow-box-shadow relative grid place-items-center transition-all duration-[250ms] skill-container after:content-[''] after:absolute after:h-[2px] after:top-0 after:left-0 after:w-0 after:bg-color-tem after:transition-[all_2s_linear] after:duration-[0.5s] after:block after:rounded-[5px] hover:after:w-full hover:after:-translate-y-[10px]">
      <span className="text-[2.5rem] text-color-tem">{skill.icon}</span>
      <span className="block text-[0.875rem] uppercase mt-2.5 font-medium text-hover-color ">
        {skill.spanText}
      </span>
    </div>
  );
};

export default Card;
