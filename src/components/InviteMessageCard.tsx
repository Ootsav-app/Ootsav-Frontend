import React from "react";

interface InviteMessageCardProps {
  message: string;
  isHost: boolean;
  onEdit?: () => void;
}

const InviteMessageCard: React.FC<InviteMessageCardProps> = ({ message }) => {
  return (
    <div 
      className="mx-4 mb-4 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
    >
      <h2 className="mb-3 text-xl font-bold text-gray-900 leading-tight">
        Message from the hosts!
      </h2>
      
      <p className="text-[12px] font-medium leading-[14px] text-gray-600">
        "{message}"
      </p>
    </div>
  );
};

export default InviteMessageCard;