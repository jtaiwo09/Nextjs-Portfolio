import React, { useEffect, useState } from "react";
import Audio from "./audio";
import MobileNav from "./mobileNav";

const Navigation = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setTop(document.documentElement.scrollTop || document.body.scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);
  return (
    <div
      className={`${
        top > 60 && `shadow-lg bg-[#fff]/10`
      } fixed h-[60px] flex px-5 items-center justify-between z-20 w-full sm:hidden backdrop-blur-sm transition-all duration-500`}
    >
      <Audio propClass="w-fit" />
      <MobileNav />
    </div>
  );
};

export default Navigation;
