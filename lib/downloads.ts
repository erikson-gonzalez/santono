import { DownloadItem } from '@/types'

export const DOWNLOADS: DownloadItem[] = [
  {
    label: 'Reglamento Oficial',
    description: 'Bases completas del concurso en PDF',
    fileUrl: '/downloads/reglamento-abasi-solo-contest.pdf',
    fileType: 'PDF',
  },
  {
    label: 'Pack de Recursos',
    description: 'Archivos de referencia y backing tracks',
    fileUrl: '/downloads/pack-recursos-abasi.zip',
    fileType: 'ZIP',
  },
  {
    label: 'Ficha de Inscripción',
    description: 'Formulario de registro imprimible',
    fileUrl: '/downloads/ficha-inscripcion.pdf',
    fileType: 'PDF',
  },
]
