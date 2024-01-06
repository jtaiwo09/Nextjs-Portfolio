import Image from "next/image";
import Link from "next/link";

const Project = ({
  project: { id, name, imgUrl, gitHubUrl, website },
  index,
}) => {
  return (
    <div className="border-2 border-solid border-[saddlebrown] relative overflow-hidden h-[230px] group rounded-[5px]">
      <Link href={`/project/${id}`}>
        <Image
          loader={({ src }) =>
            `https://res.cloudinary.com/citi-tasker/image/upload/${src}`
          }
          src={imgUrl[Math.floor(Math.random() * imgUrl.length)]}
          alt={name}
          width={200}
          height={200}
          className="w-full"
        />
        <div className="w-full h-full bg-[#000]/60 text-center top-0 left-0 absolute translate-y-[100%] transition-all ease-linear duration-[300ms] group-hover:translate-y-0 cursor-pointer">
          <p className="mt-5 text-[1.5rem] text-white">{name}</p>
          <div
            className="absolute left-[15px] bottom-[40px] flex gap-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {website && website.url && (
              <Link
                href={website.url}
                target="_blank"
                className="switch__color text-[30px] mb-[3px] text-white block hover:scale-[1.1] transition-all hover:text-[#4287f5]"
              >
                {website.icon}
              </Link>
            )}
            <Link
              href={gitHubUrl.url}
              target="_blank"
              className="switch__color text-[30px] mb-[3px] text-white block hover:scale-[1.1] transition-all hover:text-[#4287f5]"
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
