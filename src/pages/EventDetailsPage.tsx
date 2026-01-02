import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getFullEventPageData } from '../services/api'; 
import { EventData, SubEvent, CoHost } from '../types/events';

// Components
import EventTimeCard from '../components/EventTimeCard';
import HostCard from '../components/HostCard';
import InviteMessageCard from '../components/InviteMessageCard';
import CohostCard from '../components/CohostCard';
import SubeventTimelineCard from '../components/SubeventTimelineCard';

const EventDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('id'); // Assumes URL is /event-details?id=123

  // State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [coHosts, setCoHosts] = useState<CoHost[]>([]);
  const [subEvents, setSubEvents] = useState<SubEvent[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      if (!eventId) {
        setError("No Event ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await getFullEventPageData(eventId);
        
        setEventData(data.event);
        setSubEvents(data.subEvents);
        setCoHosts(data.coHosts);
      } catch (err) {
        console.error(err);
        setError("Failed to load event details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  const handleConfirmAttendance = () => {
    console.log("Navigating to RSVP...");
  };

  const getFormattedDateRange = (start: string, end: string) => {
    if (!start || !end) return "";
    const startDate = new Date(start);
    const endDate = new Date(end);
    

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  // --- Render Error State ---
  if (error || !eventData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold text-red-500 mb-2">Error</h2>
          <p className="text-gray-600">{error || "Event not found"}</p>
        </div>
      </div>
    );
  }

  const hasWeddingDetails = !!eventData.wedding_details;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-0 sm:pt-8 pb-0 sm:pb-8">
      <div className="w-full max-w-[500px] bg-white min-h-screen sm:min-h-0 sm:h-auto sm:rounded-[30px] shadow-2xl overflow-hidden flex flex-col relative border-gray-200 sm:border-[8px]">
        
        <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
          <div className="flex flex-col gap-0">
            
            <EventTimeCard
              // Convert ISO string to timestamp number for the Countdown component
              endTime={new Date(eventData.end_time).getTime()} 
              hashTag={eventData.hashtag}
              names={eventData.title}
              dates={getFormattedDateRange(eventData.start_time, eventData.end_time)}
              location={`${eventData.location}, ${eventData.address}`}
              isHost={false}
              eventId={eventData._id}
              imageUrl={eventData.banner_image}
              eventType={eventData.event_type}
              hasDetails={hasWeddingDetails}
            />

            <HostCard
              weddingDetails={eventData.wedding_details}
              eventId={eventData._id}
              eventType={eventData.event_type}
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
              eventId={eventData._id}
              onUpdate={() => { 
                // Optional: Re-fetch logic if you implement live updates
              }}
            />

            <SubeventTimelineCard
              subEvents={subEvents}
              isHost={false}
              eventId={eventData._id}
              onUpdate={() => {}}
            />

            <div className="px-4 mt-6 mb-12">
              <button
                onClick={handleConfirmAttendance}
                className="w-full py-4 rounded-xl text-white font-bold text-lg tracking-wide bg-red-500 shadow-lg shadow-red-200 hover:bg-red-600 transition-colors"
              >
                CONFIRM ATTENDANCE
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;