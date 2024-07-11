"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ReactElement, useEffect } from "react";
import { useActiveHooks } from "@/hooks/useActiveHooks";

export const ImbueIcon = () => (
  <Image
    src={"/imbue_network_logo.jpeg"}
    width={80}
    height={80}
    alt="imbue logo"
  />
);
export const FiverrIcon = () => (
  <Image src={"/fiverr.png"} width={80} height={80} alt="fiverr logo" />
);
export const UpworkIcon = () => (
  <Image src={"/upwork.svg"} width={80} height={80} alt="fiverr logo" />
);

export const TimeLineElement = ({
  children,
  date,
  icon,
}: Readonly<{
  children: React.ReactNode;
  date: string;
  icon: ReactElement;
}>) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={date}
        iconStyle={{
          background: "green",
          boxShadow: "none",
          overflow: "hidden",
        }}
        visible={inView}
        contentStyle={{
          background: "linear-gradient(to top left,#6B7280,#374151,#111827)",
          boxShadow: "none",
        }}
        icon={icon}
      >
        {children}
      </VerticalTimelineElement>
    </div>
  );
};

export default function Experience() {
  const { setActive } = useActiveHooks();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setActive("Experience");
    }
  }, [inView, setActive]);

  return (
    <section
      ref={ref}
      id="experience"
      className="mx-auto scroll-m-28 text-ce text-white  my-24 flex-col items-center"
    >
      <p className="text-xl text-center sm:text-3xl bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500 font-raleway font-bold  mb-32">
        Experience I have
      </p>
      <VerticalTimeline>
        <TimeLineElement date="2023-2024" icon={<ImbueIcon />}>
          <div className="text-sm">
            <h1 className="vertical-timeline-element-title text-xl font-raleway font-bold">
              Frontend Web Developer
            </h1>
            <p className="mb-2">Imbue Network · Full-time</p>
            <ul className="px-4">
              <li className="list-disc">
                development of critical components, ensuring seamless
                integration with third-party services
              </li>
              <li className="list-disc">
                Implemented robust unit testing protocols across key application
                areas
              </li>
              <li className="list-disc">
                Revamped a partially legacy codebase, improving maintainability
              </li>
              <li className="list-disc">
                Led the design and execution of end-to-end features,
                guaranteeing optimal functionality
              </li>
            </ul>
          </div>
        </TimeLineElement>
        <TimeLineElement date="2023-present" icon={<UpworkIcon />}>
          <div className="text-sm">
            <h1 className="vertical-timeline-element-title text-xl font-raleway font-bold">
              Frontend Web Developer
            </h1>
            <p className="mb-2">Imbue Network · Full-time</p>
            <ul className="px-4">
              <li className="list-disc">
                development of critical components, ensuring seamless
                integration with third-party services
              </li>
              <li className="list-disc">
                Implemented robust unit testing protocols across key application
                areas
              </li>
              <li className="list-disc">
                Revamped a partially legacy codebase, improving maintainability
              </li>
              <li className="list-disc">
                Led the design and execution of end-to-end features,
                guaranteeing optimal functionality
              </li>
            </ul>
          </div>
        </TimeLineElement>
        <TimeLineElement date="2023-present" icon={<FiverrIcon />}>
          <div className="text-sm">
            <h1 className="vertical-timeline-element-title text-xl font-raleway font-bold">
              Frontend Web Developer
            </h1>
            <p className="mb-2">Imbue Network · Full-time</p>
            <ul className="px-4">
              <li className="list-disc">
                development of critical components, ensuring seamless
                integration with third-party services
              </li>
              <li className="list-disc">
                Implemented robust unit testing protocols across key application
                areas
              </li>
              <li className="list-disc">
                Revamped a partially legacy codebase, improving maintainability
              </li>
              <li className="list-disc">
                Led the design and execution of end-to-end features,
                guaranteeing optimal functionality
              </li>
            </ul>
          </div>
        </TimeLineElement>
      </VerticalTimeline>
    </section>
  );
}
