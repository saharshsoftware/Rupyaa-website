import PolicyPageLayout, { PolicySection } from "@/components/PolicyPageLayout";
import { getSeoMetadata } from "@/lib/seo-metadata";

export const generateMetadata = () => getSeoMetadata("cancellationPolicy");

const listClassName =
  "list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600";

export default function CancellationPolicyPage() {
  return (
    <PolicyPageLayout
      title="CANCELLATION POLICY"
      effectiveDate="February 25, 2026"
    >
      <p>
        This Cancellation Policy (&quot;Policy&quot;) explains the terms and
        conditions applicable to cancellation requests for services accessed
        through Rupyaa, operated by Uptime Innovation Private Limited
        (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
      </p>
      <p>
        By accessing the Rupyaa platform or initiating any transaction through
        it, you acknowledge and agree to the terms of this Policy, including any
        updates made to it from time to time.
      </p>

      <PolicySection number={1} title="Nature of Services">
        <p className="mb-4">
          Rupyaa operates as a technology platform that enables users to access
          credit and other financial products offered by regulated financial
          institutions, including banks and Non-Banking Financial Companies
          (&quot;Lending Partners&quot;).
        </p>
        <p className="mb-0">
          Rupyaa does not independently approve, sanction, or disburse loans.
          All decisions regarding loan eligibility, approval, disbursement,
          interest rates, charges, and other loan terms are determined solely by
          the applicable Lending Partner in accordance with its policies and
          applicable law.
        </p>
      </PolicySection>

      <PolicySection number={2} title="Cancellation of a Loan Application">
        <ul className={listClassName}>
          <li>
            You may request cancellation of a loan application submitted
            through Rupyaa at any time before the loan receives final approval
            or is disbursed by the applicable Lending Partner.
          </li>
          <li>
            Cancellation requests may be submitted through your registered
            account or by contacting our customer support team at{" "}
            <a href="mailto:care@rupyaa.com" className="break-all">
              care@rupyaa.com
            </a>
            .
          </li>
          <li>
            If your loan application has already been forwarded to or is being
            processed by a Lending Partner, cancellation will be governed by
            that Lending Partner&apos;s internal policies and procedures.
          </li>
          <li>
            Rupyaa cannot guarantee that an application can be cancelled once
            it has entered the Lending Partner&apos;s review or approval process.
          </li>
        </ul>
      </PolicySection>

      <PolicySection number={3} title="Cancellation After Loan Disbursement">
        <ul className={listClassName}>
          <li>
            Once the approved loan amount has been credited to your bank
            account, the loan transaction cannot ordinarily be cancelled.
          </li>
          <li>
            If you no longer wish to use the disbursed amount, you may repay the
            outstanding loan amount together with any applicable interest,
            fees, or charges in accordance with the loan agreement entered into
            with the Lending Partner.
          </li>
          <li>
            Any early repayment, prepayment, or foreclosure may be subject to
            conditions, fees, or charges specified by the applicable Lending
            Partner.
          </li>
        </ul>
      </PolicySection>

      <PolicySection number={4} title="Cancellation of Ancillary Services">
        <p className="mb-4">
          If you have opted for any additional or ancillary services through
          the Rupyaa platform, such as insurance products, value-added
          financial tools, verification services, or other third-party
          offerings, cancellation of those services will be governed by the
          terms and conditions of the respective service provider.
        </p>
        <p className="mb-0">
          Where reasonably possible, Rupyaa may assist you in coordinating with
          the relevant third-party provider regarding your cancellation request.
        </p>
      </PolicySection>

      <PolicySection number={5} title="Processing Fees and Other Charges">
        <ul className={listClassName}>
          <li>
            Processing fees, administrative charges, verification fees, or
            other non-refundable charges already incurred or paid may not be
            refundable in the event of cancellation.
          </li>
          <li>
            Where a fee or charge has been collected directly by a Lending
            Partner or third-party service provider, you may be required to
            contact the relevant entity directly for clarification,
            cancellation, or refund-related assistance.
          </li>
        </ul>
      </PolicySection>

      <PolicySection number={6} title="Refunds, Where Applicable">
        <ul className={listClassName}>
          <li>
            If you are eligible for a refund, the approved amount will generally
            be processed to the original payment method within 7 to 10 business
            days, subject to the processing timelines of the relevant bank,
            payment gateway, or financial institution.
          </li>
          <li>
            Refunds will generally not be available for services that have
            already been fully provided or partially completed before the
            cancellation request was received.
          </li>
        </ul>
        <p className="mt-4 mb-0">
          Any refund will also remain subject to the applicable terms of the
          relevant Lending Partner or third-party service provider.
        </p>
      </PolicySection>

      <PolicySection number={7} title="Role of Rupyaa">
        <p className="mb-4">
          Rupyaa is <strong className="text-gray-800">not a lender</strong>.
        </p>
        <p className="mb-4">
          Our role is limited to providing a technology platform that
          facilitates communication, application processing, and access to
          financial services offered by Lending Partners.
        </p>
        <p className="mb-4">
          Rupyaa is not responsible for independent decisions made by Lending
          Partners regarding loan approval, rejection, disbursement, servicing,
          or cancellation.
        </p>
        <p className="mb-0">
          Once an application or loan has been transferred to or processed
          within a Lending Partner&apos;s systems, the applicable Lending
          Partner&apos;s policies and terms will govern the relevant transaction.
        </p>
      </PolicySection>

      <PolicySection number={8} title="Changes to This Policy">
        <p className="mb-4">
          Rupyaa may amend, revise, or update this Cancellation Policy from time
          to time to reflect changes in applicable laws, regulatory
          requirements, business practices, operational processes, or the
          Services.
        </p>
        <p className="mb-4">
          The updated version of this Policy will be published on the Rupyaa
          platform together with the applicable effective date.
        </p>
        <p className="mb-0">
          Your continued use of Rupyaa Services after an updated Policy becomes
          effective will constitute acceptance of the revised terms.
        </p>
      </PolicySection>

      <PolicySection number={9} title="Contact Information">
        <p className="mb-4">
          For assistance regarding cancellation requests, please contact:
        </p>
        <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
          <p className="text-sm sm:text-base font-semibold text-gray-800">
            Uptime Innovation Private Limited
          </p>
          <p className="text-sm sm:text-base">
            79, Ground Floor, World Trade Centre,
            <br />
            Babar Lane, New Delhi – 110001, India
          </p>
          <p className="text-sm sm:text-base">
            <strong className="text-gray-800">Email:</strong>{" "}
            <a href="mailto:care@rupyaa.com" className="break-all">
              care@rupyaa.com
            </a>
          </p>
          <p className="text-sm sm:text-base">
            <strong className="text-gray-800">Contact:</strong>{" "}
            <a href="tel:+918503090309">85-0309-0309</a>
          </p>
        </div>
      </PolicySection>
    </PolicyPageLayout>
  );
}
