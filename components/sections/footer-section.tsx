import React from 'react'
import { SiInstagram, SiYoutube } from 'react-icons/si'
import { LogoMark } from '@/components/ui/logo-mark'

export function FooterSection() {
  return (
    <footer className="bg-[#080808] border-t border-[#222] py-16">
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex gap-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram"
            className="text-[#808080] hover:text-[#0A80AB] hover:drop-shadow-[0_0_8px_rgba(10,128,171,0.6)] transition-all duration-300"
          >
            <SiInstagram size={22} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-youtube"
            className="text-[#808080] hover:text-[#0A80AB] hover:drop-shadow-[0_0_8px_rgba(10,128,171,0.6)] transition-all duration-300"
          >
            <SiYoutube size={22} />
          </a>
        </div>

        <p className="font-sans text-xs text-[#444] tracking-wide">
          &copy; {new Date().getFullYear()} Santono Music. Todos los derechos reservados.
        </p>

        <p className="font-sans text-xs text-[#444] tracking-wide">
          Powered by{' '}
          <a
            href="https://eclipticsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A80AB] hover:opacity-80 transition-opacity"
          >
            Ecliptic Solutions
          </a>
        </p>
      </div>
    </footer>
  )
}
