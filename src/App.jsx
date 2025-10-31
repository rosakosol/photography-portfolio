import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Gallery />
        <section id="about" className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hi, I’m Rosa — a passionate photographer capturing stories through light,
            color, and emotion. My work focuses on nature, urban exploration, and
            minimalism.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
