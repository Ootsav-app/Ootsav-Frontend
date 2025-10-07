import axios from 'axios';
import type { GuestRSVPFormData } from "../types/validation";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function getInviteDetails(eventId: string, groupId: string): Promise<any> {
    try {
        const inviteDetails: any = await axios.get(`${BACKEND_URL}/api/invite/${eventId}/${groupId}`);
        return inviteDetails;
    } catch (error) {
        console.error("Error fetching invite details:", error);
        throw error;
    }
}

async function submitRSVP(
    data: GuestRSVPFormData,
    eventId: string,
    groupId: string,
    availableDates: Date[]
) {
    const rsvpMapping = {
        Attending: "ACCEPTED",
        "Not Attending": "REJECTED",
        Maybe: "MAYBE",
    };

    let pickupDateTime = null;
    let dropoffDateTime = null;

    if (data.accommodationDates && data.accommodationDates.length > 0 && availableDates.length > 0) {
        const formatDateWithOrdinal = (date: Date): string => {
            const day = date.getDate();
            if (day > 3 && day < 21) return `${day}th`;
            switch (day % 10) {
                case 1: return `${day}st`;
                case 2: return `${day}nd`;
                case 3: return `${day}rd`;
                default: return `${day}th`;
            }
        };

        // Create a map from formatted string to actual Date
        const dateMap = new Map<string, Date>();
        availableDates.forEach(date => {
            const formatted = formatDateWithOrdinal(date);
            dateMap.set(formatted, date);
        });

        // Convert selected accommodation dates to actual Date objects
        const selectedDates = data.accommodationDates
            .map(dateStr => dateMap.get(dateStr))
            .filter((date): date is Date => date !== undefined)
            .sort((a, b) => a.getTime() - b.getTime());

        if (selectedDates.length > 0) {
            // Format as YYYY-MM-DD for the API
            const formatForAPI = (date: Date): string => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            };

            pickupDateTime = formatForAPI(selectedDates[0]); // Earliest date
            dropoffDateTime = formatForAPI(selectedDates[selectedDates.length - 1]); // Latest date
        }
    }

    // Determine alcohol as boolean
    const alcoholValue = data.alcohol && data.alcohol.toLowerCase() !== "none";

    const apiData: any = {
        name: data.name,
        phone_no: data.phone,
        RSVP: rsvpMapping[data.rsvp as keyof typeof rsvpMapping],
    };

    if (data.food) {
        apiData.food = data.food.toLowerCase();
    }

    apiData.alcohol = alcoholValue;

    if (pickupDateTime) {
        apiData.pickup_date_time = pickupDateTime;
        apiData.pickup_location = "Event Venue";
    }

    if (dropoffDateTime) {
        apiData.dropoff_date_time = dropoffDateTime;
        apiData.dropoff_location = "Event Venue";
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