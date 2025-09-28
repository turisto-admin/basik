"use client";

export default function VideoPresentationWistia() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <div
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <iframe
            src="https://fast.wistia.net/embed/iframe/rdpxm39i4o?videoFoam=true&autoPlay=true"
            title="Video Presentation"
            allow="autoplay; fullscreen"
            className="wistia_embed"
            name="wistia_embed"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
