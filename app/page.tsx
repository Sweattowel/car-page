import Image from "next/image";
import Brochure from "./Components/Brochure.tsx";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer.tsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <Nav />
      <Brochure />
      <Footer />
    </main>
  );
}
