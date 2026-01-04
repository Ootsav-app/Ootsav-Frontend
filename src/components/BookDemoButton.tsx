import React from "react";

const BookDemoButton: React.FC = () => {
  return (
    <div className="fixed z-20 bottom-4 right-4 md:bottom-8 md:right-8">
      <button className="bg-[#EF544F] text-white px-3 py-2 md:px-2 md:py-3 rounded-lg font-darker-grotesque font-bold text-base md:text-xl leading-[1.356] shadow-[0px_0px_66.67px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity flex items-center gap-2 md:gap-3 w-[160px] md:w-[200px]">
        <svg
          className="w-6 h-5 md:w-[37px] md:h-[27px] flex-shrink-0"
          viewBox="0 0 37 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.76"
            width="29.53"
            height="22.03"
            rx="2"
            stroke="white"
            strokeWidth="1.33"
          />
          <circle
            cx="21.05"
            cy="11.71"
            r="3.94"
            stroke="white"
            strokeWidth="1.33"
          />
          <rect y="22.03" width="37.07" height="4.64" rx="2.32" fill="white" />
          <circle cx="18.36" cy="24.8" r="3.18" fill="#EF544F" />
        </svg>
        <span>Book a demo</span>
      </button>
    </div>
  );
};

export default BookDemoButton;
