"use client";

import type { ReactElement } from "react";
import {
  appShellContainerClassName,
  homeSectionSpacingClassName,
} from "@/lib/app-shell-layout";

/** Review quote card — compact mobile size (matches reference); equal to rating on `sm+`. */
const REVIEW_CARD_CLASS_NAME =
  "flex w-[min(58vw,210px)] shrink-0 flex-col sm:w-[300px] lg:w-[320px]";

/** Rating card — narrow yellow rail on mobile; equal to review cards from `sm` up. */
const RATING_CARD_CLASS_NAME =
  "flex h-full w-[min(32vw,120px)] shrink-0 flex-col sm:w-[300px] lg:w-[320px]";

function StarIcon({ size = 14 }: { readonly size?: number }): ReactElement {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/**
 * Left-half filled star for 4.5 rating display.
 */
function HalfStarIcon(): ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <defs>
        <clipPath id="testimonial-half-star-clip">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="currentColor"
        clipPath="url(#testimonial-half-star-clip)"
      />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Rupyaa made my loan journey simple and stress-free. The process was quick, transparent, and I received the support I needed.",
    name: "Mansi",
    location: "Mumbai",
    initials: "M",
  },
  {
    quote:
      "I liked how straightforward the entire loan journey was. The steps were clear from start to finish.",
    name: "Akash Sharma",
    location: "Delhi",
    initials: "AS",
  },
  {
    quote:
      "The process was quick and convenient; I was able to complete my application online without any hassle.",
    name: "Priyanka Gupta",
    location: "Uttar Pradesh",
    initials: "PG",
  },
  {
    quote:
      "Support team answered my questions quickly and helped me choose an option that fit my needs.",
    name: "Rahul Mehta",
    location: "Pune",
    initials: "RM",
  },
  {
    quote:
      "Everything was digital, so I did not have to visit a branch. That saved me a lot of time.",
    name: "Sneha Reddy",
    location: "Hyderabad",
    initials: "SR",
  },
  {
    quote:
      "I could track my application status easily. The updates made the whole experience transparent.",
    name: "Vikram Singh",
    location: "Jaipur",
    initials: "VS",
  },
  {
    quote:
      "Disbursal was faster than I expected after approval. The repayment schedule was also clear.",
    name: "Ananya Joshi",
    location: "Bengaluru",
    initials: "AJ",
  },
  {
    quote:
      "The app interface is clean and easy to navigate. Even first-time users can complete the flow.",
    name: "Karan Patel",
    location: "Ahmedabad",
    initials: "KP",
  },
] as const;

/**
 * Sticky yellow rating summary card (left rail).
 * Compact on mobile; same width as review cards on desktop (`sm+`).
 */
function RatingSummaryCard(): ReactElement {
  return (
    <div
      className={`${RATING_CARD_CLASS_NAME} items-center justify-center bg-[#FECA42] px-2.5 py-5 text-center sm:px-6 sm:py-8 lg:px-7 lg:py-10`}
    >
      <p className="text-[28px] font-extrabold leading-none text-gray-900 sm:text-5xl lg:text-6xl">
        4.5
      </p>
      <p className="mt-1.5 text-[10px] font-medium leading-tight text-gray-900 sm:mt-3 sm:text-sm lg:text-base">
        Customer Reviews
      </p>
      <div
        className="mt-2 flex gap-0.5 text-gray-900 sm:mt-4 sm:gap-1"
        aria-label="4.5 out of 5 stars"
      >
        {[1, 2, 3, 4].map((i) => (
          <StarIcon key={i} />
        ))}
        <HalfStarIcon />
      </div>
    </div>
  );
}

type TestimonialCardProps = {
  readonly quote: string;
  readonly name: string;
  readonly location: string;
  readonly initials: string;
  readonly showDivider?: boolean;
};

/**
 * Single testimonial quote card inside the horizontal scroller.
 */
function TestimonialCard({
  quote,
  name,
  location,
  initials,
  showDivider = true,
}: TestimonialCardProps): ReactElement {
  let cardClassName = `${REVIEW_CARD_CLASS_NAME} bg-[#FFFCF5] px-4 py-5 sm:px-6 sm:py-8 lg:px-7 lg:py-10`;
  if (showDivider) {
    cardClassName = `${cardClassName} border-l border-[#FECA42]`;
  }

  return (
    <div className={cardClassName}>
      <p className="text-[13px] leading-relaxed text-gray-600 sm:text-[15px]">{quote}</p>
      <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#FECA42] bg-gray-100 text-[11px] font-semibold text-gray-700 sm:size-9 sm:text-xs">
          {initials}
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900 sm:text-sm">{name}</p>
          <p className="text-[11px] text-gray-500 sm:text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Customer reviews: sticky rating card + horizontally scrollable comments.
 */
export default function TestimonialsSection(): ReactElement {
  return (
    <section className="bg-white">
      <div className={`${appShellContainerClassName} ${homeSectionSpacingClassName}`}>
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-10 sm:text-3xl lg:mb-12 lg:text-4xl">
          What our customer say
        </h2>
        <div className="overflow-hidden rounded-2xl border border-[#FECA42]">
          <div className="flex overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="sticky left-0 z-10 shrink-0 self-stretch">
              <RatingSummaryCard />
            </div>
            {TESTIMONIALS.map(({ quote, name, location, initials }) => (
              <TestimonialCard
                key={name}
                quote={quote}
                name={name}
                location={location}
                initials={initials}
                showDivider
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
