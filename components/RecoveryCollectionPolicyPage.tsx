"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/home/Footer";
import { appShellContainerClassName } from "@/lib/app-shell-layout";

function ShieldIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-primary sm:w-8 sm:h-8"
    >
      <path d="M12 22s8-4 8-10V5l-8-2-8 2v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function RecoveryCollectionPolicyContent() {
  const searchParams = useSearchParams();
  const isMobileSource = searchParams.get("source") === "mobile";

  return (
    <div className="min-h-screen bg-gray-50">
      {!isMobileSource && <AppHeader />}
      <main className={`overflow-x-hidden ${isMobileSource ? "" : "pt-16"}`}>
        <div className={`${appShellContainerClassName} py-5 sm:py-12`}>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 px-4 sm:px-10 py-6 sm:py-10 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    RECOVERY AND COLLECTION POLICY
                  </h1>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-gray-600">
                    Weekline Investment and Trading Company Limited
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-10 py-5 sm:py-10">
              <div className="prose prose-gray max-w-none text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-loose space-y-5 sm:space-y-6 hyphens-auto break-words">
                <p className="italic text-gray-600">
                  This Policy was reviewed and approved by the Board of
                  Directors at the Board Meeting held on 2nd March 2026.
                </p>

                <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    <a
                      href="https://www.weekline.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      NBFC
                    </a>{" "}
                    Information:
                  </p>
                  <p className="text-sm sm:text-base break-words">
                    <strong className="text-gray-800">
                      WEEKLINE INVESTMENT AND TRADING COMPANY LTD.
                    </strong>
                  </p>
                  <p className="text-sm sm:text-base">
                    <strong className="text-gray-800">
                      RBI Registration No.:
                    </strong>{" "}
                    14.01001
                  </p>
                  <p className="text-sm sm:text-base break-words">
                    <strong className="text-gray-800">Address:</strong> 79,
                    Ground Floor, World Trade Centre, Babar Lane, New Delhi –
                    110001, India
                  </p>
                </div>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    Preamble
                  </h2>
                  <p className="mb-3">
                    Weekline Investment and Trading Company Limited
                    (&quot;Company&quot; / &quot;WITCL&quot;), a Non-Banking
                    Financial Company classified under the Base Layer and
                    registered with the Reserve Bank of India (&quot;RBI&quot;),
                    is committed to following recovery and collection practices
                    that are fair, transparent, ethical, respectful, and
                    compliant with applicable laws and regulatory requirements.
                  </p>
                  <p className="mb-3">
                    This Recovery and Collection Policy (&quot;Policy&quot;) has
                    been formulated in line with, among others:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      The Reserve Bank of India Act, 1934 and applicable RBI
                      Master Directions governing NBFCs.
                    </li>
                    <li>RBI Fair Practices Code requirements.</li>
                    <li>
                      RBI Digital Lending Guidelines and applicable outsourcing
                      requirements.
                    </li>
                  </ul>
                  <p className="mt-4">
                    This Policy applies to the Company&apos;s recovery and
                    collection activities and forms an important part of its
                    overall credit governance framework. It is intended to
                    provide consistency across loan servicing, delinquency
                    management, recovery, settlement, and write-off processes.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    Objectives of the Policy
                  </h2>
                  <p className="mb-3">
                    The primary objectives of this Policy are to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Establish a structured, transparent, and RBI-compliant
                      recovery framework.
                    </li>
                    <li>
                      Ensure that borrowers are treated respectfully and that
                      recovery activities remain non-coercive.
                    </li>
                    <li>
                      Safeguard borrower rights, privacy, confidentiality, and
                      dignity.
                    </li>
                    <li>
                      Reduce delinquencies and credit losses through timely and
                      appropriate intervention.
                    </li>
                    <li>
                      Define clear procedures for escalation, settlement,
                      restructuring, and write-off.
                    </li>
                    <li>
                      Establish accountability for employees, collection
                      personnel, and outsourced recovery agencies.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      3
                    </span>
                    Applicability
                  </h2>
                  <p className="mb-3">This Policy applies to:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      All lending products offered by the Company, including
                      payday loans, personal loans, and EMI-based loan products.
                    </li>
                    <li>
                      Recovery and collection activities undertaken by internal
                      teams as well as outsourced agencies.
                    </li>
                    <li>
                      All employees, officers, authorized representatives,
                      collection personnel, and third-party service providers
                      involved in recovery and collection.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      4
                    </span>
                    Guiding Principles
                  </h2>
                  <p className="mb-3">
                    All recovery and collection activities shall be governed by
                    the following principles:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      <strong className="text-gray-800">
                        Fairness and Respect:
                      </strong>{" "}
                      Borrowers must be treated with dignity, courtesy, and
                      fairness at all times.
                    </li>
                    <li>
                      <strong className="text-gray-800">Transparency:</strong>{" "}
                      Borrowers shall receive clear and accurate information
                      regarding outstanding amounts, charges, repayment
                      consequences, and available options.
                    </li>
                    <li>
                      <strong className="text-gray-800">Non-Coercion:</strong>{" "}
                      Harassment, intimidation, threats, abusive conduct, use of
                      force, or any other coercive practice is strictly
                      prohibited.
                    </li>
                    <li>
                      <strong className="text-gray-800">
                        Confidentiality:
                      </strong>{" "}
                      Borrower information must be protected and used only for
                      legitimate recovery, servicing, and compliance purposes.
                    </li>
                    <li>
                      <strong className="text-gray-800">
                        Legal and Regulatory Compliance:
                      </strong>{" "}
                      All recovery activities must be conducted within the
                      framework of applicable laws, contractual terms, RBI
                      directions, and internal policies.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      5
                    </span>
                    Recovery Governance Structure
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Overall supervision and governance of recovery activities
                      shall remain with the Board of Directors and/or the Board
                      Risk Committee.
                    </li>
                    <li>
                      Day-to-day recovery and collection activities shall be
                      managed by the Collections Department.
                    </li>
                    <li>
                      Any legal recovery action shall be coordinated through the
                      Legal Department.
                    </li>
                    <li>
                      Settlement, compromise, restructuring, and write-off
                      decisions shall be governed by the Company&apos;s
                      applicable Settlement &amp; Write-off Policy and internal
                      approval framework.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      6
                    </span>
                    Recovery Mechanism
                  </h2>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.1 Product-Specific Alignment with Credit Policy
                  </h3>
                  <p className="mb-3">
                    Recovery and collection activities relating to payday loans
                    shall be aligned with the Company&apos;s approved Credit
                    Policy, including in particular:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>Section 6: Collection Risk Strategy.</li>
                    <li>Section 6.1: Delinquency Management Framework.</li>
                    <li>Section 6.2: Escalation &amp; Write-Off Protocols.</li>
                  </ul>
                  <p className="mb-3">
                    Payday loans are short-tenure, bullet-repayment products
                    generally having a tenure of 6 to 40 days and may carry
                    relatively higher risk pricing.
                  </p>
                  <p className="mb-4">
                    Accordingly, the Company&apos;s recovery strategy places
                    emphasis on early intervention, structured follow-up, timely
                    escalation, and defined resolution timelines while ensuring
                    compliance with RBI Fair Practices Code requirements and
                    borrower-protection principles.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.2 Identification of Delinquency and Account Classification
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      A loan account shall be considered overdue where the full
                      amount payable, including principal, interest, and
                      applicable charges, is not received on the scheduled due
                      date.
                    </li>
                    <li>
                      Days Past Due (&quot;DPD&quot;) shall be calculated
                      beginning from the day immediately following the repayment
                      due date.
                    </li>
                    <li>
                      Recovery activities shall be aligned with the relevant DPD
                      category described below.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.3 DPD-Based Recovery and Escalation Framework
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-gray-200 my-3">
                    <table className="min-w-full text-xs sm:text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left font-semibold text-gray-900 border-b border-gray-200">
                            DPD Bucket
                          </th>
                          <th className="px-3 py-2 text-left font-semibold text-gray-900 border-b border-gray-200">
                            Classification
                          </th>
                          <th className="px-3 py-2 text-left font-semibold text-gray-900 border-b border-gray-200">
                            Recovery Approach
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="px-3 py-2 align-top border-b border-gray-100 font-medium">
                            0–5 DPD
                          </td>
                          <td className="px-3 py-2 align-top border-b border-gray-100">
                            Soft Follow-up
                          </td>
                          <td className="px-3 py-2 align-top border-b border-gray-100">
                            Automated SMS, email, and app notifications may be
                            sent. Courtesy calls may be made by the internal team
                            to understand possible technical issues, salary
                            delays, or inadvertent non-payment. Pressure or
                            coercive practices are not permitted.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 align-top border-b border-gray-100 font-medium">
                            6–15 DPD
                          </td>
                          <td className="px-3 py-2 align-top border-b border-gray-100">
                            Escalated Follow-up
                          </td>
                          <td className="px-3 py-2 align-top border-b border-gray-100">
                            Trained collection executives may undertake
                            structured outbound calls, communicate outstanding
                            dues, obtain documented Promise-to-Pay
                            (&quot;PTP&quot;), and explain the consequences of
                            continued non-payment.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 align-top border-b border-gray-100 font-medium">
                            16–30 DPD
                          </td>
                          <td className="px-3 py-2 align-top border-b border-gray-100">
                            Intensive Recovery
                          </td>
                          <td className="px-3 py-2 align-top border-b border-gray-100">
                            Accounts may be assigned to senior collection
                            personnel. Authorized field visits may be undertaken
                            where appropriate, formal demand notices may be
                            issued, and legal options may be evaluated. Any field
                            activity must comply with RBI conduct requirements.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 align-top font-medium">
                            More than 30 DPD
                          </td>
                          <td className="px-3 py-2 align-top">
                            Final Recovery
                          </td>
                          <td className="px-3 py-2 align-top">
                            Legal recovery action may be initiated, accounts may
                            be evaluated for write-off, and cases may be assigned
                            to approved specialized recovery agencies where
                            appropriate.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.4 Telephonic and Digital Recovery
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      All telephonic recovery communication shall be conducted
                      only by appropriately trained and authorized personnel
                      using approved communication scripts.
                    </li>
                    <li>
                      Borrowers shall ordinarily be contacted only between 8:00
                      AM and 7:00 PM.
                    </li>
                    <li>
                      Digital collection communications shall comply with
                      applicable RBI Digital Lending Guidelines and internal
                      policies.
                    </li>
                    <li>
                      Recovery activities shall not involve unauthorized access
                      to a borrower&apos;s contacts, photo gallery, or other
                      personal information.
                    </li>
                    <li>
                      The frequency and manner of communication must remain
                      reasonable and proportionate to the borrower&apos;s DPD
                      status and circumstances.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.5 Field Collection Process
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Field visits shall generally be considered only after
                      reasonable telephonic and digital recovery efforts have
                      been exhausted and ordinarily after 15 DPD.
                    </li>
                    <li>
                      Authorized recovery representatives conducting field visits
                      shall carry:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Valid identification.</li>
                        <li>
                          Appropriate authorization issued by the Company or
                          authorized recovery agency.
                        </li>
                      </ul>
                    </li>
                    <li>
                      All visits shall take place during permitted hours and must
                      be conducted respectfully and professionally.
                    </li>
                    <li>
                      Recovery personnel are strictly prohibited from engaging
                      in:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Public humiliation or shaming.</li>
                        <li>Intimidation or threats.</li>
                        <li>Coercion.</li>
                        <li>
                          Disclosure of borrower information to unauthorized
                          persons.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Additional care and sensitivity shall be exercised when
                      dealing with elderly borrowers, women borrowers, and
                      customers who may be considered vulnerable.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.6 Legal Recovery Actions
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Legal proceedings shall be considered only after reasonable
                      opportunities have been provided to the borrower to
                      regularize or repay the outstanding amount.
                    </li>
                    <li>
                      Depending on the circumstances and applicable law, legal
                      measures may include:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Formal demand notices.</li>
                        <li>Arbitration proceedings.</li>
                        <li>Civil proceedings.</li>
                        <li>Other legally permissible recovery remedies.</li>
                      </ul>
                    </li>
                    <li>
                      Any legal action must receive appropriate approval from
                      the designated authority under the Company&apos;s internal
                      approval matrix.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.7 Settlement, Restructuring, and Compromise
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Settlement, restructuring, or compromise may be considered
                      on an individual basis after reviewing factors such as:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Borrower circumstances.</li>
                        <li>Repayment capacity and intent.</li>
                        <li>Outstanding amount.</li>
                        <li>Recovery prospects.</li>
                        <li>Applicable internal policies.</li>
                      </ul>
                    </li>
                    <li>
                      Any waiver, compromise, or settlement must receive the
                      necessary internal approvals before being offered or
                      finalized.
                    </li>
                    <li>
                      The terms of any approved settlement shall be documented
                      and clearly communicated to the borrower in writing.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.8 Write-Off Policy
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Loan accounts exceeding 30 DPD that are assessed as
                      unlikely to be recovered may be considered for write-off
                      for accounting purposes in accordance with the
                      Company&apos;s policies and applicable regulations.
                    </li>
                    <li>
                      A write-off does not eliminate or discharge the
                      borrower&apos;s underlying repayment obligation.
                    </li>
                    <li>
                      Recovery efforts on written-off accounts may continue
                      through legally permissible means, including through
                      authorized and empanelled recovery agencies.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.9 Management of Recovery Agencies
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Recovery agencies shall be appointed only after
                      appropriate due diligence and execution of agreements that
                      comply with applicable RBI requirements.
                    </li>
                    <li>
                      All appointed recovery agencies must comply with:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>This Policy.</li>
                        <li>Applicable Fair Practices Code requirements.</li>
                        <li>RBI recovery and collection standards.</li>
                        <li>
                          The Company&apos;s Code of Conduct and other
                          applicable policies.
                        </li>
                      </ul>
                    </li>
                    <li>
                      The Company shall retain responsibility and oversight for
                      the conduct of recovery agencies acting on its behalf.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    6.10 Monitoring, MIS, and Governance
                  </h3>
                  <p className="mb-3">
                    Recovery performance shall be monitored through appropriate
                    Management Information Systems (&quot;MIS&quot;) aligned
                    with the Company&apos;s Credit Policy.
                  </p>
                  <p className="mb-2">Monitoring may include:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>Movement across DPD buckets.</li>
                    <li>Repayment bounce trends.</li>
                    <li>Risk-grade-wise delinquency.</li>
                    <li>City-wise delinquency trends.</li>
                    <li>Device-wise delinquency trends.</li>
                  </ul>
                  <p>
                    Any material deviation from the approved recovery strategy
                    shall be escalated to the appropriate senior management
                    authority.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      7
                    </span>
                    Conduct of Recovery Staff and Agents
                  </h2>
                  <p className="mb-3">
                    All recovery personnel and agents shall:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Carry valid identification and authorization.</li>
                    <li>
                      Clearly identify themselves and disclose the name of the
                      Company they represent.
                    </li>
                    <li>
                      Communicate professionally, courteously, and respectfully.
                    </li>
                    <li>
                      Refrain from abusive, threatening, misleading, or
                      intimidating behaviour.
                    </li>
                    <li>Avoid false statements or misrepresentation.</li>
                    <li>
                      Not threaten arrest, imprisonment, or legal proceedings
                      without a valid legal basis.
                    </li>
                    <li>
                      Not contact relatives, friends, employers, colleagues, or
                      other third parties except where expressly permitted under
                      applicable law.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      8
                    </span>
                    Field Visits
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Field recovery visits shall be undertaken only where
                      necessary and proportionate to the circumstances of the
                      account.
                    </li>
                    <li>
                      Borrower privacy, dignity, and social standing must be
                      respected during every interaction.
                    </li>
                    <li>
                      Recovery personnel shall not publicly display, disclose, or
                      communicate information relating to a borrower&apos;s
                      outstanding loan or repayment status.
                    </li>
                    <li>
                      Public humiliation or embarrassment of borrowers is
                      strictly prohibited.
                    </li>
                    <li>
                      Female borrowers shall not be visited by male recovery
                      agents alone.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      9
                    </span>
                    Digital and Telephonic Collection
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      All electronic and telephonic collection activity shall
                      comply with applicable RBI Digital Lending Guidelines and
                      other regulatory requirements.
                    </li>
                    <li>
                      Recovery personnel shall not obtain unauthorized access to
                      a borrower&apos;s contacts, photographs, gallery, private
                      files, or other personal information.
                    </li>
                    <li>
                      Digital recovery communications shall be maintained in a
                      manner that allows appropriate auditability and
                      traceability.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      10
                    </span>
                    Legal Recovery Actions
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Legal recovery shall be pursued only as a measure of last
                      resort after reasonable amicable and operational recovery
                      options have been exhausted.
                    </li>
                    <li>
                      Any legal action shall be consistent with:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>The applicable loan agreement.</li>
                        <li>The Company&apos;s Fair Practices Code.</li>
                        <li>Applicable laws and regulations.</li>
                        <li>Internal approval requirements.</li>
                      </ul>
                    </li>
                    <li>
                      Borrowers shall be provided reasonable notice and an
                      appropriate opportunity to respond or repay before legal
                      proceedings are initiated.
                    </li>
                    <li>
                      Legal recovery actions must be appropriately documented
                      and approved in accordance with the Company&apos;s
                      internal authority matrix.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      11
                    </span>
                    Settlement, Restructuring, and Waiver
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Any settlement, compromise, restructuring, or waiver shall
                      be governed by the Company&apos;s Comprehensive Policy on
                      Settlements &amp; Write-offs.
                    </li>
                    <li>
                      Settlement may be considered in appropriate cases,
                      including:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Accounts exceeding 30 DPD.</li>
                        <li>
                          Non-Performing Assets (&quot;NPAs&quot;).
                        </li>
                        <li>Written-off accounts.</li>
                        <li>Cases involving genuine financial hardship.</li>
                      </ul>
                    </li>
                    <li>
                      No settlement or waiver shall be granted arbitrarily or
                      used merely as a shortcut to complete recovery.
                    </li>
                    <li>
                      Approvals shall follow the applicable Delegation of
                      Authority under the Settlement &amp; Write-off Policy and
                      shall ordinarily be obtained from an authority at least
                      one level higher than the original loan-sanctioning
                      authority.
                    </li>
                    <li>
                      Before accepting a settlement or write-off arrangement,
                      borrowers shall be informed of any applicable impact on
                      their credit bureau records.
                    </li>
                    <li>
                      Approved settlement terms shall be communicated in writing
                      and should clearly specify:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Amount payable.</li>
                        <li>Amount waived, where applicable.</li>
                        <li>Payment timelines.</li>
                        <li>
                          Consequences of failure to comply with the agreed
                          terms.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      11A
                    </span>
                    Write-Off
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Write-offs shall be treated as technical or accounting
                      write-offs only and shall not extinguish the
                      borrower&apos;s repayment liability.
                    </li>
                    <li>
                      Written-off accounts may continue to be pursued for
                      recovery, legal action, or settlement.
                    </li>
                    <li>Re-aging of accounts is strictly prohibited.</li>
                    <li>
                      Accounting treatment, provisioning, and write-off
                      practices shall comply with applicable RBI norms and the
                      Company&apos;s Settlement &amp; Write-off Policy.
                    </li>
                    <li>
                      Restructuring, rescheduling, settlement, waiver, or
                      compromise may be considered on a case-by-case basis,
                      subject to applicable internal approvals.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      12
                    </span>
                    Confidentiality and Data Privacy
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      All information relating to borrowers, including records,
                      call recordings, field visit notes, repayment information,
                      and recovery communications, shall be treated as
                      confidential.
                    </li>
                    <li>
                      Access to borrower information shall be restricted to
                      authorized personnel on a strict need-to-know basis for
                      legitimate recovery, servicing, compliance, and regulatory
                      purposes.
                    </li>
                    <li>
                      The Company shall handle borrower information in
                      accordance with:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Applicable RBI Digital Lending Guidelines.</li>
                        <li>The Information Technology Act, 2000.</li>
                        <li>Applicable data protection and privacy laws.</li>
                        <li>
                          Relevant internal information-security policies.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Recovery agents and third-party agencies are prohibited
                      from improperly copying, storing, using, disclosing, or
                      sharing borrower information in physical or electronic
                      form.
                    </li>
                    <li>
                      Any unauthorized access, misuse, disclosure, or data
                      breach may result in disciplinary action, termination of
                      contractual arrangements, and legal proceedings, wherever
                      applicable.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      13
                    </span>
                    Borrower Communication and Disclosures
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      All recovery-related communications shall be accurate,
                      transparent, respectful, factual, and free from misleading
                      representations.
                    </li>
                    <li>
                      Borrowers shall be informed, where applicable, about:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>The total outstanding amount.</li>
                        <li>
                          Break-up of principal, interest, penal charges, and
                          other dues.
                        </li>
                        <li>Consequences of continued non-payment.</li>
                        <li>
                          Available repayment, restructuring, or settlement
                          options.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Where penal or overdue charges are imposed, the reason and
                      basis for such charges shall be appropriately communicated
                      to the borrower.
                    </li>
                    <li>
                      As far as reasonably practicable, communications should be
                      made in a language that the borrower understands.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      14
                    </span>
                    Grievance Redressal Mechanism
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      The Company shall maintain an appropriate grievance
                      redressal mechanism for complaints connected with recovery
                      and collection practices.
                    </li>
                    <li>
                      Borrowers may submit complaints through channels specified
                      under the Company&apos;s Fair Practices Code, including
                      email, written correspondence, and authorized
                      customer-support channels.
                    </li>
                    <li>
                      Complaints involving allegations of harassment, coercion,
                      intimidation, misrepresentation, or misconduct by employees
                      or recovery agents shall be reviewed and investigated on
                      priority.
                    </li>
                    <li>
                      Grievances shall be addressed within applicable
                      RBI-prescribed timelines.
                    </li>
                    <li>
                      Where a borrower remains dissatisfied with the resolution,
                      information regarding escalation to the applicable RBI
                      Ombudsman or Department of Supervision mechanism shall be
                      provided in accordance with prevailing regulatory
                      requirements.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      15
                    </span>
                    Training, Supervision, and Audit
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      The Company shall conduct periodic training for employees,
                      collection personnel, and recovery agents covering matters
                      including:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>RBI recovery and collection guidelines.</li>
                        <li>Fair Practices Code requirements.</li>
                        <li>Borrower rights.</li>
                        <li>Privacy and confidentiality.</li>
                        <li>Professional and ethical conduct.</li>
                      </ul>
                    </li>
                    <li>
                      Telephonic interactions, digital communications, and field
                      activities may be recorded, monitored, reviewed, or
                      audited to assess service quality, regulatory compliance,
                      and behavioural standards.
                    </li>
                    <li>
                      The Internal Audit and Compliance functions shall
                      periodically review recovery activities, third-party
                      agencies, documentation, operational processes, and
                      adherence to this Policy.
                    </li>
                    <li>
                      Any gaps, exceptions, or non-compliances identified
                      through audits or reviews shall be addressed promptly and
                      escalated to senior management where appropriate.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      16
                    </span>
                    Disciplinary Action and Zero-Tolerance Policy
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      The Company follows a zero-tolerance approach toward
                      harassment, coercion, threats, intimidation, abuse, public
                      humiliation, or any unethical recovery practice.
                    </li>
                    <li>
                      Employees found to have violated this Policy may face
                      appropriate disciplinary measures, including:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Formal warning.</li>
                        <li>Suspension.</li>
                        <li>
                          Recovery-linked disciplinary penalties, where
                          applicable.
                        </li>
                        <li>Termination of employment.</li>
                      </ul>
                    </li>
                    <li>
                      Recovery agencies found to be in violation may be:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Immediately suspended.</li>
                        <li>Terminated.</li>
                        <li>
                          Permanently removed or blacklisted from the
                          Company&apos;s approved agency panel.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Serious misconduct may also be reported to regulatory
                      authorities or law-enforcement agencies wherever required.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      17
                    </span>
                    Review and Amendment
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      This Policy shall be reviewed by the Board of Directors at
                      least once every year or earlier where necessary due to:
                      <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-2">
                        <li>Changes in applicable laws or regulations.</li>
                        <li>New or revised RBI circulars or directions.</li>
                        <li>
                          Changes in the Company&apos;s business model or
                          products.
                        </li>
                        <li>Operational or risk-management requirements.</li>
                      </ul>
                    </li>
                    <li>
                      Any amendment or material revision to this Policy shall
                      require prior approval from the Board of Directors.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      18
                    </span>
                    Board Approval and Effective Date
                  </h2>
                  <p className="mb-3">
                    This Recovery and Collection Policy was approved by the
                    Board of Directors of Weekline Investment and Trading
                    Company Limited at its meeting held on 2nd March 2026.
                  </p>
                  <p>
                    The Policy shall be effective from 2nd March 2026.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      19
                    </span>
                    Contact Us
                  </h2>
                  <p className="mb-4">
                    For any complaint, concern, query, or grievance relating to
                    recovery and collection practices, you may contact:
                  </p>
                  <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                    <p className="text-sm sm:text-base">
                      <strong className="text-gray-800">Email:</strong>{" "}
                      <a
                        href="mailto:grievance@rupyaa.com"
                        className="break-all"
                      >
                        grievance@rupyaa.com
                      </a>
                    </p>
                    <p className="text-sm sm:text-base">
                      <strong className="text-gray-800">
                        Grievance Number:
                      </strong>{" "}
                      <a href="tel:7665466546" className="break-all">
                        7665466546
                      </a>
                    </p>
                    <p className="text-sm sm:text-base break-words">
                      <strong className="text-gray-800">Address:</strong>
                      <br />
                      79, Ground Floor, World Trade Centre,
                      <br />
                      Babar Lane, New Delhi – 110001, India
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      {!isMobileSource && <Footer />}
    </div>
  );
}

export default function RecoveryCollectionPolicyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <AppHeader />
          <main className="overflow-x-hidden animate-pulse">
            <div className={`${appShellContainerClassName} py-5 sm:py-12`}>
              <div className="h-96 bg-gray-200 rounded-xl" />
            </div>
          </main>
          <Footer />
        </div>
      }
    >
      <RecoveryCollectionPolicyContent />
    </Suspense>
  );
}
