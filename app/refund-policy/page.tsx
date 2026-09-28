import PolicyPageLayout, { PolicySection } from "@/components/PolicyPageLayout";
import { getSeoMetadata } from "@/lib/seo-metadata";

export const generateMetadata = () => getSeoMetadata("refundPolicy");

const listClassName =
  "list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600";

export default function RefundPolicyPage() {
  return (
    <PolicyPageLayout title="REFUND POLICY" effectiveDate="February 25, 2026">
      <p className="mb-4">
        At Rupyaa, operated by Uptime Innovation Private Limited (“we”, “us”, or “our”),
        we are committed to maintaining transparency, integrity, and customer
        satisfaction.
      </p>
      <p className="mb-4">
        This Refund Policy explains the terms and conditions applicable to refunds for
        payments made through the Rupyaa platform in connection with the financial
        services we facilitate.
      </p>
      <p className="mb-4">
        Please review this Policy carefully before making any payment through the Rupyaa
        platform.
      </p>

      <PolicySection number={1} title="Introduction">
        <p className="mb-4">
          Rupyaa, operated by Uptime Innovation Private Limited, is committed to providing
          users with a transparent, fair, and reliable service experience.
        </p>
        <p className="mb-0">
          This Refund Policy sets out the conditions and procedures applicable to refund
          requests for payments made through our platform in connection with the financial
          services facilitated by Rupyaa.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Nature of Services">
        <p className="mb-4">
          Rupyaa is a technology-driven platform that enables users to apply for and
          manage financial services, including loan applications, through partnerships
          with regulated financial institutions such as banks and Non-Banking Financial
          Companies (NBFCs).
        </p>
        <p className="mb-4">
          We facilitate service delivery, application processing, technology support, and
          customer assistance.
        </p>
        <p className="mb-0">
          Rupyaa does not directly disburse loans or independently collect loan repayments
          as a lender.
        </p>
      </PolicySection>

      <PolicySection number={3} title="Applicability">
        <p className="mb-4">
          This Refund Policy applies to service charges, fees, or payments made by users
          to Rupyaa or in connection with financial services facilitated through the
          Rupyaa platform.
        </p>
        <p className="mb-4">
          This may include:
        </p>
        <ul className={listClassName}>
          <li>Application-related fees.</li>
          <li>Technology usage charges.</li>
          <li>Convenience fees.</li>
          <li>Third-party KYC or verification service charges paid through Rupyaa.</li>
        </ul>
      </PolicySection>

      <PolicySection number={4} title="Non-Refundable Fees">
        <p className="mb-4">
          Unless specifically stated otherwise, the following payments are generally
          non-refundable:
        </p>
        <ul className={listClassName}>
          <li>Loan application processing charges once the application has been submitted.</li>
          <li>Technology usage or convenience charges incurred while using the Rupyaa platform.</li>
          <li>Third-party KYC or verification charges once the relevant service has been provided.</li>
          <li>Service charges paid to partner institutions, unless the applicable partner specifically provides for a refund.</li>
        </ul>
      </PolicySection>

      <PolicySection number={5} title="Exceptions to Non-Refundability">
        <p className="mb-4">
          Refunds may be considered in certain exceptional circumstances, including:
        </p>
        <ul className={listClassName}>
          <li>Duplicate payments resulting from a technical error or platform malfunction.</li>
          <li>Failed transactions where the amount was debited but the relevant service was not provided.</li>
          <li>Unauthorized transactions resulting from a platform-related error, excluding cases caused by user negligence.</li>
        </ul>
        <p className="mb-4">
          All refund requests must be supported by valid proof of payment and a clear
          explanation of the reason for requesting the refund.
        </p>
        <p className="mb-4">
          Each request will be reviewed individually based on the relevant facts and
          circumstances.
        </p>
        <p className="mb-0">
          The outcome of the refund request will be communicated to the user within 10
          working days, subject to completion of applicable verification and checks.
        </p>
      </PolicySection>

      <PolicySection number={6} title="Refund Request Procedure">
        <p className="mb-4">
          To submit a refund request, please email us at:
        </p>
        <p className="mb-4">
          <a href="mailto:care@rupyaa.com" className="break-all">care@rupyaa.com</a>
        </p>
        <p className="mb-4">
          Your request should include the following information:
        </p>
        <ul className={listClassName}>
          <li>Full name.</li>
          <li>Registered mobile number and/or email ID.</li>
          <li>Date and time of the transaction.</li>
          <li>Payment or transaction reference number.</li>
          <li>Reason for requesting the refund.</li>
          <li>Supporting documents, receipts, or screenshots, where applicable.</li>
        </ul>
        <p className="mb-0">
          Providing complete and accurate information may help us process your request
          more efficiently.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Processing of Approved Refunds">
        <p className="mb-4">
          If a refund request is approved, the refund will generally be processed to the
          original mode of payment within 7–10 business days.
        </p>
        <p className="mb-4">
          The actual time required for the amount to reflect in your account may depend on
          the applicable bank, payment gateway, or financial institution.
        </p>
        <p className="mb-0">
          Where the original payment method is no longer active or valid, an alternative
          refund arrangement may be considered with the consent of the user and after
          completion of the required verification.
        </p>
      </PolicySection>

      <PolicySection number={8} title="No Refund for Loan Repayments">
        <p className="mb-4">
          Loan repayments made to Lending Partners through or in connection with the
          Rupyaa platform are governed by the terms of the applicable loan agreement.
        </p>
        <p className="mb-4">
          Rupyaa is not responsible for independently refunding EMIs, interest payments,
          or other loan-related amounts once such payments have been made.
        </p>
        <p className="mb-0">
          Any concern, dispute, or refund request relating specifically to a loan
          repayment must be raised directly with the respective Lending Partner in
          accordance with its policies and the applicable loan agreement.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Contact Information">
        <p className="mb-4">
          For questions regarding this Refund Policy or to check the status of a refund
          request, please contact:
        </p>
        <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
          <p className="text-sm sm:text-base font-semibold text-gray-800">Uptime Innovation Private Limited</p>
          <p className="text-sm sm:text-base">79, Ground Floor, World Trade Centre,<br />Babar Lane, New Delhi – 110001, India</p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Email:</strong>{" "}<a href="mailto:care@rupyaa.com" className="break-all">care@rupyaa.com</a></p>
          <p className="text-sm sm:text-base"><strong className="text-gray-800">Contact:</strong>{" "}<a href="tel:+918503090309">85-0309-0309</a></p>
        </div>
      </PolicySection>

      <PolicySection number={10} title="Policy Amendments">
        <p className="mb-4">
          Rupyaa may revise, amend, or update this Refund Policy from time to time to
          reflect changes in regulatory requirements, platform functionality, business
          processes, or user feedback.
        </p>
        <p className="mb-0">
          Any updated version of this Refund Policy will be published on the Rupyaa
          Platform with the applicable effective date clearly stated.
        </p>
      </PolicySection>
    </PolicyPageLayout>
  );
}
