import Link from "next/link";
import React from "react";
import SkillCards from "@/components/skillCards";
import Title from "@/components/title";
import Fade from "react-reveal/Fade";
import ActionButton from "@/components/actionButton";
import Head from "next/head";

const title = ["A", "b", "o", "u", "t", " ", "&", "", "S", "k", "i", "l", "l"];

const about = [
  {
    id: 1,
    text: `I’m an ambitious Front-End Developer who's passionate about coding
        and looking for a role in the established IT company with the
        opportunity to work with the latest technologies on challenging
        and diverse projects.`,
  },
  {
    id: 2,
    text: `I currently work with Spleet Africa, a prop-tech company in Nigeria as a lead Frontend engineer. 
        I love to build cool UI effects, dynamic webpages
        with amazing animations and creating intuitive, dynamic user
        experiences. I also love to reach out to new opportunities accross
        the globe that will enhance my skills and get the opporutinity to
        work with other programmers as well`,
  },
  {
    id: 3,
    text: `If I could say one of the most interesting things about me, it's
    the fact that I'm always ready for any challenges that comes to my
    way. Here's my CV below for more details.`,
  },
];

const handleClick = (e) => {
  e.preventDefault();
  window.open("/assets/cv.pdf", "_blank");
};

const About = () => {
  return (
    <>
      <Head>
        <title>JTK | About</title>
      </Head>
      <section className="section__padding bg-primary-bg min-h-screen relative">
        <div className="fake-big">About</div>
        <div className="pt-[100px]">
          <Title title={title} />
          <Fade left cascade delay={500} duration={1000}>
            <div className="max-w-[600px] w-full">
              {about.map(({ text, id }) => {
                return (
                  <p className="" key={id}>
                    {text}
                  </p>
                );
              })}
              <ActionButton
                text="Download CV"
                type="button"
                handleClick={handleClick}
              />
            </div>
          </Fade>
          <SkillCards />
        </div>
      </section>
    </>
  );
};

export default About;
