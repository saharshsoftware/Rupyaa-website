import PolicyPageLayout, { PolicySection } from "@/components/PolicyPageLayout";
import { getSeoMetadata } from "@/lib/seo-metadata";

export const generateMetadata = () => getSeoMetadata("refundPolicy");

const listClassName =
  "list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600";

export default function RefundPolicyPage() {
  return (
    <PolicyPageLayout title="REFUND POLICY" effectiveDate="February 25, 2026">
      <p>
        Rupyaa, operated by Uptime Innovation Private Limited (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;), is committed to ensuring
        transparency, fairness, and clarity in relation to payments made through
        our platform.
      </p>
      <p>
        This Refund Policy describes the circumstances in which refunds may be
        available, as well as situations where payments may not be refundable,
        for financial services facilitated through Rupyaa. Users are advised to
        review this policy carefully before making any payment through the
        Rupyaa platform.
      </p>

      <PolicySection number={1} title="Introduction">
        <p className="mb-4">
          Rupyaa is operated by Uptime Innovation Private Limited and is focused
          on providing users with a transparent and dependable experience while
          accessing financial services.
        </p>
        <p className="mb-0">
          This Refund Policy explains the terms applicable to refund requests
          concerning fees, charges, or other payments made through, or in
          connection with, services available on the Rupyaa platform.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Nature of Services">
        <p className="mb-4">
          Rupyaa functions as a technology-enabled platform through which users
          can apply for, access, and manage financial services, including
          personal loan-related services offered in association with regulated
          financial institutions such as banks and Non-Banking Financial
          Companies (NBFCs).
        </p>
        <p className="mb-4">
          Rupyaa supports various parts of the customer journey, including
          application processing, technology services, operational assistance,
          and customer support.
        </p>
        <p className="mb-0">
          Rupyaa does not independently sanction or disburse loans and does not
          collect loan repayments on its own behalf as a lending institution.
        </p>
      </PolicySection>

      <PolicySection number={3} title="Scope of This Policy">
        <p className="mb-4">
          This Refund Policy applies to eligible fees, charges, and payments
          made by users to Rupyaa or in connection with services facilitated
          through the Rupyaa platform.
        </p>
        <p className="mb-3">Depending on the applicable service, such payments may include:</p>
        <ul className={listClassName}>
          <li>Application-related charges.</li>
          <li>Technology or platform usage fees.</li>
          <li>Convenience charges.</li>
          <li>Third-party KYC or verification fees.</li>
          <li>Other applicable service-related charges paid through Rupyaa.</li>
        </ul>
      </PolicySection>

      <PolicySection number={4} title="Fees That Are Generally Non-Refundable">
        <p className="mb-4">
          Unless specifically stated otherwise, the following fees and charges
          are generally non-refundable:
        </p>
        <ul className={listClassName}>
          <li>Loan application processing charges once the application has been submitted.</li>
          <li>Technology usage or convenience fees incurred while using the Rupyaa platform.</li>
          <li>Third-party KYC, identity verification, or similar charges once the relevant service has already been provided.</li>
          <li>Fees or charges paid to partner financial institutions or third-party service providers, unless a refund is permitted under the applicable partner&apos;s policy.</li>
        </ul>
      </PolicySection>

      <PolicySection number={5} title="Circumstances Where a Refund May Be Considered">
        <p className="mb-4">A refund may be reviewed in certain exceptional situations, including:</p>
        <ul className={listClassName}>
          <li>A duplicate payment resulting from a technical issue, system error, or platform malfunction.</li>
          <li>A failed transaction where an amount was deducted from the user&apos;s account but the corresponding service was not provided.</li>
          <li>An unauthorized transaction directly caused by a platform-related issue, excluding cases arising from user negligence, misconduct, or misuse.</li>
        </ul>
        <p className="mt-4 mb-4">To request a refund, users must provide appropriate supporting information, including proof of payment and a clear explanation of the reason for the request.</p>
        <p className="mb-4">Each refund request will be reviewed individually based on the relevant facts, transaction details, and applicable circumstances.</p>
        <p className="mb-0">We will communicate the result of the refund request within 10 working days, subject to completion of the required verification and checks.</p>
      </PolicySection>

      <PolicySection number={6} title="How to Request a Refund">
        <p className="mb-4">
          To submit a refund request, please contact us at:{" "}
          <a href="mailto:care@rupyaa.com" className="break-all">care@rupyaa.com</a>
        </p>
        <p className="mb-3">Your request should include the following details:</p>
        <ul className={listClassName}>
          <li>Full name.</li>
          <li>Registered mobile number and/or email address.</li>
          <li>Date and time of the transaction.</li>
          <li>Payment or transaction reference number.</li>
          <li>Reason for requesting the refund.</li>
          <li>Relevant payment receipts, screenshots, or other supporting documents, wherever applicable.</li>
        </ul>
        <p className="mt-4 mb-0">Providing complete and accurate information will help us review and process the request more efficiently.</p>
      </PolicySection>

      <PolicySection number={7} title="Processing of Approved Refunds">
        <p className="mb-4">Where a refund request is approved, the refund will generally be initiated to the original payment method within 7 to 10 business days.</p>
        <p className="mb-4">The time taken for the refunded amount to reflect in your account may vary depending on the processing timelines of the applicable bank, payment gateway, card issuer, or financial institution.</p>
        <p className="mb-0">If the original payment method is no longer active, valid, or available, an alternative refund method may be considered after obtaining the user&apos;s consent and completing the required verification process.</p>
      </PolicySection>

      <PolicySection number={8} title="Loan Repayments Are Not Covered by Rupyaa Refunds">
        <p className="mb-4">Loan repayments, including EMIs, interest, penalties, and other loan-related payments made to a Lending Partner through or in connection with the Rupyaa platform, are governed by the applicable loan agreement and the policies of the respective Lending Partner.</p>
        <p className="mb-4">Rupyaa does not independently process refunds for EMI payments, interest, penalties, or other amounts already paid toward a loan.</p>
        <p className="mb-0">Any dispute, reversal request, refund request, or query specifically relating to loan repayment must be raised with the relevant Lending Partner in accordance with the applicable loan agreement and the Lending Partner&apos;s policies.</p>
      </PolicySection>

      <PolicySection number={9} title="Contact Information">
        <p className="mb-4">For questions regarding this Refund Policy or to check the status of a submitted refund request, you may contact us at:</p>
        <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
          <p className="text-sm sm:text-base font-semibold text-gray-800">Uptime Innovation Private Limited</p>
          <p className="text-sm sm:text-base">79, Ground Floor, World Trade Centre,<br />Babar Lane, New Delhi – 110001, India</p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Email:</strong>{" "}<a href="mailto:care@rupyaa.com" className="break-all">care@rupyaa.com</a></p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Contact:</strong>{" "}<a href="tel:+918503090309">85-0309-0309</a></p>
        </div>
      </PolicySection>

      <PolicySection number={10} title="Changes to This Refund Policy">
        <p className="mb-4">Rupyaa may amend, revise, or update this Refund Policy from time to time to reflect changes in applicable laws, regulatory requirements, platform features, internal processes, business operations, or service practices.</p>
        <p className="mb-4">Any updated version of this Refund Policy will be published on the Rupyaa Platform together with the applicable effective date.</p>
        <p className="mb-0">Users are encouraged to review this Refund Policy periodically to stay informed about any changes.</p>
      </PolicySection>
    </PolicyPageLayout>
  );
}
