export default function Navbar() {
    return (
      <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Rosa Lens</h1>
        <ul className="flex gap-6 text-gray-600">
          <li><a href="#gallery" className="hover:text-black">Gallery</a></li>
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>
      </nav>
    );
  }
  