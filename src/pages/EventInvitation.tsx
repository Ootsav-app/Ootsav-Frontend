// Event Invitation Page - Showcasing the Wedding Invitation Component
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import WeddingInvitation from "../components/WeddingInvitation";
import SkeletonLoader from "../components/SkeletonLoader";
import { getInviteDetails } from "../services/api";

const EventInvitation: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [inviteData, setInviteData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // Safari-compatible URL parameter extraction
  const getEventAndGroupId = () => {
    // Safari bug fix: Parse URL manually from window.location.href
    const url = new URL(window.location.href);
    let eventId = url.searchParams.get("eventId");
    let groupId = url.searchParams.get("groupId");

    // Validate extracted params
    if (
      eventId &&
      groupId &&
      eventId !== "undefined" &&
      groupId !== "undefined" &&
      eventId !== "null" &&
      groupId !== "null"
    ) {
      return { eventId, groupId };
    }

    // Fallback: React Router searchParams
    eventId = searchParams.get("eventId");
    groupId = searchParams.get("groupId");

    if (
      eventId &&
      groupId &&
      eventId !== "undefined" &&
      groupId !== "undefined" &&
      eventId !== "null" &&
      groupId !== "null"
    ) {
      return { eventId, groupId };
    }

    // Fallback: Extract from path like /invite/eventId/groupId
    const pathParts = location.pathname.split("/").filter(Boolean);
    if (pathParts.length >= 3 && pathParts[0] === "invite") {
      const pathEventId = pathParts[1];
      const pathGroupId = pathParts[2];
      if (
        pathEventId !== "undefined" &&
        pathGroupId !== "undefined" &&
        pathEventId !== "null" &&
        pathGroupId !== "null"
      ) {
        return { eventId: pathEventId, groupId: pathGroupId };
      }
    }

    return { eventId: null, groupId: null };
  };

  const { eventId, groupId } = getEventAndGroupId();

  useEffect(() => {
    // Re-extract parameters using Safari-compatible method
    const { eventId: currentEventId, groupId: currentGroupId } =
      getEventAndGroupId();

    if (!currentEventId || !currentGroupId) {
      console.error("Invalid parameters:", {
        eventId: currentEventId,
        groupId: currentGroupId,
        pathname: location.pathname,
        search: location.search,
        windowHref: window.location.href,
        userAgent: navigator.userAgent,
      });
      setError("Missing required parameters. Please use a valid invite link.");
      setIsLoading(false);
      return;
    }

    // Create a unique key for this event-group combination
    const cacheKey = `invite_${currentEventId}_${currentGroupId}`;

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

    getInviteDetails(currentEventId, currentGroupId)
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
  }, [location.pathname, location.search]);

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
      <div className="flex flex-col min-h-screen bg-white">
        <div
          className="text-white flex flex-col items-center text-center px-4 sm:px-6 relative bg-[#272938]"
          style={{
            backgroundImage: "url('/back1.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full py-10 pb-30 sm:py-14 h-[55vh] flex flex-col justify-center items-center">
            <img
              src="/heartbreak.svg"
              alt="Broken Link Icon"
              className="w-16 h-auto mb-6 sm:w-24 md:w-28 lg:w-32"
            />

            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Invite Link is Broken!
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-md leading-relaxed">
              We couldn't load your invitation. Please{" "}
              <strong>contact the host</strong> for a valid invite link, or
              download the app to access your invitation.
            </p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col items-center justify-center w-full px-4 py-10 space-y-6 text-black bg-white">
          <img
            src="/play.svg"
            alt="Google Play Store"
            className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md rounded-xl cursor-pointer"
            onClick={() =>
              window.open("https://play.google.com/store/apps", "_blank")
            }
          />
          <img
            src="/app.svg"
            alt="Apple App Store"
            className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md rounded-xl cursor-pointer"
            onClick={() => window.open("https://apps.apple.com", "_blank")}
          />
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
