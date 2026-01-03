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
        <div className="w-full py-8 sm:py-12 min-h-[60vh] flex flex-col justify-center items-center px-4">
          <img
            src="/Confetti.svg"
            alt="Confetti"
            className="w-16 h-auto mb-6 sm:w-20 md:w-24"
          />

          <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            You’re In!
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 max-w-[95%] sm:max-w-xl md:max-w-2xl leading-relaxed">
            Thanks for RSVPing—we can’t wait to see you there!
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 max-w-[95%] sm:max-w-xl md:max-w-2xl leading-relaxed">
            Want to stay in the loop for all the fun updates, photos, and
            surprises?
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[95%] sm:max-w-xl md:max-w-2xl leading-relaxed">
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
