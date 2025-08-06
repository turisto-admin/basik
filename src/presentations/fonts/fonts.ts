import localFont from "next/font/local";
const neueKaine = localFont({
  src: [
    {
      path: "../../../public/fonts/Neue Kaine/NeueKaine-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Neue Kaine/NeueKaine-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Neue Kaine/NeueKaine-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Neue Kaine/NeueKaine-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Neue Kaine/NeueKaine-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Neue Kaine/NeueKaine-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Neue Kaine/NeueKaine-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neue-kaine",
});

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../../public/fonts/Space Grotesk/SpaceGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Space Grotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Space Grotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Space Grotesk/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Space Grotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
});


export {
    neueKaine,
    spaceGrotesk
}