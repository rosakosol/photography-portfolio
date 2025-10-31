import { motion } from "framer-motion";

export default function PhotoCard({ photo }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.03 }}
    >
      <img src={photo.src} alt={photo.title} className="w-full h-64 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">{photo.title}</h3>
        <p className="text-sm text-gray-500">{photo.category}</p>
      </div>
    </motion.div>
  );
}
