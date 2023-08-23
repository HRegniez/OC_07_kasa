import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Header from './components/Header';
import APropos from './pages/APropos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Style/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/a-propos" element={<APropos />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


