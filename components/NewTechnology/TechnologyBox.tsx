"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TechnologyBox({
  logo,
  label,
  val,
}: {
  logo: string;
  label: string;
  val: number;
}) {
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
      initial={{ y: 200, opacity: 0 }}
      animate={controls}
      variants={{
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 0.2, delay: val }}
      className="flex flex-col items-center"
    >
      <Image
        src={logo}
        width={1920}
        height={1080}
        alt="react icons"
        className="w-14"
      />
      <p className="mt-1.5">{label}</p>
    </motion.div>
  );
}
