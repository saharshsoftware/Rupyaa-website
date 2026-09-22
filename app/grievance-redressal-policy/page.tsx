import PolicyPageLayout, { PolicySection } from "@/components/PolicyPageLayout";
import { getSeoMetadata } from "@/lib/seo-metadata";

export const generateMetadata = () => getSeoMetadata("grievanceRedressalPolicy");

const listClassName =
  "list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600";

export default function GrievanceRedressalPolicyPage() {
  return (
    <PolicyPageLayout
      title="GRIEVANCE REDRESSAL POLICY"
      effectiveDate="February 25, 2026"
    >
      <p>
        This Grievance Redressal Policy describes the process followed for
        receiving, reviewing, and resolving customer complaints, concerns, and
        grievances relating to loan-related services facilitated through Rupyaa.
      </p>
      <p>
        We are committed to handling customer grievances in a fair,
        transparent, and timely manner.
      </p>

      <PolicySection number={1} title="Purpose of the Policy">
        <p className="mb-4">
          The purpose of this Grievance Redressal Policy is to establish a clear
          and structured mechanism through which customers can raise concerns,
          complaints, or grievances regarding loan products, services,
          processes, or other interactions associated with Rupyaa.
        </p>
        <p className="mb-0">
          Our objective is to address complaints efficiently and fairly while
          maintaining compliance with applicable Indian laws, regulations, and
          relevant guidelines issued by the Reserve Bank of India (RBI).
        </p>
      </PolicySection>

      <PolicySection number={2} title="Scope">
        <p className="mb-4">
          This Policy applies to all customers, including individuals and
          businesses, who access loan-related services through the Rupyaa
          website, mobile application, or other supported platforms.
        </p>
        <p className="mb-3">Grievances covered under this Policy may relate to:</p>
        <ul className={listClassName}>
          <li>Loan applications.</li>
          <li>Loan approval or processing.</li>
          <li>Disbursement-related matters.</li>
          <li>Repayments.</li>
          <li>Customer support.</li>
          <li>Privacy and data-related concerns.</li>
          <li>Service-related issues.</li>
          <li>Other interactions connected with services accessed through Rupyaa.</li>
        </ul>
      </PolicySection>

      <PolicySection number={3} title="Grievance Redressal Process">
        <p className="mb-4">
          Rupyaa follows a structured process for handling customer grievances:
        </p>
        <ul className={listClassName}>
          <li>You may submit your complaint through our website, mobile application, email, or telephone support channels.</li>
          <li>We will aim to acknowledge receipt of your complaint within <strong className="text-gray-800">24 hours</strong>.</li>
          <li>Our customer support team will review the matter and attempt to resolve it within <strong className="text-gray-800">7 working days</strong>.</li>
          <li>If the complaint cannot be resolved at the initial level or requires further review, it may be escalated to the designated <strong className="text-gray-800">Grievance Redressal Officer</strong>.</li>
          <li>Escalated complaints will be addressed within <strong className="text-gray-800">30 days</strong>, subject to applicable RBI guidelines and regulatory requirements.</li>
          <li>Where appropriate, updates regarding the progress or status of your complaint may be communicated through email or SMS.</li>
        </ul>
      </PolicySection>

      <PolicySection number={4} title="Grievance Redressal Officer">
        <p className="mb-4">
          A designated Grievance Redressal Officer is responsible for reviewing
          and addressing complaints that require escalation.
        </p>
        <p className="mb-4">
          If your grievance is not resolved satisfactorily through the initial
          customer support process, you may contact the Grievance Redressal
          Officer using the details below:
        </p>
        <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Grievance Redressal Officer (Nodal Officer):</strong>{" "}Prashant Kabra</p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Address:</strong><br />79, Ground Floor, World Trade Centre,<br />Babar Lane, New Delhi – 110001, India</p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Contact No.:</strong>{" "}<a href="tel:+917665466546">7665466546</a></p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Email:</strong>{" "}<a href="mailto:pno@weekline.in" className="break-all">pno@weekline.in</a></p>
        </div>
      </PolicySection>

      <PolicySection number={5} title="Escalation to Regulatory Authorities">
        <p className="mb-4">
          If your grievance remains unresolved for more than <strong className="text-gray-800">30 days</strong>, or if you are not satisfied with the resolution provided, you may escalate the matter to the <strong className="text-gray-800">Reserve Bank of India (RBI)</strong> or another applicable regulatory authority.
        </p>
        <p className="mb-4">Customers may contact the RBI through the following channels:</p>
        <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
          <p className="text-sm sm:text-base"><strong className="text-gray-800">The General Manager</strong><br />Department of Non-Banking Supervision (DNBS)<br />Reserve Bank of India<br />6, Sansad Marg, New Delhi – 110001</p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Email:</strong>{" "}<a href="mailto:dnbsnewdelhi@rbi.org.in" className="break-all">dnbsnewdelhi@rbi.org.in</a></p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Online Complaint Portal:</strong>{" "}<a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="break-all">https://cms.rbi.org.in</a></p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Email:</strong>{" "}<a href="mailto:crpc@rbi.org.in" className="break-all">crpc@rbi.org.in</a></p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Toll-Free Number:</strong>{" "}<a href="tel:14448">14448</a></p>
        </div>
        <p className="mt-4 mb-0">
          Any escalation to a regulatory authority will be subject to the
          applicable eligibility requirements, procedures, and
          grievance-redressal framework prescribed by that authority.
        </p>
      </PolicySection>

      <PolicySection number={6} title="Confidentiality">
        <p className="mb-4">
          All complaints, grievances, and information provided in connection
          with them will be handled with appropriate confidentiality.
        </p>
        <p className="mb-0">
          Personal or grievance-related information will not be disclosed to
          third parties without your consent, except where such disclosure is
          necessary to investigate or resolve the complaint, comply with legal
          obligations, or respond to requests from competent regulatory or
          government authorities.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Changes to This Policy">
        <p className="mb-4">
          Rupyaa may revise, amend, or update this Grievance Redressal Policy
          from time to time to reflect changes in applicable laws, regulatory
          requirements, internal procedures, or business practices.
        </p>
        <p className="mb-4">
          Any updated version of this Policy will be published on the Rupyaa
          website, mobile application, or other official platform and will
          become effective from the date specified in the revised Policy.
        </p>
        <p className="mb-0">
          Users are encouraged to review this Policy periodically for any updates.
        </p>
      </PolicySection>

      <PolicySection number={8} title="Contact Us">
        <p className="mb-4">
          For general questions, assistance, or to submit a grievance, please
          contact our customer support team at:
        </p>
        <p className="mb-4"><strong className="text-gray-800">Email:</strong>{" "}<a href="mailto:care@rupyaa.com" className="break-all">care@rupyaa.com</a></p>
        <p className="mb-0">
          We are committed to reviewing customer concerns fairly and making
          reasonable efforts to resolve grievances within the applicable
          timelines.
        </p>
      </PolicySection>
    </PolicyPageLayout>
  );
}
