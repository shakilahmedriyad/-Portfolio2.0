import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import ShowCase from "@/components/ShowCase";
import Contacts from "@/components/Contacts";
import NewTechNology from "@/components/NewTechnology";
import Experience from "@/components/Experience";

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
