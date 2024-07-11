"use client";
import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "../ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TestimonialsCard({
  name,
  del,
  descriptions,
}: {
  name: string;
  del: number;
  descriptions: string;
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
      initial={{ y: 200, scale: 0.5, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, delay: del }}
      variants={{
        visible: { y: 0, opacity: 1, scale: 1 },
      }}
    >
      <Card
        className={
          "bg-gradient-to-tr  from-gray-600 via-gray-700 to-gray-900 border-none shadow-2xl"
        }
      >
        <CardContent className="text-white  break-inside-avoid-column text-xl  p-6">
          <div className="flex items-center">
            <div className="w-11 uppercase font-semibold h-11 mr-4 bg-slate-200  justify-center items-center text-gray-900 flex rounded-full">
              {name[0]}
            </div>
            <div>
              <h2 className="font-raleway font-semibold">{name}</h2>

              <div className="flex">
                <FaStar size={16} className="fill-[#FFD35A]" />
                <FaStar size={16} className="fill-[#FFD35A]" />
                <FaStar size={16} className="fill-[#FFD35A]" />
                <FaStar size={16} className="fill-[#FFD35A]" />
                <FaStar size={16} className="fill-[#FFD35A]" />
              </div>
            </div>
          </div>
          <p className="my-5 text-sm">{descriptions}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
