export interface CreditScoreFaqItem {
  readonly question: string;
  readonly answer: string;
}

export const CREDIT_SCORE_FAQS: readonly CreditScoreFaqItem[] = [
  {
    question: "Is checking my credit score on Rupyaa really free?",
    answer:
      "Yes. There is no charge or card required. You can check your Equifax credit score and report for free.",
  },
  {
    question: "Will checking my credit score on Rupyaa affect it?",
    answer:
      "No. Checking your own credit score is a soft enquiry and does not reduce your credit score.",
  },
  {
    question: "Why is my score here different from my CIBIL score?",
    answer:
      "Rupyaa shows your Equifax score. CIBIL and Equifax use different scoring models and may receive updates at different times, so the scores can vary.",
  },
  {
    question: "What is a good credit score in India?",
    answer:
      "A credit score of 750 or above is generally considered good and can improve your chances of getting credit.",
  },
  {
    question: "How can I improve my credit score?",
    answer:
      "Pay EMIs and credit card bills on time, keep credit usage low, avoid too many loan applications, and regularly check your credit report for errors.",
  },
] as const;

export const SCORE_RANGE_ROWS = [
  { range: "750–900", rating: "Excellent", indication: "Strong credit and repayment history" },
  { range: "700–749", rating: "Good", indication: "Healthy credit profile" },
  { range: "650–699", rating: "Fair", indication: "Moderate credit profile" },
  { range: "550–649", rating: "Poor", indication: "Credit history may need improvement" },
  { range: "300–549", rating: "Very Poor", indication: "Significant repayment issues may be present" },
  { range: "NA / NH", rating: "No History", indication: "Limited or no available credit history" },
] as const;
