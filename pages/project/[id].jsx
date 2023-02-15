import Title from "@/components/title";
import { projects } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        className="hidden sm:flex w-[40px] switch__bg absolute top-[30px] justify-center items-center rounded-[5px] py-1 cursor-pointer"
      >
        <BsArrowLeft className="text-[20px] text-hover-color" />
      </button>
      <div className="py-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <Title title={findProject?.name.split("")} />
        </div>

        <div className="mt-2 h-fit lg:h-[620px] w-full overflow-hidden max-w-[1200px] mx-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-full"
          >
            {findProject?.imgUrl.map((el, i) => (
              <SwiperSlide key={i}>
                <Image
                  loader={({ src }) =>
                    `https://res.cloudinary.com/citi-tasker/image/upload/${src}`
                  }
                  src={el}
                  alt={el}
                  width={1000}
                  height={400}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 max-w-[1000px] m-auto">
          {parse(findProject?.desc)}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
