// import feelingblue from "../../assets/images/undraw_feeling_blue_-4-b7q.svg";
import Image from "next/image";
import NotFound from "../public/not-found.svg";
import Button from "@/components/button";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gap-[2rem] relative section__padding">
      <div className="section__errorpage-content">
        <h2>Oops Page Not fount</h2>

        <div className="sm:text-[5rem] font-bold">
          <h2> 404</h2>
        </div>
        <Button text="Back Home" path="/" />
      </div>
      <Image className="errorPageSvg" src={NotFound} alt="feeling bule" />
    </section>
  );
};

export default ErrorPage;
