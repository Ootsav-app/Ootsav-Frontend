import { GoArrowLeft } from "react-icons/go";

export default function GuestRSVP() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-start px-4 py-6 md:px-8"
      style={{ backgroundImage: 'url("/back.svg")' }}
    >
      <div className="flex items-center w-full max-w-xl text-white mb-6 px-2">
        <button className="rounded-full p-2 mr-3 bg-white/20">
          <GoArrowLeft className="w-6 h-6" />
        </button>
        <span className="text-lg font-medium">Event Overview</span>
      </div>

      {/* Form Card */}
      <div className="relative bg-[#fff5f8] w-full max-w-xl rounded-xl shadow-md px-4 py-6 space-y-8 overflow-hidden md:px-10 md:py-12">
        <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#ffd4e2] to-white" />
        </div>

        {/* Personal Details */}
        <div className="relative z-10">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Personal Details
          </h2>
          <input
            type="text"
            placeholder="Name*"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white"
          />
          <input
            type="email"
            placeholder="Email Id"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white"
          />
          <textarea
            placeholder="Personal Note"
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm bg-white"
          />
        </div>

        {/* RSVP Status */}
        <div className="relative z-10">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
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
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-300 bg-white text-sm"
              >
                <img src={item.src} alt={item.label} className="w-8 h-8 mb-1" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Count */}
        <div className="relative z-10">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
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
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-300 bg-white text-sm"
              >
                <img src={item.src} alt={item.label} className="w-8 h-8 mb-1" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Food Preference */}
        <div className="relative z-10">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
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
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-300 bg-white text-sm"
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
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
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
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-300 bg-white text-sm"
              >
                <img src={item.src} alt={item.label} className="w-8 h-8 mb-1" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accommodation Dates */}
        <div className="relative z-10">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Accommodation Required
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {["25th", "26th", "27th", "28th"].map((day, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-center py-12 px-2 rounded-xl border border-gray-300 text-sm bg-white"
              >
                <div
                  className="absolute top-1 left-1 w-16 h-16 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: 'url("/date.svg")' }}
                />
                <span className="mt-6 whitespace-nowrap font-medium">
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
