import Brochure from "../app/components/Brochure.tsx";
import Nav from "../app/components/Nav.tsx";
import Footer from "../app/components/Footer.tsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <Brochure />
      <Footer />
    </main>
  );
}
