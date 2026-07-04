import React from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide uppercase leading-none">
        {title}
      </h2>
      <div className="h-[2px] w-16 md:w-20 bg-[#0A80AB] mt-4 mb-6"></div>
      {subtitle && (
        <p className="font-sans text-[#808080] text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
