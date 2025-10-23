import React from "react";

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center p-4 ${className}`}>
      <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[600px] xl:max-w-[660px]">
        <div className="relative w-full mx-auto overflow-hidden text-center border-[1.5px] bg-gray-50 border-gray-200 animate-pulse">
          <div className="relative flex flex-col items-center px-[6%] py-[8%]">
            {/* Corner borders skeleton */}
            <div className="absolute top-2 left-4 md:top-5 md:left-10 w-[40%] h-16 bg-gray-200 rounded"></div>
            <div className="absolute bottom-2 right-4 md:bottom-5 md:right-5 w-[40%] h-16 bg-gray-200 rounded"></div>

            {/* Main invitation text skeleton */}
            <div className="md:w-[65%] text-center mb-[8%] px-[2%]">
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <div className="h-6 bg-gray-200 rounded"></div>
            </div>

            {/* Bride name section skeleton */}
            <div className="text-center w-full mb-[3%]">
              <div className="h-12 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>

            {/* Weds skeleton */}
            <div className="mb-[3%]">
              <div className="h-6 bg-gray-200 rounded w-20 mx-auto"></div>
            </div>

            {/* Groom name section skeleton */}
            <div className="text-center w-full mb-[8%]">
              <div className="h-12 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>

            {/* Hashtag skeleton */}
            <div className="mb-[8%]">
              <div className="h-6 bg-gray-200 rounded w-48 mx-auto"></div>
            </div>

            {/* Events section skeleton */}
            <div className="w-full space-y-[8%] mb-[10%]">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="relative text-center py-[3%]">
                  <div className="space-y-[2%]">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto"></div>
                    <div className="h-6 bg-gray-200 rounded w-4/5 mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional information skeleton */}
            <div className="w-full text-center mb-[8%] px-[2%]">
              <div className="space-y-3">
                <div className="h-5 bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-5 bg-gray-200 rounded"></div>
                <div className="h-5 bg-gray-200 rounded w-2/3 mx-auto"></div>
              </div>
            </div>

            {/* Contact info skeleton */}
            <div className="w-full text-center mb-[8%]">
              <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          </div>

          {/* Button skeleton */}
          <div className="w-[80%] mx-auto py-4">
            <div className="w-full h-12 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
