import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import ShirtsUpload from './admin/components/UploadShirt';

function App() {
  return (
    <div>
      <Router basename='/YELLOW'>
        <Routes>
          <Route exact path="/YELLOW" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/upload" element={<ShirtsUpload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;