import Heading from "@/components/Header/Heading";
import { Status } from "@/components/status";
import Results from "@/components/cards/Results";
import { Hero } from "@/components/Hero";
import AccordionHome from "@/components/AccordionHome";
import { NotableAlumni } from "@/components/NotableAlumni";


export default function Home() {
  return (
    <main className="relative bg-white flex flex-col   overflow-hidden scroll-smooth  ">
      <Hero />
      <Heading title="About Us" />
      <Status />
      <Heading title="Achievements" />
      <Results />
      <Heading title="Notable Alumni " />
      <NotableAlumni  />
      <Heading title="Frequently Asked Questions" />
      <AccordionHome  />
    </main>
  );
}


