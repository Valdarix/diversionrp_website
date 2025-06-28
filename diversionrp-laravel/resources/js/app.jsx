import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Contact from './components/Contact';
import Rules from './components/Rules';
import Streams from './components/Streams';
import Showcase from './components/Showcase';
import Support from './components/Support';
import './bootstrap';

const page = document.getElementById('app').dataset.page || 'home';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    {page === 'contact' && <Contact />}
    {page === 'rules' && <Rules />}
    {page === 'streams' && <Streams />}
    {page === 'showcase' && <Showcase />}
    {page === 'support' && <Support />}
    {page === 'home' && <Home />}
  </React.StrictMode>
);
