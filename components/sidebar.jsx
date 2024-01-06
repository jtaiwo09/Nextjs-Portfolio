import Link from "next/link";
import React from "react";
import Profile from "@/public/jtk-profile.jpeg";
import Image from "next/image";
import { sideBarMenu, socialIcons } from "@/data/data";
import { useRouter } from "next/router";

const Sidebar = () => {
  const route = useRouter();

  return (
    <aside className="hidden sm:block w-full max-w-[150px] h-full fixed bg-sideBar-bg top-0 left-0 z-[3] transition-[all_0.3s_cubic-bezier(0.175, 0.885, 0.32, 1.275)] translate-x-0 after:content[''] after:absolute after:w-full after:h-[180px] after:top-0 after:left-0 after:bg-typical-color">
      <div className="w-[80%] min-h-[90vh] overflow-y-auto m-auto flex flex-col justify-between">
        <Link
          href="/"
          className="flex flex-col items-center justify-center pt-[30px] z-[2] leading-[4rem]"
        >
          <Image
            src={Profile}
            alt="profile"
            className="w-[100px] h-[100px] object-cover object-[6px_center] bg-white rounded-full"
          />
          <span className="text-white switch__color">Taiwo J.</span>
        </Link>
        <ul className="">
          {sideBarMenu.map(({ text, url, icon, name }, index) => (
            <li key={index} className="leading-[2.8] relative">
              <Link
                href={url}
                className={`flex items-center transition-[all_250ms_linear] ${
                  route.pathname === url || route.pathname.includes(name)
                    ? "active-links"
                    : "nav__links"
                }  `}
                passHref
              >
                <>
                  {icon}
                  {text}
                </>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 flex-wrap">
          {socialIcons.map(({ icon, url }, index) => (
            <a key={index} href={url} target="_blank">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
