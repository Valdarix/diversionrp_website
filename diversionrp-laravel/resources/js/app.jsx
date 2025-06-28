import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Contact from './components/Contact';
import './bootstrap';

const page = document.getElementById('app').dataset.page || 'home';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    {page === 'contact' ? <Contact /> : <Home />}
  </React.StrictMode>
);
