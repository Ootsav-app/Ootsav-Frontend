import React from 'react';

interface HostCardProps {
  weddingDetails: any;
  eventId: string;
  eventType: string;
  isHost: boolean;
  hasDetails: boolean;
}

const HostCard: React.FC<HostCardProps> = ({ weddingDetails }) => {
  const groomName = weddingDetails?.groom_name || 'Groom';
  const brideName = weddingDetails?.bride_name || 'Bride';
  const groomDetails = weddingDetails?.groom_details || '';
  const brideDetails = weddingDetails?.bride_details || '';

  const ProfileBlock = ({ name, role, details, imgUrl }: any) => (
    <div className="flex flex-col items-start w-full">
      <div className="w-full aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden mb-3">
        {imgUrl ? (
          <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
             <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-900 leading-tight">{name}</h3>
      <span className="text-gray-500 font-medium">{role}</span>
      {details && <p className="text-sm text-gray-500 mt-1 line-clamp-3">{details}</p>}
    </div>
  );

  return (
    <div className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Couple Details</h2>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <ProfileBlock 
            name={groomName} 
            role="Groom" 
            details={groomDetails} 
            imgUrl={weddingDetails?.groom_image} 
          />
        </div>
        <div className="flex-1">
          <ProfileBlock 
            name={brideName} 
            role="Bride" 
            details={brideDetails} 
            imgUrl={weddingDetails?.bride_image} 
          />
        </div>
      </div>
    </div>
  );
};

export default HostCard;