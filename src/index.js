import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Header from './components/Header';
import APropos from './pages/APropos';
import Hotel from './pages/Hotel'
import Footer from './components/Footer'
import HotelProvider from './context/HotelProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Style/global.css'
import './Style/mediaQueries.css'
import NoHotel from './pages/NoHotel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <HotelProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/a-propos" element={<APropos />}/>
          <Route path="/hotel/:id" element={<Hotel />}/>
          <Route path="/*" element={<NoHotel />}/>
        </Routes>
      </HotelProvider>
      <Footer/>
    </Router>
  </React.StrictMode>
);


