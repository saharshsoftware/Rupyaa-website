"use client";

import { ReactNode, useMemo, useState } from "react";
import PolicyPageLayout from "@/components/PolicyPageLayout";

type EscalationLevel = {
  readonly id: "level-1" | "level-2" | "level-3" | "level-4";
  readonly tabLabel: string;
  readonly tabSubLabel: string;
  readonly content: ReactNode;
};

function ContactCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
      {children}
    </div>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <p className="text-sm sm:text-base">
      <strong className="text-gray-800">{label}</strong> {children}
    </p>
  );
}

function getActiveLevelIndex(params: {
  activeLevelId: EscalationLevel["id"];
  levels: readonly EscalationLevel[];
}): number {
  const activeIndex: number = params.levels.findIndex(
    (level) => level.id === params.activeLevelId,
  );
  return activeIndex >= 0 ? activeIndex : 0;
}

export default function GrievanceRedressalMechanismPage() {
  const levels: readonly EscalationLevel[] = useMemo(
    () => [
      {
        id: "level-1",
        tabLabel: "Level 1",
        tabSubLabel: "Customer Relationship Manager",
        content: (
          <div className="space-y-4 sm:space-y-5">
            <p>
              Customers who wish to raise a complaint, report an issue, or
              provide feedback may contact the Customer Relationship Manager
              using the following details:
            </p>
            <ContactCard>
              <ContactLine label="Email ID:">
                <a href="mailto:grievance@rupyaa.com" className="break-all">
                  grievance@rupyaa.com
                </a>
              </ContactLine>
              <ContactLine label="Timings:">
                10:00 AM to 6:00 PM on weekdays
              </ContactLine>
            </ContactCard>
          </div>
        ),
      },
      {
        id: "level-2",
        tabLabel: "Level 2",
        tabSubLabel: "Customer Service Help Desk",
        content: (
          <div className="space-y-4 sm:space-y-5">
            <p>
              If you are not satisfied with the response provided at Level 1,
              or if you do not receive a response within 3 working days, you
              may escalate your complaint to our Customer Service Help Desk.
            </p>
            <p>
              Our Help Desk representatives are available to assist with
              registering and reviewing your complaint through the following
              channels:
            </p>
            <ContactCard>
              <ContactLine label="Helpline No.:">
                <a href="tel:+918503090309">85-0309-0309</a>
              </ContactLine>
              <ContactLine label="Email ID:">
                <a href="mailto:care@rupyaa.com" className="break-all">
                  care@rupyaa.com
                </a>
              </ContactLine>
              <ContactLine label="Timings:">
                10:00 AM to 6:00 PM on weekdays
              </ContactLine>
            </ContactCard>
          </div>
        ),
      },
      {
        id: "level-3",
        tabLabel: "Level 3",
        tabSubLabel: "Grievance Redressal Officer",
        content: (
          <div className="space-y-4 sm:space-y-5">
            <p>
              If your concern remains unresolved after contacting the Customer
              Service Help Desk, or if you do not receive a response within 3
              working days, you may further escalate the matter to the
              designated Grievance Redressal Officer.
            </p>
            <p>
              The Grievance Redressal Officer will aim to respond within 5
              working days from the date the complaint is received.
            </p>
            <ContactCard>
              <p className="text-sm sm:text-base">
                <strong className="text-gray-800">
                  Grievance Redressal Officer (Nodal Officer)
                </strong>
              </p>
              <ContactLine label="Name:">Prashant Kabra</ContactLine>
              <ContactLine label="Address:">
                <span>
                  79, Ground Floor, World Trade Centre,
                  <br />
                  Babar Lane, New Delhi – 110001, India
                </span>
              </ContactLine>
              <ContactLine label="Contact No.:">
                <a href="tel:+917665466546">7665466546</a>
              </ContactLine>
              <ContactLine label="Email:">
                <a href="mailto:pno@weekline.in" className="break-all">
                  pno@weekline.in
                </a>
              </ContactLine>
            </ContactCard>
          </div>
        ),
      },
      {
        id: "level-4",
        tabLabel: "Level 4",
        tabSubLabel: "Escalation to the Reserve Bank of India",
        content: (
          <div className="space-y-4 sm:space-y-5">
            <p>
              If your complaint or dispute remains unresolved for a period of
              one month, you may escalate the matter to the Reserve Bank of
              India (RBI) through the following channels:
            </p>
            <ContactCard>
              <p className="text-sm sm:text-base">
                <strong className="text-gray-800">The General Manager</strong>
              </p>
              <p className="text-sm sm:text-base">
                Department of Non-Banking Supervision (DNBS)
              </p>
              <p className="text-sm sm:text-base">Reserve Bank of India</p>
              <p className="text-sm sm:text-base">
                6, Sansad Marg, New Delhi – 110001
              </p>
              <ContactLine label="Email:">
                <a href="mailto:dnbsnewdelhi@rbi.org.in" className="break-all">
                  dnbsnewdelhi@rbi.org.in
                </a>
              </ContactLine>
              <ContactLine label="Online Complaint Portal:">
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all"
                >
                  https://cms.rbi.org.in
                </a>
              </ContactLine>
              <ContactLine label="Email:">
                <a href="mailto:crpc@rbi.org.in" className="break-all">
                  crpc@rbi.org.in
                </a>
              </ContactLine>
              <ContactLine label="Toll-Free Number:">
                <a href="tel:14448">14448</a>
              </ContactLine>
            </ContactCard>
          </div>
        ),
      },
    ],
    [],
  );

  const [activeLevelId, setActiveLevelId] =
    useState<EscalationLevel["id"]>("level-1");
  const activeLevelIndex: number = getActiveLevelIndex({
    activeLevelId,
    levels,
  });
  const activeLevel: EscalationLevel = levels[activeLevelIndex] ?? levels[0];

  return (
    <PolicyPageLayout
      title="GRIEVANCE REDRESSAL MECHANISM"
      effectiveDate="February 25, 2026"
    >
      <p>
        Rupyaa has established a clear grievance escalation process to ensure
        that customer complaints, concerns, and feedback are reviewed and
        addressed in a timely and appropriate manner.
      </p>
      <div className="space-y-2 sm:space-y-2 pt-4 sm:pt-6 border-t border-gray-100">
        <div className="bg-gray-50 border border-gray-100 rounded-xl ">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-2 sm:p-3"
            role="tablist"
          >
            {levels.map((level) => {
              const isActive: boolean = level.id === activeLevelId;
              return (
                <button
                  key={level.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveLevelId(level.id)}
                  className={[
                    "rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-left border transition-colors",
                    isActive
                      ? "bg-primary border-primary text-white"
                      : "bg-white border-gray-200 text-gray-800 hover:bg-gray-100",
                  ].join(" ")}
                >
                  <div className="text-sm sm:text-base font-semibold">
                    {level.tabLabel}
                  </div>
                  <div
                    className={[
                      "text-xs sm:text-sm mt-1 leading-snug",
                      isActive ? "text-white/80" : "text-gray-500",
                    ].join(" ")}
                  >
                    {level.tabSubLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="pt-1" role="tabpanel">
          {activeLevel.content}
        </div>
      </div>
    </PolicyPageLayout>
  );
}
