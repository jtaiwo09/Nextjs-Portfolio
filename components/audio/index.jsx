import React, { useState } from "react";
import style from "./styles.module.css";
import { MdMusicOff } from "react-icons/md";
import { HiOutlineMusicNote } from "react-icons/hi";
import useSound from "use-sound";

const Audio = ({ propClass }) => {
  const [value, setValue] = useState(false);
  const [playClick] = useSound("/sounds/click.wav", { volume: 0.2 });
  const [playSound, { stop }] = useSound("/sounds/sound-2.mp3", {
    volume: 0.5,
    onend: function () {
      setValue(false);
      playClick();
    },
  });

  const handlePlay = () => {
    if (!value) {
      setTimeout(playSound, 500);
    } else {
      setTimeout(() => {
        playClick();
        stop();
      }, 500);
    }
  };

  // useEffect(() => {
  //   handlePlay();
  // }, [value]);

  return (
    <div className={`${propClass}`}>
      <div className="flex w-fit ml-auto items-center">
        <div className="icon">
          {value ? (
            <HiOutlineMusicNote className="text-[24px] switch__color" />
          ) : (
            <MdMusicOff className="text-[24px] text-[#ccc]" />
          )}
        </div>
        <label className={`${style.switch} group`} onClick={handlePlay}>
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => setValue(e.target.checked)}
          />
          <span
            className={`${style.slider} ${style.round} ${
              value
                ? "bg-color-tem before:!content-['ON'] switch__bg"
                : "before:!content-['OFF']"
            } before:flex before:justify-center before:text-yellow-600 text-[10px] before:items-center before:shadow-lg`}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default Audio;
