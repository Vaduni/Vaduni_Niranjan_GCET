import React, { useState } from 'react';

export default function About() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About NeighborFit</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-full max-w-md h-64 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/about.jpg"
              alt="About NeighborFit"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <button
            onClick={openPopup}
            className="mt-6 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-2xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">What is NeighborFit?</h3>
            <p className="text-gray-600 text-left leading-relaxed space-y-4">
              <strong>NeighborFit</strong> is a full-stack web application created to match individuals with neighborhoods
              that suit their lifestyle preferences. Developed in just two weeks with no budget, it uses real-world data and
              a custom matching algorithm to provide personalized suggestions.
              <br /><br />
              This project is backed by rigorous research and user analysis, addressing limitations in current solutions by
              focusing on safety, affordability, commute, internet access, and other quality-of-life factors.
              <br /><br />
              Built entirely with free tools, the platform demonstrates strong problem-solving skills, data handling, and
              system thinking. It is fully functional and deployed, with documented code and design rationale available on GitHub.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
