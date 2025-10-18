// Event Invitation Page - Showcasing the Wedding Invitation Component
import React from "react";
import { useNavigate } from "react-router-dom";
import WeddingInvitation from "../components/WeddingInvitation";

const EventInvitation: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirmAttendance = () => {
    // Navigate to RSVP form
    navigate("/guest-rsvp-selected?eventId=demo&groupId=demo");
  };

  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <WeddingInvitation
        onConfirmAttendance={handleConfirmAttendance}
        className="mb-12"
      />
    </div>
  );
};

export default EventInvitation;
