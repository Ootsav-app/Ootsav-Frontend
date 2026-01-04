import React from "react";

const ProblemSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white darker-grotesque overflow-hidden">
      <div className="container relative z-10 px-4 py-4 sm:px-6 md:px-8 md:py-8 flex items-center h-full">
        {/* Pink rounded background container */}
        <div className="bg-[#FFE8E7] rounded-[20px] md:rounded-[40px] p-4 md:p-8 lg:p-12 w-full">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content - Shows first on mobile */}
            <div className="space-y-4 md:space-y-6 order-1">
              {/* Problem Badge */}
              <div className="inline-block">
                <span className="bg-[#EF544F] text-white px-4 py-2 md:px-5 md:py-2 rounded-lg font-bold text-xs md:text-sm">
                  Problem
                </span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
                  Because your big day{" "}
                  <span className="text-[#EF544F]">shouldn't</span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
                  come with big chaos.
                </h2>
              </div>

              {/* Subheading */}
              <p className="text-base md:text-lg text-black">
                Yet here you are, drowning in -
              </p>

              {/* Problem Cards */}
              <div className="space-y-3 md:space-y-4">
                {/* RSVP Chaos Card */}
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 text-[#EF544F]">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M24 12C24 12 18 16 18 22C18 25.314 20.686 28 24 28C27.314 28 30 25.314 30 22C30 16 24 12 24 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="24" cy="22" r="2" fill="currentColor" />
                      <path
                        d="M16 34C16 30 19 28 24 28C29 28 32 30 32 34"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#EF544F] mb-1">
                      RSVP chaos
                    </h3>
                    <p className="text-xs md:text-sm text-black darker-grotesque">
                      With guests responding on different platforms (or not at
                      all)
                    </p>
                  </div>
                </div>

                {/* Scattered Guest Lists Card */}
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 text-[#EF544F]">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <rect
                        x="10"
                        y="12"
                        width="28"
                        height="24"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M14 18H34M14 24H28M14 30H24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#EF544F] mb-1">
                      Scattered guest lists
                    </h3>
                    <p className="text-xs md:text-sm text-black">
                      across WhatsApp groups, Excel sheets, and sticky notes
                    </p>
                  </div>
                </div>

                {/* Last-Minute Panic Card */}
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-2xl">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 text-[#EF544F]">
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="30"
                        cy="18"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="24"
                        cy="30"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 20L16 28M28 20L32 28M20 28L28 28"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#EF544F] mb-1">
                      Last-minute panic
                    </h3>
                    <p className="text-xs md:text-sm text-black">
                      when you realize Uncle Raj's plus-one became plus-three
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section - Shows second on mobile */}
            <div className="relative flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[110%] order-2">
              <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-[#F4A5A0] rounded-full opacity-60"></div>
              <img
                src="/man_standing.svg"
                alt="Stressed person"
                className="absolute z-10 w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
