const faqs = [
  {
    question: "Who is the best playground equipment manufacturer in India?",
    answer:
      "Maskeen Toys offers playground equipment and play area solutions for schools, preschools, malls, and recreational spaces. Customers can explore suitable options based on their space, budget, and project requirements.",
  },
  {
    question: "How much does playground equipment cost in India?",
    answer:
      "The cost of playground equipment in India depends on the equipment type, materials, size, design, and installation requirements. Contact Maskeen Toys for a quotation based on your project needs and budget.",
  },
  {
    question: "How much does it cost to set up a soft play area in India?",
    answer:
      "The cost of setting up a soft play area depends on the available space, equipment selection, design, and installation. Maskeen Toys can help you explore suitable soft play solutions according to your requirements.",
  },
  {
    question: "What are the different types of outdoor play equipment for children?",
    answer:
      "Outdoor play equipment includes slides, swings, seesaws, climbing structures, playhouses, and multi-play systems. Maskeen Toys offers play equipment options for schools, parks, residential societies, and other recreational spaces.",
  },
  {
    question: "Which playground equipment is best for schools?",
    answer:
      "Slides, swings, climbing structures, activity panels, and age-appropriate play systems are popular choices for schools. Maskeen Toys offers play equipment options to help schools create engaging and suitable play spaces for children.",
  },
  {
    question: "How do I choose a reliable playground equipment supplier?",
    answer:
      "Choose a playground equipment supplier by checking product quality, safety features, customization options, warranty, and installation support. Maskeen Toys can help customers explore playground solutions based on their project requirements.",
  },
  {
    question: "What equipment is required to start an indoor soft play area?",
    answer:
      "An indoor soft play area may include foam climbers, ball pools, soft play blocks, slides, tunnels, and safety flooring. Maskeen Toys offers play area solutions to suit different spaces, age groups, and business requirements.",
  },
  {
    question: "What safety standards should playground equipment meet?",
    answer:
      "Playground equipment should have stable structures, secure fittings, age-appropriate designs, and suitable impact-absorbing flooring. Always check applicable safety standards and maintenance requirements before purchasing equipment from a manufacturer or supplier.",
  },
  {
    question:
      "Can playground equipment be customized according to available space and budget?",
    answer:
      "Yes, playground equipment can often be customized according to available space, budget, design preferences, and children's age groups. Maskeen Toys offers play area solutions that can be discussed according to your specific project requirements.",
  },
  {
    question:
      "Do playground equipment manufacturers provide installation and maintenance services?",
    answer:
      "Many playground equipment manufacturers offer installation assistance and maintenance support, depending on the project. Contact Maskeen Toys to confirm the available installation options, warranty terms, and after-sales services for your requirements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section className="py-10 lg:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[1000px] px-5">
        {/* Heading */}

        <p className="mb-4 text-center font-love uppercase text-[#EF4E74]">
          FAQS
        </p>

        <h2 className="text-center leading-[1] text-[#333] text-[34px] sm:text-[40px] md:text-[58px] font-love">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-[14px] sm:rounded-[16px] bg-[#FDEEF1] border border-[#F6D3DE] px-5 sm:px-6 py-4 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-start gap-2.5 font-bold text-[#1a1a1a] text-sm sm:text-base leading-6 [&::-webkit-details-marker]:hidden">
                <span className="text-[#F15D87] shrink-0">Q.</span>
                <span className="flex-1">{faq.question}</span>
                <span className="text-[#F15D87] shrink-0 text-lg leading-6 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2.5 pl-6 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
