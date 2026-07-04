import React from 'react'
import { Download } from 'lucide-react'
import { DownloadItem } from '@/types'

export function DownloadCard({ label, description, fileUrl, fileType }: DownloadItem) {
  return (
    <a
      href={fileUrl}
      download
      data-testid={`download-card-${fileType}`}
      className="group flex flex-col p-6 bg-[#111] border border-[#222] rounded-lg hover:border-[#0A80AB] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-sans font-medium tracking-wider text-[#0A80AB] bg-[#0A80AB]/10 px-2 py-1 rounded">
          {fileType}
        </span>
        <Download className="w-5 h-5 text-[#076080] group-hover:text-[#0A80AB] group-hover:translate-y-1 transition-all duration-300" />
      </div>
      <h3 className="text-xl font-sans font-semibold text-white mb-2">{label}</h3>
      <p className="text-sm font-body text-[#808080] leading-relaxed">{description}</p>
    </a>
  )
}
