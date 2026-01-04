import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProblemSection from "../components/ProblemSection";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Background - 100vh on all screens */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Frame 1.svg"
            alt="Wedding background"
            className="object-cover w-full h-full rounded-b-3xl"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="relative z-10 flex flex-col h-screen">
          <Navbar />
          <HeroSection />
        </div>
        {/* <BookDemoButton /> */}
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Footer */}
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
