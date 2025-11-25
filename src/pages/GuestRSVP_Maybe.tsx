export default function GuestRSVP_Maybe() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Gradient Section */}
      <div
        className="text-white flex flex-col items-center text-center px-4 sm:px-6 relative bg-[#272938]"
        style={{
          backgroundImage: "url('/back1.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full py-10 pb-35 sm:py-14 h-[55vh] flex flex-col justify-center items-center mt-3">
          {/* Icon */}
          <img
            src="/confused.svg"
            alt="Confused Icon"
            className="w-16 h-auto mb-6 sm:w-24 md:w-28 lg:w-32"
          />

          {/* Headings */}
          <h1 className="mb-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Keeping Things Open?
          </h1>
          <h1 className="mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            We Get It!
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-xl leading-relaxed">
            No pressure! You can update your RSVP response on the app anytime.
            In the meantime, download the app to stay updated on all the event
            buzz.
          </p>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-col items-center justify-center w-full px-4 py-10 space-y-6 text-black bg-white">
        <img
          src="/play.svg"
          alt="Download on Play Store"
          className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
        />
        <img
          src="/app.svg"
          alt="Download on App Store"
          className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
        />
      </div>
    </div>
  );
}
