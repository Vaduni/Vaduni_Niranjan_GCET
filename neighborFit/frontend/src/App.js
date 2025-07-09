import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Preferences from './pages/Preferences';
import Results from './pages/Results';
import NeighborhoodDetails from './pages/NeighborhoodDetails';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/results" element={<Results />} />
        <Route path="/Neighborhood/:name" element={<NeighborhoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
