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
                Developed client and freelancer dashboards for streamlined
                interaction and management
              </li>
              <li className="list-disc">
                mplemented a robust messaging system with GetStream, ensuring
                offline users receive email notifications.
              </li>
              <li className="list-disc">
                Enhanced user engagement with automated notifications for job
                applications, closures, and cancellations
              </li>
              <li className="list-disc">
                Worked with partially legacy codebase and significantly improved
                web page speed.
              </li>
            </ul>
          </div>
        </TimeLineElement>
        <TimeLineElement date="2023-present" icon={<UpworkIcon />}>
          <div className="text-sm">
            <h1 className="vertical-timeline-element-title text-xl font-raleway font-bold">
              Full-Stack Web Developer
            </h1>
            <p className="mb-2">Upwork · Full-time (freelance)</p>
            <ul className="px-4">
              <li className="list-disc">
                Make Minimum Viable Product (MVP) applications.
              </li>
              <li className="list-disc">
                Build real-time applications such as messaging.
              </li>
              <li className="list-disc">Landing & Marketing Pages.</li>
              <li className="list-disc">Work on Performance / SEO.</li>
              <li className="list-disc">
                Improve code and fix breaking issues.
              </li>
            </ul>
          </div>
        </TimeLineElement>
        <TimeLineElement date="2023-present" icon={<FiverrIcon />}>
          <div className="text-sm">
            <h1 className="vertical-timeline-element-title text-xl font-raleway font-bold">
              Full-stack Web Developer
            </h1>
            <p className="mb-2">Fiverr · Full-time </p>
            <ul className="px-4">
              <li className="list-disc">
                Addressed CORS issues affecting OpenAI API integration, ensuring
                seamless functionality.
              </li>
              <li className="list-disc">
                Significantly improved web page performance from a Lighthouse
                score of around 30 to 95 through restructuring & various
                lazy-loading techniques.
              </li>
              <li className="list-disc">
                Designed and implemented email templates for follow-up and
                successful purchase notifications.
              </li>
              <li className="list-disc">
                Implemented image uploading with cropping functionality to
                maintain a 1:1 aspect ratio
              </li>
            </ul>
          </div>
        </TimeLineElement>
      </VerticalTimeline>
    </section>
  );
}
