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
                <p className="mb-4">
                  Welcome to Rupyaa. These Terms and Conditions (“Terms”) govern your access to
                  and use of the Rupyaa mobile application, website, and related services
                  (collectively referred to as the “Platform” or “Services”).
                </p>
                <p className="mb-4">
                  By accessing or using the Platform, you agree to comply with and be bound by
                  these Terms. If you do not agree with any part of these Terms, please refrain
                  from using the Services.
                </p>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    Definitions
                  </h2>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      <strong className="text-gray-800">“Rupyaa” / “Company”</strong> refers to Rupyaa, a technology platform that facilitates access to loan-related services.
                    </li>
                    <li>
                      <strong className="text-gray-800">“User” / “You”</strong> refers to any individual who accesses or uses the Platform.
                    </li>
                    <li>
                      <strong className="text-gray-800">“Lending Partner”</strong> refers to RBI-registered NBFCs or banks that provide loans.
                    </li>
                    <li>
                      <strong className="text-gray-800">“Loan”</strong> refers to any credit facility provided by Lending Partners through the Platform.
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
                    To use Rupyaa Services, you must:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Be at least 18 years of age.
                    </li>
                    <li>
                      Be a resident of India.
                    </li>
                    <li>
                      Possess valid KYC documents, such as Aadhaar and PAN.
                    </li>
                    <li>
                      Maintain an active bank account in your own name.
                    </li>
                    <li>
                      Be legally capable of entering into a binding contract under applicable laws.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Rupyaa reserves the right to deny or restrict access to the Services if the
                    applicable eligibility criteria are not satisfied.
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
                      Rupyaa operates as a technology platform that connects Users with Lending
                      Partners.
                    </li>
                    <li>
                      Rupyaa does not act as a lender and does not directly provide loans.
                    </li>
                    <li>
                      All decisions relating to loan approval, terms, disbursement, repayment, and
                      collection are determined solely by the respective Lending Partner.
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
                    Loan approval is subject to the internal credit policies, eligibility
                    requirements, and assessment criteria of the applicable Lending Partner.
                  </p>
                  <p className="mb-4">
                    Rupyaa does not guarantee approval of any loan application.
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    4.2 Interest &amp; Charges
                  </h3>
                  <p className="mb-4">
                    All interest rates, processing fees, penalties, and other applicable charges are
                    determined by the respective Lending Partner.
                  </p>
                  <p className="mb-4">
                    These charges and applicable loan terms will be disclosed in the Key Fact
                    Statement (KFS) before you accept the loan.
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    4.3 Disbursement
                  </h3>
                  <p className="mb-4">
                    Approved loan amounts are generally disbursed within 2–24 hours, subject to
                    successful completion of KYC verification, documentation, and execution of the
                    applicable loan agreement.
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    4.4 Repayment
                  </h3>
                  <p className="mb-4">
                    You agree to repay the Loan in accordance with the agreed EMI or repayment
                    schedule.
                  </p>
                  <p className="mb-4">
                    Any delay or failure in repayment may result in applicable penalties, late
                    payment charges, and adverse reporting to credit information companies.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      5
                    </span>
                    Cooling-Off Period
                  </h2>
                  <p className="mb-4">
                    In accordance with applicable regulatory guidelines, you may be allowed to exit
                    the Loan during the cooling-off period specified in the Key Fact Statement.
                  </p>
                  <p className="mb-4">
                    During this period, you may repay the outstanding principal amount together with
                    applicable proportionate charges, without any additional penalty, subject to the
                    terms stated in the KFS.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      6
                    </span>
                    Prepayment and Foreclosure
                  </h2>
                  <p className="mb-4">
                    You may prepay or foreclose your Loan in accordance with the terms and
                    conditions specified by the applicable Lending Partner.
                  </p>
                  <p className="mb-4">
                    Any prepayment or foreclosure charges, where applicable, will be governed by the
                    Lending Partner’s policies and disclosed terms.
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
                    You acknowledge and provide your explicit consent that information relating to
                    your Loan, repayment history, outstanding amounts, and defaults may be reported
                    to authorized Credit Information Companies.
                  </p>
                  <p className="mb-4">
                    These may include, among others:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      TransUnion CIBIL.
                    </li>
                    <li>
                      Experian.
                    </li>
                    <li>
                      Equifax.
                    </li>
                    <li>
                      CRIF High Mark.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Such reporting will be carried out in accordance with applicable laws and
                    regulatory requirements.
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
                    You agree to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Provide complete and accurate information.
                    </li>
                    <li>
                      Maintain the confidentiality of your login credentials and account information.
                    </li>
                    <li>
                      Use the Platform only for lawful purposes.
                    </li>
                    <li>
                      Not engage in fraud, misrepresentation, impersonation, or identity theft.
                    </li>
                    <li>
                      Not attempt to hack, reverse-engineer, interfere with, or disrupt the Platform.
                    </li>
                    <li>
                      Comply with all applicable laws, regulations, and RBI guidelines.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      9
                    </span>
                    Data Privacy and Consent
                  </h2>
                  <p className="mb-4">
                    By using the Platform, you consent to the collection, storage, processing, and
                    use of your personal and financial information, including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      KYC details.
                    </li>
                    <li>
                      Bank account information.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Such information may be shared with:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Lending Partners.
                    </li>
                    <li>
                      Credit bureaus.
                    </li>
                    <li>
                      Authorized service providers.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Any such collection, processing, or sharing will be carried out in accordance
                    with applicable laws, including the Digital Personal Data Protection Act, 2023.
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
                    The Platform may request access to certain device features or information,
                    including location, SMS, or contacts, strictly for purposes such as:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Credit assessment.
                    </li>
                    <li>
                      Fraud detection and prevention.
                    </li>
                    <li>
                      Regulatory compliance.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Any such access will be subject to your explicit consent and applicable legal
                    requirements.
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
                    You authorize Rupyaa and its partners to contact you through communication
                    channels including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Calls.
                    </li>
                    <li>
                      SMS.
                    </li>
                    <li>
                      Email.
                    </li>
                    <li>
                      WhatsApp.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Such communications may relate to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Loan application processing.
                    </li>
                    <li>
                      Repayment reminders.
                    </li>
                    <li>
                      Account notifications.
                    </li>
                    <li>
                      Service-related updates.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      12
                    </span>
                    Default and Recovery
                  </h2>
                  <p className="mb-4">
                    In the event of a default:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Applicable late payment charges may become payable.
                    </li>
                    <li>
                      The Lending Partner may initiate recovery actions in accordance with applicable
                      laws and RBI guidelines.
                    </li>
                    <li>
                      Recovery practices must not involve harassment, coercion, intimidation, or any
                      other unlawful method.
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
                      Processing fees, service charges, and other applicable charges are generally
                      non-refundable unless specifically stated otherwise.
                    </li>
                    <li>
                      Loan cancellation terms will be governed by the policies of the applicable
                      Lending Partner.
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
                  <p className="mb-4">
                    All content, trademarks, logos, software, graphics, and other materials made
                    available through the Platform are owned by Rupyaa or its respective licensors.
                  </p>
                  <p className="mb-4">
                    Unauthorized use, copying, reproduction, distribution, or modification of such
                    content is strictly prohibited.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      15
                    </span>
                    Third-Party Disclaimer
                  </h2>
                  <p className="mb-4">
                    Rupyaa is not responsible for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Independent decisions made by Lending Partners.
                    </li>
                    <li>
                      Services provided directly by third-party vendors.
                    </li>
                    <li>
                      Payment gateway failures, delays, or service interruptions caused by external
                      providers.
                    </li>
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
                    To the fullest extent permitted under applicable law, Rupyaa shall not be liable
                    for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Indirect, incidental, or consequential damages.
                    </li>
                    <li>
                      Loss of data, profits, business opportunities, or reputation.
                    </li>
                    <li>
                      Service interruptions, technical failures, system errors, or temporary
                      unavailability.
                    </li>
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
                    Rupyaa reserves the right to suspend, restrict, or terminate your access to the
                    Platform without prior notice where necessary, including in cases involving:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Fraud or misrepresentation.
                    </li>
                    <li>
                      Violation of these Terms.
                    </li>
                    <li>
                      Legal or regulatory requirements.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      18
                    </span>
                    Force Majeure
                  </h2>
                  <p className="mb-4">
                    Rupyaa shall not be responsible for any failure, interruption, or delay in
                    providing the Services due to events beyond its reasonable control.
                  </p>
                  <p className="mb-4">
                    Such events may include:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Natural disasters.
                    </li>
                    <li>
                      Technical or infrastructure failures.
                    </li>
                    <li>
                      Internet or telecommunications disruptions.
                    </li>
                    <li>
                      Government or regulatory actions.
                    </li>
                    <li>
                      Other circumstances beyond Rupyaa’s reasonable control.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      19
                    </span>
                    Dispute Resolution
                  </h2>
                  <p className="mb-4">
                    These Terms shall be governed by and interpreted in accordance with the laws of
                    India.
                  </p>
                  <p className="mb-4">
                    The courts located in Jaipur, Rajasthan shall have exclusive jurisdiction over
                    disputes arising from or relating to these Terms or use of the Platform.
                  </p>
                  <p className="mb-4">
                    Loan-related grievances may also be escalated to the applicable Lending Partner
                    or, where eligible, through the RBI Ombudsman mechanism.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      20
                    </span>
                    Grievance Redressal
                  </h2>
                  <p className="mb-4">
                    For complaints, grievances, or concerns, please contact:
                  </p>
                  <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                    <p className="mb-4">
                      <strong className="text-gray-800">Email:</strong>{" "}<a href="mailto:grievance@rupyaa.com" className="break-all">grievance@rupyaa.com</a>
                    </p>
                    <p className="mb-4">
                      Support: Available through the Rupyaa App and Website.
                    </p>
                    <p className="mb-4">
                      All grievances will be addressed within 30 days, subject to applicable legal and
                      regulatory requirements.
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
                  <p className="mb-4">
                    Rupyaa reserves the right to revise, update, or modify these Terms from time to
                    time.
                  </p>
                  <p className="mb-4">
                    Any updated Terms will be published on the Platform.
                  </p>
                  <p className="mb-4">
                    Your continued use of the Platform after the revised Terms become effective will
                    constitute your acceptance of the updated Terms.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      22
                    </span>
                    Acknowledgement
                  </h2>
                  <p className="mb-4">
                    By accessing or using the Platform, you confirm that you have read, understood,
                    and agreed to these Terms and Conditions.
                  </p>
                  <p className="mb-4">
                    You also acknowledge that you will review and accept the applicable Key Fact
                    Statement provided before accepting any Loan.
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
