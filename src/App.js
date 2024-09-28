import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;