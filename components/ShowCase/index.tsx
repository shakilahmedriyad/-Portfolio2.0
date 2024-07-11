"use client";
import { useEffect } from "react";
import ProjectComponent from "./ProjectComponent";
import { useActiveHooks } from "@/hooks/useActiveHooks";
import { useInView } from "react-intersection-observer";
export default function ShowCase() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const { setActive } = useActiveHooks();
  useEffect(() => {
    if (inView) {
      setActive("Work");
    }
  }, [inView, setActive]);

  return (
    <div
      ref={ref}
      id="work"
      className="sm:mx-[16%] mx-2 scroll-m-16  flex justify-center flex-col items-center"
    >
      <p className="text-xl font-raleway sm:text-3xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-bold mt-12 mb-12">
        Projects I worked on
      </p>
      <ProjectComponent
        image={"/projects/NFT.jpg"}
        title="NFT Selling app"
        description="This app is designed and developed to Sell Nfts"
        technology="nextjs , tailwind"
        gitUrl="https://github.com/Riyad139/NFT-market"
        demoUrl="https://nft-market-demo-seven.vercel.app"
        reverse={false}
      />
      <ProjectComponent
        image="/projects/Management.jpg"
        title="Management app"
        description="A app which helps you to manage your task and projects"
        technology="nextjs, express , tailwind , typescript"
        gitUrl="https://github.com/Riyad139/management"
        demoUrl="https://management-woad.vercel.app"
        reverse={true}
      />
      <ProjectComponent
        image="/projects/Realtor.png"
        title="Realtor Landing page"
        description="This Landing page is design for a Realtor business"
        technology="HTML5 , SCSS"
        demoUrl="https://riyad139.github.io/Realtor_app/"
        gitUrl="https://github.com/Riyad139/Realtor_app"
        reverse={false}
      />
    </div>
  );
}
