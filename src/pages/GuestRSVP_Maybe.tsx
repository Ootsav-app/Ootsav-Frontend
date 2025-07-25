export default function GuestRSVP_Maybe() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Gradient Section */}
      <div
        className="rounded-b-3xl text-white flex flex-col items-center text-center px-4 sm:px-6 relative"
        style={{
          backgroundImage: "url('/back.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full py-10 sm:py-14 h-[65vh] flex flex-col justify-center items-center">
          {/* Icon */}
          <img
            src="/confused.svg"
            alt="Confused Icon"
            className="w-16 sm:w-24 md:w-28 lg:w-32 h-auto mb-6"
          />

          {/* Headings */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Keeping Things Open?
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Get It!
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-md leading-relaxed">
            No pressure! You can update your RSVP response on the app anytime.
            In the meantime, download the app to stay updated on all the event buzz.
          </p>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="bg-white text-black flex flex-col items-center justify-center px-4 py-10 space-y-6 w-full">
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
