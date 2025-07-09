import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => closeMenu();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50 text-white shadow-md"
      style={{ backgroundColor: "#618594" }}
    >
      <div className="w-full flex justify-between items-center sm:w-auto">
        <h1 className="font-bold text-2xl">
          <Link to="/" onClick={closeMenu}>NeighborFit</Link>
        </h1>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <div className={`w-6 h-0.5 bg-white my-1 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white my-1 transition ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white my-1 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </div>

      {/* Menu Items */}
      <div className={`flex-col sm:flex-row sm:flex ${isOpen ? 'flex' : 'hidden'} items-center gap-4 sm:gap-6 mt-4 sm:mt-0 text-center w-full sm:w-auto`}>
        <Link to="/" onClick={closeMenu} className="hover:text-yellow-300 transition-colors duration-200">
          Home
        </Link>
        <Link to="/about" onClick={closeMenu} className="hover:text-yellow-300 transition-colors duration-200">
          About
        </Link>
        <Link to="/preferences" onClick={closeMenu} className="hover:text-yellow-300 transition-colors duration-200">
          Preferences
        </Link>
        <Link to="/results" onClick={closeMenu} className="hover:text-yellow-300 transition-colors duration-200">
          Results
        </Link>
      </div>
    </nav>
  );
}
