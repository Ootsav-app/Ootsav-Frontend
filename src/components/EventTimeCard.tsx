import React, { useState, useEffect } from "react";
import { MapPin, Calendar } from "lucide-react";

interface EventTimeCardProps {
  endTime: number;
  hashTag: string;
  names: string;
  dates: string;
  location: string;
  isHost: boolean;
  eventId: string;
  imageUrl?: string;
  eventType: string;
  hasDetails: boolean;
}

const EventTimeCard: React.FC<EventTimeCardProps> = ({
  endTime,
  hashTag,
  names,
  dates,
  location,
  imageUrl,
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    mins: number;
    secs: number;
  } | null>(null);

  const openMap = (locationQuery: string) => {
    const encodedLocation = encodeURIComponent(locationQuery);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(googleMapsUrl, "_blank");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft(null);
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / 1000 / 60) % 60);
        const secs = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, mins, secs });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const CountdownItem = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center mx-1">
      <span className="text-2xl font-bold text-white leading-none">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs font-semibold text-white/90 uppercase mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="m-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Image Section */}
      <div className="relative aspect-video">
        <img
          src={imageUrl || "/assets/default_placeholder.png"}
          alt="Event"
          className="w-full h-full object-cover"
          onError={(e) =>
            (e.currentTarget.src = "/assets/default_placeholder.png")
          }
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium mb-1">
              {hashTag.startsWith("#") ? hashTag : `#${hashTag}`}
            </span>

            {timeLeft ? (
              <div className="flex items-center">
                <CountdownItem value={timeLeft.days} label="Days" />
                <span className="text-white text-xl mx-1 mb-4">:</span>
                <CountdownItem value={timeLeft.hours} label="Hours" />
                <span className="text-white text-xl mx-1 mb-4">:</span>
                <CountdownItem value={timeLeft.mins} label="Mins" />
                <span className="text-white text-xl mx-1 mb-4">:</span>
                <CountdownItem value={timeLeft.secs} label="Secs" />
              </div>
            ) : (
              <span className="text-white text-2xl font-bold">
                Event Started!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 pb-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold text-gray-900 truncate pr-2">
            {names}
          </h2>
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center text-gray-600 whitespace-nowrap">
            <Calendar className="w-5 h-5 mr-2 text-red-500" />
            <span className="font-semibold text-lg">{dates}</span>
          </div>
          <div className="h-4 w-[1px] bg-gray-300"></div>
          <div
            className="flex items-center text-gray-600 whitespace-nowrap cursor-pointer hover:text-red-500 transition"
            onClick={() => openMap(location)}
          >
            <MapPin className="w-5 h-5 mr-1 text-red-500" />
            <span className="font-semibold text-lg truncate max-w-[150px]">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeCard;
