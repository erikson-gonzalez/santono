import React from 'react'
import { VideoEmbedProps } from '@/types'

export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <div className="aspect-[9/16] w-full relative overflow-hidden rounded-lg border border-[#222] hover:border-[#0A80AB] hover:shadow-[0_0_15px_rgba(10,128,171,0.3)] transition-all duration-300 group">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title || 'YouTube video player'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      ></iframe>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0A80AB]/20 pointer-events-none rounded-lg transition-colors duration-300"></div>
    </div>
  )
}
