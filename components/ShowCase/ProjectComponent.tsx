"use client";
import { DiGithubBadge } from "react-icons/di";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type obj = {
  image: string;
  technology: string;
  title: string;
  description: string;
  gitUrl: string;
  demoUrl: string;
  reverse: boolean;
};
export default function ProjectComponent({
  image,
  technology,
  title,
  description,
  gitUrl,
  demoUrl,
  reverse,
}: obj) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ y: 200, scale: 0.5, opacity: 0 }}
      variants={{
        visible: { y: 0, scale: 1, opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
      className={classNames(
        "flex bg-[#1A1A1A] shadow-2xl  px-2 sm:px-10 py-9 rounded-lg flex-col gap-y-3 md:gap-y-0  mt-11",
        !reverse ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className=" relative flex group justify-center items-center sm:w-[24rem] h-60 ">
        <div className=" hidden text-white brightness-150 animate-pulse   group-hover:flex absolute z-50   sm:gap-x-3">
          <Link
            href={demoUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <HiOutlineExternalLink size={23} />
            <p>Demo</p>
          </Link>

          <Link
            href={gitUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <DiGithubBadge size={25} />
            <p>Source code</p>
          </Link>
        </div>

        <Image
          src={image}
          className="w-96 rounded-lg transition group-hover:brightness-50  group-hover:blur-sm group-hover:scale-105 h-60 object-cover "
          width={1920}
          height={1080}
          alt="NFT"
        />
      </div>

      <div className="text-gray-200 mx-7 my-3 text-sm w-72 ">
        <p className="text-2xl font-raleway font-semibold">{title}</p>
        <p className="mt-4">{description}</p>
        <p className="uppercase text-gray-400 mt-7">Technologies used</p>
        <p className="mt-2 text-gray-300">{technology}</p>
        <div className="mt-6 flex gap-x-7">
          <Link
            href={demoUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <HiOutlineExternalLink size={23} />
            <p>Demo</p>
          </Link>

          <Link
            href={gitUrl}
            target="_blank"
            className="flex  items-center gap-x-2"
          >
            <DiGithubBadge size={25} />
            <p>Source code</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
