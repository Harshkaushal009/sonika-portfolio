import React from 'react'

interface VideoBackgroundProps {
  src: string
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default VideoBackground
