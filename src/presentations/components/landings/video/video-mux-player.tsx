"use client";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoMuxPlayer() {
  return (
    <MuxPlayer
      playbackId="vJrXcN02Au1TGbUCRfmjT7B026Sn01MHjnqMtVt6lHz021k"
      accentColor="#ea580c"
      playsInline
      autoPlay
      muted
      loop
      metadata={{
        videoTitle: "Test VOD",
        ViewerUserId: "user-id-007",
      }}
    />
  );
}
