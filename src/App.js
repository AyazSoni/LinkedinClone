import './App.css';
import Login from './Component/Login.js';
import Header from './Component/header.js';
import Home from './Component/Home.js'; 
import HomeTogether from './Component/HomeTogether.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" index element={<HomeTogether />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
