"use client";
import TestimonialsCard from "./TestimonialsCard";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useActiveHooks } from "@/hooks/useActiveHooks";
import { useInView } from "react-intersection-observer";
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
      "I can't say enough positive things about our experience working with Riyad on Upwork. From the moment we started our project together, it was evident that he was the developer we'd been searching for. Riyad is not only a highly skilled professional, but his dedication to customer satisfaction is truly exceptional.",
    name: "Nelson Vercher",
    platform: "Upwork",
    ratings: "⭐⭐⭐⭐⭐",
  },
  {
    descriptions:
      "Great work, Shakil it's a very competent fast and precise frontender. Was a pleasure work with him! Shakil is just a top notch frontender. Was a pleasure working with him, I would recommend!",
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
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { setActive } = useActiveHooks();
  useEffect(() => {
    if (inView) {
      setActive("Testimonials");
    }
  }, [inView, setActive]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className=" max-w-[90rem] my-36 overflow-hidden mx-auto text-center"
    >
      <h3 className="  inline-block font-raleway py-20 text-xl sm:text-3xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-bold ">
        Testimonials I Get
        <hr className="w-[60%] mx-auto border-2  border-gradient  mt-5 " />
      </h3>

      <Slider {...settings}>
        {reviews.map((item) => (
          <TestimonialsCard key={item.name} {...item} />
        ))}
      </Slider>
    </section>
  );
}
