import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaShieldAlt, FaMoneyBillWave, FaBus, FaVolumeDown, FaWifi, FaPhoneAlt } from 'react-icons/fa';

export default function NeighborhoodDetails() {
  const { name } = useParams();
  const [area, setArea] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/neighborhoods`);
        const data = await response.json();
        const found = data.find((n) => n.name === name);
        setArea(found);
      } catch (error) {
        console.error('Error fetching neighborhood data:', error);
      }
    };

    fetchNeighborhoods();
  }, [name]);

  useEffect(() => {
    if (area?.images?.length) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % area.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [area]);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % area.images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + area.images.length) % area.images.length);
  };

  if (!area) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center">Loading neighborhood details...</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
        {/* Image Carousel */}
        <div className="relative w-full max-w-4xl mb-6">
          <img
            src={area.images[currentImage]}
            alt="Neighborhood"
            className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg transition-all duration-700"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            ▶
          </button>
        </div>

        {/* Title and Description */}
        <div className="max-w-4xl w-full bg-white p-6 rounded-xl shadow-lg mb-6">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">{area.name}</h2>
          <p className="text-gray-700">{area.description}</p>
        </div>

        {/* Highlights with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <FaShieldAlt className="mx-auto text-green-600 text-2xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-700">Safety</h4>
            <p className="text-xl text-gray-800">{area.safety} / 10</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <FaMoneyBillWave className="mx-auto text-green-600 text-2xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-700">Affordability</h4>
            <p className="text-xl text-gray-800">{area.affordability} / 10</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <FaBus className="mx-auto text-green-600 text-2xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-700">Commute</h4>
            <p className="text-xl text-gray-800">{area.commute} / 10</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <FaVolumeDown className="mx-auto text-green-600 text-2xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-700">Noise Level</h4>
            <p className="text-xl text-gray-800">{area.noise} / 10</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow text-center">
            <FaWifi className="mx-auto text-green-600 text-2xl mb-2" />
            <h4 className="text-lg font-semibold text-gray-700">Internet</h4>
            <p className="text-xl text-gray-800">{area.internet} / 10</p>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-8">
          <button className="bg-green-500 text-white flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-green-600 transition">
            <FaPhoneAlt /> Contact for More Info
          </button>
        </div>
      </div>
    </>
  );
}
