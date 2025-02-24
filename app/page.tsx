import { NavbarDemo } from "@/components/Navbar"
import Explandable  from "@/components/carousel/expandable"


export default function Home() {
  return (
    <main className="relative bg-white flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <NavbarDemo />
      <Explandable className="m-20" />
    </main>
  );
}
