export const personalLoanSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://rupyaa.com/personal-loan#webpage",
        url: "https://rupyaa.com/personal-loan",
        name: "Personal Loan - Rupyaa",
        description:
          "Apply for an unsecured personal loan of up to Rs. 5,00,000 through Rupyaa with digital KYC, transparent charges, and lender approval.",
        isPartOf: { "@id": "https://rupyaa.com/#website" },
        about: { "@id": "https://rupyaa.com/personal-loan#loan" },
        inLanguage: "en-IN",
      },
      {
        "@type": "LoanOrCredit",
        "@id": "https://rupyaa.com/personal-loan#loan",
        name: "Personal Loan from Rupyaa",
        description:
          "Apply for an unsecured personal loan of up to Rs. 5,00,000 through Rupyaa, subject to eligibility, KYC, credit profile, and lending partner approval.",
        provider: { "@id": "https://rupyaa.com/#organization" },
        loanType: "Personal loan",
        amount: {
          "@type": "MonetaryAmount",
          currency: "INR",
          maxValue: 500000,
        },
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://rupyaa.com/personal-loan#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who can I contact for grievances or support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reach out to customer support or the grievance redressal officer through the contact details provided on the website, app, or loan documents.",
            },
          },
          {
            "@type": "Question",
            name: "How can I avail a business loan from you?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can select and apply for a suitable loan for your business needs through our website or you can submit your contact details with requirement and our team will contact you.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I use this loan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The loan must be utilized strictly for the purpose for which it has been sanctioned. For example, a business loan should be used only for business-related activities. In the case of a personal loan, the borrower may use the funds for any legitimate purpose. However, under no circumstances shall the loan be used for any unlawful activities, including fraud or activities related to terrorism, in compliance with applicable KYC/AML guidelines and the provisions of the Prevention of Money Laundering Act (PMLA).",
            },
          },
          {
            "@type": "Question",
            name: "What documents are needed to apply?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You may be required to submit valid identity proof, address proof, PAN, income-related documents, and bank statements, as applicable. Additional documents may be requested based on the loan type and internal policies.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to arrange a collateral for this loan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, this is an unsecured loan, so no collateral or security is required. The loan is sanctioned based on eligibility, creditworthiness, and repayment capacity.",
            },
          },
        ],
      },
    ],
  };


