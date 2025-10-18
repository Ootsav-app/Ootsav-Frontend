// Figma-based floral decoration components for the wedding invitation
import React from "react";
import floralTopLeftSvg from "../assets/floral-top-left.svg";
import floralBranchRightSvg from "../assets/floral-branch-right.svg";
import floralHaldiSvg from "../assets/floral-haldi.svg";
import floralWeddingSvg from "../assets/floral-wedding.svg";
import floralSangeetSvg from "../assets/floral-sangeet.svg";
import floralBottomLeftSvg from "../assets/floral-bottom-left.svg";
import floralBottomRightSvg from "../assets/floral-bottom-right.svg";

import floralBranchBottomSvg from "../assets/floral-branch-bottom.svg";

interface FloralProps {
  className?: string;
  style?: React.CSSProperties;
}

// Top left corner floral decoration (converted from Figma design)
export const FigmaFloralTopLeft: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralTopLeftSvg}
      alt="Floral decoration"
      className="object-contain w-full h-full"
    />
  </div>
);

// Right side branch decoration (converted from Figma design)
export const FigmaFloralBranchRight: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralBranchRightSvg}
      alt="Branch decoration"
      className="object-contain w-full h-full"
    />
  </div>
);

export const FigmaFloralBranchBottom: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralBranchBottomSvg}
      alt="Branch decoration"
      className="object-contain w-full h-full"
    />
  </div>
);

// Haldi event floral accent (converted from Figma design)
export const FigmaFloralHaldi: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralHaldiSvg}
      alt="Haldi floral decoration"
      className="object-contain w-full h-full"
    />
  </div>
);

// Wedding event floral accent (converted from Figma design)
export const FigmaFloralWedding: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralWeddingSvg}
      alt="Wedding floral decoration"
      className="object-contain w-full h-full"
    />
  </div>
);

// Sangeet event floral accent (converted from Figma design)
export const FigmaFloralSangeet: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralSangeetSvg}
      alt="Sangeet floral decoration"
      className="object-contain w-full h-full"
    />
  </div>
);

// Bottom left floral decoration (converted from Figma design)
export const FigmaFloralBottomLeft: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralBottomLeftSvg}
      alt="Bottom left floral decoration"
      className="object-contain w-full h-full"
    />
  </div>
);

// Bottom right floral decoration (converted from Figma design)
export const FigmaFloralBottomRight: React.FC<FloralProps> = ({
  className = "",
  style,
}) => (
  <div className={`absolute ${className}`} style={style}>
    <img
      src={floralBottomRightSvg}
      alt="Bottom right floral decoration"
      className="object-contain w-full h-full"
    />
  </div>
);
