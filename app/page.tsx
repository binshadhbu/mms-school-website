import Heading from "@/components/Header/Heading";
import { NavbarDemo } from "@/components/Navbar"
import Explandable from "@/components/carousel/expandable"
import { Message } from "@/components/message";
import { Status } from "@/components/status";


export default function Home() {
  return (
    <main className="relative bg-white flex flex-col   overflow-hidden  sm:px-10 px-5">
      <NavbarDemo />
      <Explandable className="m-20" />
      <Heading title="About Us" />
      <Status />
      <Heading title="Our Leaders" />
      <Message  />
      <Heading title="Achievements" />
    </main>
  );
}
