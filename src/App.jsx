import Navbar from "./components/Navbar";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Footer from "./components/Footer";

const photos = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <MasonryPhotoAlbum photos={photos} />
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
