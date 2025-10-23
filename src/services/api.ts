import axios from "axios";
import type { GuestRSVPFormData } from "../types/validation";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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

async function submitRSVP(
  data: GuestRSVPFormData,
  eventId: string,
  groupId: string
) {
  const rsvpMapping = {
    Attending: "accepted",
    "Not Attending": "declined",
    Maybe: "maybe",
  };

  // Determine alcohol as boolean
  const alcoholValue = data.alcohol && data.alcohol.toLowerCase() === "yes";

  const apiData: any = {
    name: data.name,
    phone_no: data.phone,
    rsvp: rsvpMapping[data.rsvp as keyof typeof rsvpMapping],
  };

  if (data.food) {
    apiData.food = data.food.toLowerCase();
  }

  apiData.alcohol = alcoholValue;

  // Add pickup details if provided
  if (data.pickupLocation && data.pickupDateTime) {
    // Convert datetime-local format (YYYY-MM-DDTHH:mm) to date only (YYYY-MM-DD)
    apiData.pickup_date_time = data.pickupDateTime.split("T")[0];
    apiData.pickup_location = data.pickupLocation;
  }

  // Add dropoff details if provided
  if (data.dropoffLocation && data.dropoffDateTime) {
    // Convert datetime-local format (YYYY-MM-DDTHH:mm) to date only (YYYY-MM-DD)
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

export { getInviteDetails, submitRSVP };
