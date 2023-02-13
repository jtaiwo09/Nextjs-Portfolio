const { createContext, useContext, useState, useEffect } = require("react");
// import Click from "../public/sounds/click.wav";
import useSound from "use-sound";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("dark-mode");
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [changeTemp, setChangeTemp] = useState("template-1");
  const [play] = useSound("/sounds/click.wav", { volume: 0.25 });
  const [chirpPlay] = useSound("/sounds/chirp.wav", { volume: 0.8 });

  // dark mode and light mode functionality
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setColorTheme(currentTheme);
    }
  }, []);

  const handleTheme = (theme) => {
    play();
    setColorTheme(theme);
    localStorage.setItem("theme", theme);
  };

  // Theme template functionality
  useEffect(() => {
    const currentTheme = localStorage.getItem("temp");
    setChangeTemp(currentTheme);
  }, []);

  const handleTemp = (temp) => {
    chirpPlay();
    setChangeTemp(temp);
    localStorage.setItem("temp", temp);
  };

  // open and close sidebar functionality
  const openTemplate = () => {
    setIsTemplateOpen(true);
  };
  const closeTemplate = () => {
    setIsTemplateOpen(false);
  };
  const showInput = () => {
    setShowSearchInput(true);
  };

  return (
    <AppContext.Provider
      value={{
        changeTemp,
        showSearchInput,
        setShowSearchInput,
        showInput,
        setChangeTemp,
        handleTemp,
        isTemplateOpen,
        setIsTemplateOpen,
        closeTemplate,
        openTemplate,
        handleTheme,
        colorTheme,
      }}
    >
      <div
        className={`wrapper ${
          colorTheme === "dark-mode" ? "dark-mode" : "light-mode"
        }`}
        id={changeTemp}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
