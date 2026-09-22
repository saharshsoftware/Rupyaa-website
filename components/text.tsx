"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/home/Footer";
import { appShellContainerClassName } from "@/lib/app-shell-layout";

function FileIcon() {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function TermsContent() {
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
                  <FileIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    TERMS AND CONDITIONS
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                    Effective Date: February 25, 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-10 py-5 sm:py-10">
              <div className="prose prose-gray max-w-none text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-loose space-y-5 sm:space-y-6 hyphens-auto break-words">
                <p>
                  Welcome to Rupyaa. These Terms and Conditions
                  (&quot;Terms&quot;) govern your access to and use of the
                  Rupyaa mobile application, website, and all related products
                  and services made available through them (collectively
                  referred to as the &quot;Platform&quot; or &quot;Services&quot;).
                </p>
                <p>Rupyaa is operated by Uptime Innovation Private Limited.</p>
                <p>
                  By accessing, registering on, or using the Platform, you
                  confirm that you have read, understood, and agreed to be bound
                  by these Terms. If you do not agree with any provision
                  contained in these Terms, you should not access or use the
                  Services.
                </p>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    Definitions
                  </h2>
                  <p className="mb-4">For the purposes of these Terms:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      <strong className="text-gray-800">
                        “Rupyaa” / “Company”
                      </strong>{" "}
                      refers to Rupyaa, a technology platform operated by Uptime
                      Innovation Private Limited that enables Users to access
                      loan-related services.
                    </li>
                    <li>
                      <strong className="text-gray-800">
                        “User” / “You” / “Your”
                      </strong>{" "}
                      refers to any individual who visits, registers on,
                      accesses, or uses the Platform.
                    </li>
                    <li>
                      <strong className="text-gray-800">
                        “Lending Partner”
                      </strong>{" "}
                      refers to an RBI-registered Non-Banking Financial Company
                      (NBFC) or bank that offers credit or loan facilities
                      through the Platform.
                    </li>
                    <li>
                      <strong className="text-gray-800">“Loan”</strong> refers
                      to any credit facility approved, sanctioned, or provided
                      to a User by a Lending Partner through the Platform.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    Eligibility
                  </h2>
                  <p className="mb-4">
                    To access or use Rupyaa Services, you must:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Be at least 18 years of age.</li>
                    <li>Be a resident of India.</li>
                    <li>
                      Possess valid KYC documentation, including documents such
                      as Aadhaar and PAN.
                    </li>
                    <li>Maintain an active bank account in your own name.</li>
                    <li>
                      Be legally capable of entering into a valid and binding
                      contract under applicable Indian law.
                    </li>
                  </ul>
                  <p className="mb-0">
                    Rupyaa may restrict, suspend, or refuse access to the
                    Services where the applicable eligibility criteria are not
                    fulfilled.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      3
                    </span>
                    Nature of Services
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Rupyaa operates as a technology platform that facilitates
                      interaction between Users and Lending Partners.
                    </li>
                    <li>
                      Rupyaa is not itself a lender and does not directly
                      approve, sanction, or disburse loans.
                    </li>
                    <li>
                      All decisions concerning loan eligibility, approval,
                      applicable terms, disbursement, repayment, servicing, and
                      collection are independently made by the relevant Lending
                      Partner in accordance with its internal policies and
                      applicable laws.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      4
                    </span>
                    Loan Terms
                  </h2>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    4.1 Loan Approval
                  </h3>
                  <p className="mb-4">
                    Any loan approval is subject to the underwriting standards,
                    eligibility conditions, credit policies, and internal
                    assessment processes of the applicable Lending Partner.
                    Access to or use of Rupyaa does not guarantee approval of
                    any loan application.
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    4.2 Interest &amp; Charges
                  </h3>
                  <p className="mb-4">
                    Interest rates, processing fees, penalties, and any other
                    fees or charges applicable to a loan are determined by the
                    relevant Lending Partner. The applicable loan terms, rates,
                    fees, and charges will be disclosed to you through the Key
                    Fact Statement (KFS) before you accept the loan.
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    4.3 Disbursement
                  </h3>
                  <p className="mb-4">
                    Once KYC verification, documentation, and execution of the
                    relevant loan agreement are successfully completed,
                    approved loan amounts are generally disbursed within 2 to
                    24 hours, subject to the Lending Partner’s internal
                    procedures and requirements.
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    4.4 Repayment
                  </h3>
                  <p className="mb-0">
                    You are responsible for repaying the Loan in accordance
                    with the repayment schedule or EMI terms agreed with the
                    Lending Partner. Any delay or failure in repayment may
                    result in applicable late fees, penalties, lawful recovery
                    measures, and adverse reporting to credit information
                    companies.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      5
                    </span>
                    Cooling-Off Period
                  </h2>
                  <p className="mb-0">
                    Subject to applicable regulatory requirements, you may be
                    provided with an option to exit the Loan within the
                    cooling-off period specified in the applicable Key Fact
                    Statement. During this period, you may repay the outstanding
                    principal amount together with proportionate charges, where
                    applicable, without any additional penalty, subject to the
                    terms mentioned in the KFS.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      6
                    </span>
                    Prepayment and Foreclosure
                  </h2>
                  <p className="mb-0">
                    You may be allowed to make a partial prepayment or fully
                    foreclose your Loan in accordance with the terms specified
                    by the relevant Lending Partner. Any charges applicable to
                    prepayment or foreclosure will be governed by the Lending
                    Partner’s policies and the terms disclosed to you.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      7
                    </span>
                    Credit Bureau Reporting
                  </h2>
                  <p className="mb-4">
                    You acknowledge and expressly consent that information
                    concerning your Loan, repayment behaviour, outstanding
                    dues, defaults, and other credit-related information may be
                    reported to authorized Credit Information Companies.
                  </p>
                  <p className="mb-3">These may include, among others:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>TransUnion CIBIL</li>
                    <li>Experian</li>
                    <li>Equifax</li>
                    <li>CRIF High Mark</li>
                  </ul>
                  <p className="mb-0">
                    Such reporting will be carried out in accordance with
                    applicable laws and regulatory requirements.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      8
                    </span>
                    User Obligations
                  </h2>
                  <p className="mb-4">
                    While accessing or using Rupyaa, you agree to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Provide information that is complete, correct, accurate,
                      and current.
                    </li>
                    <li>
                      Maintain the confidentiality of your login credentials
                      and account information.
                    </li>
                    <li>
                      Use the Platform only for lawful and legitimate purposes.
                    </li>
                    <li>
                      Refrain from fraud, impersonation, identity theft,
                      misrepresentation, or other unlawful activity.
                    </li>
                    <li>
                      Not attempt to hack, reverse-engineer, disrupt, damage,
                      interfere with, or obtain unauthorized access to the
                      Platform or its systems.
                    </li>
                    <li>
                      Comply with applicable laws, regulations, and relevant RBI
                      guidelines.
                    </li>
                  </ul>
                  <p className="mb-0">
                    You remain responsible for the correctness, authenticity,
                    and validity of all information and documents submitted
                    through the Platform.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      9
                    </span>
                    Data Privacy and Consent
                  </h2>
                  <p className="mb-4">
                    By using the Platform and providing the required consent,
                    you authorize the collection, storage, processing, and use
                    of personal and financial information that is necessary to
                    provide the Services. Such information may include:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>KYC-related information.</li>
                    <li>Bank account information.</li>
                    <li>Financial and loan-related details.</li>
                  </ul>
                  <p className="mb-4">
                    Where required and permitted under applicable law, such
                    information may be shared with:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Lending Partners.</li>
                    <li>Credit information companies.</li>
                    <li>Authorized service providers.</li>
                    <li>
                      Other entities required for delivering the Services or
                      fulfilling legal and regulatory obligations.
                    </li>
                  </ul>
                  <p className="mb-0">
                    Personal information will be processed in accordance with
                    applicable law, including the Digital Personal Data
                    Protection Act, 2023, and the Rupyaa Privacy Policy.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      10
                    </span>
                    Device Permissions
                  </h2>
                  <p className="mb-4">
                    The Platform may request access to certain device
                    permissions, features, or information where such access is
                    reasonably required for purposes including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Credit assessment.</li>
                    <li>Fraud detection and prevention.</li>
                    <li>Identity and customer verification.</li>
                    <li>Regulatory and compliance requirements.</li>
                    <li>Delivery, operation, and security of the Services.</li>
                  </ul>
                  <p className="mb-0">
                    Where applicable, such permissions may include access to
                    location information or other permitted device-related
                    information. Any permission or access will be requested
                    with your consent and handled in accordance with applicable
                    laws and our Privacy Policy.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      11
                    </span>
                    Communication Consent
                  </h2>
                  <p className="mb-4">
                    By providing your contact details and the necessary
                    consent, you authorize Rupyaa, its Lending Partners, and
                    authorized service providers to communicate with you
                    through channels including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Telephone calls.</li>
                    <li>SMS.</li>
                    <li>Email.</li>
                    <li>WhatsApp.</li>
                  </ul>
                  <p className="mb-3">These communications may relate to:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Processing of your loan application.</li>
                    <li>KYC or identity verification.</li>
                    <li>Loan servicing.</li>
                    <li>Repayment reminders.</li>
                    <li>Account or service-related notifications.</li>
                    <li>
                      Other relevant information concerning the Services.
                    </li>
                  </ul>
                  <p className="mb-0">
                    All communications will be made in accordance with
                    applicable laws and consent requirements.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      12
                    </span>
                    Default and Recovery
                  </h2>
                  <p className="mb-4">
                    If you fail to make repayments in accordance with the
                    agreed schedule:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Applicable late fees, penalties, or other charges may
                      become payable.
                    </li>
                    <li>
                      The Lending Partner may initiate lawful recovery or
                      collection procedures.
                    </li>
                    <li>
                      Missed or delayed payments may be reported to relevant
                      credit information companies.
                    </li>
                    <li>
                      Any recovery or collection activity must be carried out
                      in accordance with applicable laws and RBI guidelines and
                      shall not involve harassment, coercion, or unlawful
                      methods.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      13
                    </span>
                    Refund and Cancellation
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Processing fees and charges are generally non-refundable
                      unless stated otherwise.
                    </li>
                    <li>
                      Loan cancellation terms shall be governed by the Lending
                      Partner’s policies.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      14
                    </span>
                    Intellectual Property
                  </h2>
                  <p className="mb-0">
                    All content, trademarks, logos, and software on the Platform
                    are the property of Rupyaa or its licensors. Unauthorized
                    use, reproduction, or distribution is strictly prohibited.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      15
                    </span>
                    Third-Party Disclaimer
                  </h2>
                  <p className="mb-4">Rupyaa is not responsible for:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Decisions made by Lending Partners.</li>
                    <li>Services provided by third-party vendors.</li>
                    <li>Payment gateway failures or delays.</li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      16
                    </span>
                    Limitation of Liability
                  </h2>
                  <p className="mb-4">
                    To the fullest extent permitted by law, Rupyaa shall not be
                    liable for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Indirect or consequential damages.</li>
                    <li>Loss of data, profits, or reputation.</li>
                    <li>Service interruptions or technical errors.</li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      17
                    </span>
                    Suspension and Termination
                  </h2>
                  <p className="mb-4">
                    Rupyaa reserves the right to suspend or terminate your
                    account without notice in case of:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Fraud or misrepresentation.</li>
                    <li>Violation of these Terms.</li>
                    <li>Legal or regulatory requirements.</li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      18
                    </span>
                    Force Majeure
                  </h2>
                  <p className="mb-0">
                    Rupyaa shall not be liable for failure or delay caused by
                    events beyond its control, including natural disasters,
                    technical failures, or government actions.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      19
                    </span>
                    Dispute Resolution
                  </h2>
                  <p className="mb-4">
                    These Terms shall be governed by the laws of India.
                  </p>
                  <p className="mb-4">
                    Courts located in Jaipur, Rajasthan shall have exclusive
                    jurisdiction.
                  </p>
                  <p className="mb-0">
                    Loan-related grievances may be escalated to the respective
                    Lending Partner or the RBI Ombudsman.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      20
                    </span>
                    Grievance Redressal
                  </h2>
                  <p className="mb-4">For complaints or concerns:</p>
                  <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                    <p className="text-sm sm:text-base">
                      <strong className="text-gray-800">Email:</strong>{" "}
                      <a
                        href="mailto:grievance@rupyaa.in"
                        className="break-all"
                      >
                        grievance@rupyaa.in
                      </a>
                    </p>
                    <p className="text-sm sm:text-base">
                      <strong className="text-gray-800">Support:</strong>{" "}
                      Available via app/website
                    </p>
                    <p className="text-sm sm:text-base">
                      All grievances will be addressed within 30 days.
                    </p>
                  </div>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      21
                    </span>
                    Changes to Terms
                  </h2>
                  <p className="mb-0">
                    Rupyaa reserves the right to modify these Terms at any
                    time. Updated Terms will be posted on the Platform.
                    Continued use constitutes acceptance of the revised Terms.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      22
                    </span>
                    Acknowledgement
                  </h2>
                  <p className="mb-0">
                    By using the Platform, you confirm that you have read,
                    understood, and agreed to these Terms, including the Key
                    Fact Statement provided before loan acceptance.
                  </p>
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

export default function TermsPage() {
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
      <TermsContent />
    </Suspense>
  );
}
