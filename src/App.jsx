import logo from './logo.svg';

import Navbar from './components/navbar/navbar';
import Index from './components/index/index'
import Portfolio from './components/portfolio/portfolio';
import AboutUs from './components/aboutUs/aboutUs';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="aboutUs" element={<AboutUs/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
