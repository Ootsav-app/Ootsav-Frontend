import { GoArrowLeft } from "react-icons/go";

export default function GuestRSVP() {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-4 py-6 bg-center bg-no-repeat bg-cover md:px-8"
      style={{ backgroundImage: 'url("/back.svg")' }}
    >
      <div className="flex items-center w-full max-w-xl px-2 mb-6 text-white">
        <button className="p-2 mr-3 rounded-full bg-white/20">
          <GoArrowLeft className="w-6 h-6" />
        </button>
        <span className="text-lg font-medium">Event Overview</span>
      </div>

      {/* Form Card */}
      <div className="relative bg-[#fff5f8] w-full max-w-xl rounded-xl shadow-md px-4 py-6 space-y-8 overflow-hidden md:px-10 md:py-12">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffd4e2] to-white" />
        </div>

        {/* Personal Details */}
        <div className="relative z-10">
          <h2 className="mb-2 text-sm font-semibold text-gray-700">
            Personal Details
          </h2>
          <input
            type="text"
            placeholder="Name*"
            className="w-full px-4 py-3 mb-3 text-sm bg-white border border-gray-300 rounded-xl"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full px-4 py-3 mb-3 text-sm bg-white border border-gray-300 rounded-xl"
          />
          <input
            type="email"
            placeholder="Email Id"
            className="w-full px-4 py-3 mb-3 text-sm bg-white border border-gray-300 rounded-xl"
          />
          <textarea
            placeholder="Personal Note"
            rows={2}
            className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-xl"
          />
        </div>

        {/* RSVP Status */}
        <div className="relative z-10">
          <h2 className="mb-2 text-sm font-semibold text-gray-700">
            RSVP Status
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/tick.svg", label: "Attending" },
              { src: "/cross.svg", label: "Not Attending" },
              { src: "/maybe.svg", label: "Maybe" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 text-sm bg-white border border-gray-300 rounded-xl"
              >
                <img src={item.src} alt={item.label} className="w-8 h-8 mb-1" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Count */}
        <div className="relative z-10">
          <h2 className="mb-2 text-sm font-semibold text-gray-700">
            Additional Guest Count
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/+1.svg", label: "+1" },
              { src: "/+2.svg", label: "+2" },
              { src: "/family.svg", label: "+ Family" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 text-sm bg-white border border-gray-300 rounded-xl"
              >
                <img src={item.src} alt={item.label} className="w-8 h-8 mb-1" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Food Preference */}
        <div className="relative z-10">
          <h2 className="mb-2 text-sm font-semibold text-gray-700">
            Food Preference
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/veg.svg", label: "Veg" },
              { src: "/nonveg.svg", label: "Non-Veg" },
              { src: "/vn.svg", label: "Anything" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 text-sm bg-white border border-gray-300 rounded-xl"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className={`${
                    item.label === "Anything" ? "w-10 h-10" : "w-8 h-8"
                  } mb-1`}
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alcohol Preference */}
        <div className="relative z-10">
          <h2 className="mb-2 text-sm font-semibold text-gray-700">
            Alcohol Preference
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {[
              { src: "/Wine.svg", label: "Wine" },
              { src: "/gin.svg", label: "Gin" },
              { src: "/vodka.svg", label: "Vodka" },
              { src: "/beer.svg", label: "Beer" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 text-sm bg-white border border-gray-300 rounded-xl"
              >
                <img src={item.src} alt={item.label} className="w-8 h-8 mb-1" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Dates */}
        <div className="relative z-10">
          <h2 className="mb-2 text-lg font-semibold text-gray-700">
            Accommodation Required
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {["25th", "26th", "27th", "28th"].map((day, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-center px-2 py-12 text-sm bg-white border border-gray-300 rounded-xl"
              >
                <div
                  className="absolute w-16 h-16 bg-center bg-no-repeat bg-contain top-1 left-1"
                  style={{ backgroundImage: 'url("/date.svg")' }}
                />
                <span className="mt-6 font-medium whitespace-nowrap">
                  {day} Aug
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="relative z-10">
          <button className="w-full bg-[#ef4444] text-white py-3 rounded-xl font-bold text-lg">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}