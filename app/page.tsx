import { NavbarDemo } from "@/components/Navbar"; 
import Explandable from "@/components/carousel/expandable";
import { Message } from "@/components/message";
import { Status } from "@/components/status";

export default function Home() {
  return ( 
    <main className="relative bg-white flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-20 px-5">
      {/* <h1 className="text-3xl font-bold text-red-500">Hello, this is Home!</h1> */}
      <NavbarDemo />  
      <Explandable className="m-20" />
      <Status />
      <Message />
    </main>
  );
}


