'use client'

import React from 'react'
import { VideoEmbed } from '@/components/ui/video-embed'
import { DEMO_HEADING } from '@/lib/content'
import { useInView } from '@/hooks/use-in-view'

interface DemoSectionProps {
  videoId: string
}

function DemoDecor() {
  return (
    <svg
      viewBox="0 0 1200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMax meet"
      className="absolute bottom-[2%] md:bottom-[5%] left-0 w-[130%] md:w-full pointer-events-none select-none opacity-[0.12]"
      aria-hidden="true"
    >
      {/* Wide stripe — extended ~15% more toward center */}
      <polygon points="0,0 580,0 650,52 0,52" fill="#0A80AB" />
      {/* Narrow stripe below */}
      <polygon points="0,66 510,66 580,90 0,90" fill="#0A80AB" />
    </svg>
  )
}

export function DemoSection({ videoId }: DemoSectionProps) {
  const [ref, isVisible] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="demo" className="scroll-mt-20 relative py-24 md:py-32 bg-[#080808] border-t border-[#222] overflow-hidden">
      <DemoDecor />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col gap-4 md:flex-1">
            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.88] tracking-wide text-white">
              {DEMO_HEADING}
            </h2>
            <p className="font-sans text-[#808080] text-lg md:text-xl font-light tracking-wide">
              Demo de referencia —{' '}
              <span className="text-[#0A80AB]">Andres Castro</span>
              {', guitarrista patrocinado por '}
              <span className="text-[#0A80AB]">Abasi Concepts</span>.
            </p>
          </div>

          <div className="w-full md:w-[280px] shrink-0">
            <VideoEmbed youtubeId={videoId} title="Demo de referencia" />
          </div>
        </div>
      </div>
    </section>
  )
}
