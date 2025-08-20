export default function GuestRSVP_Attending() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Gradient Section */}
      <div
        className="flex flex-col  items-center justify-center text-center text-white px-4 sm:px-6 relative bg-[#272938]"
        style={{
          backgroundImage: `url('/back1.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full py-1 pb-30 sm:py-14 h-[55vh] flex flex-col justify-center items-center">
          <img
            src="/Confetti.svg"
            alt="Confetti"
            className="w-16 h-auto mb-6 sm:w-24 md:w-28 lg:w-32"
          />

          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            You’re In!
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 max-w-[90%] sm:max-w-md leading-relaxed">
            Thanks for RSVPing—we can’t wait to see you there!
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 max-w-[90%] sm:max-w-md leading-relaxed">
            Want to stay in the loop for all the fun updates, photos, and
            surprises?
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%] sm:max-w-md leading-relaxed">
            Download the app and don’t miss a thing.
          </p>
        </div>
      </div>

      {/* App Download Section */}
      <div className="flex flex-col items-center justify-center flex-grow w-full px-4 py-10 space-y-6 text-black bg-white">
        <img
          src="/play.svg"
          alt="Google Play Store"
          className="w-[90%] max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
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
