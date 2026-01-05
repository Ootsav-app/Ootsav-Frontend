import React from "react";

interface WeddingDetails {
  id: string;
  groom_name: string;
  bride_name: string;
  groom_image: string;
  bride_image: string;
  groom_details: string;
  bride_details: string;
  hashtag: string;
}

interface HostCardProps {
  weddingDetails: WeddingDetails | null;
  eventId: string;
  eventType: string;
  isHost: boolean;
  hasDetails: boolean;
}

const HostCard: React.FC<HostCardProps> = ({ weddingDetails }) => {
  if (!weddingDetails) {
    return null;
  }

  const groomName = weddingDetails.groom_name || "Groom";
  const brideName = weddingDetails.bride_name || "Bride";
  const groomDetails = weddingDetails.groom_details || "";
  const brideDetails = weddingDetails.bride_details || "";

  const ProfileBlock: React.FC<{
    name: string;
    role: string;
    details: string;
    imgUrl: string;
  }> = ({ name, role, details, imgUrl }) => (
    <div className="flex flex-col items-start w-full">
      {/* Image Section */}
      <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-3 relative shadow-sm">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={name}
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
          className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${
            imgUrl ? "hidden" : "flex"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-0.5">
          {role}
        </span>
        
        <h3 className="text-[14px] font-semibold text-gray-900 leading-[16px]">
          {name}
        </h3>

        {/* Details */}
        {details && (
          <p className="mt-1 text-[12px] text-gray-500 leading-tight line-clamp-2">
            {details}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div 
      className="mx-4 mb-4 p-4 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
    >
      <div className="flex gap-4">
       
        <div className="flex-1">
          <ProfileBlock
            name={brideName}
            role="Bride"
            details={brideDetails}
            imgUrl={weddingDetails.bride_image}
          />
        </div>
        <div className="flex-1">
          <ProfileBlock
            name={groomName}
            role="Groom"
            details={groomDetails}
            imgUrl={weddingDetails.groom_image}
          />
        </div>
      </div>
    </div>
  );
};

export default HostCard;