import React from 'react'

interface LogoMarkProps {
  size?: number
  ringColor?: string
  barColor?: string
  className?: string
}

export function LogoMark({
  size = 48,
  ringColor = '#ffffff',
  barColor = '#0A80AB',
  className = '',
}: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.18)}
      viewBox="0 0 100 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Santono Music logo mark"
    >
      {/* Blue bar — centered, proportional width */}
      <rect x="33" y="6" width="34" height="13" rx="2" fill={barColor} />

      {/* Ring — thick stroke circle */}
      <circle
        cx="50"
        cy="78"
        r="27"
        stroke={ringColor}
        strokeWidth="17"
        fill="none"
      />
    </svg>
  )
}
