import React from "react";

// react icons
import { FiGrid, FiLinkedin, FiYoutube, FiFigma } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from "react-icons/bs";
import { RiContactsLine, RiReactjsLine } from "react-icons/ri";
import { SiSass, SiJquery, SiExpress, SiRedux } from "react-icons/si";

import { TbWorld, TbBrandNextjs } from "react-icons/tb";

import { GrGithub, GrTwitter, GrInstagram } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaGit } from "react-icons/fa";

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: "Home",
    icon: <FiGrid className="link-icon switch__color" />,
    url: "/",
    name: "home",
  },
  {
    text: "About",
    icon: <BsPersonLinesFill className="link-icon switch__color" />,
    url: "/about",
  },
  {
    text: "Projects",
    icon: <VscProject className="link-icon switch__color" />,
    url: "/project",
    name: "project",
  },
  // {
  //   text: "Blog",
  //   icon: (
  //     <ImBlogger
  //       className="link-icon switch__color"
  //       style={{ fill: "current", stroke: "current" }}
  //     />
  //   ),
  //   url: "/blog",
  // },
  {
    text: "Contacts",
    icon: <RiContactsLine className="link-icon switch__color" />,
    url: "/contact",
    name: "contact",
  },
];
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: "https://github.com/jtaiwo09",
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: "https://twitter.com/KelvinJoseph10",
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: "https://www.instagram.com/taiwojoseph65/",
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: "https://www.linkedin.com/in/taiwo-joseph-55214b7b/",
  },
];

//skills
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: "JAVASCRIPT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: "SASS",
    url: "https://github.com/jtaiwo09",
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: "GIT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: "GITHUB",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: "REACT JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
  },
  {
    icon: <TbBrandNextjs className="skills-icon switch__color" />,
    spanText: "Next JS",
    url: "https://nextjs.org/",
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: "Redux",
    url: "https://redux.js.org/introduction/getting-started",
  },
  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: "NODE",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: "EXPRESS JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express",
  },
  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: "MONGO DB",
    url: "https://github.com/jtaiwo09",
  },
];

const projects = [
  {
    id: 1,
    name: "Spleet africa",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut vitae neque dolorum deleniti atque nisi ullam rerum ducimus aspernatur!",
    imgUrl:
      "https://res.cloudinary.com/citi-tasker/image/upload/v1665488927/spleet-nw_gfa8jg.jpg",
    website: {
      icon: <TbWorld />,
      url: "https://new-dev.spleet.africa/",
    },
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/jtaiwo09",
    },
  },
  {
    id: 2,
    name: "JTK Sneakers Store",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut vitae neque dolorum deleniti atque nisi ullam rerum ducimus aspernatur!",
    imgUrl:
      "https://res.cloudinary.com/citi-tasker/image/upload/v1662047289/jtk-store-nw-1_iqlri5.jpg",
    website: {
      icon: <TbWorld />,
      url: " https://jtk-sneakers.netlify.app/",
    },
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/jtaiwo09",
    },
  },
  {
    id: 3,
    name: "Beach Resort",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut vitae neque dolorum deleniti atque nisi ullam rerum ducimus aspernatur!",
    imgUrl:
      "https://res.cloudinary.com/citi-tasker/image/upload/v1652804626/beachResort_u6yhjz.png",
    website: {
      icon: <TbWorld />,
      url: " https://beach-resort007.netlify.app",
    },
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/jtaiwo09",
    },
  },
  {
    id: 4,
    name: "Alan News",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut vitae neque dolorum deleniti atque nisi ullam rerum ducimus aspernatur!",
    imgUrl:
      "https://res.cloudinary.com/citi-tasker/image/upload/v1652804576/alan_pok3up.png",
    website: {
      icon: <TbWorld />,
      url: "https://ai-news-application.netlify.app",
    },
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/jtaiwo09",
    },
  },
];

export { sideBarMenu, socialIcons, skillSet, projects };
