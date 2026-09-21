import type { CSSProperties, ReactElement } from "react";

/**
 * Transparent skyline over the Personal Loan page gradient — bottom-pinned.
 * Shared by the home hero and site footer. Uses assets from `/public/images`.
 * Full width, natural aspect ratio (no stretch / distortion).
 */
export default function HeroSkyline(): ReactElement {
  // Do not set `display` here — it would override Tailwind `hidden` / `sm:hidden`
  // and show both mobile + desktop images at once (overlapping).
  const skylineStyle: CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "auto",
    background: "transparent",
    zIndex: 0,
    pointerEvents: "none",
  };

  return (
    <>
      <img
        src="/images/hero-skyline-mobile.png"
        alt=""
        width={770}
        height={1024}
        className="block sm:hidden"
        style={skylineStyle}
        aria-hidden
      />
      <img
        src="/images/hero-skyline-desktop.png"
        alt=""
        width={1024}
        height={445}
        className="hidden sm:block"
        style={skylineStyle}
        aria-hidden
      />
    </>
  );
}
