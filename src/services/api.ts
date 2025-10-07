import axios from 'axios';
import type { GuestRSVPFormData } from "../types/validation";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function getInviteDetails(eventId:string, groupId:string):Promise<any>{
    try{
        const inviteDetails:any = await axios.get(`${BACKEND_URL}/api/invite/${eventId}/${groupId}`)
        return inviteDetails;
    }
    catch (error) {
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
        "Not Attending": "rejected",
        Maybe: "maybe",
    };

    let count = 1;
    if (data.guest === "+1") {
        count = 2;
    } else if (data.guest === "+2") {
        count = 3;
    } else if (data.guest === "Family") {
        count = 4;
    }

    const apiData = {
        name: data.name,
        phone_no: data.phone,
        rsvp: rsvpMapping[data.rsvp as keyof typeof rsvpMapping],
        food: data.food.toLowerCase(),
        alcohol: data.alcohol.toLowerCase(),
        count: data.rsvp === "Attending" ? count : 0,
    };

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