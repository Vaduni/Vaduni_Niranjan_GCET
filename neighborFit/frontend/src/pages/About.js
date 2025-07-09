import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 px-6 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About NeighborFit</h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NeighborFit</strong> is a smart web application designed to help you find the perfect neighborhood based on your lifestyle preferences. Whether you're looking for peace and quiet, fast internet, safety, or pet-friendly communities, NeighborFit gives you personalized results based on real neighborhood data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">How it Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Set your preferences (safety, affordability, noise, commute, internet, etc.).</li>
            <li>Our algorithm scores and matches neighborhoods based on your choices.</li>
            <li>Get a sorted list of top matching areas with visual match scores.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Why NeighborFit?</h2>
          <p className="text-gray-700 mb-4">
            Choosing a neighborhood is more than just rent and location. We believe it’s about lifestyle compatibility. NeighborFit helps you make a data-informed decision — tailored just for you.
          </p>

          <p className="text-gray-600 text-sm">
            Built with ❤️ using React, Tailwind CSS, Express.js, MongoDB, and Render.
          </p>
        </div>
      </div>
    </>
  );
}
