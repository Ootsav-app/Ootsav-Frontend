import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GuestRSVP from "./pages/GuestRSVP";
import GuestRSVP_Attending from "./pages/GuestRSVP_Attending";
import GuestRSVP_NotAttending from "./pages/GuestRSVP_NotAttending";
import GuestRSVP_Maybe from "./pages/GuestRSVP_Maybe";
import EventInvitation from "./pages/EventInvitation";

const ROUTES = {
  HOME: "/",
  EVENT_INVITATION: "/invitation",
  GUEST_RSVP: "/guest-rsvp-selected",
  GUEST_RSVP_ATTENDING: "/guest-rsvp-attending",
  GUEST_RSVP_NOT_ATTENDING: "/guest-rsvp-not-attending",
  GUEST_RSVP_MAYBE: "/guest-rsvp-maybe",
} as const;

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 darker-grotesque">
      <Routes>
        <Route path={ROUTES.HOME} element={<EventInvitation />} />
        <Route path={ROUTES.EVENT_INVITATION} element={<EventInvitation />} />
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

        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </div>
  );
};

export default App;
