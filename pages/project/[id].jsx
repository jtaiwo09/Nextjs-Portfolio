import Title from "@/components/title";
import { projects } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const ProjectDetails = () => {
  const { query, back } = useRouter();

  const findProject = projects.find((item) => item.id === Number(query.id));
  if (!findProject) {
    return;
  }
  return (
    <section className="section__padding min-h-screen relative bg-primary-bg">
      <button
        onClick={() => back()}
        className="w-[40px] switch__bg absolute top-[30px] flex justify-center items-center rounded-[5px] py-1 cursor-pointer"
      >
        <BsArrowLeft className="text-[20px] text-hover-color" />
      </button>
      <div className="py-[100px]">
        <Title title={findProject?.name.split("")} />
        <div className="mt-2 h-[300px] sm:h-[500px] w-full overflow-hidden">
          <Image
            src={findProject?.imgUrl}
            alt={findProject?.name}
            width={1000}
            height={400}
            className="w-full"
            priority
          />
        </div>
        <div className="mt-10">
          <p>{findProject?.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
