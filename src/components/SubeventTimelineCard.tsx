import React from "react";
import { MapPin } from "lucide-react";

interface SubEvent {
  id: string;
  title: string;
  location: string;
  address: string;
  inviteMessage: string | null;
  image: string;
  startDateTime: string;
  endDateTime: string;
}

interface SubeventTimelineCardProps {
  subEvents: SubEvent[];
  isHost: boolean;
  eventId: string;
  onUpdate: () => void;
}

const SubeventTimelineCard: React.FC<SubeventTimelineCardProps> = ({
  subEvents,
}) => {
  const isEmpty = subEvents.length === 0;

  // Helper to format date and time
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const dateString = `${day}/${month}`;
    const time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return { day, dateString, time };
  };

  const openMap = (location: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Sub Event Details</h2>
      </div>

      {isEmpty ? (
        <div className="flex items-center justify-center h-24 text-center">
          <span className="text-lg font-medium text-gray-400">
            No sub-events added yet.
          </span>
        </div>
      ) : (
        <div className="relative pl-4">
          {subEvents.map((event, index) => {
            const isLast = index === subEvents.length - 1;
            const { day, dateString, time } = formatDateTime(
              event.startDateTime
            );
            const prevDate =
              index > 0
                ? formatDateTime(subEvents[index - 1].startDateTime).dateString
                : "00/00";
            const isSameDay = prevDate === dateString;

            const cardHeight = 144; // 36 * 4 = 144px (h-36)

            return (
              <div
                key={event.id}
                className="flex"
                style={{ height: `${cardHeight + 24}px` }}
              >
                {/* Date Column */}
                <div className="flex flex-col items-center w-12 pt-0 text-center shrink-0">
                  {!isSameDay && (
                    <>
                      <span className="text-2xl font-extrabold leading-none text-gray-900">
                        {day}
                      </span>
                      <span className="mt-1 text-sm font-semibold leading-tight text-gray-500">
                        {dateString}
                      </span>
                    </>
                  )}
                </div>

                {/* Timeline Graphic */}
                <div className="relative flex flex-col items-center mx-3">
                  {/* Circle */}
                  {!isSameDay && (
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-white border-2 border-black rounded-full">
                      <div className="w-3 h-3 bg-gray-400 rounded-full" />
                    </div>
                  )}

                  {/* Top Line (before horizontal) */}
                  <div
                    className="w-[2px] bg-gray-600"
                    style={{
                      height: isSameDay
                        ? `${cardHeight / 2}px`
                        : `${cardHeight / 2 - 24}px`,
                      marginTop: isSameDay ? "0" : "4px",
                    }}
                  />

                  {/* Horizontal Line */}
                  <div className="w-6 h-[2px] bg-gray-600" />

                  {/* Bottom Line (after horizontal) */}
                  {!isLast && (
                    <div
                      className="w-[2px] bg-gray-600"
                      style={{
                        height: isSameDay
                          ? `${cardHeight / 2 + 23}px`
                          : `${cardHeight / 2 + 23}px`,
                      }}
                    />
                  )}
                </div>

                {/* Event Card */}
                <div className="flex-1 pb-6">
                  <div className="flex justify-between p-3 border border-gray-300 bg-gray-50 rounded-2xl h-36">
                    <div className="flex flex-col justify-between flex-1 pr-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-0.5 line-clamp-1">
                          {event.title}
                        </h3>
                        <span className="block text-lg font-medium leading-tight text-gray-500">
                          {time}
                        </span>

                        <div
                          className="flex items-end mt-2.5 text-gray-500 cursor-pointer hover:text-gray-700 underline transition"
                          onClick={() => openMap(event.location)}
                        >
                          <MapPin
                            size={18}
                            className="mr-1 text-red-400 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm font-medium leading-tight line-clamp-2">
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex flex-col items-end justify-end flex-shrink-0 w-36">
                      <div className="w-full h-full overflow-hidden bg-gray-200 rounded-2xl">
                        <img
                          src={event.image || "/assets/default_event.png"}
                          alt={event.title}
                          className="w-full h-full "
                          onError={(e) =>
                            (e.currentTarget.src = "/assets/default_event.png")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubeventTimelineCard;
