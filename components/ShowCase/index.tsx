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
        <hr className="w-[60%] mx-auto border-2  border-gradient  mt-5 " />
      </p>
      <ProjectComponent
        image="/projects/tour-camp.png"
        title="Tour camp"
        description="a travel blog platform with dynamic content structuring, secure payment processing using Stripe, and an interactive user interface built with Next.js and Tailwind CSS."
        technology="Nextjs, Strapi.io , Stripe , tailwind , typescript , HTML , CSS"
        gitUrl="https://github.com/shakilahmedriyad/Tour_camp"
        demoUrl="https://tour-camp.vercel.app/"
        reverse={false}
      />
      <ProjectComponent
        image={"/projects/NFT.jpg"}
        title="NFT Selling app"
        description="This app is designed and developed to Sell Nfts"
        technology="nextjs , tailwind"
        gitUrl="https://github.com/Riyad139/NFT-market"
        demoUrl="https://nft-market-demo-seven.vercel.app"
        reverse={true}
      />
      <ProjectComponent
        image="/projects/Management.jpg"
        title="Management app"
        description="A app which helps you to manage your task and projects"
        technology="nextjs, express , tailwind , typescript"
        gitUrl="https://github.com/shakilahmedriyad/Tour_camp"
        demoUrl="https://appmanagement.vercel.app/"
        reverse={false}
      />

      <ProjectComponent
        image="/projects/Realtor.png"
        title="Realtor Landing page"
        description="This Landing page is design for a Realtor business"
        technology="HTML5 , SCSS"
        demoUrl="https://github.com/shakilahmedriyad/management"
        gitUrl="https://github.com/shakilahmedriyad/Realtor_app"
        reverse={true}
      />
    </div>
  );
}
