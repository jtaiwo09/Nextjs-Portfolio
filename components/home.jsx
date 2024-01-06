import { motion } from "framer-motion";
import Button from "./button";
import Image from "next/image";
import Profile from "@/public/jtk-profile.jpeg";
import Fade from "react-reveal/Fade";

const name = [
  "I",
  "'",
  "m",
  " ",
  "T",
  "a",
  "i",
  "w",
  "o",
  " ",
  "J",
  "o",
  "s",
  "e",
  "p",
  "h",
];
const job = ["W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Home = () => {
  return (
    <section className="min-h-[100vh] flex items-center bg-primary-bg relative header__container section__padding">
      <div className="fake-big">Home</div>
      <main className="w-full">
        <div className="animate-wiggle sm:hidden mb-10 rounded-full overflow-hidden bg-color-tem switch__bg w-[230px] h-[230px] m-auto border-hover-color border-[5px] border-solid ">
          <Image
            src={Profile}
            alt="profile"
            className="w-full h-full object-cover object-[5px,center]"
          />
        </div>
        <div className="intro__page">
          <h1 className="tracking-[1px] cursor-default md:leading-[1] font-bold font-eczar text-color-tem text-[1.5rem] xs:text-[1.875rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem]">
            <motion.div
              className="my-3 switch__color"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {["H", "i", ",", " ", "👋"].map((char, index) => (
                <motion.span
                  key={index}
                  className="md:mb-6 text-animate"
                  variants={item}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {name.map((char, index) => (
                <motion.span
                  key={index}
                  className="md:mb-6 text-animate"
                  variants={item}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {job.map((char, index) => (
                <motion.span
                  key={index}
                  className="text-animate"
                  variants={item}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </h1>
          <Fade bottom delay={500}>
            <p className="tracking-wider xs:tracking-widest text-primary-color text-base xs:text-[18px] max-w-[400px] font-eczar md:my-[30px] tracking[1px] animate-[fadeIn_1s_1.4s_backwards]">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
          </Fade>
          <Fade bottom delay={800}>
            <Button text="Contact me" path="/contact" />
          </Fade>
        </div>
      </main>
    </section>
  );
};

export default Home;
