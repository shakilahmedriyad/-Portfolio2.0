"use client";
import { useInView } from "react-intersection-observer";
import TestimonialsCard from "./TestimonialsCard";
import { useActiveHooks } from "@/hooks/useActiveHooks";
import { useEffect } from "react";

const reviews = [
  {
    descriptions:
      "Shakil is probably the best full stack Svelte developer we've come across so far. He demonstrated deep and quick understanding of our application and expertly resolved each and every bug and even proposed new features. We've unanimously nominated him to continue as our lead Full Stack Developer on our team going forward.",
    name: "brainwavz",
    platform: "Fiverr",
    ratings: "⭐⭐⭐⭐⭐",
  },

  {
    descriptions:
      "He completed the website of my Client and my company very well and completed the tasks very quickly and made the tasks very easy and for that. I always wish him the best and may he do better in the future and Highly recommend",
    name: "Emran H.",
    platform: "Upwork",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    descriptions:
      "I can't say enough positive things about our experience working with Riyad on Upwork. From the moment we started our project together, it was evident that he was the developer we'd been searching for. Riyad is not only a highly skilled professional, but his dedication to customer satisfaction is truly exceptional.\n\nRiyad was tasked with solving some pressing front-end issues we'd been facing for quite some time. Not only did he tackle the problems head-on, but he resolved them at lightning speed. His quick and efficient work allowed us to keep moving forward with our project, without any costly delays",
    name: "Nelson Vercher",
    platform: "Upwork",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    descriptions:
      "Shakil is just a top notch frontender. Was a pleasure working with him, I would recommend!",
    name: "Antonio Dal Cin",
    platform: "Upwork",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    descriptions:
      "Great work Shakil, he is a very competent fast and precise frontender. Was a pleasure work with him!",
    name: "Antonio Dal Cin",
    platform: "Upwork",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    descriptions:
      "Very knowledgeable and skillful developer. I have other developers too. But I mostly hire him on the most complex tasks. And he always finishes them with zero issues",
    name: "Mr. Khairuzzaman",
    platform: "Upwork",
    ratings: "⭐⭐⭐⭐⭐",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const { setActive } = useActiveHooks();
  useEffect(() => {
    if (inView) {
      setActive("Testimonials");
    }
  }, [inView, setActive]);

  return (
    <section ref={ref} id="testimonials" className="mx-5">
      <h3 className=" text-center font-raleway py-20 text-xl sm:text-3xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-bold ">
        Testimonials I Get
      </h3>

      <div className=" columns-1 sm:columns-2 lg:columns-3 space-y-5   max-w-[80rem]  gap-8 mx-auto">
        <TestimonialsCard del={0} {...reviews[2]} />
        <TestimonialsCard del={0.3} {...reviews[0]} />
        <TestimonialsCard del={0.5} {...reviews[3]} />
        <TestimonialsCard del={0.7} {...reviews[5]} />
        <TestimonialsCard del={1} {...reviews[1]} />
      </div>
    </section>
  );
}
