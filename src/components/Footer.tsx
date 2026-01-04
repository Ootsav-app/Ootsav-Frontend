import React from "react";
import testSvg from "../assets/test.svg";
import logoWhite from "../assets/logo_white.svg";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full darker-grotesque font-extralight">
      {/* Gradient Background Section */}
      <div className="relative w-full overflow-hidden ">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EF544F] to-[#8F4FEF]" />

        {/* Abstract Shape Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={testSvg}
            alt=""
            className="object-cover w-full h-full "
            aria-hidden="true"
          />
        </div>

        {/* Footer Content */}
        <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8 md:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            {/* Logo */}
            <div className="flex justify-center mb-8 md:mb-12">
              <img
                src={logoWhite}
                alt="Ootsav"
                className="w-auto h-10 sm:h-12 md:h-14"
              />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-center justify-center gap-6 mb-8 text-white sm:flex-row sm:gap-8 md:gap-12 md:mb-12">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border-2 border-white rounded-full md:w-10 md:h-10">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm md:text-base">Bengaluru, India</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border-2 border-white rounded-full md:w-10 md:h-10">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:contact@ootsav.in"
                  className="text-sm md:text-base hover:underline"
                >
                  contact@ootsav.in
                </a>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border-2 border-white rounded-full md:w-10 md:h-10">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+919191919191"
                  className="text-sm md:text-base hover:underline"
                >
                  +91 91919 19191
                </a>
              </div>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-0 text-sm text-white sm:gap-4 md:text-base">
              <a
                href="/terms"
                className="transition-all duration-200 hover:underline"
              >
                Terms & Conditions
              </a>
              <span className="text-white/60">|</span>
              <a
                href="/privacy"
                className="transition-all duration-200 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - White Strip */}
      <div className="w-full py-4 bg-white md:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-xs text-center text-gray-800 sm:text-sm md:text-base">
            <p>© 2025, Ootsav Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
