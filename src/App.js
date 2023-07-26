
import './App.css';
import Login from './Component/Login.js';
import Header from './Component/header.js';
import React from 'react';
import {Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="Login"   element={ <Login/> } />
      <Route path="/"  index element={ <Header/> } />
      </Routes>
    </div>
  );
}

export default App;

