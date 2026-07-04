import { NextResponse } from 'next/server'

const TRACK_URL =
  'https://pub-756796fc141b4e239c1fcdf4273a17f5.r2.dev/assets/abasi-solo-contest-backing-track.wav'

export async function GET() {
  const upstream = await fetch(TRACK_URL)

  if (!upstream.ok) {
    return new NextResponse('No disponible', { status: 502 })
  }

  // Stream the body directly — avoids buffering 16MB in the serverless function
  return new NextResponse(upstream.body, {
    headers: {
      'Content-Type': 'audio/wav',
      'Content-Disposition': 'attachment; filename="abasi-solo-contest-backing-track.wav"',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
