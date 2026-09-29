import PolicyPageLayout, { PolicySection } from "@/components/PolicyPageLayout";
import { getSeoMetadata } from "@/lib/seo-metadata";

export const generateMetadata = () => getSeoMetadata("codeOfConduct");

const listClassName =
  "list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600";

export default function CodeOfConductPage() {
  return (
    <PolicyPageLayout title="CODE OF CONDUCT" effectiveDate="February 25, 2026">
      <p className="mb-4">
        This Code of Conduct sets out the ethical standards and behavioural expectations
        applicable to employees, partners, vendors, and other stakeholders associated
        with Rupyaa.
      </p>
      <p className="mb-4">
        We are committed to maintaining integrity, transparency, accountability, and
        professionalism across all our business activities and operations.
      </p>

      <PolicySection number={1} title="Purpose of the Code">
        <p className="mb-4">
          This Code of Conduct is intended to promote a culture of integrity,
          responsibility, accountability, and mutual respect within Rupyaa.
        </p>
        <p className="mb-4">
          It applies to all employees, directors, contractors, vendors, and partners who
          interact with our organization, operations, or customers.
        </p>
        <p className="mb-4">
          The Code is designed to support compliance with applicable laws, regulations,
          and ethical standards, including relevant requirements and guidelines issued
          by the Reserve Bank of India (RBI) and other regulatory authorities in India.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Scope">
        <p className="mb-4">
          This Policy applies to all individuals and entities associated with Rupyaa,
          including:
        </p>
        <ul className={listClassName}>
          <li>Full-time employees.</li>
          <li>Part-time employees.</li>
          <li>Consultants.</li>
          <li>Contractors.</li>
          <li>Vendors.</li>
          <li>Third-party partners.</li>
        </ul>
        <p className="mb-4">
          It applies across all areas of our operations, including:
        </p>
        <ul className={listClassName}>
          <li>Customer interactions.</li>
          <li>Financial dealings.</li>
          <li>Marketing activities.</li>
          <li>Internal workplace conduct.</li>
          <li>Business relationships.</li>
        </ul>
      </PolicySection>

      <PolicySection number={3} title="Core Principles">
        <p className="mb-4">
          We follow the principles below in all our activities:
        </p>
        <ul className={listClassName}>
          <li>Integrity: Conduct all dealings honestly, ethically, responsibly, and fairly.</li>
          <li>Transparency: Maintain clear, open, and truthful communication with customers, employees, partners, and other stakeholders.</li>
          <li>Respect: Treat every individual with dignity, courtesy, and respect, irrespective of gender, background, role, or position.</li>
          <li>Confidentiality: Protect the privacy, personal information, and sensitive information of customers and employees in accordance with our Privacy Policy and applicable laws.</li>
          <li>Compliance: Follow all applicable laws, regulations, regulatory requirements, and internal policies, including applicable anti-corruption and anti-money laundering requirements.</li>
        </ul>
      </PolicySection>

      <PolicySection number={4} title="Employee Responsibilities">
        <p className="mb-4">
          Employees are expected to:
        </p>
        <ul className={listClassName}>
          <li>Maintain high standards of professional and ethical behaviour in all interactions.</li>
          <li>Avoid actual or potential conflicts of interest and disclose any such conflicts promptly.</li>
          <li>Refrain from engaging in bribery, corruption, fraud, or other unethical practices.</li>
          <li>Protect company assets, including intellectual property, confidential information, systems, and customer data.</li>
          <li>Report any suspected or actual violation of this Code to the Compliance Officer or Grievance Redressal Officer.</li>
        </ul>
      </PolicySection>

      <PolicySection number={5} title="Customer Interactions">
        <p className="mb-4">
          We are committed to providing customers with fair, transparent, professional,
          and respectful service.
        </p>
        <p className="mb-4">
          This includes:
        </p>
        <ul className={listClassName}>
          <li>Providing accurate, complete, and clear information regarding loan products, applicable fees, charges, and terms.</li>
          <li>Responding to customer queries, concerns, and complaints within reasonable timelines.</li>
          <li>Complying with applicable data protection requirements and safeguarding customer information.</li>
          <li>Avoiding false, misleading, deceptive, or aggressive marketing practices.</li>
        </ul>
      </PolicySection>

      <PolicySection number={6} title="Partner and Vendor Conduct">
        <p className="mb-4">
          All partners, vendors, contractors, and third-party service providers
          associated with Rupyaa are expected to follow ethical and professional
          standards consistent with those applicable to our employees.
        </p>
        <p className="mb-4">
          We may conduct appropriate due diligence to assess whether our partners and
          vendors are aligned with our Code of Conduct, legal requirements, and
          regulatory expectations.
        </p>
        <p className="mb-4">
          Where a violation is identified, appropriate action may be taken, including
          suspension or termination of the applicable business relationship.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Reporting Violations">
        <p className="mb-4">
          Any suspected, observed, or known violation of this Code should be reported
          promptly to our Compliance Officer or Grievance Redressal Officer, Prashant
          Kabra.
        </p>
        <p className="mb-4">
          Where permitted, reports may be submitted anonymously.
        </p>
        <p className="mb-4">
          Individuals who report genuine concerns in good faith will be protected from
          retaliation or unfair treatment in accordance with applicable policies and
          laws.
        </p>
      </PolicySection>

      <PolicySection number={8} title="Consequences of Non-Compliance">
        <p className="mb-4">
          Failure to comply with this Code may result in appropriate disciplinary or
          corrective action depending on the nature and seriousness of the violation.
        </p>
        <p className="mb-4">
          Such action may include:
        </p>
        <ul className={listClassName}>
          <li>Disciplinary proceedings.</li>
          <li>Termination of employment.</li>
          <li>Legal action.</li>
          <li>Suspension or termination of vendor, contractor, or partnership arrangements.</li>
        </ul>
        <p className="mb-4">
          Where required, we will cooperate with applicable law enforcement agencies,
          regulatory bodies, and other competent authorities.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Policy Updates">
        <p className="mb-4">
          Rupyaa reserves the right to revise, modify, or update this Code of Conduct
          from time to time.
        </p>
        <p className="mb-4">
          Any changes will become effective upon publication on our website, mobile
          application, or other official platform, unless otherwise specified.
        </p>
        <p className="mb-4">
          Employees, partners, vendors, and other relevant stakeholders are encouraged
          to review this Policy periodically for any updates.
        </p>
      </PolicySection>

      <PolicySection number={10} title="Contact Us">
        <p className="mb-4">
          For any questions regarding this Code of Conduct or to report a concern,
          please contact our customer support team at:
        </p>
        <p className="mb-4">
          Email: <a href="mailto:care@rupyaa.com" className="break-all">care@rupyaa.com</a>
        </p>
        <p className="mb-4">
          We remain committed to maintaining high standards of ethical conduct,
          professionalism, accountability, and responsible business practices, and to
          addressing genuine concerns in a timely and appropriate manner.
        </p>
      </PolicySection>
    </PolicyPageLayout>
  );
}
