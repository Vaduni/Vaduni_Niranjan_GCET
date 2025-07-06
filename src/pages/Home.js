import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaCity, FaSlidersH, FaMapMarkedAlt, FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 relative"
        style={{ backgroundImage: `url('/images/home.jpg')` }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-2xl mb-10 z-10">
          <FaCity className="text-neighborhood text-7xl mb-4 mx-auto" />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">NeighborFit</h1>
          <p className="text-lg text-gray-700 mb-2">
            Helping you find the perfect neighborhood tailored to your lifestyle.
          </p>
          <p className="text-md text-neighborhood mb-8">
            "Where Communities Connect and Thrive"
          </p>
          <Link
            to="/preferences"
            className="bg-neighborhood text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-600 transition duration-300"
          >
            Find Your Match
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center z-10">
          <Link to="/" className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-xl shadow-md w-60 flex flex-col items-center hover:scale-105 transition">
            <FaHome className="text-neighborhood text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Home</h3>
          </Link>
          <Link to="/preferences" className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-xl shadow-md w-60 flex flex-col items-center hover:scale-105 transition">
            <FaSlidersH className="text-neighborhood text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Preferences</h3>
          </Link>
          <Link to="/results" className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-xl shadow-md w-60 flex flex-col items-center hover:scale-105 transition">
            <FaMapMarkedAlt className="text-neighborhood text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Results</h3>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neighborhood text-white py-4">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p>&copy; 2025 NeighborFit. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
