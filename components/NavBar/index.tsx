"use client";

import { useActiveHooks } from "@/hooks/useActiveHooks";
import { motion } from "framer-motion";
export default function NavBar() {
  const { active } = useActiveHooks();
  const NavItem = [
    { label: "Home", id: "home" },
    { label: "Work", id: "work" },
    { label: "Experience", id: "experience" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (slug: string) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full fixed z-10 my-5 justify-center flex items-center   ">
      <ul className="flex bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-900 text-[10px] sm:text-sm font-semibold px-3 rounded-full max-w-fit bg-[#1A1A1A]  mx-[10%]  mb-[8%]   items-center">
        {NavItem.map((item) => (
          <li
            onClick={() => handleScroll(item.id)}
            className="hover:bg-gradient-to-tr relative from-gray-500 via-gray-600 to-gray-800  px-4 py-3   rounded-full  cursor-pointer"
            key={item.id}
          >
            <p className="bg-gradient-to-tr relative z-10 text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500">
              {item.label}
            </p>
            {active === item.label && (
              <motion.div
                layoutId="activeNav"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className="w-full h-full absolute inset-0  rounded-full bg-gradient-to-tr  from-gray-500 via-gray-600 to-gray-800  px-4 py-3 z"
              ></motion.div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
