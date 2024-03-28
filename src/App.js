import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home.tsx';
import Login from './Pages/Login/Login.tsx';
import Register from './Pages/Register/Register.tsx';
import ForgetAccount from './Pages/ForgetAccount/ForgetAccount.tsx';

function App() {
  return (
    <div className="App">
      <div className="App-inner">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faccount" element={<ForgetAccount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
