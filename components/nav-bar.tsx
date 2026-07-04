'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_ITEMS = [
  { label: 'Cómo participar', id: 'como' },
  { label: 'Pasos', id: 'pasos' },
  { label: 'Demo', id: 'demo' },
  { label: 'Premio', id: 'premio' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const isMobile = window.innerWidth < 768
    const mobileOffsets: Record<string, number> = {
      pasos: 56,
    }
    const offset = isMobile ? (mobileOffsets[id] ?? 16) : 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#222] h-16'
            : 'bg-transparent h-20'
        }`}
      >
        <div className="container mx-auto px-8 md:px-16 max-w-7xl h-full flex justify-between items-center">
          <button
            onClick={() => scrollTo('inicio')}
            className="flex items-center hover:opacity-80 transition-opacity"
            data-testid="nav-logo"
          >
            <Image
              src="/santono-logo.webp"
              alt="Santono Music"
              width={200}
              height={200}
              className="h-28 w-auto"
              priority
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-sans text-sm font-medium text-[#F0F0F0] hover:text-[#0A80AB] transition-colors uppercase tracking-wider"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] hover:opacity-70 transition-opacity"
            data-testid="nav-hamburger"
          >
            <span
              className={`block w-6 h-[2px] bg-[#F0F0F0] transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#F0F0F0] transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#F0F0F0] transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-[#080808]/97 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: scrolled ? '4rem' : '5rem' }}
      >
        <div className="flex flex-col border-t border-[#222]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-sans text-base font-medium text-[#F0F0F0] hover:text-[#0A80AB] hover:bg-[#111] transition-colors uppercase tracking-wider text-left px-8 py-5 border-b border-[#1a1a1a]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
