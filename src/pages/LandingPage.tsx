import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BookDemoButton from "../components/BookDemoButton";
import FeaturesSection from "../components/FeaturesSection";
import ProblemSection from "../components/ProblemSection";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Frame 1.svg"
            alt="Wedding background"
            className="object-cover w-full h-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <HeroSection />
        </div>
        <BookDemoButton />
      </div>
      <FeaturesSection />
      <ProblemSection />
    </div>
  );
};

export default LandingPage;
