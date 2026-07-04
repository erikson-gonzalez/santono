import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F0F0F0] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-[8rem] leading-none text-[#0A80AB]">404</h1>
        <p className="font-sans text-[#808080] mb-8">Página no encontrada</p>
        <Link
          href="/abasisolocontest"
          className="font-sans text-sm font-medium text-[#0A80AB] border border-[#0A80AB] px-6 py-3 hover:bg-[#0A80AB] hover:text-[#080808] transition-all duration-300"
        >
          Volver al concurso
        </Link>
      </div>
    </div>
  )
}
