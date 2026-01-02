import React from 'react';
import { MapPin } from 'lucide-react';

interface SubeventTimelineCardProps {
  subEvents: any[];
  isHost: boolean;
  eventId: string;
  onUpdate: () => void;
}

const SubeventTimelineCard: React.FC<SubeventTimelineCardProps> = ({ subEvents }) => {
  const isEmpty = subEvents.length === 0;

  return (
    <div className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Sub Event Details</h2>
      </div>

      {isEmpty ? (
        <div className="h-24 flex items-center justify-center text-center">
          <span className="text-gray-400 text-lg font-medium">No sub-events added yet.</span>
        </div>
      ) : (
        <div className="relative">
          {subEvents.map((event, index) => {
            const isLast = index === subEvents.length - 1;
            const isSameDay = index > 0 && subEvents[index - 1].date === event.date;

            return (
              <div key={event.id} className="flex mb-0">
                {/* Date Column */}
                <div className="w-12 pt-0 flex flex-col items-center text-center shrink-0">
                  {!isSameDay && (
                    <>
                      <span className="text-xl font-extrabold text-gray-900 leading-none">
                        {event.day}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 mt-1">
                        {event.date}
                      </span>
                    </>
                  )}
                </div>

                {/* Timeline Graphic */}
                <div className="flex flex-col items-center mx-3 relative">
                  {/* Circle */}
                  {!isSameDay && (
                    <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center z-10 bg-white">
                       <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                  )}
                  {/* Line */}
                  <div className={`w-[2px] bg-gray-300 ${!isSameDay ? 'mt-1' : ''} ${isLast ? 'h-full flex-1' : 'h-full min-h-[160px]'}`}></div>
                </div>

                {/* Event Card */}
                <div className="flex-1 pb-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 flex justify-between h-36">
                    <div className="flex flex-col justify-between flex-1 pr-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1 line-clamp-1">
                          {event.name}
                        </h3>
                        <span className="text-gray-500 font-medium text-lg">
                          {event.time}
                        </span>
                        
                        <div className="flex items-center mt-3 text-gray-500">
                           <MapPin size={16} className="mr-1 text-gray-400" />
                           <span className="text-sm font-medium line-clamp-1">
                             {event.location}
                           </span>
                        </div>
                      </div>
                    </div>

                    {/* Image Only (No Menu) */}
                    <div className="flex flex-col items-end justify-end w-24">
                      <div className="w-full h-24 rounded-xl overflow-hidden bg-gray-200">
                        <img 
                          src={event.imageUrl || '/assets/default_event.png'} 
                          alt="Sub Event" 
                          className="w-full h-full object-cover" 
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