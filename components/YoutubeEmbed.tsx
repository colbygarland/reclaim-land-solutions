export const YoutubeEmbed = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <iframe
      className="w-full"
      height="315"
      src={videoSrc}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}
