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
                    Rupyaa Personal Loan (“Rupyaa”, “we”, “our”, or “us”) values your
                    privacy and is committed to safeguarding the personal information
                    you share with us. This Privacy Policy explains the manner in which
                    we collect, process, use, disclose, retain, and protect your
                    information when you access or use our mobile application (the
                    “App”), website (the “Site”), or any personal loan and financial
                    services made available through these platforms (collectively
                    referred to as the “Services”).
                  </p>
                  <p className="mb-3">
                    By accessing or using our App, Site, or Services, you acknowledge
                    the data-handling practices described in this Privacy Policy and
                    provide consent wherever such consent is required.
                  </p>
                  <p className="mb-3">
                    Rupyaa is operated by Uptime Innovation Private Limited. Services
                    offered under the Rupyaa brand are provided by Uptime Innovation
                    Private Limited either directly or through authorized service
                    providers and business partners, wherever applicable.
                  </p>
                  <p className="mb-3">
                    This Privacy Policy has been prepared with the intention of
                    complying with applicable Indian laws and regulatory requirements,
                    including the Information Technology Act, 2000, the Digital Personal
                    Data Protection Act, 2023, the Digital Personal Data Protection
                    Rules, 2025, and relevant guidelines issued by the Reserve Bank of
                    India in relation to digital lending.
                  </p>
                  <p className="mb-3">
                    Rupyaa operates as a digital lending platform and facilitates
                    personal loan services in association with an RBI-registered Non-Banking Financial Company (NBFC), WEEKLINE INVESTMENT AND TRADING
                    COMPANY LTD.
                  </p>
                  <p className="mb-3">
                    All decisions relating to credit assessment, loan approval,
                    sanction, eligibility, and disbursement are made by the relevant
                    registered lending partner in accordance with applicable laws and
                    regulatory requirements prescribed by the Reserve Bank of India.
                  </p>
                  <p className="mb-3">
                    Rupyaa primarily acts as a technology and service platform
                    supporting the loan application process, customer onboarding,
                    documentation, verification, and other associated services. All
                    lending-related activities are undertaken in accordance with
                    applicable regulatory requirements, including the Digital Personal
                    Data Protection Act, 2023 and other relevant Indian laws.
                  </p>
                <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                  <p className="font-semibold text-gray-900">
                    NBFC Information:
                  </p>
                  <p className="font-semibold text-gray-900">
                    <a href="https://www.weekline.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      WEEKLINE INVESTMENT AND TRADING COMPANY LTD.
                    </a>
                  </p>
                  <p className="mb-3">
                    RBI Registration No.: 14.01001
                  </p>
                  <p className="mb-3">
                    Address: 79, Ground Floor, World Trade Centre, Babar Lane, New Delhi
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
                    We collect certain categories of information that are necessary to
                    operate, provide, secure, enhance, and personalize our Services. The
                    types of information that may be collected are described below.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Registration and Account Details
                  </h3>
                  <p className="mb-3">
                    We may collect details such as your name, email address, mobile
                    number, date of birth, residential address, and government-issued
                    identification details, including Aadhaar and PAN information,
                    wherever such information is required for verification or regulatory
                    purposes.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Financial Information
                  </h3>
                  <p className="mb-3">
                    We may collect financial and loan-related information including bank
                    account details, income information, employment details, loan
                    application information, credit-related details, transaction
                    history, and repayment information.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Contact and Communication Details
                  </h3>
                  <p className="mb-3">
                    Information voluntarily shared with us while contacting Rupyaa
                    through email, chat, customer support forms, or any other support
                    channel may also be collected and processed.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Other Information Provided by You
                  </h3>
                  <p className="mb-3">
                    We may collect additional information that you voluntarily submit
                    through surveys, feedback forms, promotional activities, or other
                    interactions with our Services.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Device and Usage Information
                  </h3>
                  <p className="mb-3">
                    When you access our Services, certain technical and usage-related
                    information may be collected automatically. This may include your IP
                    address, device type, operating system, browser type, mobile network
                    provider, App version, pages or screens accessed, time spent using
                    the Services, and associated usage logs.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Location Information
                  </h3>
                  <p className="mb-3">
                    Subject to your consent, we may collect approximate or limited
                    location information through GPS, Wi-Fi, IP-based signals, or
                    similar technologies. Such information may be used for purposes
                    including determining service availability, supporting loan
                    eligibility checks, preventing fraud, and assisting with
                    verification.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Application Permissions
                  </h3>
                  <p className="mb-3">
                    Our application is designed with user privacy in mind. We do not
                    access your personal contacts, personal SMS history, or other
                    information unless such access has been specifically disclosed and
                    appropriate consent has been obtained.
                  </p>
                  <p className="mb-3">
                    We only rely on limited information collected with user consent or
                    received from authorized sources for purposes such as identity
                    verification, credit assessment, fraud prevention, and improving the
                    customer experience.
                  </p>
                  <p className="mb-3">
                    Where such access applies, information is collected and processed
                    only for the purposes described in Section 12 of this Privacy Policy
                    and in accordance with applicable laws, including the Digital
                    Personal Data Protection Act, 2023.
                  </p>
                  <p className="mb-3">
                    We may receive information from authorized third-party sources,
                    which may include:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Credit scores, credit reports, and associated credit information
                      obtained from credit information companies such as CIBIL and
                      Experian.
                    </li>
                    <li>
                      Information received from authorized lending partners, payment
                      gateways, mobile network providers, verification service
                      providers, and other third parties involved in providing or
                      supporting the Services.
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
                    We process personal information only where such processing is
                    permitted under applicable law and may rely on one or more of the
                    following grounds:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      You have provided explicit consent for the processing.
                    </li>
                    <li>
                      Processing is required to provide the requested Services or fulfil
                      contractual obligations.
                    </li>
                    <li>
                      Processing is necessary to comply with applicable legal or
                      regulatory requirements.
                    </li>
                    <li>
                      Processing is required for legitimate business purposes, where
                      such processing is permitted under applicable law.
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
                    Information collected through Rupyaa may be used for legitimate
                    operational, regulatory, business, and service-related purposes.
                  </p>
                  <p className="mb-3">
                    Your information may be used to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Receive, process, and evaluate your loan application.
                    </li>
                    <li>
                      Verify your identity and validate information submitted by you.
                    </li>
                    <li>
                      Assess your creditworthiness and loan eligibility.
                    </li>
                    <li>
                      Facilitate loan approval, sanction, and disbursement through our
                      lending partners.
                    </li>
                    <li>
                      Manage repayment-related activities, payment reminders, loan
                      servicing, and collection processes.
                    </li>
                    <li>
                      Provide customer support and address service-related concerns or
                      requests.
                    </li>
                  </ul>
                  <p className="mb-3">
                    We may process your information to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Meet applicable legal and regulatory obligations, including KYC,
                      AML, digital lending, and RBI-related requirements.
                    </li>
                    <li>
                      Detect, investigate, prevent, and manage fraud, money laundering,
                      suspicious transactions, security risks, misuse, or unauthorized
                      use of our Services.
                    </li>
                  </ul>
                  <p className="mb-3">
                    Your information may also be used to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Understand the manner in which users interact with our Services.
                    </li>
                    <li>
                      Improve the functionality, reliability, performance, customer
                      experience, and features of our App and Services.
                    </li>
                    <li>
                      Provide personalized loan offers, educational information, or
                      promotional communications, subject to applicable consent
                      requirements and available opt-out choices.
                    </li>
                  </ul>
                  <p className="mb-3">
                    We may contact you regarding:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Updates relating to your account.
                    </li>
                    <li>
                      Your loan application, servicing, or repayment.
                    </li>
                    <li>
                      Changes to our Services or policies.
                    </li>
                    <li>
                      Security, operational, or service-related notifications.
                    </li>
                    <li>
                      Responses to customer support requests, grievances, or other
                      inquiries.
                    </li>
                  </ul>
                  <p className="mb-3">
                    Depending on the circumstances, information may be processed on the
                    basis of your consent, contractual requirements, legal obligations,
                    or legitimate interests permitted by applicable law.
                  </p>
                  <p className="mb-3">
                    We may also process aggregated, statistical, or anonymized
                    information for analytics, research, service improvement, and other
                    legitimate purposes, provided such information cannot reasonably
                    identify you personally.
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
                    However, personal information may be shared where necessary to
                    provide our Services, meet legal or regulatory requirements, or
                    support legitimate business and operational activities.
                  </p>
                  <p className="mb-3">
                    We may share relevant information with third-party service providers
                    that support functions such as:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Payment processing.
                    </li>
                    <li>
                      Credit bureau checks.
                    </li>
                    <li>
                      Identity and KYC verification.
                    </li>
                    <li>
                      Data hosting and storage.
                    </li>
                    <li>
                      Analytics.
                    </li>
                    <li>
                      Technology infrastructure and related services.
                    </li>
                    <li>
                      Fraud detection, security, and risk management.
                    </li>
                  </ul>
                  <p className="mb-3">
                    Such service providers are expected to process information in
                    accordance with applicable confidentiality, data protection, and
                    information-security requirements.
                  </p>
                  <p className="mb-3">
                    Where required for legitimate operational purposes, information may
                    be shared:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Within the Rupyaa group.
                    </li>
                    <li>
                      With NBFCs, lending partners, financial institutions, and other
                      authorized entities involved in facilitating, processing, or
                      servicing your loan.
                    </li>
                  </ul>
                  <p className="mb-3">
                    We may disclose your information where such disclosure is reasonably
                    necessary:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      To comply with applicable laws, regulations, legal proceedings,
                      court orders, or regulatory requirements.
                    </li>
                    <li>
                      To respond to lawful requests from regulatory authorities, law
                      enforcement agencies, credit bureaus, or government authorities.
                    </li>
                    <li>
                      To protect our rights, users, employees, partners, property, or
                      Services where fraud, unlawful activity, security threats, or
                      disputes are suspected.
                    </li>
                  </ul>
                  <p className="mb-3">
                    If Rupyaa or Uptime Innovation Private Limited undergoes a merger,
                    acquisition, restructuring, financing arrangement, sale of assets,
                    or another similar corporate transaction, relevant user information
                    may be transferred as part of that transaction, subject to
                    applicable legal requirements.
                  </p>
                  <p className="mb-3">
                    All sharing of personal information is subject to appropriate
                    confidentiality, contractual, security, and data-protection
                    safeguards.
                  </p>
                  <p className="mb-3">
                    We do not share personally identifiable information with third
                    parties for their independent marketing activities without your
                    consent.
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
                    Technology, algorithms, or automated systems may be used to assist
                    with certain processes, including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Evaluation of creditworthiness.
                    </li>
                    <li>
                      Assessment of loan eligibility.
                    </li>
                    <li>
                      Determination of applicable loan limits.
                    </li>
                  </ul>
                  <p className="mb-3">
                    Where applicable and subject to applicable laws and lender policies,
                    you may request:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      A human review of an automated decision.
                    </li>
                    <li>
                      Clarification regarding the basis or result of such a decision.
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
                    We implement reasonable administrative, technical, organizational,
                    and physical safeguards designed to protect personal information
                    against unauthorized access, disclosure, alteration, misuse, loss,
                    or destruction.
                  </p>
                  <p className="mb-3">
                    Our security controls may include:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      SSL/TLS encryption for information transmitted through our
                      Services.
                    </li>
                    <li>
                      Encryption and other safeguards for information stored within our
                      systems.
                    </li>
                    <li>
                      Authentication and access-control mechanisms.
                    </li>
                    <li>
                      Network security controls and firewalls.
                    </li>
                    <li>
                      Periodic security reviews, assessments, and audits.
                    </li>
                    <li>
                      Compliance with ISO 2700, ISO 17802 standards and applicable RBI
                      requirements.
                    </li>
                  </ul>
                  <p className="mt-4">
                    However, no system is completely secure. You are responsible
                    for keeping your login credentials confidential. We limit
                    data retention to what&apos;s necessary (e.g., 7 years for
                    loan records per RBI rules) and securely delete or anonymize
                    it afterward.
                  </p>
                  <p className="mt-3">
                    Data may be processed or stored within India or in secure
                    jurisdictions permitted under applicable Indian laws.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      7
                    </span>
                    Your Rights and Choices
                  </h2>
                  <p className="mb-4">
                    You have rights over your personal information:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      <strong className="text-gray-800">
                        Access and Correction:
                      </strong>{" "}
                      Request a copy of your data or correct inaccuracies by
                      contacting us.
                    </li>
                    <li>
                      <strong className="text-gray-800">Deletion:</strong>{" "}
                      Request deletion of your data (subject to legal retention
                      requirements).
                    </li>
                    <li>
                      <strong className="text-gray-800">Opt-Out:</strong>{" "}
                      Unsubscribe from marketing emails or withdraw consents
                      (e.g., location access) via App settings.
                    </li>
                    <li>
                      <strong className="text-gray-800">Portability:</strong>{" "}
                      Receive your data in a structured format.
                    </li>
                    <li>
                      <strong className="text-gray-800">Complaints:</strong>{" "}
                      Lodge concerns with us or data protection authorities
                      (e.g., under DPDPA).
                    </li>
                  </ul>
                  <p className="mt-4">
                    To exercise rights, email to care@rupyaa.com. We respond
                    within 30 days.
                  </p>
                  <p className="mt-3">For cookies, see Section 8.</p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      8
                    </span>
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="mb-4">
                    We use cookies, pixels, and similar tools to:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Enhance functionality (e.g., remembering preferences).
                    </li>
                    <li>Analyze usage and improve Services.</li>
                    <li>Deliver targeted ads.</li>
                  </ul>
                  <p className="mt-4">
                    You can manage cookies via browser settings. Our App uses
                    similar device identifiers. For details, review our Cookie
                    Policy (linked in the App).
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      9
                    </span>
                    Children&apos;s Privacy
                  </h2>
                  <p>
                    Our Services are not directed at individuals under 18. We do
                    not knowingly collect data from children. If we discover
                    such data, we will delete it promptly.
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
                    We have the right to revise or modify this Privacy Policy at
                    any time to reflect changes in legal requirements,
                    regulatory guidelines, technology, or our operational
                    practices.
                  </p>
                  <p className="mb-3">
                    The latest version of this Privacy Policy will always be
                    available on our Website, Mobile Application, or other
                    official digital platforms. The Company will notify
                    customers of any material changes to this section through
                    email communication.
                  </p>
                  <p className="mb-3">
                    Your continued use of Rupyaa services after the updated
                    Privacy Policy becomes effective will constitute your
                    acceptance of the revised terms. If you do not agree with
                    the updated policy, you should discontinue use of our
                    services and may reach out to us for further clarification.
                  </p>
                  <p>
                    You are responsible for ensuring that the Personal
                    Information and Sensitive Personal Data you provide to
                    Rupyaa remains accurate and current. Please inform us
                    promptly of any updates or corrections to your information
                    so that we can maintain accurate records and provide our
                    services effectively.
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
                    Before submitting a deletion request, please ensure that:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      All loans taken through Rupyaa have been fully repaid.
                    </li>
                    <li>
                      There are no outstanding dues, EMIs, penalties, or
                      charges.
                    </li>
                    <li>
                      There are no ongoing disputes or investigations linked to
                      your account.
                    </li>
                  </ul>
                  <p className="mb-4">
                    Account deletion requests cannot be processed if any
                    financial obligation remains pending.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    How to Request Account Deletion
                  </h3>
                  <p className="mb-3">
                    You can request deletion of your Rupyaa account through the
                    following method:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      <strong className="text-gray-800">Email Request:</strong>{" "}
                      Send a deletion request from your registered email ID to:
                      care@rupyaa.com - Subject line: Account Deletion Request
                    </li>
                  </ul>
                  <p className="mt-4">
                    For security purposes, we may verify your identity before
                    processing the request.
                  </p>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    What Happens After Deletion
                  </h3>
                  <p className="mb-3">
                    Once your request is verified and approved:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>
                      Your Rupyaa account will be permanently deactivated.
                    </li>
                    <li>You will no longer be able to log in to the app.</li>
                    <li>
                      Your personal profile data will be deleted or anonymized.
                    </li>
                  </ul>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Data That May Be Retained
                  </h3>
                  <p className="mb-3">
                    Certain information may be retained even after account
                    deletion if required under applicable laws, including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>Financial transaction records</li>
                    <li>Loan agreements and repayment history</li>
                    <li>KYC records</li>
                    <li>
                      Data required under RBI regulations, tax laws, audit, or
                      fraud prevention requirements
                    </li>
                  </ul>
                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Processing Time
                  </h3>
                  <p>
                    Deletion requests are typically processed within a
                    reasonable timeframe after successful verification and
                    subject to regulatory checks.
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
                    Our mobile application requires certain permissions to
                    function effectively and provide you with our services.
                    Below are the specific permissions we request and how the
                    collected data is used:
                  </p>
                  <p className="mb-4">
                    The key data collected from each permission granted in the
                    device and how this data is used is further detailed below:
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    SMS Permissions
                  </h3>
                  <p className="mb-3">
                    Our application does not access, read, or store personal SMS
                    content on your device. We do not collect or process OTP
                    messages, personal communications, or any sensitive message
                    content under any circumstances.
                  </p>
                  <p className="mb-3">
                    With your explicit and informed consent, we may access
                    limited and anonymized metadata related to transactional SMS
                    (such as sender category, timestamps, and message type
                    classification) solely for the purpose of:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Verifying financial transactions and income patterns
                    </li>
                    <li>Enhancing creditworthiness assessment</li>
                    <li>Detecting and preventing fraud</li>
                  </ul>
                  <p className="mb-3">
                    At no point is full SMS content collected, stored, or
                    shared. All data processing is carried out in a
                    privacy-preserving manner, using secure systems and strict
                    access controls.
                  </p>
                  <p className="mb-4">
                    Any information, if required to be shared, is done strictly
                    on a need-to-know basis with regulated partner NBFCs and
                    authorized service providers, in compliance with applicable
                    laws and only for the stated purposes.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Installed Apps Permissions
                  </h3>
                  <p className="mb-3">
                    With your explicit, informed, and revocable consent, our
                    application may collect limited and non-personal metadata
                    about installed and system applications on your device.
                  </p>
                  <p className="mb-3">
                    This information is processed in a privacy-preserving manner
                    through our trusted technology partner, Credeau (
                    <a
                      href="https://www.credeau.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      www.credeau.com
                    </a>
                    ), solely for providing regulated financial services in
                    association with our Partner NBFCs.
                  </p>
                  <p className="mb-2">This data is used strictly for:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Detecting potential fraud risks (such as presence of
                      high-risk or potentially harmful applications)
                    </li>
                    <li>
                      Supporting identity verification and responsible credit
                      risk assessment
                    </li>
                    <li>
                      Enabling faster loan approvals and appropriate credit
                      limits
                    </li>
                  </ul>
                  <p className="mb-2 font-medium text-gray-800">
                    Important safeguards:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-4">
                    <li>
                      Only minimal metadata (such as application name, category,
                      and install/update indicators) is collected; intrusive or
                      excessive data points are not accessed.
                    </li>
                    <li>
                      No personal data, app usage behavior, messages, or content
                      from other applications is accessed or processed.
                    </li>
                    <li>
                      Data is not used for advertising, profiling, or marketing
                      purposes.
                    </li>
                    <li>
                      Processing is carried out in accordance with the
                      principles of data minimization and purpose limitation
                      under the Digital Personal Data Protection Act, 2023 and
                      applicable regulatory guidelines.
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Location Permissions
                  </h3>
                  <p className="mb-3">
                    With your explicit consent, our application may request
                    limited, one-time access to your device location.
                  </p>
                  <p className="mb-3">This access is used strictly for:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>Determining serviceability of your loan application</li>
                    <li>Supporting risk checks and fraud prevention</li>
                    <li>Enabling customized or pre-qualified loan offerings</li>
                    <li>
                      Facilitating address verification and KYC compliance
                    </li>
                  </ul>
                  <p className="mb-4">
                    We do not track your location continuously or in the
                    background. Location data is collected only at the time of
                    requirement, retained for the minimum necessary duration,
                    and processed strictly for the stated purposes in compliance
                    with the Digital Personal Data Protection Act, 2023.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Device Permissions
                  </h3>
                  <p className="mb-3">
                    With your consent, our application may collect limited,
                    non-sensitive device information to enhance platform
                    security and prevent fraud.
                  </p>
                  <p className="mb-3">This may include:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>Device model</li>
                    <li>Operating system version</li>
                    <li>
                      Basic device configuration (such as RAM/storage ranges)
                    </li>
                  </ul>
                  <p className="mb-4">
                    We do not collect or store persistent or uniquely
                    identifiable device identifiers (such as IMEI, serial
                    number, or MAC address). All processing follows
                    privacy-by-design principles and applicable legal
                    requirements.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Phone State Permissions
                  </h3>
                  <p className="mb-3">
                    Our application may request Phone State permission only with
                    your explicit consent and strictly for limited verification
                    purposes, including:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Verifying that the device has an active SIM and valid
                      network connection at the time of onboarding and
                      disbursement
                    </li>
                    <li>
                      Ensuring the transaction is carried out by the rightful
                      customer and preventing spoofing/fraud
                    </li>
                  </ul>
                  <p className="mb-4">
                    We do not access or collect call logs, contacts, or
                    communication data. Any permissions requested are strictly
                    limited to what is necessary for the stated purpose and are
                    obtained and used in compliance with applicable laws and
                    regulatory standards.
                  </p>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Camera Permissions
                  </h3>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      <strong className="text-gray-800">
                        Purpose of access:
                      </strong>{" "}
                      Camera access is required solely to facilitate digital KYC
                      (eKYC) and document capture.
                    </li>
                    <li>
                      <strong className="text-gray-800">Usage:</strong> The
                      captured information is used only for identity
                      verification and regulatory compliance.
                    </li>
                  </ul>
                  <p className="mb-2 font-medium text-gray-800">
                    We ensure that:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>
                      Data captured is limited to what is necessary for KYC
                      compliance
                    </li>
                    <li>
                      No unrelated images or videos are accessed or stored
                    </li>
                    <li>
                      We do not collect or process biometric identifiers, except
                      where explicitly required under applicable law and with
                      consent
                    </li>
                  </ul>

                  <h3 className="font-medium text-gray-900 mt-3 sm:mt-4 mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Data Storage and Consent Framework
                  </h3>
                  <p className="mb-2">All data collected is:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>Stored securely on servers located within India</li>
                    <li>
                      Processed strictly for lawful purposes related to lending
                      services
                    </li>
                    <li>
                      Retained only for the duration necessary to fulfill
                      regulatory and business requirements
                    </li>
                  </ul>
                  <p className="mb-2">We follow the principles of:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600 mb-3">
                    <li>Lawful processing and transparency</li>
                    <li>Purpose limitation and data minimization</li>
                    <li>Storage limitation and security safeguards</li>
                  </ul>
                  <p className="mb-3">
                    In full compliance with the Digital Personal Data Protection
                    Act, 2023 and applicable regulatory guidelines.
                  </p>
                  <p>
                    We also provide clear, just-in-time consent notices before
                    requesting any sensitive permission (such as location or
                    device data), ensuring that you remain in control of your
                    personal data at all times.
                  </p>
                </section>

                <section className="pt-4 sm:pt-6 border-t border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                      13
                    </span>
                    Fair Practices &amp; Recovery Conduct
                  </h2>
                  <p className="mb-3">We are committed to ethical practices:</p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2 text-gray-600">
                    <li>No harassment or abusive recovery methods</li>
                    <li>No misuse of contact data for recovery pressure</li>
                    <li>
                      All recovery practices comply with RBI Fair Practices Code
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
                    For questions, concerns, or requests, contact:
                  </p>
                  <div className="rounded-lg sm:rounded-xl bg-gray-50 border border-gray-100 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                    <p className="text-sm sm:text-base break-words">
                      <strong className="text-gray-800">
                        Data Protection Officer:
                      </strong>{" "}
                    </p>
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
                      <strong className="text-gray-800">
                        Grievance Number:
                      </strong>{" "}
                      <a href="tel:7665466546" className="break-all">
                        7665466546
                      </a>
                    </p>
                    <p className="text-sm sm:text-base break-words">
                      <strong className="text-gray-800">Address:</strong> 
                      79, Ground Floor, World Trade Centre, Babar Lane, New Delhi - 110001, India
                    </p>
                  </div>
                  <p className="mt-6">
                    Thank you for trusting Rupyaa with your financial journey.
                    We value your privacy as much as you do.
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
