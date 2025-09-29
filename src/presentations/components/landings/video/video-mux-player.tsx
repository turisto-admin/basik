"use client";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoMuxPlayer() {
  return (
    <MuxPlayer
      playbackId="oE0102pmWDq762eVFfw68tfmr7jZjahfapv7IL1KN3HL4"
      accentColor="#ea580c"
      autoPlay={true}
      metadata={{
        videoTitle: "Test VOD",
        ViewerUserId: "user-id-007",
      }}
    />
  );
}
