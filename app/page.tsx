import Image from "next/image";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import TechNology from "@/components/TechNology";
import ShowCase from "@/components/ShowCase";
import { Contrail_One } from "next/font/google";
import Contacts from "@/components/Contacts";
import NewTechNology from "@/components/NewTechnology";
import Experience from "@/components/Experience";
import Verticale from "@/components/Verticle";
import EExperience from "@/components/Verticle";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />
      <NewTechNology />
      <ShowCase />
      <Experience />
      <Testimonials />
      <Contacts />
    </main>
  );
}
