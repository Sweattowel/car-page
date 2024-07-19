import Image from "next/image";
import Brochure from "../components/Brochure.js";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <Brochure />
      <Footer />
    </main>
  );
}
