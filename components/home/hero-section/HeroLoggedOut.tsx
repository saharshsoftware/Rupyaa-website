"use client";

import type { ReactElement } from "react";
import { HeroLoggedOutForm } from "@/components/home/hero-section/HeroLoggedOutForm";
import HeroTrustedBy from "@/components/home/HeroTrustedBy";

export type HeroLoggedOutProps = {
  mobile: string;
  setMobile: (v: string) => void;
  mobileError: string | null;
  setMobileError: (v: string | null) => void;
};

/**
 * Logged-out home hero copy + mobile CTA, centered over the skyline gradient.
 */
export function HeroLoggedOut({
  mobile,
  setMobile,
  mobileError,
  setMobileError,
}: HeroLoggedOutProps): ReactElement {
  return (
    <div className="mx-auto flex w-full max-w-[560px] flex-col items-center text-center sm:max-w-[640px]">
      <HeroTrustedBy />
      <h1 className="mt-3 text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:mt-4 sm:text-5xl md:text-6xl lg:text-[4.5rem] h-short:mt-1 h-short:text-[1.65rem] h-short:leading-[1.08] h-xshort:text-[1.45rem]">
        Choti si need,
        <br />
        Badi si Smile.
      </h1>
      <div className="mt-8 w-full max-w-[520px] sm:mt-8 lg:mt-6 h-short:mt-3 h-xshort:mt-2">
        <HeroLoggedOutForm
          mobile={mobile}
          setMobile={setMobile}
          mobileError={mobileError}
          setMobileError={setMobileError}
        />
      </div>
    </div>
  );
}
