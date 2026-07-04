import type { Metadata } from 'next'
import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/sections/hero-section'
import { HowToSection } from '@/components/sections/how-to-section'
import { StepsSection } from '@/components/sections/steps-section'
import { DemoSection } from '@/components/sections/demo-section'
import { PrizeSection } from '@/components/sections/prize-section'
import { ReglamentoSection } from '@/components/sections/reglamento-section'
import { FooterSection } from '@/components/sections/footer-section'

export const metadata: Metadata = {
  title: 'Abasi Solo Contest — Santono Music',
  description:
    'Participa en el concurso de guitar solo organizado por Santono Music, distribuidor oficial de Abasi Concepts en Costa Rica.',
}

const HOW_TO_VIDEO_ID = 'iozbDwReINQ'
const DEMO_VIDEO_ID = 'tG371rgCKEw'

export default function AbasiSoloContestPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F0F0F0] selection:bg-[#0A80AB] selection:text-[#080808] overflow-x-hidden">
      <NavBar />
      <main>
        <HeroSection />
        <HowToSection videoId={HOW_TO_VIDEO_ID} />
        <StepsSection />
        <DemoSection videoId={DEMO_VIDEO_ID} />
        <PrizeSection />
        <ReglamentoSection />
      </main>
      <FooterSection />
    </div>
  )
}
