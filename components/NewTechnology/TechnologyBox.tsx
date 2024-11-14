"use client";
import Image from "next/image";
import { AnimationControls, motion } from "framer-motion";

export default function TechnologyBox({
  logo,
  label,
  controls,
}: {
  logo: string;
  label: string;
  controls: AnimationControls;
}) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={controls}
      variants={{
        visible: { x: 0, opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
      className="flex my-1 flex-col items-center"
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
