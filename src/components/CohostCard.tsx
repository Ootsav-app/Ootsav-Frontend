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
    <div className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <h2 className="mb-4 text-xl font-semibold text-gray-600">
        Co-Host Details
      </h2>

      {isEmpty ? (
        <div className="flex items-center justify-center h-24">
          <span className="text-lg font-medium text-gray-400">
            No co-hosts added yet.
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {coHosts.map((host) => (
            <div key={host.id} className="flex items-start ap-3">
              {/* Profile Picture - smaller and on the left */}
              <div className="relative flex items-center justify-center flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-200 rounded-xl">
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
                    className="w-8 h-8 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Text content on the right */}
              <div className="flex flex-col justify-around flex-1 h-[80%] min-w-0 item-center ml-2">
                <div>
                  <h3 className="text-base font-semibold leading-tight text-gray-900 truncate ">
                    {host.name}
                  </h3>
                  {/* <p className="text-xs font-medium text-gray-400">VIP Group</p> */}
                </div>

                {/* Call Button */}
                <a
                  href={`tel:${host.mobileNumber}`}
                  className="flex items-center gap-1.5 text-red-500  text-sm mt-1"
                >
                  <Phone size={14} className="text-red-500" />
                  CALL
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
