import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { Menu } from "@/components/ui/navbar-menu";
// import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavbarDemo/>
        
      </div>
    </main>
  );
}
