import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-1 px-8">
      <div className="text-center">
        <h1 className="text-white text-[36px] font-bold font-darker-grotesque leading-[1.356]">
          Zero Chaos, Smarter RSVP
        </h1>
        <h2 className="text-white text-[36px] font-bold font-darker-grotesque leading-[1.356] mt-0">
          Seamless Wedding Celebrations
        </h2>
        <p className="text-white text-[20px] font-darker-grotesque leading-[1.356] mt-[22px] font-thin">
          The only guest management tool built for Indian wedding planners
        </p>
        <div className="flex items-stretch gap-0 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 text-lg font-normal bg-white border-none rounded-l-lg outline-none font-darker-grotesque"
          />
          <button className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-colors bg-black rounded-r-lg font-darker-grotesque hover:bg-gray-900">
            Start for free
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
