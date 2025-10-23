// Event Invitation Page - Showcasing the Wedding Invitation Component
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import WeddingInvitation from "../components/WeddingInvitation";
import SkeletonLoader from "../components/SkeletonLoader";
import { getInviteDetails } from "../services/api";

const EventInvitation: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = useParams();
  const [inviteData, setInviteData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // Get eventId and groupId from either URL params or search params
  const eventId = params.eventId || searchParams.get("eventId");
  const groupId = params.groupId || searchParams.get("groupId");

  useEffect(() => {
    if (!eventId || !groupId) {
      setError("Missing required parameters. Please use a valid invite link.");
      setIsLoading(false);
      return;
    }

    // Create a unique key for this event-group combination
    const cacheKey = `invite_${eventId}_${groupId}`;

    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData);
        setInviteData(parsedData);
        setIsLoading(false);
        return;
      } catch (error) {
        // If parsing fails, clear the corrupted data and fetch fresh
        localStorage.removeItem(cacheKey);
      }
    }

    setIsLoading(true);
    setError("");

    getInviteDetails(eventId, groupId)
      .then((res) => {
        const data: any = res.data;
        setInviteData(data);

        // Store the data in localStorage for future use
        localStorage.setItem(cacheKey, JSON.stringify(data));

        // Clean up old localStorage entries for different events
        cleanupOldEventData(cacheKey);
      })
      .catch((error) => {
        console.error("Error loading invite details:", error);
        setError(
          "Unable to load invite details. Please check your invite link."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [eventId, groupId]);

  // Function to clean up old event data from localStorage
  const cleanupOldEventData = (currentKey: string) => {
    const keysToRemove: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("invite_") && key !== currentKey) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });
  };

  const handleConfirmAttendance = () => {
    // Navigate to RSVP form with proper parameters
    navigate(`/guest-rsvp-selected?eventId=${eventId}&groupId=${groupId}`);
  };

  // Show error if parameters are missing or loading failed
  if (error) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <div className="px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Invalid Invite Link
          </h2>
          <p className="mb-4 text-gray-600">{error}</p>
          <p className="text-sm text-gray-500">
            Please contact the event organizer for a valid invite link.
          </p>
        </div>
      </div>
    );
  }

  // Show skeleton loader while loading
  if (isLoading) {
    return (
      <div className="min-h-screen py-8 bg-gray-100">
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <WeddingInvitation
        inviteData={inviteData}
        onConfirmAttendance={handleConfirmAttendance}
      />
    </div>
  );
};

export default EventInvitation;