export const zapcashJsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "FinancialService"],
      "@id": "https://rupyaa.com/#organization",
      name: "Rupyaa",
      legalName: "Omnistack Innovation Private Limited",
      url: "https://rupyaa.com/",
      telephone: "+91-8503090309",
      address: {
        "@type": "PostalAddress",
        streetAddress: "379, Ground Floor, World Trade Centre",
        addressLocality: "Babar Lane",
        addressRegion: "New Delhi",
        postalCode: "110001",
        addressCountry: "IN",
      },
      logo: {
        "@type": "ImageObject",
        "@id": "https://rupyaa.com/#logo",
        url: "https://rupyaa.com/images/logo.png",
      },
      image:
        "https://zapcash-assets.s3.ap-south-1.amazonaws.com/zapcash-og-image.jpg",
      priceRange: "Personal loans up to Rs. 5,00,000",
      description:
        "Rupyaa helps eligible users apply for unsecured personal loans of up to Rs. 5,00,000 through a digital process.",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      brand: {
        "@type": "Brand",
        name: "Rupyaa",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+91-8503090309",
          url: "https://rupyaa.com/support",
          areaServed: "IN",
          availableLanguage: ["en-IN", "hi-IN"],
        },
      ],
      sameAs: ["https://play.google.com/store/apps/details?id=com.rupyaa.loan"],
    },
    {
      "@type": "WebSite",
      "@id": "https://rupyaa.com/#website",
      name: "Rupyaa",
      url: "https://rupyaa.com/",
      publisher: {
        "@id": "https://rupyaa.com/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "MobileApplication",
      "@id": "https://rupyaa.com/#mobileapp",
      name: "Rupyaa",
      operatingSystem: "Android",
      applicationCategory: "FinanceApplication",
      url: "https://play.google.com/store/apps/details?id=com.rupyaa.loan",
      publisher: {
        "@id": "https://rupyaa.com/#organization",
      },
    },
  ],
};


  export const emiCalculatorSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://rupyaa.com/emi-calculator#webpage",
        url: "https://rupyaa.com/emi-calculator",
        name: "Free Personal Loan EMI Calculator - Rupyaa",
        description:
          "Use the Rupyaa EMI calculator to estimate monthly EMI, repayment amount, interest, and tenure for a personal loan.",
        isPartOf: { "@id": "https://rupyaa.com/#website" },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebApplication",
        "@id": "https://rupyaa.com/emi-calculator#calculator",
        name: "Personal Loan EMI Calculator",
        url: "https://rupyaa.com/emi-calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        publisher: { "@id": "https://rupyaa.com/#organization" },
      },
    ],
  };


  export const lendersPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://rupyaa.com/lenders#webpage",
        url: "https://rupyaa.com/lenders",
        name: "Rupyaa Lending Partners",
        description:
          "Rupyaa works with Weekline Investment and Trading Company Ltd, an RBI-registered NBFC, for loan sanction and ownership.",
        isPartOf: { "@id": "https://rupyaa.com/#website" },
        about: { "@id": "https://rupyaa.com/lenders#weekline" },
        inLanguage: "en-IN",
      },
      {
        "@type": "FinancialService",
        "@id": "https://rupyaa.com/lenders#weekline",
        name: "Weekline Investment and Trading Company Ltd",
        description: "RBI-registered NBFC lending partner for Rupyaa loans.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "79, Ground Floor, World Trade Centre, Barar Lane",
          addressLocality: "New Delhi",
          postalCode: "110001",
          addressCountry: "IN",
        },
        email: "grievance@weekline.in",
        identifier: {
          "@type": "PropertyValue",
          name: "RBI Registration Number",
          value: "14.01001",
        },
      },
    ],
  };


  export const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://rupyaa.com/#webpage",
        url: "https://rupyaa.com/",
        name: "Rupyaa - Instant Personal Loan App",
        description:
          "Apply for an unsecured personal loan of up to Rs. 5,00,000 with Rupyaa through a secure digital process, subject to eligibility and lender approval.",
        isPartOf: {
          "@id": "https://rupyaa.com/#website",
        },
        about: {
          "@id": "https://rupyaa.com/#organization",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://rupyaa.com/images/bannerNew.png",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "LoanOrCredit",
        "@id": "https://rupyaa.com/#loan-product",
        name: "Rupyaa Personal Loan",
        description:
          "Unsecured personal loan of up to Rs. 5,00,000, subject to borrower eligibility, KYC, credit profile, and lending partner approval.",
        provider: {
          "@id": "https://rupyaa.com/#organization",
        },
        loanType: "Personal loan",
        amount: {
          "@type": "MonetaryAmount",
          currency: "INR",
          maxValue: 500000,
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://rupyaa.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need to arrange a collateral for this loan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, this is an unsecured loan, and therefore, no collateral or security is required to avail of the loan. The loan is sanctioned based on the borrower's eligibility, creditworthiness, and repayment capacity.",
            },
          },
          {
            "@type": "Question",
            name: "What is the interest rate and processing fee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Interest starts from 3% per month. A one-time processing fee of up to 10% plus GST is charged when the loan is approved.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Key Fact Statement (KFS) and when is it provided?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Key Fact Statement (KFS) summarizes important loan terms, including interest rate, charges, and repayment details. It is provided before execution of the loan agreement.",
            },
          },
        ],
      },
    ],
  };


  export const supportPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://rupyaa.com/support#webpage",
    url: "https://rupyaa.com/support",
    name: "Rupyaa Support",
    description:
      "Contact Rupyaa support for questions about loan applications, repayment, documents, or complaints.",
    isPartOf: { "@id": "https://rupyaa.com/#website" },
    about: { "@id": "https://rupyaa.com/#organization" },
    inLanguage: "en-IN",
  };

export const creditScoreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rupyaa.com/credit-score#webpage",
      url: "https://rupyaa.com/credit-score",
      name: "Check Credit Score Free — Instant Report Online",
      description:
        "Check your Equifax credit score and report for free on Rupyaa. Understand your credit profile, score range, and the factors that affect it.",
      inLanguage: "en-IN",
      isPartOf: { "@id": "https://rupyaa.com/#website" },
      publisher: { "@id": "https://rupyaa.com/#organization" },
      dateModified: "2026-08-04",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://rupyaa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Credit Score",
            item: "https://rupyaa.com/credit-score",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://rupyaa.com/credit-score#faq",
      mainEntity: CREDIT_SCORE_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
import { CREDIT_SCORE_FAQS } from "@/components/credit-score/credit-score-guide-data";
