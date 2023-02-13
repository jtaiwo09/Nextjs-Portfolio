import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { sideBarMenu, socialIcons } from "@/data/data";
import { useRouter } from "next/router";

const variants = {
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.3 },
  },
  closed: { opacity: 0, x: "100%", y: "-100%", transition: { duration: 0.3 } },
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  return (
    <div className="relative sm:hidden z-[1000]">
      <div
        onClick={() => setOpen((open) => !open)}
        className={`w-[40px] h-[40px] p-2 flex justify-center items-center fixed top-[10px] right-[10px] z-[100] cursor-pointer`}
      >
        <span
          className={`z-[1200] nav__toggler bg-color-tem before:bg-color-tem after:bg-color-tem h-[2px] w-[24px] switch__bg inline-block relative before:content-[''] before:absolute before:h-[2px] before:w-[60%] before:-translate-y-2 after:content-[''] after:absolute after:h-[2px] after:w-[60%] after:translate-y-2 after:right-0 transition-all before:duration-[0.3s] after:duration-[0.3s] ${
            open &&
            "before:!w-[24px] before:!translate-y-0 after:!translate-y-0 before:rotate-[45deg] after:!w-[24px] after:rotate-[-45deg] !bg-transparent"
          }`}
        ></span>
      </div>
      <motion.ul
        onClick={() => setOpen((open) => !open)}
        animate={open ? "open" : "closed"}
        variants={variants}
        className="fixed top-0 left-0 w-full  h-screen bg-hover-color text-primary-bg z-10 flex flex-col justify-center items-center"
      >
        {sideBarMenu.map(({ text, url, name }, index) => (
          <li key={index} className="text-[20px] mb-3 last:mb-0">
            <Link
              href={url}
              className={`${
                (route.pathname === url || route.pathname.includes(name)) &&
                "active-links"
              } text-primary-bg`}
              passHref
            >
              {text}
            </Link>
          </li>
        ))}
        <ul className="flex gap-3 mt-5">
          {socialIcons.map(({ url, icon }, index) => (
            <li key={index}>
              <Link href={url}>{icon}</Link>
            </li>
          ))}
        </ul>
      </motion.ul>
    </div>
  );
};

export default MobileNav;
