import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <nav
  className="px-6 py-4 flex justify-between items-center sticky top-0 z-50 text-white shadow"
  style={{ backgroundColor: "#618594" }}>
 
      <h1 className="font-bold text-2xl">
NeighborFit</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/preferences" className="hover:text-yellow-300">Preferences</Link>
        <Link to="/results" className="hover:text-yellow-300">Results</Link>
      </div>
    </nav>
  );
}
