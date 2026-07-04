'use client'

import React from 'react'
import { VideoEmbed } from '@/components/ui/video-embed'
import { HOW_TO_HEADING, HOW_TO_SUBTEXT } from '@/lib/content'
import { useInView } from '@/hooks/use-in-view'

interface HowToSectionProps {
  videoId: string
}

function SantonoDecor() {
  return (
    <svg
      viewBox="0 0 1200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMax meet"
      className="absolute bottom-[2%] md:bottom-[5%] right-0 w-[130%] md:w-full pointer-events-none select-none opacity-[0.12]"
      aria-hidden="true"
    >
      {/* Wide stripe — extended ~15% more toward center */}
      <polygon points="690,0 1200,0 1200,52 620,52" fill="#0A80AB" />
      {/* Narrow stripe below */}
      <polygon points="750,66 1200,66 1200,90 680,90" fill="#0A80AB" />
    </svg>
  )
}

export function HowToSection({ videoId }: HowToSectionProps) {
  const [ref, isVisible] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="como" className="scroll-mt-20 relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      <SantonoDecor />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-[280px] shrink-0">
            <VideoEmbed youtubeId={videoId} title="Cómo participar" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.88] tracking-wide text-white">
              {HOW_TO_HEADING}
            </h2>
            <p className="font-sans text-[#808080] text-lg md:text-xl font-light tracking-wide">
              {HOW_TO_SUBTEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
