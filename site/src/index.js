import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/App';
import Home from './pages/Home';
import Contato from './pages/Contato'
import VarEstado from './pages/VarEstado';
import Calculadora from './pages/Calculadora'
import Discord from './pages/Discord';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/app' element={<App/>} />
          <Route path='/contato' element={<Contato/>} />
          <Route path='/variavelestado'element={<VarEstado/>} />
          <Route path='/calculadora' element={<Calculadora/>} />
          <Route path='/discord/nitro' element={<Discord/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


