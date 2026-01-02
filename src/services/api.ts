import axios from "axios";
import type { GuestRSVPFormData } from "../types/validation";

// FIX 3: Update path to 'types/events' (plural)
import type { EventData, SubEvent, CoHost } from "../types/events"; 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// --- Debugging Block (Optional: Remove after verifying) ---
if (!BACKEND_URL) {
  console.error("CRITICAL ERROR: VITE_BACKEND_URL is undefined. Check .env file location and restart server.");
} else {
  console.log("CONNECTED TO BACKEND:", BACKEND_URL);
}

async function getInviteDetails(
  eventId: string,
  groupId: string
): Promise<any> {
  try {
    const inviteDetails: any = await axios.get(
      `${BACKEND_URL}/api/invite/${eventId}/${groupId}`
    );
    return inviteDetails;
  } catch (error) {
    console.error("Error fetching invite details:", error);
    throw error;
  }
}

interface FormConfig {
  collectFood?: boolean;
  collectAlcohol?: boolean;
  collectGuestCount?: boolean;
  collectAccommodation?: boolean;
  collectTransport?: boolean;
}

async function submitRSVP(
  data: GuestRSVPFormData,
  eventId: string,
  groupId: string,
  formConfig?: FormConfig
) {
  const rsvpMapping = {
    Attending: "accepted",
    "Not Attending": "declined",
    Maybe: "maybe",
  };

  const apiData: any = {
    name: data.name,
    phone_no: data.phone,
    rsvp: rsvpMapping[data.rsvp as keyof typeof rsvpMapping],
  };

  // Include email if provided
  if (data.email) {
    apiData.email = data.email;
  }

  // Include personal note if provided
  if (data.personalNote) {
    apiData.personal_note = data.personalNote;
  }

  // Only include food preference if it's being collected and has a value
  if (formConfig?.collectFood && data.food) {
    apiData.food = data.food.toLowerCase();
  }

  // Only include alcohol preference if it's being collected and has a value
  if (formConfig?.collectAlcohol && data.alcohol) {
    apiData.alcohol = data.alcohol.toLowerCase() === "yes";
  }

  // Only include guest count if it's being collected and has a value
  if (formConfig?.collectGuestCount && data.guest) {
    apiData.guest_count = data.guest;
  }

  // Add pickup details if transport is being collected and values are provided
  if (
    formConfig?.collectTransport &&
    data.pickupLocation &&
    data.pickupDateTime
  ) {
    apiData.pickup_date_time = data.pickupDateTime.split("T")[0];
    apiData.pickup_location = data.pickupLocation;
  }

  // Add dropoff details if transport is being collected and values are provided
  if (
    formConfig?.collectTransport &&
    data.dropoffLocation &&
    data.dropoffDateTime
  ) {
    apiData.dropoff_date_time = data.dropoffDateTime.split("T")[0];
    apiData.dropoff_location = data.dropoffLocation;
  }

  const response = await axios.post(
    `${BACKEND_URL}/api/invite/${eventId}/${groupId}/rsvp`,
    apiData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

// --- New Functions ---

async function getEventById(eventId: string): Promise<EventData> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
}

/**
 * Fetches the sub-events (timeline) for a specific event
 */
async function getEventSubEvents(eventId: string): Promise<SubEvent[]> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/events/${eventId}/subevents`);
    return response.data; // Assuming it returns an array
  } catch (error) {
    console.error("Error fetching sub-events:", error);
    return []; // Return empty array on error to prevent page crash
  }
}

/**
 * Fetches the co-hosts for a specific event
 */
async function getEventCoHosts(eventId: string): Promise<CoHost[]> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/events/${eventId}/cohosts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching co-hosts:", error);
    return [];
  }
}

/**
 * Composite function to fetch all page data in parallel
 */
async function getFullEventPageData(eventId: string) {
  try {
    const [event, subEvents, coHosts] = await Promise.all([
      getEventById(eventId),
      getEventSubEvents(eventId),
      getEventCoHosts(eventId),
    ]);

    return { event, subEvents, coHosts };
  } catch (error) {
    throw error;
  }
}

export { 
  getInviteDetails, 
  submitRSVP, 
  getEventById, 
  getEventSubEvents, 
  getEventCoHosts, 
  getFullEventPageData 
};