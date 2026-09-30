"use client";

import { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import PolicyPageLayout from "@/components/PolicyPageLayout";

function ContactCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
      {children}
    </div>
  );
}

const LEVELS = [
  "Customer Relationship Manager",
  "Customer Service Help Desk",
  "Grievance Redressal Officer",
  "Escalation to RBI",
];

function LevelSection({
  level,
  activeLevel,
  children,
}: {
  level: number;
  activeLevel: number;
  children: ReactNode;
}) {
  return (
    <section
      id={`grievance-panel-${level}`}
      role="tabpanel"
      aria-labelledby={`grievance-tab-${level}`}
      hidden={activeLevel !== level}
      tabIndex={0}
      className="space-y-4 sm:space-y-5 focus-visible:outline-primary"
    >
      {children}
    </section>
  );
}

export default function GrievanceRedressalMechanismPage() {
  const [activeLevel, setActiveLevel] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <PolicyPageLayout
      title="GRIEVANCE REDRESSAL MECHANISM"
      effectiveDate="February 25, 2026"
    >
      <div
        role="tablist"
        aria-label="Grievance escalation levels"
        className="flex gap-3 overflow-x-auto rounded-xl bg-gray-50 p-3 hyphens-none"
      >
        {LEVELS.map((title, index) => {
          const level = index + 1;
          const isActive = activeLevel === level;
          return (
            <button
              key={level}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`grievance-tab-${level}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`grievance-panel-${level}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveLevel(level)}
              onKeyDown={(event) => {
                let nextIndex = index;
                if (event.key === "ArrowRight") nextIndex = (index + 1) % LEVELS.length;
                else if (event.key === "ArrowLeft") nextIndex = (index + LEVELS.length - 1) % LEVELS.length;
                else if (event.key === "Home") nextIndex = 0;
                else if (event.key === "End") nextIndex = LEVELS.length - 1;
                else return;
                event.preventDefault();
                setActiveLevel(nextIndex + 1);
                tabRefs.current[nextIndex]?.focus();
              }}
              className={`min-w-[220px] flex-1 rounded-xl border p-4 text-left leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 lg:min-w-0 ${isActive ? "border-primary bg-primary text-gray-900" : "border-gray-200 bg-white text-gray-700 hover:border-primary"}`}
            >
              <span className="block text-sm sm:text-base font-semibold">Level {level}</span>
              <span className={`mt-1 block text-xs sm:text-sm ${isActive ? "text-gray-800" : "text-gray-500"}`}>{title}</span>
            </button>
          );
        })}
      </div>

      <LevelSection level={1} activeLevel={activeLevel}>
        <p>
          Rupyaa has established a clear grievance escalation process to ensure
          that customer complaints, concerns, and feedback are reviewed and
          addressed in a timely and appropriate manner.
        </p>
        <p>
          Customers who wish to raise a complaint, report an issue, or provide
          feedback may contact the Customer Relationship Manager using the
          following details:
        </p>
        <ContactCard>
          <p className="text-sm sm:text-base">
            <strong>Email ID:</strong>{" "}
            <a href="mailto:grievance@rupyaa.com" className="break-all">
              grievance@rupyaa.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <strong>Timings:</strong> 10:00 AM to 6:00 PM on weekdays
          </p>
        </ContactCard>
      </LevelSection>

      <LevelSection level={2} activeLevel={activeLevel}>
        <p>
          If you are not satisfied with the response provided at Level 1, or if
          you do not receive a response within 3 working days, you may escalate
          your complaint to our Customer Service Help Desk.
        </p>
        <p>
          Our Help Desk representatives are available to assist with registering
          and reviewing your complaint through the following channels:
        </p>
        <ContactCard>
          <p className="text-sm sm:text-base">
            Helpline No.: <a href="tel:+918503090309">85-0309-0309</a>
          </p>
          <p className="text-sm sm:text-base">
            <strong>Email ID:</strong>{" "}
            <a href="mailto:care@rupyaa.com" className="break-all">
              care@rupyaa.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <strong>Timings:</strong> 10:00 AM to 6:00 PM on weekdays
          </p>
        </ContactCard>
      </LevelSection>

      <LevelSection level={3} activeLevel={activeLevel}>
        <p>
          If your concern remains unresolved after contacting the Customer
          Service Help Desk, or if you do not receive a response within 3
          working days, you may further escalate the matter to the designated
          Grievance Redressal Officer.
        </p>
        <p>
          The Grievance Redressal Officer will aim to respond within 5 working
          days from the date the complaint is received.
        </p>
        <ContactCard>
          <p className="text-sm sm:text-base">
            Grievance Redressal Officer (Nodal Officer)
          </p>
          <p className="text-sm sm:text-base">Name: Prashant Kabra</p>
          <p className="text-sm sm:text-base">
            Address:
            <br />
            79, Ground Floor, World Trade Centre,
            <br />
            Babar Lane, New Delhi – 110001, India
          </p>
          <p className="text-sm sm:text-base">
            Contact No.: <a href="tel:+917665466546">7665466546</a>
          </p>
          <p className="text-sm sm:text-base">
            Email:{" "}
            <a href="mailto:pno@weekline.in" className="break-all">
              pno@weekline.in
            </a>
          </p>
        </ContactCard>
      </LevelSection>

      <LevelSection level={4} activeLevel={activeLevel}>
        <p>
          If your complaint or dispute remains unresolved for a period of one
          month, you may escalate the matter to the Reserve Bank of India (RBI)
          through the following channels:
        </p>
        <ContactCard>
          <p className="text-sm sm:text-base">
            The General Manager
            <br />
            Department of Non-Banking Supervision (DNBS)
            <br />
            Reserve Bank of India
            <br />
            6, Sansad Marg, New Delhi – 110001
          </p>
          <p className="text-sm sm:text-base">
            Email:{" "}
            <a href="mailto:dnbsnewdelhi@rbi.org.in" className="break-all">
              dnbsnewdelhi@rbi.org.in
            </a>
          </p>
          <p className="text-sm sm:text-base">
            Online Complaint Portal:{" "}
            <a
              href="https://cms.rbi.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all"
            >
              https://cms.rbi.org.in
            </a>
          </p>
          <p className="text-sm sm:text-base">
            Email:{" "}
            <a href="mailto:crpc@rbi.org.in" className="break-all">
              crpc@rbi.org.in
            </a>
          </p>
          <p className="text-sm sm:text-base">
            Toll-Free Number: <a href="tel:14448">14448</a>
          </p>
        </ContactCard>
      </LevelSection>
      <div className="border-t border-gray-100 pt-6 sm:pt-8">
        <Image
          src="/images/grievance-escalation-flowchart.png"
          alt="Grievance escalation flowchart showing customer care, Grievance Officer, and Nodal Officer resolution steps."
          width={838}
          height={1024}
          sizes="(max-width: 640px) 100vw, 448px"
          className="mx-auto h-auto w-full max-w-md"
        />
      </div>
    </PolicyPageLayout>
  );
}
