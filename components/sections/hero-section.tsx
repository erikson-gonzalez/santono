'use client'

import React from 'react'

export function HeroSection() {
  const scrollToRules = () => {
    const el = document.getElementById('como')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-end overflow-hidden bg-[#080808]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/abasi-hero.webp')",
        }}
      />

      {/* Left-side dark vignette so title reads clean without hiding the subject */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.65) 45%, rgba(8,8,8,0.10) 75%, rgba(8,8,8,0.0) 100%)',
        }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />

      {/* Bottom gradient → transitions into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 md:h-64 bg-gradient-to-t from-[#080808] via-[rgba(8,8,8,0.75)] to-transparent pointer-events-none" />
      {/* Extra mobile fade — subtle, extends coverage for the subtext */}
      <div className="absolute bottom-0 left-0 right-0 h-[44rem] bg-gradient-to-t from-[#080808]/80 to-transparent pointer-events-none md:hidden" />

      {/* Content — anchored bottom-left, clear of the guitarist's face */}
      <div className="container relative z-10 mx-auto px-8 md:px-16 pb-24 md:pb-16 max-w-7xl w-full">
        <div className="max-w-2xl">
          <h1
            className="font-display leading-[0.82] tracking-[0.04em] flex flex-col mb-6"
            style={{ fontSize: 'clamp(4rem, 11vw, 11rem)' }}
          >
            <span className="text-[#0A80AB]">ABASI</span>
            <span className="text-[#0A80AB]">SOLO</span>
            <span className="text-white">CONTEST</span>
          </h1>

          <p className="font-sans text-[#A0A0A0] text-sm md:text-base font-light tracking-[0.2em] uppercase mb-10">
            Organizado por Santono Music · Distribuidor Oficial de Abasi Concepts
          </p>

          <button
            onClick={scrollToRules}
            data-testid="hero-cta"
            className="group relative px-8 py-4 bg-transparent border border-[#0A80AB] text-[#0A80AB] font-sans font-semibold tracking-widest text-sm uppercase overflow-hidden hover:text-white transition-colors duration-300"
          >
            <div
              className="absolute inset-0 bg-[#0A80AB] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"
              style={{ zIndex: -1 }}
            />
            Ver video del concurso
          </button>
        </div>
      </div>
    </section>
  )
}
