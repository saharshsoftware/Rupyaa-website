"use client";

import { useState, type ReactNode } from "react";
import {
  CREDIT_SCORE_FAQS,
  SCORE_RANGE_ROWS,
} from "@/components/credit-score/credit-score-guide-data";

const paragraphClassName =
  "mb-4 text-base leading-relaxed text-[#33423a] sm:text-[17px] sm:leading-[1.7]";
const listClassName =
  "mb-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-[#33423a] sm:text-[17px]";
const headingClassName =
  "mb-4 text-[26px] font-extrabold tracking-tight text-[#14202a] sm:text-[30px]";

export default function CreditScoreGuide() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto px-1 pb-10 pt-10 sm:pt-14">
      <section id="what-is" className="mb-12 scroll-mt-24 sm:mb-14">
        <h2 className={headingClassName}>What is a Credit Score?</h2>
        <p className={paragraphClassName}>
          A credit score is a 3-digit number between <strong>300 and 900</strong>{" "}
          that reflects your credit history and repayment behaviour.
        </p>
        <p className={paragraphClassName}>
          It is calculated using information from your loans, credit cards, EMI
          payments and other credit accounts. Lenders use this score to
          understand how you have managed credit in the past before reviewing a
          new loan or credit card application.
        </p>
        <p className={paragraphClassName}>
          Generally, a higher credit score indicates a stronger credit profile
          and responsible repayment history.
        </p>
      </section>

      <section className="mb-12 sm:mb-14">
        <h2 className={headingClassName}>Credit Bureaus in India</h2>
        <p className={paragraphClassName}>India has four major credit bureaus:</p>
        <ul className={listClassName}>
          <li>TransUnion CIBIL</li>
          <li>Equifax</li>
          <li>Experian</li>
          <li>CRIF High Mark</li>
        </ul>
        <p className={paragraphClassName}>
          These bureaus collect credit information reported by banks and
          financial institutions and use it to generate your credit report and
          credit score.
        </p>
        <p className={paragraphClassName}>
          Your score may vary slightly between bureaus because each bureau uses
          its own scoring model and may receive updated information at different
          times.
        </p>
        <p className={paragraphClassName}>
          <strong>The credit score shown on Rupyaa is provided by Equifax.</strong>
        </p>
      </section>

      <section id="ranges" className="mb-12 scroll-mt-24 sm:mb-14">
        <h2 className={headingClassName}>Credit Score Range</h2>
        <p className={paragraphClassName}>
          Credit scores generally range from <strong>300 to 900</strong>. A
          higher score usually indicates better credit behaviour.
        </p>
        <div className="mb-5 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-[15px]">
            <thead>
              <tr className="bg-[#FECA42] text-left text-white">
                <th className="rounded-tl-[10px] px-4 py-3 font-bold">Credit Score</th>
                <th className="px-4 py-3 font-bold">Rating</th>
                <th className="rounded-tr-[10px] px-4 py-3 font-bold">What it Indicates</th>
              </tr>
            </thead>
            <tbody>
              {SCORE_RANGE_ROWS.map((row, index) => {
                let rowClassName = "border-b border-[#e6ece7]";
                if (index % 2 === 1) {
                  rowClassName += " bg-[#f7faf7]";
                }
                return (
                  <tr key={row.range} className={rowClassName}>
                    <td className="px-4 py-3 font-bold text-primary">{row.range}</td>
                    <td className="px-4 py-3 text-[#33423a]">{row.rating}</td>
                    <td className="px-4 py-3 text-[#33423a]">{row.indication}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className={paragraphClassName}>
          A credit score alone does not decide whether a loan will be approved.
          Lenders may also consider your <strong>income, employment, existing
          EMIs, repayment capacity and their internal eligibility criteria</strong>.
        </p>
      </section>

      <section className="mb-12 sm:mb-14">
        <h2 className={headingClassName}>What Affects Your Credit Score?</h2>
        <p className={paragraphClassName}>
          Your credit score is mainly influenced by how you use and repay credit.
        </p>
        <h3 className="mb-2 text-lg font-extrabold text-[#14202a]">Repayment History</h3>
        <p className={paragraphClassName}>Paying your EMIs and credit card bills on time helps maintain a healthy credit profile. Late or missed payments can negatively affect your score.</p>
        <h3 className="mb-2 text-lg font-extrabold text-[#14202a]">Credit Usage</h3>
        <p className={paragraphClassName}>Using a large portion of your available credit card limit regularly may indicate higher dependence on credit. Keeping your credit usage under control can support a healthier credit profile.</p>
        <h3 className="mb-2 text-lg font-extrabold text-[#14202a]">Loan and Credit Applications</h3>
        <p className={paragraphClassName}>Every time you formally apply for a loan or credit card, the lender may check your credit report. Multiple applications within a short period can affect your credit profile.</p>
        <h3 className="mb-2 text-lg font-extrabold text-[#14202a]">Length of Credit History</h3>
        <p className={paragraphClassName}>A longer history of responsible credit usage gives lenders more information about your repayment behaviour.</p>
        <h3 className="mb-2 text-lg font-extrabold text-[#14202a]">Existing Credit Accounts</h3>
        <p className={paragraphClassName}>The number of loans, credit cards and other active credit accounts you have can also influence your overall credit profile.</p>
      </section>

      <section id="improve" className="mb-12 scroll-mt-24 sm:mb-14">
        <h2 className={headingClassName}>How to Maintain a Healthy Credit Score</h2>
        <p className={paragraphClassName}>Building a good credit score mainly requires consistent financial habits.</p>
        <p className={paragraphClassName}>Pay your EMIs and credit card bills on time and avoid missing payment due dates. Try to keep your credit card balances within manageable limits and avoid applying for multiple loans or cards unnecessarily.</p>
        <p className={paragraphClassName}>It is also useful to review your credit report occasionally. If you notice an incorrect account, payment status or other information, you can raise a dispute with the respective credit bureau.</p>
        <p className={paragraphClassName}>Credit scores usually improve gradually, so maintaining good repayment behaviour over time is more important than looking for quick fixes.</p>
      </section>

      <section className="mb-12 sm:mb-14">
        <h2 className={headingClassName}>Checking Your Credit Score on Rupyaa</h2>
        <p className={paragraphClassName}>You can check your credit score by providing basic details such as your <strong>name, PAN, date of birth, mobile number and email address</strong>, along with the required consent.</p>
        <p className={paragraphClassName}>Checking your own credit score is considered a <strong>soft enquiry</strong> and does not reduce your credit score.</p>
        <p className={paragraphClassName}>This allows you to regularly understand your credit profile, identify any issues in your report and track changes in your score over time.</p>
      </section>

      <section className="mb-5">
        <h2 className={headingClassName}>FAQ</h2>
        <div className="space-y-3">
          {CREDIT_SCORE_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            let sign = "+";
            let answer: ReactNode = null;
            if (isOpen) {
              sign = "–";
              answer = <p className="m-0 px-5 pb-5 text-base leading-relaxed text-[#33423a] sm:px-6 sm:pb-6">{faq.answer}</p>;
            }
            return (
              <div key={faq.question} className="overflow-hidden rounded-[14px] border border-[#e6ece7] bg-white">
                <button type="button" onClick={() => setOpenFaqIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6" aria-expanded={isOpen}>
                  <span className="text-base font-bold text-[#14202a] sm:text-[17px]">{faq.question}</span>
                  <span className="shrink-0 text-[22px] font-normal leading-none text-primary">{sign}</span>
                </button>
                {answer}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
