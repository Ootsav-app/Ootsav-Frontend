import React from 'react';
import { Phone } from 'lucide-react';

interface CohostCardProps {
  coHosts: any[];
  isHost: boolean;
  eventId: string;
  onUpdate: () => void;
}

const CohostCard: React.FC<CohostCardProps> = ({ coHosts }) => {
  const isEmpty = coHosts.length === 0;

  return (
    <div className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Co-Host Details</h2>
      </div>

      {isEmpty ? (
        <div className="h-24 flex items-center justify-center">
          <span className="text-gray-400 text-lg font-medium">No co-hosts added yet.</span>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {coHosts.map((host, idx) => (
            <div key={idx} className="flex items-center bg-gray-50 p-2 rounded-lg">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-3">
                <img 
                  src={host.profile_pic || '/assets/default_avatar.png'} 
                  alt={host.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">{host.name}</h4>
                <span className="text-xs text-gray-500">Co-Host</span>
              </div>
              <a href={`tel:${host.mobile_number}`} className="p-2 bg-white rounded-full shadow-sm text-green-500">
                <Phone size={18} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CohostCard;