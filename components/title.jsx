import React from "react";
import { motion } from "framer-motion";

const Title = ({ title }) => {
  return (
    <h1 className="tracking-[1px] leading-[1] mb-5 text-[2rem] xs:text-[3rem] font-bold font-eczar text-color-tem hover:text-hover-color">
      {title.map((char, index) => (
        <motion.span
          key={index}
          className="text-animate"
          initial={{ translateX: -20, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.2,
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default Title;
