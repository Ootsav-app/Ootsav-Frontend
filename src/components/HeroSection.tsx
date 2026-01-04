import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      // Using Web3Forms email service
      const formData = new FormData();
      formData.append("access_key", "97deda73-58e1-4d3a-bf90-21e12a2388a4");
      formData.append("subject", "New Email Signup from Ootsav Landing Page");
      formData.append("email", email);
      formData.append("message", `New user signup request from: ${email}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Thank you! We'll be in touch soon.");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-1 px-4 py-8 md:px-8">
      <div className="text-center max-w-4xl mx-auto w-full">
        <h1 className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-darker-grotesque leading-[1.356]">
          Zero Chaos, Smarter RSVP
        </h1>
        <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold font-darker-grotesque leading-[1.356] mt-0">
          Seamless Wedding Celebrations
        </h2>
        <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-darker-grotesque leading-[1.356] mt-4 md:mt-[22px] font-thin px-4">
          The only guest management tool built for Indian wedding planners
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 mt-6 md:mt-8 px-4 sm:px-0"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isSubmitting}
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-[16px] sm:text-[18px] font-normal bg-white border-none rounded-lg sm:rounded-l-lg sm:rounded-r-none outline-none font-darker-grotesque disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-[16px] sm:text-[18px] font-bold text-white transition-colors bg-black rounded-lg sm:rounded-r-lg sm:rounded-l-none font-darker-grotesque hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Start for free"}
            {!isSubmitting && (
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
            )}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-[14px] sm:text-[16px] font-darker-grotesque ${
              message.includes("Thank") ? "text-green-300" : "text-red-300"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
