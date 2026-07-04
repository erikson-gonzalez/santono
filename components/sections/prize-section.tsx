'use client'

import React from 'react'
import { PRIZE_ITEMS } from '@/lib/content'
import { useInView } from '@/hooks/use-in-view'
import { ArrowUpRight, Trophy } from 'lucide-react'

export function PrizeSection() {
  const [ref, isVisible] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="premio" className="scroll-mt-20 py-24 md:py-32 bg-[#111111] border-t border-[#222]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-[#0A80AB] uppercase mb-6">
            Un solo ganador
          </p>

          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-wide text-white mb-14">
            EL PREMIO
          </h2>

          <ul className="space-y-0">
            {PRIZE_ITEMS.map((item, index) => {
              const inner = (
                <div className="flex items-center gap-5 py-5 border-b border-[#222] group">
                  <Trophy className="w-4 h-4 text-[#0A80AB] shrink-0" />
                  <span className="font-body text-[#F0F0F0] text-lg font-light flex-1 group-hover:text-[#0A80AB] transition-colors duration-200">
                    {item.name}
                  </span>
                  {item.url && (
                    <span className="flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase text-[#444] group-hover:text-[#0A80AB] transition-colors duration-200 shrink-0">
                      Ver producto
                      <ArrowUpRight size={14} />
                    </span>
                  )}
                </div>
              )

              return (
                <li
                  key={index}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms`,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
                  }}
                >
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
