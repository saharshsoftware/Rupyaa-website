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

function PrivacyPolicyContent() {
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
                  Rupyaa Personal Loan Privacy Policy
                  </h1>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-10 py-5 sm:py-10">
              <div className="prose prose-gray max-w-none text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-loose space-y-5 sm:space-y-6 hyphens-auto break-words">
                  <p className="mb-3">
                    Rupyaa Personal Loan (“Rupyaa”, “We”, “Us”, or “Our”) is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, process, disclose, and protect your information when you use our mobile application (the “App”), website (the “Site”), and related services for personal loans and financial products (collectively referred to as the “Services”).
                  </p>
                  <p className="mb-3">
                    By accessing or using the App, Site, or Services, you acknowledge and consent to the practices described in this Privacy Policy.
                  </p>
                  <p className="mb-3">
                    Rupyaa is operated by Uptime Innovation Private Limited, and all services offered under the Rupyaa brand are provided by Uptime Innovation Private Limited or through its authorized service partners, wherever applicable.
                  </p>
                  <p className="mb-3">
                    This Privacy Policy is intended to comply with applicable laws and regulatory requirements, including the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, the Digital Personal Data Protection Rules, 2025, and applicable guidelines issued by the Reserve Bank of India relating to digital lending.
                  </p>
                  <p className="mb-3">
                    Rupyaa is a digital lending platform that facilitates personal loan services in partnership with an RBI-registered Non-Banking Financial Company (NBFC), WEEKLINE INVESTMENT AND TRADING COMPANY LTD.
                  </p>
                  <p className="mb-3">
                    All decisions relating to loan approval, sanction, disbursement, and credit assessment are made by our registered lending partners in accordance with applicable laws and regulatory guidelines issued by the Reserve Bank of India.
                  </p>
                  <p className="mb-3">
                    Rupyaa acts as a technology and service platform that supports the loan application process, customer onboarding, documentation, and other related services. All lending activities are conducted in accordance with applicable regulations, including requirements under the Digital Personal Data Protection Act, 2023 and other relevant Indian laws.
                  </p>
                <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                  <p className="font-semibold text-gray-900">
                    NBFC Information
                  </p>
                  <p className="font-semibold text-gray-900">
                    <a href="https://www.weekline.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      WEEKLINE INVESTMENT AND TRADING COMPANY LTD.
                    </a>
                  </p>
                  <p className="mb-3">
                    <b>RBI Registration No.:</b> 14.01001
                  </p>
                  <p className="mb-3">
                    <b>Address:</b> 79, Ground Floor, World Trade Centre, Babar Lane, New Delhi
                    – 110001, India
                  </p>
                </div>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    Information We Collect
                  </h2>
                  <p className="mb-3">
                    We collect information that is required to provide, improve, secure, and personalize our Services. The categories of information we may collect include the following:
                  </p>
                  <p className="mb-3 mt-3 sm:mt-4">
                    <b>a. Information You Provide</b>
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      <b className="text-gray-900">Registration and Account Information:</b>{' '}
                      This may include your name, email address, phone number, date of
                      birth, residential address, and government-issued identification
                      details such as Aadhaar and PAN for verification purposes.
                    </li>
                    <li>
                      <b className="text-gray-900">Financial Information:</b>{' '}
                      This may include bank account details, income information,
                      employment information, loan application data, credit history, and
                      transaction records.
                    </li>
                    <li>
                      <b className="text-gray-900">Contact Information:</b>{' '}
                      This includes information you choose to provide through email,
                      chat, customer support forms, or other communication channels.
                    </li>
                    <li>
                      <b className="text-gray-900">Other Submitted Data:</b>{' '}
                      This may include your responses to surveys, feedback, promotional
                      activities, or other information voluntarily submitted by you.
                    </li>
                  </ul>
                  <p className="mb-3">
                    <b>b. Information Collected Automatically</b>
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      <b className="text-gray-900">Device and Usage Data:</b>{' '}
                      We may collect information such as your IP address, device type,
                      operating system, browser type, mobile carrier, application
                      version, and usage logs, including pages visited and time spent
                      using our Services.
                    </li>
                    <li>
                      <b className="text-gray-900">Location Data:</b>{' '}
                      With your consent, we may collect approximate location information
                      through GPS, Wi-Fi, or IP address for purposes such as assessing
                      loan eligibility, determining serviceability, verification, and
                      fraud prevention.
                    </li>
                    <li>
                      <b className="text-gray-900">App Permissions:</b>{' '}
                      Our application is designed to respect your privacy and does not
                      access contacts, personal SMS history, or installed application
                      information except where such access is specifically disclosed,
                      permitted, and consented to as described under Section 12 of this
                      Privacy Policy.
                    </li>
                  </ul>

                  <p className="mb-3">
                  We rely only on limited, user-consented information obtained through authorized sources to support credit assessment, verification, fraud prevention, and improvement of the customer experience.
                  </p>
                  <p className="mb-3">
                    Where any such access is applicable, it is restricted to the purposes described under Section 12 of this Privacy Policy and handled in accordance with applicable laws, including the Digital Personal Data Protection Act, 2023.
                  </p>
                  <p className="mb-3"><b>c. Information from Third Parties</b></p>
                  <p className="mb-3">
                    We may receive information from authorized third-party sources, including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Credit scores and credit reports obtained from credit bureaus such as CIBIL and Experian.
                  </li>
                    <li>
                    Information received from partners such as mobile network providers, payment gateways, lending partners, verification providers, and other authorized service providers.
                  </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    Lawful Basis of Processing
                  </h2>
                  <p className="mb-3">
                  We process your personal information on one or more of the following lawful grounds:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Your explicit consent.
                    </li>
                    <li>
                    Contractual necessity.
                    </li>
                    <li>
                    Compliance with legal obligations.

                    </li>
                    <li>
                    Legitimate business interests, where permitted under applicable law.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      3
                    </span>
                    How We Use Your Information
                  </h2>
                  <p className="mb-3">
                  We use the information collected from you for legitimate business, operational, regulatory, and service-related purposes, including the following:
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    a. Providing and Managing Services
                  </h3>
                  <p className="mb-3">
                    We may use your information for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Processing loan applications.
                    </li>
                    <li>
                      Verifying your identity.
                    </li>
                    <li>
                      Assessing your creditworthiness.
                    </li>
                    <li>
                      Facilitating disbursement of funds through the applicable Lending Partner.
                    </li>
                    <li>
                      Managing repayments.
                    </li>
                    <li>
                      Sending repayment reminders.
                    </li>
                    <li>
                      Supporting collection-related activities.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    b. Compliance and Risk Management
                  </h3>
                  <p className="mb-3">
                    Your information may be processed for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Complying with legal and regulatory requirements, including KYC, AML, and RBI requirements.
                    </li>
                    <li>
                      Detecting and preventing fraud, money laundering, suspicious activities, misuse, or security risks.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    c. Improving and Personalizing Services
                  </h3>
                  <p className="mb-3">
                    We may use information for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Analysing usage patterns to improve the App and our Services.
                    </li>
                    <li>
                      Providing personalized loan offers, promotions, or educational content, subject to applicable consent requirements and opt-out options.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    d. Communication
                  </h3>
                  <p className="mb-3">
                    We may use your information for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Notifying you about account updates, policy changes, or service-related matters.
                    </li>
                    <li>
                      Responding to inquiries, complaints, or customer support requests.
                    </li>
                  </ul>
                  <p className="mb-3">
                    We process information based on your consent, contractual requirements, legal obligations, or legitimate interests, as applicable.
                  </p>
                  <p className="mb-3">
                    Aggregated or anonymized information may also be used for research, analytics, or statistical purposes, provided such information does not identify an individual.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      4
                    </span>
                    Sharing Your Information
                  </h2>
                  <p className="mb-3">
                    We do not sell your personal information.
                  </p>
                  <p className="mb-3">
                    We may share your information only where necessary for providing the Services, complying with
                    applicable requirements, or supporting legitimate operational purposes.
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    a. With Service Providers
                  </h3>
                  <p className="mb-3">
                    We may share information with third-party service providers that assist us with:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Payment processing.
                    </li>
                    <li>
                      Credit checks.
                    </li>
                    <li>
                    Data storage.
                    </li>
                    <li>
                    Analytics.
                    </li>
                    <li>
                    Cloud infrastructure.
                    </li>
                    <li>
                    Verification.
                    </li>
                    <li>
                    Technology services.
                    </li>
                  </ul>
                  <p className="mb-3">
                    Such service providers are expected to handle information subject to appropriate confidentiality
                    and data protection requirements.
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    b. With Affiliates and Partners
                  </h3>
                  <p className="mb-3">
                    Information may be shared:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Within the <strong>Rupyaa group</strong> for legitimate operational purposes.
                    </li>
                    <li>
                      With Lending Partners or financial institutions involved in facilitating loan-related services.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    c. For Legal Reasons
                  </h3>
                  <p className="mb-3">
                    We may disclose information where required:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      To comply with applicable laws, court orders, regulatory requirements, or lawful
                      requests, including reporting requirements involving the RBI or credit bureaus.
                    </li>
                    <li>
                      To protect our rights, property, users, employees, partners, or others in situations
                      involving fraud, disputes, unlawful activity, or security concerns.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    d. Business Transfers
                  </h3>
                  <p className="mb-3">
                    In the event of a merger, acquisition, restructuring, or sale of assets, relevant personal
                    information may be transferred as part of the applicable business transaction.
                  </p>
                  <p className="mb-3">
                    All sharing of personal information is governed by appropriate contractual safeguards intended
                    to ensure suitable data protection standards.
                  </p>
                  <p className="mb-3">
                    We do not share personally identifiable information for third-party marketing purposes without
                    your consent.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      5
                    </span>
                    Automated Decision-Making
                  </h2>
                  <p className="mb-3">
                    We may use automated systems, technologies, and algorithms to assist with:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Assessing creditworthiness.
                    </li>
                    <li>
                      Determining loan eligibility.
                    </li>
                    <li>
                      Determining applicable loan limits.
                    </li>
                  </ul>
                  <p className="mb-3">
                    Where applicable, you may have the right to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Request human review of an automated decision.
                    </li>
                    <li>
                      Seek clarification regarding the outcome of such a decision.
                    </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      6
                    </span>
                    Data Security
                  </h2>
                  <p className="mb-3">
                    We prioritize the security of your personal information and implement reasonable administrative,
                    technical, and physical safeguards designed to protect your data.
                  </p>
                  <p className="mb-3">
                    These measures may include:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Encryption of data during transmission using SSL/TLS and encryption of stored
                      information.
                    </li>
                    <li>
                      Access controls, firewalls, and regular security audits.
                    </li>
                    <li>
                      Compliance with ISO 2700, ISO 17802 standards and applicable RBI
                      guidelines.
                    </li>
                  </ul>
                  <p className="mt-4">
                  However, no electronic system or method of data transmission can be guaranteed to be completely secure.
                  </p>
                  <p className="mt-3">
                  You are responsible for maintaining the confidentiality of your account credentials and authentication information.
                  </p>
                  <p className="mt-3">
                  We retain personal information only for as long as it is necessary for the purpose for which it was collected or as required under applicable legal and regulatory requirements.
 </p>
 <p className="mt-3">
 For example, certain loan-related records may need to be retained for up to 7 years in accordance with applicable RBI requirements.
 </p>
 <p className="mt-3">After the applicable retention period, information may be securely deleted or anonymized.</p>
 <p className="mt-3">Personal information may be processed or stored within India or in other secure jurisdictions permitted under applicable Indian laws. </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      7
                    </span>
                    Your Rights and Choices
                  </h2>
                  <p className="mb-3">
                    You may have certain rights regarding your personal information.
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    Access and Correction
                  </h3>
                  <p className="mb-3">
                    You may request access to your personal information or ask us to correct inaccurate or incomplete information.
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    Deletion
                  </h3>
                  <p className="mb-3">
                    You may request deletion of your information, subject to applicable legal, regulatory, contractual, and retention requirements.
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    Opt-Out and Withdrawal of Consent
                  </h3>
                  <p className="mb-3">
                    You may unsubscribe from eligible marketing communications or withdraw applicable consent, including permissions such as location access, through the App or your device settings.
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    Portability
                  </h3>
                  <p className="mb-3">
                    Where applicable, you may request to receive your information in a structured format.
                  </p>
                  <h3 className="font-semibold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3 text-sm sm:text-base">
                    Complaints
                  </h3>
                  <p className="mb-3">
                    You may raise concerns or complaints with us or with the applicable data protection authority in accordance with relevant laws, including the Digital Personal Data Protection Act, 2023.
                  </p>
                  <p className="mb-3">
                    To exercise your applicable rights, please contact us at:
                  </p>
                  <p className="mb-3">
                    <strong><a href="mailto:care@rupyaa.com">care@rupyaa.com</a></strong>
                  </p>
                  <p className="mb-3">
                    We aim to respond to valid requests within <strong>30 days</strong>, subject to applicable requirements.
                  </p>
                  <p className="mb-3">
                    For information regarding cookies, please refer to <strong>Section 8</strong>.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      8
                    </span>
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="mb-3">
                    We may use cookies, pixels, device identifiers, and similar technologies to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>Improve functionality, including remembering user preferences.</li>
                    <li>Analyse usage patterns and improve our Services.</li>
                    <li>Deliver targeted advertising, where legally permitted and subject to applicable consent requirements.</li>
                  </ul>
                  <p className="mb-3">
                    You can manage or disable cookies through your browser settings.
                  </p>
                  <p className="mb-3">
                    Our mobile application may use similar device identifiers and technologies for functionality, security, analytics, and performance.
                  </p>
                  <p className="mb-3">
                    For additional information, please review our Cookie Policy available through the App.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      9
                    </span>
                    Children&apos;s Privacy
                  </h2>
                  <p className="mb-3">
                    Our Services are intended only for individuals who are <strong>18 years of age or older</strong>.
                  </p>
                  <p className="mb-3">
                    We do not knowingly collect personal information belonging to children below the age of 18.
                  </p>
                  <p className="mb-3">
                    If we become aware that such information has been collected, we will take reasonable steps to delete it promptly in accordance with applicable law.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      10
                    </span>
                    Changes to This Privacy Policy
                  </h2>
                  <p className="mb-3">
                    We reserve the right to revise, amend, or modify this Privacy Policy from time to time to reflect
                    changes in legal requirements, regulatory guidelines, technology, business practices, or our
                    operational processes.
                  </p>
                  <p className="mb-3">
                    The latest version of this Privacy Policy will always be made available through our Website,
                    Mobile Application, or other official digital platforms.
                  </p>
                  <p className="mb-3">
                    Where any material changes are made to this Privacy Policy, the Company may notify customers through email communication or another appropriate communication channel.
                  </p>
                  <p className="mb-3">
                    Your continued use of Rupyaa Services after an updated Privacy Policy becomes effective will constitute your acceptance of the revised terms. If you do not agree with the updated Privacy Policy, you should discontinue use of our Services and may contact us for further clarification.
                  </p>
                  <p>
                    You are responsible for ensuring that the Personal Information and Sensitive Personal Data you provide to Rupyaa remains accurate, complete, and current. Please inform us promptly if any information changes or requires correction so that we can maintain accurate records and provide our Services effectively.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      11
                    </span>
                    Deletion Policy
                  </h2>
                  <p className="mb-4">
                  Rupyaa Personal Loan provides users with the option to
                    request deletion of their account and associated personal
                    data.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Important Condition Before Deletion
                  </h3>
                  <p className="mb-3">
                    Before submitting an account deletion request, please ensure that:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      All loans taken through Rupyaa have been fully repaid.
                    </li>
                    <li>
                    There are no outstanding dues, EMIs, penalties, fees, or charges.
                  </li>
                    <li>
                    There are no ongoing disputes or investigations associated with your account.
                  </li>
                  </ul>
                  <p className="mb-4">
                    Account deletion requests cannot be processed where any financial obligation remains outstanding.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    How to Request Account Deletion
                  </h3>
                  <p className="mb-3">
                    You may request deletion of your Rupyaa account through the following method:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                    Email Request: Send an account deletion request from your registered email address to <a href="mailto:care@rupyaa.com">care@rupyaa.com</a>. Subject Line: Account Deletion Request.
                  </li>
                  </ul>
                  <p className="mt-4">
                    For security and fraud-prevention purposes, we may verify your identity before processing the request.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    What Happens After Deletion
                  </h3>
                  <p className="mb-3">
                    Once your account deletion request has been successfully verified and approved:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Your Rupyaa account will be permanently deactivated.
                    </li>
                    <li>
                    You will no longer be able to log in to the App using that account.
                  </li>
                    <li>
                    Your eligible personal profile information will be deleted or anonymized.
                  </li>
                  </ul>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Data That May Be Retained
                  </h3>
                  <p className="mb-3">
                    Certain information may continue to be retained after account deletion where required under applicable laws and regulatory requirements. This may include:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                    Financial transaction records.
                  </li>
                    <li>
                    Loan agreements and repayment history.
                  </li>
                    <li>
                    KYC records.
                  </li>
                    <li>
                    Information required under RBI regulations, tax laws, audit requirements, or fraud-prevention obligations.
                  </li>
                  </ul>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Processing Time
                  </h3>
                  <p>
                    Account deletion requests are generally processed within a reasonable period following successful verification and completion of applicable regulatory checks.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      12
                    </span>
                    App Permissions and Data Collection
                  </h2>
                  <p className="mb-4">
                  Our mobile application may request certain permissions that are required to function effectively and provide our Services.
                  </p>
                  <p className="mb-4">The specific permissions requested, the information associated with those permissions, and the purposes for which the information is used are described below.
                  </p>
                  <p className="mb-4">
                    The key data collected from each permission granted on your device and how such information may be used is further explained below.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    <b>SMS Permissions</b>
                  </h3>
                  <p className="mb-3">
                    Our application does not access, read, or store personal SMS content on your device. We do not collect or process OTP messages, personal communications, or sensitive personal message content.
                  </p>
                  <p className="mb-3">
                    With your explicit and informed consent, we may access limited and anonymized metadata relating to transactional SMS, such as sender category, timestamps, and message-type classification, solely for the purpose of:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Verifying financial transactions and income patterns.
                  </li>
                    <li>
                    Enhancing creditworthiness assessment.
                  </li>
                    <li>
                    Detecting and preventing fraud.
                  </li>
                  </ul>
                  <p className="mb-3">
                  At no point is the complete content of SMS messages collected, stored, or shared.
                  </p>
                  <p className="mb-3">
                  All processing is carried out using secure systems, appropriate safeguards, and restricted access controls.
                  </p>
                  <p className="mb-4">
                  Where any information is required to be shared, such sharing is done strictly on a need-to-know basis with regulated partner NBFCs and authorized service providers, in accordance with applicable laws and only for the stated purposes.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    <b>Installed Apps Permissions</b>
                  </h3>
                  <p className="mb-3">
                    With your explicit, informed, and revocable consent, our application may collect limited and non-personal metadata relating to installed applications and system applications present on your device.
                  </p>
                  <p className="mb-3">
                    This information may be processed in a privacy-preserving manner through our trusted technology partner, Credeau (<a href="https://www.credeau.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">www.credeau.com</a>), solely for supporting regulated financial services provided in association with our Partner NBFCs.
                  </p>
                  <p className="mb-2">
                    This information is used strictly for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Detecting potential fraud risks, including the presence of high-risk or potentially harmful applications.
                  </li>
                    <li>
                    Supporting identity verification and responsible credit-risk assessment.
                  </li>
                    <li>
                    Enabling faster loan approvals and appropriate credit limits.
                  </li>
                  </ul>
                  <p className="mb-2 font-medium text-gray-800">
                    Important Safeguards
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-4">
                    <li>
                    Only minimal metadata, such as application name, category, and installation or update indicators, is collected. Intrusive or excessive data points are not accessed.
                  </li>
                    <li>
                    Personal information, application usage behaviour, messages, or content stored within other applications is not accessed or processed.
                  </li>
                    <li>
                    This information is not used for advertising, unrelated profiling, or marketing purposes.
                  </li>
                    <li>
                    Processing is carried out in accordance with data-minimization and purpose-limitation principles under the Digital Personal Data Protection Act, 2023 and applicable regulatory requirements.
                  </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    <b>Location Permissions</b>
                  </h3>
                  <p className="mb-3">
                    With your explicit consent, our application may request limited and one-time access to your device location.
                  </p>
                  <p className="mb-3">
                    Location access is used strictly for:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Determining serviceability of your loan application.
                  </li>
                    <li>
                    Supporting risk checks and fraud prevention.
                  </li>
                    <li>
                    Enabling customized or pre-qualified loan offerings.
                  </li>
                    <li>
                    Facilitating address verification and KYC compliance.
                  </li>
                  </ul>
                  <p className="mb-4">
                  We do not continuously monitor or track your location in the background.

                  </p>
                  <p className="mb-4">
                  Location information is collected only when required, retained for the minimum period necessary, and processed strictly for the purposes stated above in accordance with the Digital Personal Data Protection Act, 2023.

                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    <b>Device Permissions</b>
                  </h3>
                  <p className="mb-3">
                    With your consent, our application may collect limited and non-sensitive technical information about your device to improve platform security and assist with fraud prevention.
                  </p>
                  <p className="mb-3">This may include:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Device model.
                  </li>
                    <li>
                    Operating system version.
                  </li>
                    <li>
                    Basic device configuration, including approximate RAM or storage ranges.
                    </li>
                  </ul>
                  <p className="mb-4">
                  We do not collect or retain persistent or uniquely identifiable device identifiers such as IMEI numbers, device serial numbers, or MAC addresses.
                  </p>
                  <p className="mb-4">
                  All such processing is carried out in accordance with privacy-by-design principles and applicable legal requirements.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Phone State Permissions
                  </h3>
                  <p className="mb-3">
                    Our application may request Phone State permission only with your explicit consent and solely for limited verification purposes, including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Confirming that the device has an active SIM and valid network connection during onboarding and disbursement.
                  </li>
                    <li>
                    Helping ensure that transactions are carried out by the legitimate customer and preventing spoofing or fraudulent activity.
                  </li>
                  </ul>
                  <p className="mb-4">
                    We do not access or collect your call logs, contacts, or private communication data through this permission. Any permission requested is strictly limited to what is necessary for the stated purpose and is obtained and used in accordance with applicable laws and regulatory standards.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Camera Permissions
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Purpose of Access: Camera access is required solely to facilitate digital KYC (eKYC) and document capture.
                  </li>
                    <li>
                    Usage: Information captured through the camera is used only for identity verification and regulatory compliance.
                  </li>
                  </ul>
                  <p className="mb-2 font-medium text-gray-800">
                    We Ensure That:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Information captured is limited to what is required for KYC compliance.
                  </li>
                    <li>
                    Unrelated images or videos stored on your device are not accessed or stored.
                  </li>
                    <li>
                    We do not collect or process biometric identifiers except where specifically required under applicable law and with appropriate consent.
                  </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Data Storage and Consent Framework
                  </h3>
                  <p className="mb-2">
                    All information collected through our Services is:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Stored securely on servers located within India.
                  </li>
                    <li>
                    Processed strictly for lawful purposes relating to lending services.
                  </li>
                    <li>
                    Retained only for the period required to meet applicable regulatory and business requirements.
                  </li>
                  </ul>
                  <p className="mb-2">We follow the principles of:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                    Lawful processing and transparency.
                  </li>
                    <li>
                    Purpose limitation and data minimization.
                  </li>
                    <li>
                    Storage limitation and appropriate security safeguards.
                  </li>
                  </ul>
                  <p className="mb-3">
                    Our data-handling practices are intended to comply with the Digital Personal Data Protection Act, 2023 and applicable regulatory requirements.
                  </p>
                  <p>
                    We also provide clear, just-in-time consent notices before requesting access to sensitive permissions, including location or device information, to help ensure that you remain informed and in control of your personal information.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      13
                    </span>
                    Fair Practices &amp; Recovery Conduct
                  </h2>
                  <p className="mb-3">
                    We are committed to following ethical and responsible recovery practices. Accordingly:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                    We do not permit harassment or abusive recovery practices.
                  </li>
                    <li>
                    Customer contact information must not be misused to create improper recovery pressure.
                  </li>
                    <li>
                    Recovery activities must comply with applicable RBI Fair Practices Code requirements.
                  </li>
                  </ul>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      14
                    </span>
                    Contact Us
                  </h2>

                  <p className="mb-4">
                    For any questions, concerns, complaints, or requests relating to this Privacy Policy or your personal information, please contact:
                  </p>
                  <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                    <p className="text-sm sm:text-base break-words">
                    Data Protection Officer
                  </p>
                    <p className="text-sm sm:text-base">
                    Email: <a href="mailto:grievance@rupyaa.com">grievance@rupyaa.com</a>
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
                    Address: 79, Ground Floor, World Trade Centre, Babar Lane, New Delhi – 110001, India
                  </p>
                  </div>
                  <p className="mt-6">
                    Thank you for trusting Rupyaa with your financial journey. We value your privacy and remain committed to handling your personal information responsibly.
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

export default function PrivacyPolicyPage() {
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
      <PrivacyPolicyContent />
    </Suspense>
  );
}
