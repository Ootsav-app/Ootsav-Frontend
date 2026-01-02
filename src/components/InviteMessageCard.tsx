import React from 'react';

interface InviteMessageCardProps {
  message: string;
  isHost: boolean;
  onEdit?: () => void;
}

const InviteMessageCard: React.FC<InviteMessageCardProps> = ({ message }) => {
  return (
    <div className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-gray-900">Invite Message</h2>
      </div>
      <p className="text-lg text-gray-800 font-medium italic leading-relaxed">
        "{message}"
      </p>
    </div>
  );
};

export default InviteMessageCard;