// Wedding Invitation Card - Responsive Component
import React from "react";
import {
  FigmaFloralTopLeft,
  FigmaFloralBranchRight,
  FigmaFloralHaldi,
  FigmaFloralWedding,
  FigmaFloralSangeet,
  FigmaFloralBottomLeft,
  FigmaFloralBottomRight,
  FigmaFloralBranchBottom,
} from "./FigmaFloralComponents";

// Corner Border Components
const TopLeftCornerBorder: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    width="180"
    height="300"
    viewBox="0 0 180 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="0.5" y1="300" x2="0.5" stroke="#000000" strokeWidth="1" />
    <line y1="0.5" x2="180" y2="0.5" stroke="#000000" strokeWidth="1" />
  </svg>
);

const BottomRightCornerBorder: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    width="180"
    height="301"
    viewBox="0 0 180 301"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="179.5" x2="179.5" y2="300" stroke="#000000" strokeWidth="1" />
    <line x1="180" y1="300.5" y2="300.5" stroke="#000000" strokeWidth="1" />
  </svg>
);

interface EventDetails {
  title: string;
  date: string;
  venue: string;
  color: string;
}

interface WeddingInvitationProps {
  brideName?: string;
  groomName?: string;
  brideParents?: string;
  groomParents?: string;
  hashtag?: string;
  events?: EventDetails[];
  invitationText?: string;
  additionalInfo?: string;
  contactInfo?: string;
  onConfirmAttendance?: () => void;
  className?: string;
}

const WeddingInvitation: React.FC<WeddingInvitationProps> = ({
  brideName = "Aditya Verma",
  groomName = "Varun",
  brideParents = "D/o Sri Hemat Ji & Ruchi Ji",
  groomParents = "S/o Rohit Oberoi & Megha Oberoi",
  hashtag = "#AdityaVarun4ever",
  events = [
    {
      title: "Haldi",
      date: "31st October - 10:00 PM",
      venue: "Charal Farmhouse, Puducherry",
      color: "#CC5500",
    },
    {
      title: "Sangeet",
      date: "1st November - 02:00 PM",
      venue: "Charal Farmhouse, Puducherry",
      color: "#800020",
    },
    {
      title: "Wedding",
      date: "2nd November - 09:00 PM",
      venue: "Charal Farmhouse, Puducherry",
      color: "#4B0082",
    },
  ],
  invitationText = "We warmly invite you to honor us with your presence at our wedding ceremony.",
  additionalInfo = "We are thrilled to have you join us in celebrating the union of Aditya and Varun. Your presence will make our day even more special. Kindly let us know your needs for accommodation or transportation in the RSVP, as we would love to ensure your comfort and convenience.\n\nLooking forward to celebrating together!\n\nFor Enquires Contact\nMedhansh-12345678\nKrish-987654321",
  contactInfo = "Regards\nDear Close Relatives and Co-hosts",
  onConfirmAttendance,
  className = "",
}) => {
  // Function to format phone numbers on separate lines
  const formatPhoneNumbers = (text: string) => {
    // Replace "or" between phone numbers with newlines
    return text
      .replace(/(\d{10,})\s+or\s+(\w+-\d{10,})/g, "$1\n$2")
      .replace(/(\w+-\d{10,})\s+or\s+(\w+-\d{10,})/g, "$1\n$2");
  };

  const formattedAdditionalInfo = formatPhoneNumbers(additionalInfo);

  return (
    <div className={`w-full flex justify-center p-4 ${className}`}>
      {/* Responsive Container - Improved max-width for bigger screens */}
      <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[600px] xl:max-w-[660px] ">
        <div className="relative w-full mx-auto overflow-hidden text-center border-[1.5px] bg-invitation-background border-invitation-text pompiere-regular">
          {/* Corner Border Elements - Large black L-shaped accents */}

          <FigmaFloralBottomRight className="absolute -top-[0.5%] -left-[3%] w-[18%] h-auto " />
          <div className="relative flex flex-col items-center px-[6%] py-[8%]">
            <TopLeftCornerBorder className="absolute top-2 left-4 md:top-5 md:left-10 w-[40%] h-auto z-10 text-black" />
            <BottomRightCornerBorder className="absolute bottom-2 right-4 md:bottom-5 md:right-5 w-[40%] h-auto z-10 text-black" />
            {/* Main Invitation Text */}
            <div className="md:w-[65%] text-center mb-[8%] px-[2%] relative">
              <p className="text-[32px] leading-relaxed">{invitationText}</p>
            </div>

            {/* Bride Name Section */}
            <div className="text-center w-full mb-[3%]">
              <h1 className="text-[40px] leading-tight montaga-regular">
                {brideName}
              </h1>
              <p className="text-[17px] mt-[2%] montaga-regular">
                {brideParents}
              </p>
            </div>

            {/* Weds Section */}
            <div className="mb-[3%]">
              <span className="text-[26px] italic">weds</span>
            </div>

            {/* Groom Name Section */}
            <div className="text-center w-full mb-[8%] relative">
              <h1 className="text-[40px] leading-tight montaga-regular">
                {groomName}
              </h1>
              <p className="text-[17px] mt-[2%] montaga-regular">
                {groomParents}
              </p>

              {/* Side Branch positioned relative to groom section */}
              <FigmaFloralBranchRight className="absolute right-[-10%] top-[-20%] w-[25%] h-auto " />
            </div>

            {/* Hashtag */}
            <div className="mb-[8%]">
              <p className="text-[24px] laila-light">{hashtag}</p>
            </div>

            {/* Events Section */}
            <div className="w-full space-y-[8%] mb-[10%]">
              {events.map((event, index) => {
                // Map event types to specific Figma floral components
                const EventFloral =
                  event.title.toLowerCase() === "haldi"
                    ? FigmaFloralHaldi
                    : event.title.toLowerCase() === "wedding"
                    ? FigmaFloralWedding
                    : FigmaFloralSangeet;

                return (
                  <div key={index} className="relative text-center py-[3%]">
                    {/* Event-specific Floral Accent */}
                    <EventFloral
                      className={`absolute  top-[10%] w-[20%] h-auto  ${
                        index % 2 == 0 ? "left-[5%]" : "right-[5%]"
                      }`}
                    />

                    <div className="space-y-[2%] relative z-10">
                      <p className="text-[24px] laila-semibold">{event.date}</p>

                      <h2 className="text-[38px] montaga-regular">
                        {event.title}
                      </h2>

                      <p className="text-[24px] laila-regular">{event.venue}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Information */}
            <div className="w-full text-center mb-[8%] px-[2%]">
              <div className="text-[32px] leading-relaxed whitespace-pre-line">
                {formattedAdditionalInfo}
              </div>
              <FigmaFloralBranchBottom className="absolute left-[-10%] bottom-[10%] w-[25%] h-auto " />
            </div>
            {/* <FigmaFloralBranchRight className="absolute left-[-10%] bottom-[ 20%] w-[25%] h-auto " /> */}
            {/* Contact Info */}
            <div className="w-full text-center mb-[8%] relative">
              <p className="text-[32px] leading-relaxed whitespace-pre-line">
                {contactInfo}
              </p>

              {/* Bottom Right Floral */}
              <FigmaFloralBottomRight className="absolute bottom-[-80%] right-[-5%] w-[18%] h-auto " />
            </div>
          </div>
          <div className="w-[80%] mx-auto py-4">
            <button className="w-full bg-[#ef4444] hover:bg-[#dc2626] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold text-lg md:text-xl transition-colors">
              {"CONFIRM ATTENDANCE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
