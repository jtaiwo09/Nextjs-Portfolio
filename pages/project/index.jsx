import { projects } from "@/data/data";
import React from "react";
import SingleProject from "../../components/singleProject";
import Title from "@/components/title";
import Fade from "react-reveal/Fade";
import Head from "next/head";

const title = ["P", "r", "o", "j", "e", "c", "t", "s"];

const Project = () => {
  return (
    <>
      <Head>
        <title>JTK | Projects</title>
      </Head>
      <section className="section__padding min-h-screen relative bg-primary-bg">
        <div className="fake-big">Project</div>
        <div className="py-[100px]">
          <Title title={title} />
          <Fade bottom duration={1200} delay={100}>
            <p className="mb-10 text-sm">
              Here are some selected and challenging personal projects that I
              have worked on so far which enabled me to level up my skills to a
              fascinating point that makes me feel confident in tackling more
              difficult challenges.
            </p>
          </Fade>

          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-3 gap-y-5 sm:gap-3">
            {projects.map((project, i) => (
              <Fade bottom delay={i * 200} duration={1200} key={i}>
                <SingleProject project={project} />
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
