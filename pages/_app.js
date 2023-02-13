import "@/styles/globals.css";
import { Poppins, Eczar } from "@next/font/google";
import { AppProvider } from "@/hooks/contextApi";
import "animate.css";
import Sidebar from "@/components/sidebar";
import ThemeTemplate from "@/components/themingTemplate";
import "../utils/templateColors.css";
import { ToastContainer } from "react-toastify";
import Audio from "@/components/audio";
import Navigation from "@/components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const eczar = Eczar({
  subsets: ["latin"],
  variable: "--font-eczar",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.className} ${eczar.variable} relative`}>
      <AppProvider>
        <ToastContainer />
        <Audio propClass="fixed top-[4%] sm:right-[4%] z-10 hidden sm:block" />
        <Navigation />
        <Sidebar />
        <ThemeTemplate />
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}
