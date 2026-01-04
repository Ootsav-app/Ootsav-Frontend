import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

import { getInviteDetails } from "../services/api";
import SkeletonLoader from "../components/SkeletonLoader";
import type { InviteApiResponse } from "../types/events";
// import WeddingInvitation from "../components/WeddingInvitation"; // Kept for future use

// UI Components
import EventTimeCard from "../components/EventTimeCard";
import HostCard from "../components/HostCard";
import InviteMessageCard from "../components/InviteMessageCard";
import CohostCard from "../components/CohostCard";
import SubeventTimelineCard from "../components/SubeventTimelineCard";

const EventDetailsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [inviteData, setInviteData] = useState<InviteApiResponse | null>(null);

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
      setLoading(false);
      return;
    }

    // Create a unique key for this event-group combination
    const cacheKey = `invite_${currentEventId}_${currentGroupId}`;

    // Check if data exists in sessionStorage (more reliable across devices)
    try {
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        try {
          const parsedData: InviteApiResponse = JSON.parse(cachedData);
          setInviteData(parsedData);
          setLoading(false);
          return;
        } catch (err) {
          // If parsing fails, clear the corrupted data and fetch fresh
          sessionStorage.removeItem(cacheKey);
        }
      }
    } catch (storageError) {
      // If sessionStorage is not available (privacy mode, etc.), just continue without caching
      console.warn("Session storage not available:", storageError);
    }

    setLoading(true);
    setError("");

    getInviteDetails(currentEventId, currentGroupId)
      .then((res) => {
        const data: InviteApiResponse = res.data;
        setInviteData(data);

        // Store the data in sessionStorage for future use (more reliable than localStorage)
        try {
          sessionStorage.setItem(cacheKey, JSON.stringify(data));
          // Clean up old sessionStorage entries for different events
          cleanupOldEventData(cacheKey);
        } catch (storageError) {
          // If storage fails (privacy mode, quota exceeded), just continue without caching
          console.warn("Unable to cache data:", storageError);
        }
      })
      .catch((err) => {
        console.error("Error loading invite details:", err);
        setError(
          "Unable to load invite details. Please check your invite link."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [location.pathname, location.search]);

  // Function to clean up old event data from sessionStorage
  const cleanupOldEventData = (currentKey: string) => {
    try {
      const keysToRemove: string[] = [];

      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith("invite_") && key !== currentKey) {
          keysToRemove.push(key);
        }
      }

      keysToRemove.forEach((key) => {
        sessionStorage.removeItem(key);
      });
    } catch (error) {
      // Ignore cleanup errors
      console.warn("Unable to cleanup old cache:", error);
    }
  };

  const handleConfirmAttendance = () => {
    // Navigate to RSVP form with proper parameters
    navigate(`/guest-rsvp-selected?eventId=${eventId}&groupId=${groupId}`);
  };

  // Helper function to format date range
  const getFormattedDateRange = (start: string, end: string) => {
    if (!start || !end) return "";
    const startDate = new Date(start);
    const endDate = new Date(end);

    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return `${startDate.toLocaleDateString(
      "en-US",
      options
    )} - ${endDate.toLocaleDateString("en-US", options)}`;
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
  if (loading) {
    return (
      <div className="min-h-screen py-8 bg-gray-100">
        <SkeletonLoader />
      </div>
    );
  }

  // Extract data from inviteData
  const eventData = inviteData?.event;
  const subEvents = inviteData?.subEvents || [];
  const coHosts = inviteData?.coHosts || [];
  const rsvpPreferences = inviteData?.rsvpPreferences;

  if (!eventData) {
    return null;
  }

  const hasWeddingDetails = !!eventData.weddingDetails;

  // Use hashtag from weddingDetails if available, otherwise generate from title
  const hashtag = eventData.weddingDetails?.hashtag
    ? `#${eventData.weddingDetails.hashtag}`
    : eventData.title
    ? `#${eventData.title.replace(/\s+/g, "")}`
    : "#Event";

  // Check if event has started
  const hasEventStarted = eventData.start_date_time
    ? new Date(eventData.start_date_time).getTime() < Date.now()
    : false;

  // Check if RSVP is allowed
  const isRsvpAllowed =
    rsvpPreferences?.formConfig?.isRsvpAllowed !== false && !hasEventStarted;

  return (
    <div className="flex items-start justify-center min-h-screen pt-4 bg-gray-100 ">
      <div className="w-full max-w-[600px] bg-gray-100 min-h-screen sm:min-h-0 sm:h-auto overflow-hidden flex flex-col relative">
        <div className="flex-1 pb-10 overflow-y-auto no-scrollbar">
          <div className="flex flex-col gap-0">
            <EventTimeCard
              endTime={new Date(eventData.end_date_time).getTime()}
              hashTag={hashtag}
              names={eventData.title}
              dates={getFormattedDateRange(
                eventData.start_date_time,
                eventData.end_date_time
              )}
              location={`${eventData.location}, ${eventData.address}`}
              isHost={false}
              eventId={eventData.id}
              imageUrl={eventData.image}
              eventType={eventData.type}
              hasDetails={hasWeddingDetails}
            />

            <HostCard
              weddingDetails={eventData.weddingDetails}
              eventId={eventData.id}
              eventType={eventData.type}
              isHost={false}
              hasDetails={hasWeddingDetails}
            />

            <InviteMessageCard
              message={eventData.invite_message}
              isHost={false}
            />

            <CohostCard
              coHosts={coHosts}
              isHost={false}
              eventId={eventData.id}
              onUpdate={() => {}}
            />

            <SubeventTimelineCard
              subEvents={subEvents}
              isHost={false}
              eventId={eventData.id}
              onUpdate={() => {}}
            />

            <div className="px-4 mt-6">
              <button
                onClick={handleConfirmAttendance}
                disabled={!isRsvpAllowed}
                className="w-full py-4 text-lg font-bold tracking-wide text-white transition-colors bg-red-500 shadow-lg rounded-xl shadow-red-200 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isRsvpAllowed ? "CONFIRM ATTENDANCE" : "RSVP LOCKED"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
