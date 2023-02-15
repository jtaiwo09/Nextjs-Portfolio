import React from "react";

// react icons
import { FiGrid, FiLinkedin } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import { BsPersonLinesFill, BsGithub } from "react-icons/bs";
import { RiContactsLine, RiReactjsLine } from "react-icons/ri";
import { SiSass, SiExpress, SiRedux } from "react-icons/si";

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
    name: "Spleet Africa",
    desc: `<p className=''>Spleet is a one-stop shop for all and a complete rental solution for landlords and tenants - With Spleet you can lease your apartment, rent a space, take a rental loan, verify tenants and automatically collect rent with our rental management tools.</p>

    <p>Spleet platform allows Renters to find a home of their choice and with their flexible payment plan which could be monthly, quarterly, biannual or yearly.</p>
    
    <p>With Spleet Tenant verification is made easy. Spleet Verify provides landlords, property managers and real estate investors with real-time, detailed reports on prospective tenants. You get complete background checks, and other information to help you make the informed decision about who to rent to. Protect the value of your investment and safeguard against high-risk tenants, no more sleepless nights worrying about your property, when your tenant is ‘verified’ by Spleet Verify.</p>
    
    <p>Another rental solution built into the platform is the Rent Now Pay Later (RNPL). It a feature that give Renters access to low interest, no collateral loans, up to N3,000,000 to finance rent payments.</p>
    
    <p>I built the front-end of major apps from the ground up like the Landing Page, Market-Place where you users can find and filter spaces specific to their needs, I built the Renters and Landlords dashboard, the Admin dashboard, and also integrated the REST APIs which was based off of the API from our NodeJs backend</p>
    <p>The project was huge and housed hundreds of thousands of lines of code powered by multiple technologies like Vue, Nuxt, NodeJS, Sass, Tailwind, Vuex, VueRouter etc and we often had to re-evaluate strategies regarding certain topics like state management, performance and development workflow. I was able to work across different segments from design to DevOps to strategy and implementation.</p>
    
    <p>
    I was the Lead Frontend engineer so I got to work with other engineers and contractors on various tools. It certainly was a great learning experience.
    </p>`,
    imgUrl: [
      "v1668428578/sp1_xfj9bt.png",
      "v1668428579/sp2_rwyqyo.png",
      "v1668428576/sp3_x7ighp.png",
      "v1668428575/sp4_juzsr2.png",
      "v1668428575/sp7_gd44ds.png",
      "v1668428573/sp6_ontwv2.png",
      "v1668428575/sp5_ypxt2z.png",
    ],
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
    name: "CitiTasker Technology",
    desc: `<p>
    CitiTasker is a startup that aims to create a platform to increase transparency in the local community, help people connect with trusted tradesmen to get their tasks done and create working opportunities in the service economy.
    </p>
    
    <p>
    Nigeria’s gig economy is evolving with service marketplace for onsite and remote jobs. The evolving nature of the gig economy and emergence of new technologies can create new jobs that simply wouldn’t exist in the traditional frame of work. With our new technologies, CitiTasker allows users to post from simple to complex tasks on the platform and receive offers from trusted tradesmen willing to do the tasks.
    </p>
    
    <p>
    The company already had a web app but needed a professional to create an entirely new experience with the latest technologies to leverage speed and provide an optimal user experience. The web application is built with React Js as the frontend library and PHP/Laravel as the backend technology
    </p>
    
    <p>
    CitiTasker is still a work in project as the product hasn't made it yet to the real world and I absolutely hope that it does someday
    </p>`,
    imgUrl: [
      "v1668429137/ct1_obgfpq.png",
      "v1668429136/ct2_i6xerr.png",
      "v1668429131/ct3_hiaqev.png",
    ],
    website: {
      icon: <TbWorld />,
      url: "https://ai-news-application.netlify.app",
    },
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/jtaiwo09",
    },
  },
  {
    id: 3,
    name: "JTK Portfolio",
    desc: `<p>JTK Portfolio website is created to get a detailed information about who Taiwo Joseph is, his skills, experience and project he has executed. This portfolio is built with Next Js and tailwind CSS.</p>`,
    imgUrl: [
      "v1676497134/portfolio-home_d5b5qq.png",
      "v1676497948/portfolio-about_pcb0al.png",
      "v1676496822/portfolio-projects_va7ybw.png",
      "v1676498174/portfolio-contact_ujf8ox.png",
      // "v1676498320/portfolio-light_dpeosh.png",
    ],
    website: {
      icon: <TbWorld />,
      url: "https://jtk-sneakers.netlify.app/",
    },
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/jtaiwo09",
    },
  },
  {
    id: 4,
    name: "Beach Resort",
    desc: `<p>Coming Soon!!!</p>`,
    imgUrl: [
      "v1676499386/br-1_qditjf.png",
      "v1676499366/br-3_ziigk4.png",
      "v1676499362/br-4_og2zy6.png",
      "v1676499364/br-6_ngfrlf.png",
      "v1676499347/br-2_z3nnov.png",
    ],
    website: {
      icon: <TbWorld />,
      url: "https://beach-resort007.netlify.app",
    },
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/jtaiwo09",
    },
  },
];

export { sideBarMenu, socialIcons, skillSet, projects };
