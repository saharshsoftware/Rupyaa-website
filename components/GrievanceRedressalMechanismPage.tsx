import { ReactNode } from "react";
import PolicyPageLayout from "@/components/PolicyPageLayout";

function ContactCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
      {children}
    </div>
  );
}

function LevelSection({
  level,
  title,
  children,
}: {
  level: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-4 sm:pt-6 border-t border-gray-100">
      <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
        {level}
      </h2>
      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">
        {title}
      </h3>
      <div className="space-y-4 sm:space-y-5">{children}</div>
    </section>
  );
}

export default function GrievanceRedressalMechanismPage() {
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

      <LevelSection level="Level 1" title="Customer Relationship Manager">
        <p>
          Customers who wish to raise a complaint, report an issue, or provide
          feedback may contact the Customer Relationship Manager using the
          following details:
        </p>
        <ContactCard>
          <p className="text-sm sm:text-base">
            Email ID:{" "}
            <a href="mailto:grievance@rupyaa.com" className="break-all">
              grievance@rupyaa.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            Timings: 10:00 AM to 6:00 PM on weekdays
          </p>
        </ContactCard>
      </LevelSection>

      <LevelSection level="Level 2" title="Customer Service Help Desk">
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
            Email ID:{" "}
            <a href="mailto:care@rupyaa.com" className="break-all">
              care@rupyaa.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            Timings: 10:00 AM to 6:00 PM on weekdays
          </p>
        </ContactCard>
      </LevelSection>

      <LevelSection level="Level 3" title="Grievance Redressal Officer">
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

      <LevelSection
        level="Level 4"
        title="Escalation to the Reserve Bank of India"
      >
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
    </PolicyPageLayout>
  );
}
