"use client";
import { useState, useEffect } from "react";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoMuxPlayer() {
  const [canAutoplay, setCanAutoplay] = useState(false);

  useEffect(() => {
    // Esperar a que el usuario interactúe con la página
    const handleUserInteraction = () => {
      setCanAutoplay(true);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("scroll", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  return (
    <MuxPlayer
      playbackId="oE0102pmWDq762eVFfw68tfmr7jZjahfapv7IL1KN3HL4"
      accentColor="#ea580c"
      autoPlay={canAutoplay ? "true" : false}
      metadata={{
        videoTitle: "Test VOD",
        ViewerUserId: "user-id-007",
      }}
    />
  );
}
