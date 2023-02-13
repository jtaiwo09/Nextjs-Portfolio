import "@/styles/globals.css";
import { Poppins, Eczar } from "@next/font/google";
import { AppProvider } from "@/hooks/contextApi";
import "animate.css";
import Sidebar from "@/components/sidebar";
import ThemeTemplate from "@/components/themingTemplate";
import "../utils/templateColors.css";
import MobileNav from "@/components/mobileNav";
import { ToastContainer } from "react-toastify";
import Audio from "@/components/audio";

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
        <Audio />
        <MobileNav />
        <Sidebar />
        <ThemeTemplate />
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}
