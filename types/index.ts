export interface DownloadItem {
  label: string
  description: string
  fileUrl: string
  fileType: string
}

export interface VideoEmbedProps {
  youtubeId: string
  title?: string
}
