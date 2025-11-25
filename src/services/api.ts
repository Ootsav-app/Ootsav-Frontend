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

export { getInviteDetails, submitRSVP };
