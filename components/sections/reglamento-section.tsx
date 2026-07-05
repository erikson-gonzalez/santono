'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { LogoMark } from '@/components/ui/logo-mark'

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#0A80AB] font-medium">{children}</span>
)

function ReglamentoContent() {
  return (
    <div className="font-sans text-[#808080] text-sm md:text-base leading-relaxed space-y-8 pt-10 [&_ul]:list-disc [&_ul]:list-inside [&_ol]:list-decimal [&_ol]:list-inside [&_li]:mb-1">

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">Espíritu del Concurso</h3>
        <p>
          Este concurso nace con el propósito de celebrar la <B>creatividad</B>, la <B>musicalidad</B> y la <B>identidad artística</B> de cada guitarrista.
          Más allá de la velocidad o la complejidad técnica, se valorará la capacidad de crear un solo que transmita <B>personalidad</B>, buen gusto,
          <B> intención musical</B> y una conexión auténtica con la música. <B>Todos los géneros y enfoques son bienvenidos</B>, siempre que utilicen el <B>backing track oficial</B>.
        </p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">1. Organizador</h3>
        <p>El concurso es organizado por <B>Santōno</B>, distribuidor autorizado de <B>Abasi Concepts</B> en <B>Costa Rica</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">2. Objetivo</h3>
        <p>Promover el talento de los <B>guitarristas costarricenses</B> mediante la creación de un <B>solo original</B> utilizando el <B>backing track oficial</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">3. Vigencia</h3>
        <ul className="space-y-1">
          <li><B>Apertura:</B> Lunes 6 de Julio del 2026</li>
          <li><B>Fecha límite:</B> Lunes 3 de Agosto del 2026</li>
          <li><B>Anuncio de finalistas:</B> Viernes 7 de Agosto del 2026</li>
          <li><B>Anuncio del ganador:</B> Lunes 24 de Agosto del 2026</li>
        </ul>
        <p className="mt-2 text-xs text-[#555]">Las participaciones recibidas fuera del período no serán consideradas. El anuncio del ganador está sujeto a la disponibilidad de Tosin Abasi.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">4. Elegibilidad</h3>
        <ul>
          <li>Abierto únicamente para <B>personas residentes en Costa Rica</B>.</li>
          <li>Cada participante podrá presentar <B>únicamente una participación</B>.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">5. ¿Cómo participar?</h3>
        <ol className="space-y-1">
          <li>Descargar el <B>backing track oficial</B> desde el enlace proporcionado por Santōno.</li>
          <li>Crear un <B>solo de guitarra completamente original</B>.</li>
          <li>Grabar un <B>video interpretando el solo</B>.</li>
          <li>Publicar el video en una <B>cuenta pública de Instagram</B>.</li>
          <li>Etiquetar a <B>@santonomusic</B> y <B>@abasiconcepts</B>.</li>
          <li>Usar el hashtag <B>#abasisolocontest</B>.</li>
          <li>La publicación debe permanecer <B>visible hasta el anuncio del ganador</B>.</li>
        </ol>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">6. Reglas del Video</h3>
        <ul className="space-y-1">
          <li>Grabarse en <B>única toma continua</B>. <B>Sin cortes ni empalmes</B>.</li>
          <li>El participante y la <B>guitarra completa</B> deben ser visibles en todo momento.</li>
          <li>El audio debe corresponder <B>exactamente</B> con la interpretación del video.</li>
          <li><B>No se permite</B> reemplazar el audio ni usar <B>inteligencia artificial</B> para modificar la ejecución.</li>
          <li>Se permiten ajustes visuales básicos (iluminación, color, edición estética).</li>
          <li>Puede usarse <B>cualquier guitarra, amplificador, procesador o efectos</B>.</li>
        </ul>
        <p className="mt-2 text-xs text-[#555]">Nota: Andres Castro es referencia como artista patrocinado por Abasi Concepts y está descalificado de participar.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">7. Originalidad</h3>
        <p className="mb-2">El solo debe ser <B>completamente original</B>. No está permitido:</p>
        <ul>
          <li>Interpretar solos de <B>canciones existentes</B>.</li>
          <li><B>Copiar</B> el solo de otro participante.</li>
          <li>Usar <B>fragmentos reconocibles</B> de otros guitarristas.</li>
          <li>Presentar material de <B>autoría de terceros</B>.</li>
        </ul>
        <p className="mt-2 text-xs text-[#555]">El incumplimiento resultará en <B>descalificación inmediata</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">8. Proceso de Selección</h3>
        <p>
          Las participaciones son revisadas por un <B>comité de preselección</B> de Santōno, Abasi Concepts y músicos invitados.
          Los finalistas son enviados a <B>Tosin Abasi</B>, quien selecciona el <B>ganador oficial</B>. La decisión es <B>definitiva e inapelable</B>.
        </p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">9. Criterios de Evaluación</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {['Musicalidad','Creatividad','Originalidad','Fraseo','Dinámica','Expresión','Técnica','Desarrollo del solo','Uso del espacio musical','Calidad general'].map((c) => (
            <span key={c} className="px-3 py-1 bg-[#0A80AB]/10 border border-[#0A80AB]/30 rounded-full text-sm text-[#0A80AB]">{c}</span>
          ))}
        </div>
        <p className="text-xs text-[#555]">Los &ldquo;Me gusta&rdquo; y reproducciones <B>no influyen</B> en la decisión.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">10. Verificación de Autenticidad</h3>
        <p>Santōno podrá solicitar el <B>archivo original del video</B>, mayor calidad, información sobre la grabación o una <B>interpretación en vivo</B>. La negativa puede resultar en <B>descalificación</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">11. Premio</h3>
        <ul className="space-y-1 mb-2">
          <li><B>Pedal de distorsión Abasi Pathos</B></li>
          <li><B>Pedal compresor Abasi Micro-Aggressor</B></li>
          <li><B>Camiseta oficial Abasi Concepts</B></li>
          <li><B>Paquete de cuerdas Abasi</B></li>
          <li><B>Faja oficial Abasi</B></li>
        </ul>
        <p className="text-xs text-[#555]">El ganador será invitado (opcionalmente) a tocar en vivo en la <B>Clínica Abasi x Santōno, 29 de Agosto 2026, Music Factory</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">12. Entrega del Premio</h3>
        <p>Santōno contactará al ganador vía <B>mensaje privado de @santonomusic</B> en Instagram. Si no responde en <B>7 días naturales</B>, se podrá seleccionar un <B>nuevo ganador entre los finalistas</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">13. Derechos de Uso</h3>
        <p>El participante <B>conserva todos los derechos</B> sobre su composición. Autoriza a Santōno y Abasi Concepts a compartir el video con fines promocionales, siempre con el <B>crédito correspondiente</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">14. Descalificación</h3>
        <ul className="space-y-1">
          <li>Incumplir las <B>reglas del concurso</B>.</li>
          <li>Contenido <B>ofensivo o discriminatorio</B>.</li>
          <li><B>Infracción de derechos de autor</B>.</li>
          <li>Uso de <B>inteligencia artificial</B> para modificar la ejecución.</li>
          <li><B>Manipulación del proceso</B> o ventaja injusta.</li>
        </ul>
        <p className="mt-2 text-xs text-[#555]">Toda descalificación es <B>inapelable</B>. Santōno y Abasi Concepts se reservan el derecho sin opción de reclamo.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">15–16. Responsabilidad y Modificaciones</h3>
        <p>Santōno no es responsable por fallas técnicas de Instagram o situaciones ajenas. Se reserva el derecho de <B>modificar fechas, premios o cancelar</B> por fuerza mayor. Los cambios se comunicarán por los <B>canales oficiales</B>.</p>
      </div>

      <div>
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-2">17. Aceptación</h3>
        <p>La participación implica la <B>aceptación total</B> del presente reglamento.</p>
      </div>

      <div className="border-t border-[#222] pt-8">
        <h3 className="font-sans font-semibold text-[#F0F0F0] text-base md:text-lg mb-4">Preguntas Frecuentes</h3>
        <dl className="space-y-4">
          {([
            ['¿Debo usar una guitarra Abasi?', <><B>No.</B> Puedes participar con cualquier marca o modelo.</>],
            ['¿Puedo usar pedales, amplificadores o plugins?', <><B>Sí.</B> Usa el equipo que prefieras.</>],
            ['¿Puedo grabar varias veces?', <>Sí. Pero el video publicado debe ser <B>una única toma continua sin cortes</B>.</>],
            ['¿Puedo editar el video?', <>Solo <B>ajustes visuales básicos</B>. El audio no puede editarse.</>],
            ['¿Puedo modificar el backing track?', <><B>No.</B> Debe usarse únicamente el backing track oficial.</>],
            ['¿Puedo enviar más de un video?', <><B>No.</B> Una participación por concursante.</>],
            ['¿Influyen los «Me gusta»?', <><B>No.</B> Solo criterios artísticos definidos en el reglamento.</>],
            ['¿Quién conserva los derechos?', <>El participante mantiene <B>todos los derechos</B> sobre su composición.</>],
            ['¿Quién escoge al ganador?', <><B>Tosin Abasi</B> seleccionará personalmente al ganador entre los finalistas preseleccionados.</>],
          ] as [string, React.ReactNode][]).map(([q, a]) => (
            <div key={q as string}>
              <dt className="text-[#F0F0F0] font-medium mb-1">{q}</dt>
              <dd className="text-[#808080] text-sm">{a}</dd>
            </div>
          ))}
        </dl>
      </div>

    </div>
  )
}

export function ReglamentoSection() {
  const [open, setOpen] = React.useState(false)

  return (
    <section id="reglamento" className="scroll-mt-20 py-24 md:py-32 bg-[#080808] border-t border-[#222]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4 mb-2">
            <LogoMark size={52} ringColor="#ffffff" barColor="#0A80AB" />
            <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-none tracking-widest text-white">
              SANTONO MUSIC
            </h2>
          </div>
          <p className="font-sans text-[#0A80AB] text-sm tracking-[0.3em] uppercase font-medium">
            Reglamento Oficial — Abasi Solo Contest
          </p>

          <button
            onClick={() => setOpen((o) => !o)}
            className="mt-6 flex items-center gap-3 px-8 py-3 border border-[#0A80AB] text-[#0A80AB] font-sans text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#0A80AB] hover:text-[#080808] transition-all duration-300 rounded-sm"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
            {open ? 'Cerrar reglamento' : 'Ver reglamento completo'}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 ${open ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ReglamentoContent />
        </div>
      </div>
    </section>
  )
}
