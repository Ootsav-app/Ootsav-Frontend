import React from "react";
import { Phone } from "lucide-react";

interface CoHost {
  id: string;
  name: string;
  mobileNumber: string;
  profilePic: string;
}

interface CohostCardProps {
  coHosts: CoHost[];
  isHost: boolean;
  eventId: string;
  onUpdate: () => void;
}

const CohostCard: React.FC<CohostCardProps> = ({ coHosts }) => {
  const isEmpty = coHosts.length === 0;

  return (
    <div 
      className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
    >

      <h2 className="mb-3 text-sm font-medium text-gray-500">Co-Host Details</h2>

      {isEmpty ? (
        <div className="flex items-center justify-center h-16">
          <span className="text-sm font-medium text-gray-400">
            No co-hosts added yet.
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {coHosts.map((host) => (
            <div key={host.id} className="flex items-center gap-3">
            
              <div className="relative flex-shrink-0 w-12 h-12 overflow-hidden bg-gray-100 rounded-xl">
                {host.profilePic ? (
                  <img
                    src={host.profilePic}
                    alt={host.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    host.profilePic ? "hidden" : "flex"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-center min-w-0">
                <h3 className="text-[14px] font-semibold leading-none text-gray-900 truncate mb-1">
                  {host.name}
                </h3>
                
                {/* Optional Group Label  */}
                {/* <p className="text-[10px] text-gray-400 leading-none mb-1">VIP Group</p> */}

                {/* Call Button */}
                <a
                  href={`tel:${host.mobileNumber}`}
                  className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-colors"
                >
                  <Phone size={10} className="fill-current" />
                  <span className="text-[10px] font-bold tracking-wider leading-none">CALL</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CohostCard;