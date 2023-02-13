import Link from "next/link";

const Button = ({ text, path }) => {
  return (
    <Link
      href={path}
      passHref
      className="block group w-full h-[50px] max-w-[200px] leading-[50px] relative mt-5 animate-[fadeInAnimation_1s_1.8s_backwards] whitespace-nowrap"
    >
      <div className="w-full h-full relative overflow-hidden rounded-[0_15px_0_15px]">
        <span className="w-0 h-full absolute left-[-5%] top-0 skew-x-[-10deg] transition-[all_0.3s_linear] group-hover:w-[110%] group-hover:bg-color-tem group-hover:rounded-[0_15px_0_15px] switch__bg"></span>
        <span className="w-full h-full absolute top-0 left-0 switch__border-color rounded-[0_15px_0_15px] border border-solid border-color-tem"></span>
        <span className="text-center left-0 absolute w-full h-full group-hover:text-[#2d2b2b]">
          {text}
        </span>
      </div>
    </Link>
  );
};

export default Button;
