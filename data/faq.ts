export const faqCategories = [
  "General",
  "Programs",
  "Support",
] as const;

export const faqs = [
  {
    category: "General",
    question: "What are enterprise learning programs?",
    answer:
      "Enterprise learning programs help organizations upskill employees through structured training designed for business goals.",
  },
  {
    category: "Programs",
    question: "Can learning paths be customized?",
    answer:
      "Yes. Programs are tailored to your team's objectives, industry, and skill level.",
  },
  {
    category: "Support",
    question: "Will employees receive certificates?",
    answer:
      "Yes. Participants receive certificates after successfully completing eligible programs.",
  },
] as const;