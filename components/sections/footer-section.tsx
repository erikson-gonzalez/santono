import React from 'react'
import { SiInstagram, SiYoutube, SiTiktok, SiFacebook } from 'react-icons/si'
import { LogoMark } from '@/components/ui/logo-mark'

const SOCIALS = [
  { icon: SiInstagram, href: 'https://www.instagram.com/santonomusic?igsh=aG54M3I1bXc0d2R5&utm_source=qr', label: 'Instagram' },
  { icon: SiYoutube, href: 'https://youtube.com/@santonomusic?si=q2MQ2C9rxxi9mIWn', label: 'YouTube' },
  { icon: SiTiktok, href: 'https://vt.tiktok.com/ZSCgYHDra/', label: 'TikTok' },
  { icon: SiFacebook, href: 'https://www.facebook.com/share/1C8MATGFza/?mibextid=wwXIfr', label: 'Facebook' },
]

export function FooterSection() {
  return (
    <footer className="bg-[#080808] border-t border-[#222] py-16">
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex gap-6">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#808080] hover:text-[#0A80AB] hover:drop-shadow-[0_0_8px_rgba(10,128,171,0.6)] transition-all duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        <p className="font-sans text-xs text-[#444] tracking-wide">
          &copy; {new Date().getFullYear()} Santōno Music. Todos los derechos reservados.
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
