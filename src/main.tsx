import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import GuestRSVP from './pages/GuestRSVP';
import GuestRSVP_Attending from './pages/GuestRSVP_Attending';
import GuestRSVP_NotAttending from './pages/GuestRSVP_NotAttending';
import GuestRSVP_Maybe from './pages/GuestRSVP_Maybe';
import GuestRSVP_Selected from './pages/GuestRSVP_Selected'; 

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/guest-rsvp" element={<GuestRSVP />} />
          <Route path="/guest-rsvp-attending" element={<GuestRSVP_Attending />} />
          <Route path="/guest-rsvp-not-attending" element={<GuestRSVP_NotAttending />} />
          <Route path="/guest-rsvp-maybe" element={<GuestRSVP_Maybe />} />
          <Route path="/guest-rsvp-selected" element={<GuestRSVP_Selected />} /> 
          <Route path="*" element={<GuestRSVP />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
