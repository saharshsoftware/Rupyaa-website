import PolicyPageLayout, { PolicySection } from "@/components/PolicyPageLayout";
import { getSeoMetadata } from "@/lib/seo-metadata";

export const generateMetadata = () => getSeoMetadata("codeOfConduct");

const listClassName =
  "list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600";

export default function CodeOfConductPage() {
  return (
    <PolicyPageLayout title="CODE OF CONDUCT" effectiveDate="February 25, 2026">
      <p>
        This Code of Conduct sets out the ethical principles, professional
        standards, and expected behaviour for employees, partners, vendors, and
        other stakeholders associated with Rupyaa. We are committed to
        conducting our business with integrity, transparency, fairness, and
        professionalism across all our activities.
      </p>

      <PolicySection number={1} title="Purpose of the Code">
        <p className="mb-4">
          The purpose of this Code of Conduct is to promote a workplace and
          business environment based on integrity, responsibility,
          accountability, and mutual respect within Rupyaa.
        </p>
        <p className="mb-4">
          This Code applies to employees, directors, consultants, contractors,
          vendors, service providers, and business partners who interact with
          Rupyaa, its customers, or its operations.
        </p>
        <p className="mb-0">
          It also supports compliance with applicable laws, regulatory
          requirements, and ethical standards, including relevant guidelines
          issued by the Reserve Bank of India (RBI) and other regulatory
          authorities in India.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Scope">
        <p className="mb-4">
          This Code applies to all individuals and entities associated with
          Rupyaa, including:
        </p>
        <ul className={listClassName}>
          <li>Full-time and part-time employees.</li>
          <li>Directors and management personnel.</li>
          <li>Consultants and contractors.</li>
          <li>Vendors and service providers.</li>
          <li>Business and third-party partners.</li>
        </ul>
        <p className="mt-4 mb-0">
          The principles set out in this Code apply across all areas of our
          operations, including customer interactions, financial activities,
          marketing practices, data handling, business relationships, and
          internal workplace conduct.
        </p>
      </PolicySection>

      <PolicySection number={3} title="Core Principles">
        <p className="mb-4">
          Rupyaa expects all individuals associated with the organization to
          follow these fundamental principles:
        </p>
        <ul className={listClassName}>
          <li>
            <strong className="text-gray-800">Integrity:</strong> Conduct all
            activities honestly, ethically, fairly, and responsibly.
          </li>
          <li>
            <strong className="text-gray-800">Transparency:</strong> Communicate
            clearly and accurately with customers, employees, partners, and
            other stakeholders.
          </li>
          <li>
            <strong className="text-gray-800">Respect:</strong> Treat every
            individual with dignity, fairness, and courtesy, irrespective of
            gender, background, role, or position.
          </li>
          <li>
            <strong className="text-gray-800">Confidentiality:</strong> Protect
            confidential, personal, and sensitive information belonging to
            customers, employees, and business partners in accordance with our
            Privacy Policy and applicable law.
          </li>
          <li>
            <strong className="text-gray-800">Compliance:</strong> Follow all
            applicable laws, regulatory requirements, internal policies,
            anti-corruption requirements, and anti-money laundering guidelines.
          </li>
        </ul>
      </PolicySection>

      <PolicySection number={4} title="Employee Responsibilities">
        <p className="mb-4">
          Employees and personnel associated with Rupyaa are expected to:
        </p>
        <ul className={listClassName}>
          <li>Maintain appropriate standards of professional and ethical conduct in all business interactions.</li>
          <li>Identify, avoid, and promptly disclose any actual or potential conflict of interest.</li>
          <li>Refrain from bribery, corruption, fraud, or any other unethical or unlawful activity.</li>
          <li>Safeguard company property, systems, intellectual property, confidential information, and customer data.</li>
          <li>Follow applicable company policies, laws, and regulatory requirements.</li>
          <li>Promptly report any suspected or identified violation of this Code to the appropriate Compliance Officer or Grievance Redressal Officer.</li>
        </ul>
      </PolicySection>

      <PolicySection number={5} title="Customer Interactions">
        <p className="mb-4">
          Rupyaa is committed to treating customers fairly, transparently, and
          respectfully.
        </p>
        <p className="mb-4">Individuals dealing with customers are expected to:</p>
        <ul className={listClassName}>
          <li>Provide clear, accurate, and complete information concerning loan products, applicable fees, charges, and terms.</li>
          <li>Respond to customer questions, complaints, and concerns within reasonable timelines.</li>
          <li>Protect customer information and comply with applicable privacy and data-protection requirements.</li>
          <li>Avoid false, misleading, deceptive, coercive, or excessively aggressive marketing practices.</li>
          <li>Maintain professional and respectful communication throughout the customer relationship.</li>
        </ul>
      </PolicySection>

      <PolicySection number={6} title="Partner and Vendor Conduct">
        <p className="mb-4">
          Partners, vendors, contractors, and third-party service providers
          working with Rupyaa are expected to maintain ethical and professional
          standards consistent with this Code.
        </p>
        <p className="mb-4">
          Rupyaa may conduct appropriate due diligence before and during its
          relationship with third parties to assess their compliance with
          applicable standards, regulatory obligations, and business
          requirements.
        </p>
        <p className="mb-0">
          Where a serious or repeated violation is identified, Rupyaa may take
          appropriate action, including suspension or termination of the
          relevant business relationship, subject to contractual and legal
          requirements.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Reporting Violations">
        <p className="mb-4">
          Any suspected, observed, or known violation of this Code should be
          reported promptly to the designated Compliance Officer or Grievance
          Redressal Officer, Prashant Kabra.
        </p>
        <p className="mb-4">
          Where permitted under applicable procedures, concerns may be raised
          anonymously.
        </p>
        <p className="mb-4">
          Rupyaa is committed to protecting individuals who report genuine
          concerns in good faith from retaliation or unfair treatment.
        </p>
        <p className="mb-0">
          All reported concerns may be reviewed and investigated in accordance
          with applicable internal procedures and legal requirements.
        </p>
      </PolicySection>

      <PolicySection number={8} title="Consequences of Non-Compliance">
        <p className="mb-4">
          Failure to comply with this Code may result in appropriate corrective
          or disciplinary action, depending on the nature and seriousness of the
          violation.
        </p>
        <p className="mb-3">Such action may include:</p>
        <ul className={listClassName}>
          <li>Formal disciplinary proceedings.</li>
          <li>Suspension or termination of employment.</li>
          <li>Suspension or termination of a vendor or partnership arrangement.</li>
          <li>Legal or regulatory action, where applicable.</li>
        </ul>
        <p className="mt-4 mb-0">
          Rupyaa will cooperate with relevant law enforcement agencies,
          regulatory bodies, and other competent authorities wherever required
          by applicable law.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Policy Updates">
        <p className="mb-4">
          Rupyaa may revise, modify, or update this Code of Conduct from time to
          time to reflect changes in applicable laws, regulatory requirements,
          organizational practices, or business operations.
        </p>
        <p className="mb-4">
          Any updated version will become effective upon being published on the
          Rupyaa website, mobile application, or other official platform,
          unless otherwise specified.
        </p>
        <p className="mb-0">
          Employees, partners, vendors, and other relevant stakeholders are
          encouraged to review this Code periodically for updates.
        </p>
      </PolicySection>

      <PolicySection number={10} title="Contact Us">
        <p className="mb-4">
          For questions relating to this Code of Conduct or to report a concern,
          please contact our customer support team at:
        </p>
        <p className="mb-4">
          <strong className="text-gray-800">Email:</strong>{" "}
          <a href="mailto:care@rupyaa.com" className="break-all">
            care@rupyaa.com
          </a>
        </p>
        <p className="mb-0">
          Rupyaa remains committed to maintaining high standards of ethical
          conduct, professionalism, accountability, and responsible business
          practices, and to addressing genuine concerns in an appropriate and
          timely manner.
        </p>
      </PolicySection>
    </PolicyPageLayout>
  );
}
