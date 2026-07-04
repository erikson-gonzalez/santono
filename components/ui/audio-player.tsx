'use client'

import React, { useState, useRef, useEffect } from 'react'

function SpeakerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 5L6 9H2v6h4l5 4V5z"
        fill="white"
      />
      <path
        d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SoundWaves() {
  return (
    <span className="flex items-end gap-[3px] h-5">
      <span className="w-[3px] rounded-full bg-white animate-[eq1_0.8s_ease-in-out_infinite]" />
      <span className="w-[3px] rounded-full bg-white animate-[eq2_0.8s_ease-in-out_infinite]" />
      <span className="w-[3px] rounded-full bg-white animate-[eq3_0.8s_ease-in-out_infinite]" />
      <span className="w-[3px] rounded-full bg-white animate-[eq4_0.8s_ease-in-out_infinite]" />
    </span>
  )
}

export function AudioPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(
      'https://pub-756796fc141b4e239c1fcdf4273a17f5.r2.dev/assets/abasi-solo-contest-backing-track.wav'
    )
    audioRef.current.loop = true
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying((prev) => !prev)
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Detener backing track' : 'Reproducir backing track'}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0A80AB] shadow-[0_0_16px_rgba(10,128,171,0.4)] flex items-center justify-center hover:bg-[#0994c4] transition-colors duration-200"
    >
      {playing ? <SoundWaves /> : <SpeakerIcon />}
    </button>
  )
}
