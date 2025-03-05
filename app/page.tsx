import Heading from "@/components/Header/Heading";
import NavbarList from "@/components/Navbar"
import { Message } from "@/components/message";
import { Status } from "@/components/status";
import Results  from "@/components/cards/Results";
import Footer from "@/components/ui/footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="relative bg-white flex flex-col   overflow-hidden   ">
      
      <Hero />
      <Heading title="About Us"  />
      <Status />
      <Heading title="Our Leaders" />
      <Message  />
      <Heading title="Achievements" />
      <Results  />

    </main>
  );
}


