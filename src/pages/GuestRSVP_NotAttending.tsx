export default function GuestRSVP_NotAttending() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div
        className="text-white flex flex-col items-center text-center px-4 sm:px-6 relative bg-[#272938]"
        style={{
          backgroundImage: "url('/back1.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full py-10 pb-30 sm:py-14 h-[55vh] flex flex-col justify-center items-center">
          <img
            src="/heartbreak.svg"
            alt="Heartbreak Icon"
            className="w-16 h-auto mb-6 sm:w-24 md:w-28 lg:w-32"
          />

          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            We'll Miss You!
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-md leading-relaxed">
            Sad you can't make it, but we get it — life happens! You can still
            update your RSVP on the app before <strong>20 December</strong>.
          </p>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-col items-center justify-center w-full px-4 py-10 space-y-6 text-black bg-white">
        <img
          src="/play.svg"
          alt="Google Play Store"
          className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.ootsav",
              "_blank"
            )
          }
        />
        <img
          src="/app.svg"
          alt="Apple App Store"
          className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
        />
      </div>
    </div>
  );
}
