import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export default function Results() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
  const fetchNeighborhoods = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/neighborhoods');
      const data = await res.json();

      const prefs = JSON.parse(localStorage.getItem('preferences'));
      if (!prefs) return;

      const scored = data.map(area => {
        const score =
          (area.safety * prefs.safety * 0.3) +
          (area.affordability * prefs.affordability * 0.2) +
          (area.commute * prefs.commute * 0.2) +
          ((10 - area.noise) * prefs.noise * 0.1) +
          (area.internet * prefs.internet * 0.2);

        return { ...area, matchScore: score.toFixed(2) };
      });

      scored.sort((a, b) => b.matchScore - a.matchScore);
      setMatches(scored);
    } catch (err) {
      console.error("Failed to fetch neighborhoods:", err);
    }
  };

  fetchNeighborhoods();
}, []);


  const getBadgeColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Top Neighborhood Matches</h2>

          {matches.length === 0 ? (
            <p className="text-center text-gray-600">No matches found. Please set your preferences.</p>
          ) : (
            <div className="space-y-6">
              {matches.map(area => (
                <Link key={area.name} to={`/neighborhood/${area.name}`} className="block">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transform transition duration-300 flex flex-row overflow-hidden items-center p-4">

                    {/* Left Image Centered */}
                    <div className="flex-shrink-0 flex justify-center items-center h-32 w-32">
                      <img
                        src={area.images[0]}
                        alt={area.name}
                        className="h-28 w-28 object-cover rounded-lg border border-gray-300"
                      />
                    </div>

                    {/* Right Details */}
                    <div className="flex flex-col sm:flex-row justify-between flex-grow ml-6 w-full items-center sm:items-start">

                      {/* Text Info */}
                      <div className="text-gray-700 space-y-1 w-full">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{area.name}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <p>Safety: {area.safety} / 10</p>
                          <p>Affordability: {area.affordability} / 10</p>
                          <p>Commute: {area.commute} / 10</p>
                          <p>Noise Level: {area.noise} / 10</p>
                          <p>Internet: {area.internet} / 10</p>
                        </div>
                      </div>

                      {/* Match Progress & Pet Friendly */}
                      <div className="mt-4 sm:mt-0 sm:ml-6 w-full sm:w-48">
                        <div className="w-full bg-gray-200 rounded-full h-4">
                          <div
                            className={`h-4 rounded-full ${getBadgeColor(area.matchScore)}`}
                            style={{ width: `${area.matchScore}%` }}
                          ></div>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">Match Score: {area.matchScore}%</p>

                        {/* Pet Friendly Tag */}
                        {area.petFriendly && (
                          <div className="mt-2 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            🐾 Pet Friendly
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
