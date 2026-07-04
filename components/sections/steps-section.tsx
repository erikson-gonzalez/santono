'use client'

import React, { useState, useRef, useEffect } from 'react'
import { STEPS } from '@/lib/content'
import { useInView } from '@/hooks/use-in-view'

const AUDIO_URL =
  'https://pub-756796fc141b4e239c1fcdf4273a17f5.r2.dev/assets/abasi-solo-contest-backing-track.wav'

function TrackDownload({ url, label }: { url: string; label: string }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(url)
    audioRef.current.loop = true
    return () => {
      audioRef.current?.pause()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [url])

  const tick = () => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    setProgress(audio.currentTime / audio.duration)
    rafRef.current = requestAnimationFrame(tick)
  }

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    } else {
      audioRef.current.play()
      rafRef.current = requestAnimationFrame(tick)
    }
    setPlaying((p) => !p)
  }

  return (
    <>
      <a
        href={url}
        download
        data-testid="steps-download-link"
        className="relative inline-block font-sans font-semibold text-[#0A80AB] pb-0.5"
      >
        {label}
        {/* underline background */}
        <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0A80AB]/25" />
        {/* progress fill */}
        <span
          className="absolute bottom-0 left-0 h-[1.5px] bg-[#0A80AB]"
          style={{ width: `${progress * 100}%`, transition: playing ? 'none' : 'width 0.4s ease' }}
        />
      </a>
      <button
        onClick={toggle}
        aria-label={playing ? 'Detener preview' : 'Escuchar preview del track'}
        className="inline-flex items-center justify-center align-middle w-7 h-7 rounded-full bg-[#0A80AB]/15 hover:bg-[#0A80AB]/30 border border-[#0A80AB]/40 transition-colors duration-200 ml-2"
      >
        {playing ? (
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 rounded-full bg-[#0A80AB] animate-[eq1_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 rounded-full bg-[#0A80AB] animate-[eq2_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 rounded-full bg-[#0A80AB] animate-[eq3_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 rounded-full bg-[#0A80AB] animate-[eq4_0.8s_ease-in-out_infinite]" />
          </span>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#0A80AB" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#0A80AB" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </>
  )
}

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/([@#]\S+)/g)
  return (
    <>
      {parts.map((part, i) =>
        /^[@#]/.test(part) ? (
          <span key={i} className="text-[#0A80AB]">{part}</span>
        ) : (
          part
        )
      )}
    </>
  )
}

export function StepsSection() {
  const [ref, isVisible] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="pasos" className="scroll-mt-20 pt-14 pb-24 md:py-32 bg-[#111111] border-t border-[#222]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] tracking-wide text-white mb-16">
            Pasos del<br />concurso
          </h2>

          <ol className="space-y-0">
            {STEPS.map((step, index) => (
              <li
                key={step.number}
                className="flex items-start gap-6 md:gap-10 py-4 md:py-8 border-b border-[#222] last:border-b-0"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <span className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-[#0A80AB] w-12 shrink-0 select-none">
                  {step.number}
                </span>
                <p className="font-body text-[#F0F0F0] text-lg md:text-xl font-light leading-relaxed pt-2">
                  <HighlightedText text={step.text} />
                  {step.cta && step.ctaUrl && (
                    <>
                      {' '}
                      <TrackDownload url={step.ctaUrl} label={step.cta} />
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 pt-8 border-t border-[#222]">
            <a
              href="#reglamento"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.2em] uppercase font-medium text-[#808080] hover:text-[#0A80AB] transition-colors duration-300 group"
            >
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
              Ver reglamento completo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
