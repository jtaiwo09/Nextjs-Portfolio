import Image from "next/image";
import Link from "next/link";

const Project = ({ project: { id, name, imgUrl, gitHubUrl }, index }) => {
  return (
    <div className="border-2 border-solid border-[saddlebrown] relative overflow-hidden h-[250px] group rounded-[5px]">
      <Link href={`/project/${id}`}>
        <Image
          src={imgUrl}
          alt={name}
          width={200}
          height={200}
          className="w-full"
        />
        <div className="w-full h-full bg-[#1c0800dd] text-center top-0 left-0 absolute translate-y-[100%] transition-all ease-linear duration-[300ms] group-hover:translate-y-0 cursor-pointer">
          <p className="mt-5 text-[1.5rem] text-white">{name}</p>
          <div
            className="absolute left-[15px] bottom-[40px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Link
              href={gitHubUrl.url}
              target="_blank"
              className="switch__color text-[30px] mb-[3px] text-white block"
            >
              {gitHubUrl.icon}
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
