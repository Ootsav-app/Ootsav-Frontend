import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GuestRSVP from "./pages/GuestRSVP";
import GuestRSVP_Attending from "./pages/GuestRSVP_Attending";
import GuestRSVP_NotAttending from "./pages/GuestRSVP_NotAttending";
import GuestRSVP_Maybe from "./pages/GuestRSVP_Maybe";
import GuestRSVP_Selected from "./pages/GuestRSVP_Selected";

const ROUTES = {
  GUEST_RSVP: "/guest-rsvp",
  GUEST_RSVP_ATTENDING: "/guest-rsvp-attending",
  GUEST_RSVP_NOT_ATTENDING: "/guest-rsvp-not-attending",
  GUEST_RSVP_MAYBE: "/guest-rsvp-maybe",
  GUEST_RSVP_SELECTED: "/guest-rsvp-selected",
} as const;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 darker-grotesque">
        <Routes>
          <Route path={ROUTES.GUEST_RSVP} element={<GuestRSVP />} />

          <Route
            path={ROUTES.GUEST_RSVP_ATTENDING}
            element={<GuestRSVP_Attending />}
          />
          <Route
            path={ROUTES.GUEST_RSVP_NOT_ATTENDING}
            element={<GuestRSVP_NotAttending />}
          />
          <Route path={ROUTES.GUEST_RSVP_MAYBE} element={<GuestRSVP_Maybe />} />
          <Route
            path={ROUTES.GUEST_RSVP_SELECTED}
            element={<GuestRSVP_Selected />}
          />

          <Route
            path="/"
            element={<Navigate to={ROUTES.GUEST_RSVP} replace />}
          />

          <Route
            path="*"
            element={<Navigate to={ROUTES.GUEST_RSVP} replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
