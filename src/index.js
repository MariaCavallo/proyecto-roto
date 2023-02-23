import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route index path='/'  />
            <Route path="/blog"  />
            <Route path="/projects"  />
            <Route path="/about"  />
            <Route path="/contact"  />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

