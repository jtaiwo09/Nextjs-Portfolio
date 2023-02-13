import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs";

import { BsXLg } from "react-icons/bs";
import useGlobalContext from "@/hooks/contextApi";
import ClickAwayListener from "react-click-away-listener";

const ThemeTemplate = React.memo(() => {
  const {
    isTemplateOpen,
    openTemplate,
    handleTheme,
    closeTemplate,
    changeTemp,
    handleTemp,
    colorTheme,
  } = useGlobalContext();

  const handle = () => {
    if (isTemplateOpen) {
      closeTemplate();
    } else {
      openTemplate();
    }
  };

  return (
    <>
      <ClickAwayListener
        onClickAway={(e) => {
          e.stopPropagation();
          closeTemplate();
        }}
      >
        <div
          className="fixed right-[40px] bottom-[30px] cursor-pointer sm:bg-primary-bg p-2.5 sm:rounded-[50%_50%_0] sm:shadow-box-shadow z-[10]"
          onClick={openTemplate}
        >
          <FiSettings className="text-[1.6rem] sm:text-[2.25rem] text-color-tem transition-[all_0.5s_linear] switch__color settings-spin" />
        </div>
      </ClickAwayListener>

      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`w-auto h-auto fixed bottom-[230px] right-0 bg-theme-wrapper-bg rounded-[50px_0_0_20px] shadow-box-shadow transition-[all_350ms_cubic-bezier(0,0.54,1,0.13)] p-[30px] flex flex-col z-[998] ${
          isTemplateOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <div className="mb-[30px] flex justify-between">
          <span className="text-[1rem] font-medium text-primary-color">
            Theme Template
          </span>
          <span className="text-[20px] font-medium text-primary-color">
            <BsXLg
              onClick={closeTemplate}
              className="text-5 text-light-bg cursor-pointer switch__color"
            />
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div
            className={`group w-[60px] h-[60px] text-[1.5rem] grid place-items-center rounded-[10px] cursor-pointer text-[#cc6c06] transition-[250ms_linear] shadow-box-shadow ${
              colorTheme === "light-mode"
                ? "active-mode switch__border-color"
                : ""
            }`}
            onClick={() => handleTheme("light-mode")}
          >
            <BsFillSunFill className="transition-[all_0.2s_cubic-bezier(0.8,0.84,0.44,1)] group-hover:rotate-[360deg] switch__color" />
          </div>
          <div
            className={`group w-[60px] h-[60px] ml-5 text-[1.5rem] grid place-items-center rounded-[10px] cursor-pointer text-[#cc6c06] transition-[250ms_linear] shadow-box-shadow ${
              colorTheme === "dark-mode"
                ? "active-mode switch__border-color"
                : ""
            }`}
            onClick={() => handleTheme("dark-mode")}
          >
            <BsMoonStars className="transition-[all_0.2s_cubic-bezier(0.8,0.84,0.44,1)] group-hover:rotate-[360deg] switch__color " />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items gap-[1rem]">
          <div
            className={`template ${
              changeTemp === "template-1" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-1")}
          >
            <div className="bg-[rgb(16,219,246)] template-inner"></div>
          </div>
          <div
            className={`template ${
              changeTemp === "template-2" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-2")}
          >
            <div className="bg-[rgb(53,245,136)] template-inner"></div>
          </div>
          <div
            className={`template ${
              changeTemp === "template-3" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-3")}
          >
            <div className="bg-[rgb(255,73,200)] template-inner "></div>
          </div>
          <div
            className={`template ${
              changeTemp === "template-4" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-4")}
          >
            <div className="bg-[rgb(240,93,70)] template-inner"></div>
          </div>
          <div
            className={`template ${
              changeTemp === "template-5" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-5")}
          >
            <div className="bg-[#fdae38] template-inner"></div>
          </div>
          <div
            className={`template ${
              changeTemp === "template-6" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-6")}
          >
            <div className="bg-gradient-to-tr from-[#cc6c06] to-[#2d2b2b] template-inner"></div>
          </div>

          <div
            className={`template ${
              changeTemp === "template-7" ? "switch__border-color" : ""
            }`}
            onClick={() => handleTemp("template-7")}
          >
            <div className="bg-[#a37346] template-inner"></div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ThemeTemplate;
