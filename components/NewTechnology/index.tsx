"use client";
import TechnologyBox from "./TechnologyBox";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
export default function NewTechNology() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const techs = [
    { logo: "/TechIcons/react.svg", label: "React.js" },
    { logo: "/TechIcons/nextjs-white.svg", label: "Next.js" },
    { logo: "/TechIcons/svelte.svg", label: "Svelte.js" },
    { logo: "/TechIcons/nodejs.svg", label: "Nodejs" },
    { logo: "/TechIcons/mongodb.svg", label: "MongoDB" },
    { logo: "/TechIcons/tailwind.svg", label: "Tailwind" },
    { logo: "/TechIcons/javascript.svg", label: "Javascript" },
    { logo: "/TechIcons/typescript.svg", label: "Typescript" },
    { logo: "/TechIcons/socket.svg", label: "Socket.IO" },
    { logo: "/TechIcons/postgresql.svg", label: "PostgreSQL" },
    { logo: "/TechIcons/git.svg", label: "Git" },
    { logo: "/TechIcons/redux.svg", label: "Redux" },
    { logo: "/TechIcons/github.svg", label: "GitHub" },
    { logo: "/TechIcons/bootstrap.svg", label: "Bootstrap" },
    { logo: "/TechIcons/docker.svg", label: "Docker" },
  ];
  return (
    <div className="text-white text-center flex flex-col justify-center items-center bg-[#1A1A1A] shadow-2xl py-14 mt-10 sm:mt-24">
      <p className=" text-xl sm:text-3xl font-raleway font-bold bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500  ">
        Technologies I work with
        <hr className="w-[60%] border-2  border-gradient  mt-5 mx-auto" />
      </p>
      <div
        ref={ref}
        className="flex  gap-x-14 mt-12 flex-wrap w-auto mx-[3%] md:w-[43rem] justify-center gap-y-5"
      >
        {techs.map((item, index) => (
          <TechnologyBox controls={controls} key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
