import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50 text-white shadow-md"
      style={{ backgroundColor: "#618594" }}
    >
      <h1 className="font-bold text-2xl mb-2 sm:mb-0">
        <Link to="/">NeighborFit</Link>
      </h1>

      <div className="space-x-0 sm:space-x-6 flex flex-col sm:flex-row gap-2 sm:gap-0 text-center">
        <Link to="/" className="hover:text-yellow-300 transition-colors duration-200">
          Home
        </Link>
         <Link to="/about" className="hover:text-yellow-300 transition-colors duration-200">
          About
        </Link>
        <Link to="/preferences" className="hover:text-yellow-300 transition-colors duration-200">
          Preferences
        </Link>
        <Link to="/results" className="hover:text-yellow-300 transition-colors duration-200">
          Results
        </Link>
      </div>
    </nav>
  );
}
