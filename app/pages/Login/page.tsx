import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[500px]">
      <Nav />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg">This is the contact page.</p>
      </div>
      <Footer />
    </main>
  );
}
