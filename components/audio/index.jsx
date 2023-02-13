import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import useSound from "use-sound";

const Audio = () => {
  const [value, setValue] = useState(false);
  const [playClick] = useSound("/sounds/click.wav", { volume: 0.2 });
  const [playSound, { stop }] = useSound("/sounds/sound-1.mp3", {
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
    <div className="fixed top-[3%] sm:top-[4%] left-[4%] sm:right-[4%] z-10">
      <div className="flex w-fit ml-auto items-center">
        <div className="icon">
          {value ? (
            <RxSpeakerLoud className="text-[24px] switch__color" />
          ) : (
            <RxSpeakerOff className="text-[24px] text-[#ccc]" />
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
                ? "before:!content-['ON'] switch__bg"
                : "before:!content-['OFF']"
            } before:flex before:justify-center before:text-yellow-600 text-[10px] before:items-center before:shadow-lg`}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default Audio;
