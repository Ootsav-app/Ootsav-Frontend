import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Abstract Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/abstract_logo.svg"
          alt="Abstract Logo"
          className="w-auto h-[80vh] max-h-[800px] object-contain opacity-90"
        />
      </div>

      {/* Content - 3 Rows Layout */}
      <div className="container relative z-10 px-4 py-12 mx-auto lg:py-20">
        <div className="mx-auto space-y-12 max-w-7xl lg:space-y-16">
          {/* Row 1: Center Card - Connect WhatsApp */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-md">
              <div className="bg-[#EF544F] text-white px-6 py-3 font-bold text-lg rounded-t-2xl w-fit">
                Connect your WhatsApp
              </div>
              <div className="w-full bg-white shadow-lg rounded-b-2xl rounded-tr-2xl">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <img
                      src="/Frame 1.svg"
                      alt="Couple"
                      className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                    />
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-black">
                        Meenu weds Akash
                      </h3>
                      <p className="text-[#EF544F] text-sm font-medium">
                        Send Bulk Invites
                      </p>
                      <p className="text-[#EF544F] text-sm font-medium">
                        Personalized Messaging
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Two Cards Space Between - Create Multiple Weddings & RSVP App */}
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
            {/* Create Multiple Weddings Card */}
            <div className="flex flex-col items-center w-full max-w-md lg:max-w-sm">
              <div className="bg-[#EF544F] text-white px-6 py-3 font-bold text-lg rounded-t-2xl w-fit">
                Create Multiple Weddings
              </div>
              <div className="w-full bg-white shadow-lg rounded-b-2xl rounded-tr-2xl">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <img
                      src="/Frame 1.svg"
                      alt="Couple"
                      className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                    />
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-black">
                        Meenu weds Akash
                      </h3>
                      <p className="text-[#EF544F] text-base font-bold">
                        936/100Guests or 5 Events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RSVP App Card */}
            <div className="flex flex-col items-center w-full max-w-md lg:max-w-sm">
              <div className="bg-[#8B5CF6] text-white px-6 py-3 font-bold text-lg rounded-t-2xl w-fit">
                RSVP App
              </div>
              <div className="w-full bg-white shadow-lg rounded-b-2xl rounded-tr-2xl rounded-tl-2xl">
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black">
                        Wedding Invite
                      </h3>
                      <p className="mb-1 text-sm text-gray-600">
                        May 12,2025 - May 16, 2025
                      </p>
                      <p className="text-sm text-gray-600">
                        Corianthians, NIBM
                      </p>
                    </div>
                    <div className="flex-shrink-0 space-y-2">
                      <div className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[#8B5CF6] bg-white border-2  rounded-lg whitespace-nowrap">
                        <span className="text-[#8B5CF6]">✓</span> Attending
                      </div>
                      <div className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-500 bg-white border-2 border-red-400 rounded-lg whitespace-nowrap">
                        <span className="text-red-500">×</span> Not Attending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Center Card - Manage Guests & Groups */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-md">
              <div className="bg-[#8B5CF6] text-white px-6 py-3 font-bold text-lg rounded-t-2xl w-fit">
                Manage Guests & Groups
              </div>
              <div className="w-full bg-white shadow-lg rounded-b-2xl rounded-tr-2xl">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <img
                      src="/Frame 1.svg"
                      alt="Couple"
                      className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                    />
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-black">
                        Guests
                      </h3>
                      <p className="text-[#8B5CF6] text-xs leading-relaxed">
                        Bulk Add | Targeted Messaging
                        <br />
                        Groups | Add +1's |<br />
                        Group Specific Messaging
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
