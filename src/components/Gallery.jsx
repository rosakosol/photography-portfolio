import PhotoCard from "./PhotoCard";
import { photos } from "../data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
}
