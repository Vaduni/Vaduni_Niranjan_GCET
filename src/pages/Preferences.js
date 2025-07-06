import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Preferences() {
  const navigate = useNavigate();

  const [safety, setSafety] = useState(5);
  const [affordability, setAffordability] = useState(5);
  const [commute, setCommute] = useState(5);
  const [noise, setNoise] = useState(5);
  const [internet, setInternet] = useState(5);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('preferences'));
    if (saved) {
      setSafety(saved.safety);
      setAffordability(saved.affordability);
      setCommute(saved.commute);
      setNoise(saved.noise);
      setInternet(saved.internet);
    }
  }, []);

  const handleSubmit = () => {
    const preferences = { safety, affordability, commute, noise, internet };
    localStorage.setItem('preferences', JSON.stringify(preferences));
    navigate('/results');
  };

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center p-2"
        style={{ backgroundImage: `url(/images/preference.jpg)` }}
      >
        <div className="bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow max-w-3xl w-full
 space-y-4 animate-fadeIn">

          <h2 className="text-2xl font-bold text-center text-neighborhood">Set Your Lifestyle Preferences</h2>

          <div className="space-y-4">

            <div>
              <label className="block mb-1 font-medium text-gray-700" title="How safe you want your neighborhood to be">
                Safety: <span className="font-bold ml-1">{safety}</span>
              </label>
              <input type="range" min="0" max="10" value={safety} onChange={(e) => setSafety(e.target.value)} className="w-full accent-neighborhood" />
              {safety > 7 && <p className="text-sm text-green-600 mt-1">High safety — preferred by 80% of families</p>}
              {safety <= 7 && safety > 4 && <p className="text-sm text-yellow-600 mt-1">Moderate safety — balance between affordability & security</p>}
              {safety <= 4 && <p className="text-sm text-red-600 mt-1">Low safety — generally less recommended for families</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700" title="How affordable you want your area to be">
                Affordability: <span className="font-bold ml-1">{affordability}</span>
              </label>
              <input type="range" min="0" max="10" value={affordability} onChange={(e) => setAffordability(e.target.value)} className="w-full accent-neighborhood" />
              {affordability > 7 && <p className="text-sm text-green-600 mt-1">Highly affordable — 70% of students and young professionals prefer this</p>}
              {affordability <= 7 && affordability > 4 && <p className="text-sm text-yellow-600 mt-1">Moderate affordability — popular with working families</p>}
              {affordability <= 4 && <p className="text-sm text-red-600 mt-1">Expensive area — known for premium facilities</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700" title="Ease of commuting from your location">
                Commute Convenience: <span className="font-bold ml-1">{commute}</span>
              </label>
              <input type="range" min="0" max="10" value={commute} onChange={(e) => setCommute(e.target.value)} className="w-full accent-neighborhood" />
              {commute > 7 && <p className="text-sm text-green-600 mt-1">Excellent commute options — ideal for working professionals</p>}
              {commute <= 7 && commute > 4 && <p className="text-sm text-yellow-600 mt-1">Average connectivity — may require planning</p>}
              {commute <= 4 && <p className="text-sm text-red-600 mt-1">Poor commute options — limited transport availability</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700" title="Lower is quieter, higher is noisier">
                Noise Level: <span className="font-bold ml-1">{noise}</span>
              </label>
              <input type="range" min="0" max="10" value={noise} onChange={(e) => setNoise(e.target.value)} className="w-full accent-neighborhood" />
              {noise < 4 && <p className="text-sm text-green-600 mt-1">Quiet area — suitable for families and students</p>}
              {noise >= 4 && noise <= 7 && <p className="text-sm text-yellow-600 mt-1">Moderate noise levels — typical urban environment</p>}
              {noise > 7 && <p className="text-sm text-red-600 mt-1">High noise area — bustling with activity</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700" title="Better internet availability and speed">
                Internet Quality: <span className="font-bold ml-1">{internet}</span>
              </label>
              <input type="range" min="0" max="10" value={internet} onChange={(e) => setInternet(e.target.value)} className="w-full accent-neighborhood" />
              {internet > 7 && <p className="text-sm text-green-600 mt-1">Excellent internet — ideal for remote work or students</p>}
              {internet <= 7 && internet > 4 && <p className="text-sm text-yellow-600 mt-1">Average connectivity — works for daily tasks</p>}
              {internet <= 4 && <p className="text-sm text-red-600 mt-1">Poor internet — limited reliability, not recommended for heavy use</p>}
            </div>

          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-neighborhood text-white py-3 rounded-xl hover:bg-opacity-80 transition"
          >
            See Your Matches
          </button>
          
        </div>
      </div>
    </>
  );
}
