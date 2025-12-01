
import React from 'react';

interface LogoProps {
  className?: string;
}

export const ABNSymbol: React.FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Top Left - Inverted U */}
    <path d="M15 10 H 40 V 40 H 32 V 18 H 23 V 40 H 15 V 10 Z" className="text-abn-accent" />
    {/* Top Right - Shield Down */}
    <path d="M60 10 H 85 V 32 L 72.5 45 L 60 32 V 10 Z" className="text-abn-accent" />
    {/* Bottom Left - U */}
    <path d="M15 60 V 90 H 40 V 60 H 32 V 82 H 23 V 60 H 15 Z" className="text-abn-accent" />
    {/* Bottom Right - Shield Up / M */}
    <path d="M60 90 V 68 L 72.5 55 L 85 68 V 90 H 77 V 70 L 72.5 65 L 68 70 V 90 H 60 Z" className="text-abn-accent" />
  </svg>
);

export const HikeSymbol: React.FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Main diagonal pillar */}
    <path d="M35 85 L 60 15 H 75 L 50 85 H 35 Z" />
    {/* Lower angled leg/cloud part */}
    <path d="M55 55 L 75 55 L 85 85 H 65 L 55 55 Z" opacity="0.8" />
    {/* Cloud bubble detail */}
    <circle cx="75" cy="85" r="8" opacity="0.6" />
    <circle cx="65" cy="85" r="6" opacity="0.6" />
  </svg>
);

export const DetricsSymbol: React.FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Speed Lines (Left side of D) */}
    <rect x="10" y="20" width="35" height="12" rx="6" />
    <rect x="10" y="44" width="35" height="12" rx="6" />
    <rect x="10" y="68" width="35" height="12" rx="6" />
    
    {/* Curve (Right side of D) */}
    <path d="M55 20 H 60 C 85 20, 90 40, 90 50 C 90 60, 85 80, 60 80 H 55 V 20 Z" />
  </svg>
);
