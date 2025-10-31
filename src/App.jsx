import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import photos from "./photos";

import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions"; // ✅ NEW
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css"; // ✅ ensure captions styles are imported

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <section className="p-6">
          <MasonryPhotoAlbum
            photos={photos}
            onClick={({ index }) => setIndex(index)} // ✅ open lightbox on click
          />
        </section>

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]} // ✅ captions plugin added
        />

        <section id="about" className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
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
