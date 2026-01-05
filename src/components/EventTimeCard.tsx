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
      <span className="text-xl sm:text-2xl font-bold text-white leading-none tracking-tight">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] font-medium text-white/90 uppercase mt-1 tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div 
      className="m-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
      style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
    >
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
            <span className="text-white text-xs font-semibold tracking-wide mb-1 uppercase">
              {hashTag.startsWith("#") ? hashTag : `#${hashTag}`}
            </span>

            {timeLeft ? (
              <div className="flex items-center">
                <CountdownItem value={timeLeft.days} label="Days" />
                <span className="text-white text-lg mx-0.5 mb-4">:</span>
                <CountdownItem value={timeLeft.hours} label="Hours" />
                <span className="text-white text-lg mx-0.5 mb-4">:</span>
                <CountdownItem value={timeLeft.mins} label="Mins" />
                <span className="text-white text-lg mx-0.5 mb-4">:</span>
                <CountdownItem value={timeLeft.secs} label="Secs" />
              </div>
            ) : (
              <span className="text-white text-xl font-bold tracking-tight">
                Event Started!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 pb-5">
        <div className="flex justify-between items-start mb-2">
          {/* Title with exact Figma specs: 20px, SemiBold (600), Line Height 100% */}
          <h2 className="text-[20px] font-semibold text-gray-900 truncate pr-2 leading-none">
            {names}
          </h2>
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center text-gray-600 whitespace-nowrap">
            <Calendar className="w-4 h-4 mr-1.5 text-red-500" />
            <span className="font-semibold text-sm">{dates}</span>
          </div>
          <div className="h-3 w-[1px] bg-gray-300"></div>
          <div
            className="flex items-center text-gray-600 whitespace-nowrap cursor-pointer hover:text-red-500 transition"
            onClick={() => openMap(location)}
          >
            <MapPin className="w-4 h-4 mr-1 text-red-500" />
            <span className="font-semibold text-sm truncate max-w-[150px]">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeCard;