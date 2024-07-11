"use client";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
export default function Header() {
  const copiyHandler = () => toast.success("email copied");
  return (
    <motion.div className="text-white pt-[35%] md:pt-[14%] pb-44 flex flex-col items-center">
      <motion.div
        initial={{ y: "-200px", opacity: 0 }}
        animate={{
          y: "0px",
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="border-4 border-gray-300 flex justify-center items-center rounded-full bg-white"
      >
        <Image
          className="w-40 hover:scale-110 h-40 rounded-full object-cover object-center bg-white"
          src={"/Profile/ProfileFixed.jpg"}
          width={1920}
          height={1080}
          alt="image"
        />
      </motion.div>
      <motion.p
        initial={{ x: "-200px", opacity: 0 }}
        animate={{
          x: "0px",
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium text-gray-50 mt-10"
      >
        Hi , I am Shakil Ahmed 👋
      </motion.p>
      <motion.div
        initial={{ y: "200px", opacity: 0 }}
        animate={{
          y: "0px",
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-center"
      >
        <p className=" max-w-[60rem] font-raleway font-bold leading-normal text-center text-3xl sm:leading-snug sm:text-5xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500  mt-4">
          I am a Full-Stack Developer specializing in React and Next.js
        </p>
        <div className="flex text-xs sm:text-sm gap-x-4 mt-6">
          <button className="flex gap-x-1 border cursor-pointer border-gray-400 rounded-full px-4 font-semibold py-1.5  justify-center items-center">
            Download CV
          </button>
          <Link
            className="flex gap-x-1 cursor-pointer items-center"
            href={"https://www.linkedin.com/in/shakilahmedriyad/"}
            target="_blank"
          >
            <CiLinkedin size={25} />
          </Link>
          <Link
            href={"https://github.com/Riyad139"}
            target="_blank"
            className="flex gap-x-1 cursor-pointer items-center"
          >
            <DiGithubBadge size={29} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
