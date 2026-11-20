import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import FaqAccordion from "../components/FaqAccordion";
import QuoteButton from "../components/QuoteButton";

const PAGE_URL = "https://www.playareamanufacturer.com/play-school-toys-manufacturer";

export const metadata = {
  title: "Best Play School Toys Manufacturer in Delhi NCR | Maskeen Toys",
  description:
    "Looking for a Play School Toys Manufacturer in Delhi NCR? Explore educational, indoor, and wholesale play school toys with Maskeen Toys. Contact Us!",
  keywords: [
    "Play School Toys",
    "Play School Toys Manufacturer",
    "Play School Toys Wholesaler in Delhi NCR",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
};

const educationalBenefits = [
  ["Cognitive Development:", "Puzzles, shape sorters, and matching games help improve memory, logical thinking, and problem-solving skills."],
  ["Motor Skills:", "Building blocks, stacking toys, and activity sets help develop hand-eye coordination and fine motor skills."],
  ["Creativity and Imagination:", "Pretend-play toys, role-play sets, and creative activities encourage imaginative thinking."],
  ["Social Interaction:", "Group games and collaborative activities teach children sharing, teamwork, and communication."],
  ["Early Learning:", "Alphabet, number, colour, and shape-based toys engagingly introduce basic educational concepts."],
];

const safetyFactors = [
  ["Check Toy Safety Standards:", "Look for toys that comply with applicable BIS safety requirements. In India, toys covered under the Toys Quality Control Order must carry the required BIS Standard Mark."],
  ["Choose Age-Appropriate Toys:", "Select toys according to children's age, abilities, and developmental stages. Avoid products containing small detachable parts that may create choking hazards for younger children."],
  ["Prefer Child-Friendly Materials:", "Choose toys made from suitable, non-toxic materials with smooth edges and a safe finish."],
  ["Check Durability:", "Strong construction and good-quality materials are important for toys used frequently in classrooms and play areas."],
  ["Easy to Clean and Maintain:", "Toys should be easy to clean regularly to support better classroom hygiene."],
  ["Avoid Sharp Edges:", "Check for pointed corners, loose components, exposed screws, and other potential hazards."],
];

const toddlerToys = [
  ["Building Blocks:", "Help toddlers understand shapes, sizes, colours, and basic construction."],
  ["Shape Sorters:", "Improve hand-eye coordination and shape recognition."],
  ["Alphabet and Number Toys:", "Introduce early literacy and numeracy through playful activities."],
  ["Stacking Toys:", "Support coordination, balance, and problem-solving."],
  ["Pretend-Play Sets:", "Encourage imagination, communication, and role-playing."],
  ["Puzzles and Matching Games:", "Develop memory, concentration, and logical thinking."],
];

const faqs = [
  ["Who is the best play school toys manufacturer in Delhi NCR?", "When choosing a manufacturer, compare toy quality, safety standards, product variety, and pricing. Maskeen Toys is a brand to consider for play school toy requirements in Delhi NCR."],
  ["Where can I buy play school toys wholesale in Delhi NCR?", "You can contact play school toy manufacturers and wholesale suppliers in Delhi NCR. Compare product quality, available categories, and bulk pricing before purchasing."],
  ["What are the most important toys for a new play school?", "Building blocks, puzzles, alphabet toys, number games, shape sorters, pretend-play sets, and indoor activity toys are useful additions to a preschool."],
  ["How do I choose safe toys for preschool children?", "Choose age-appropriate toys that meet applicable BIS safety requirements, have smooth edges, and do not contain hazardous small detachable parts."],
  ["Which indoor toys are suitable for play schools?", "Soft play equipment, activity boards, building blocks, puzzles, pretend-play sets, and educational games are suitable options depending on children's ages and available space."],
].map(([q, a]) => ({ q, a }));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const images = {
  intro: { src: "/play-school-toys/kids-number-puzzle-play-school-toys.webp", width: 1000, height: 1000, alt: "Play School Toys" },
  educational: { src: "/play-school-toys/wooden-counting-stacker.webp", width: 1000, height: 1000, alt: "Play School Toys" },
  toddlers: { src: "/play-school-toys/children-building-blocks-classroom.webp", width: 524, height: 367, alt: "Play School Toys" },
  indoor: { src: "/play-school-toys/magnetic-easel-board.webp", width: 1000, height: 1000, alt: "Play School Toys" },
  wholesale: { src: "/play-school-toys/kids-toy-storage-rack.webp", width: 1000, height: 1000, alt: "Play School Toys" },
};

// Text ek taraf, image doosri taraf (desktop); mobile pe image text ke neeche
function WithImage({ image, reverse = false, children }) {
  return (
    <div className={`mt-12 grid gap-8 lg:gap-12 items-center ${reverse ? "lg:grid-cols-[380px_1fr]" : "lg:grid-cols-[1fr_380px]"}`}>
      <div className={reverse ? "lg:order-2" : ""}>{children}</div>
      <div className={reverse ? "lg:order-1" : ""}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 1024px) 100vw, 380px"
          className="w-full h-auto rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.10)]"
        />
        <div className="mt-5 grid grid-cols-2 gap-3">
          <QuoteButton label="Enquire Now" variant="enquiry" compact />
          <a
            href="https://wa.me/919811644688"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb857] transition text-white text-sm sm:text-[15px] font-bold tracking-wide px-4 py-3"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
}

const linkClass = "font-bold text-[#F15D87] hover:underline";

const h2Class = "font-love text-[#21324A] text-[26px] sm:text-[32px] md:text-[36px] leading-[1.15] mt-12 mb-5";
const pClass = "text-[15px] sm:text-[17px] text-[#4a4a4a] leading-[1.8] mb-5";

function CheckList({ items }) {
  return (
    <ul className="mb-6 flex flex-col gap-3">
      {items.map(([label, text]) => (
        <li key={label} className="flex items-start gap-3 text-[15px] sm:text-[17px] text-[#4a4a4a] leading-[1.7]">
          <CheckCircle2 size={20} className="text-[#F15D87] shrink-0 mt-1" />
          <span>
            <strong className="font-bold text-[#21324A]">{label}</strong> {text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function PlaySchoolToysManufacturerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= TITLE STRIP + BREADCRUMB ================= */}
      <section className="bg-gradient-to-r from-[#F15D87] to-[#FDBE46] py-8 sm:py-10">
        <h1 className="text-center font-love text-white text-[30px] sm:text-[40px] md:text-[48px] px-5">
          Play School Toys
        </h1>
      </section>
      <nav aria-label="Breadcrumb" className="border-b border-[#EEE] bg-white">
        <ol className="mx-auto max-w-[1100px] px-5 sm:px-8 py-3.5 flex flex-wrap items-center gap-1.5 text-sm sm:text-base font-bold">
          <li><Link href="/" className="text-[#21324A] hover:text-[#F15D87]">Home</Link></li>
          <li><ChevronRight size={16} className="text-[#999]" /></li>
          <li><Link href="/our-products" className="text-[#21324A] hover:text-[#F15D87]">Our Products</Link></li>
          <li><ChevronRight size={16} className="text-[#999]" /></li>
          <li className="text-[#F15D87]">Play School Toys</li>
        </ol>
      </nav>

      {/* ================= CONTENT ================= */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <WithImage image={images.intro}>
          <h2 className={`${h2Class} !mt-0`}>Best Play School Toys Manufacturer in Delhi NCR</h2>
          <p className={pClass}>
            Choosing the right toys for a play school is essential for creating an enjoyable, interactive, and learning-friendly environment for young children. Toys are not just meant for entertainment; they also help children develop creativity, communication skills, motor coordination, problem-solving abilities, and social interaction. Maskeen Toys understands the importance of play-based learning and aims to support schools with suitable <Link href="/" className={linkClass}>play school toys</Link> for different age groups and learning activities.
          </p>
          <p className={pClass}>
            As a <Link href="/our-products" className={linkClass}>Play School Toys Manufacturer</Link>, Maskeen Toys focuses on the importance of selecting toys that combine learning, creativity, and fun. Whether you are setting up a new preschool, upgrading an existing classroom, or purchasing toys in bulk, choosing the right collection can make a meaningful difference in children&apos;s everyday learning experiences.
          </p>
          </WithImage>

          <WithImage image={images.educational} reverse>
          <h2 className={`${h2Class} !mt-0`}>Why Are Educational Toys Important for Play Schools?</h2>
          <p className={pClass}>
            Educational toys play an important role in early childhood development. They encourage children to explore new concepts through practical activities rather than relying only on books and instructions.
          </p>
          <p className={`${pClass} font-bold text-[#21324A]`}>Some important benefits of educational toys include:</p>
          <CheckList items={educationalBenefits} />
          </WithImage>

          <h2 className={h2Class}>How to Choose Safe and Durable Toys for a Play School?</h2>
          <p className={pClass}>
            Safety and durability should always be priorities when selecting toys for young children. Since play school toys are used regularly by multiple children, schools should carefully evaluate their quality before purchasing.
          </p>
          <p className={`${pClass} font-bold text-[#21324A]`}>Here are some important factors to consider:</p>
          <CheckList items={safetyFactors} />

          <WithImage image={images.toddlers}>
          <h2 className={`${h2Class} !mt-0`}>What Are the Best Educational Toys for Toddlers?</h2>
          <p className={pClass}>
            The best educational toys for toddlers are those that encourage exploration, sensory development, creativity, and basic learning. Simple toys with interactive features are often more useful than complicated products.
          </p>
          <p className={`${pClass} font-bold text-[#21324A]`}>Some popular categories include:</p>
          <CheckList items={toddlerToys} />
          <p className={pClass}>
            Schools should select toys according to the age group and learning objectives of their students.
          </p>
          </WithImage>

          <WithImage image={images.indoor} reverse>
          <h2 className={`${h2Class} !mt-0`}>Why Choose Play School Indoor Toys for Preschool Classrooms?</h2>
          <p className={pClass}>
            Indoor play is an important part of a preschool routine. It gives children opportunities to participate in structured and free-play activities within a classroom or designated play area.
          </p>
          <p className={pClass}>
            Suitable play school indoor toys can include soft play equipment, building blocks, activity boards, pretend-play sets, puzzles, educational games, and other interactive learning resources.
          </p>
          <p className={pClass}>
            These toys can help schools create activity-based learning spaces where children can explore, interact, and develop different skills. When selecting indoor toys, consider the available classroom space, age group, number of children, and supervision requirements.
          </p>
          </WithImage>

          <WithImage image={images.wholesale}>
          <h2 className={`${h2Class} !mt-0`}>Where Can You Buy Play School Toys Wholesale in Delhi NCR?</h2>
          <p className={pClass}>
            Preschools, nursery schools, daycare centres, and educational institutions often require multiple types of toys in larger quantities. Purchasing <Link href="/new-arrival" className={linkClass}>play school toys wholesale</Link> can make it easier to plan a complete classroom collection while sourcing different categories of educational and indoor play products.
          </p>
          <p className={pClass}>
            When choosing a wholesale supplier or manufacturer, consider product variety, age suitability, material quality, safety compliance, durability, and after-sales support. Comparing product specifications and quotations can also help schools make informed purchasing decisions.
          </p>
          <p className={pClass}>
            Maskeen Toys serves as a brand for buyers exploring play school toy solutions in Delhi NCR. Schools and institutions can connect with the company to discuss their toy requirements and identify suitable options for their learning and play environments.
          </p>
          </WithImage>

          <div className="mt-12 rounded-[24px] bg-[#FDEEF1] px-6 sm:px-10 py-8 sm:py-10">
            <h2 className={`${h2Class} !mt-0`}>Why Consider Maskeen Toys for Play School Toys?</h2>
            <p className={pClass}>
              Selecting the right toy collection is an important step towards creating an engaging preschool environment. Maskeen Toys aims to help buyers explore suitable play school toy options for early learning, indoor activities, and classroom requirements.
            </p>
            <p className={pClass}>
              Whether you are planning a new play school or looking to upgrade an existing learning space, choosing toys based on safety, age suitability, educational value, and durability can help create a better play-based learning experience.
            </p>
            <p className={`${pClass} !mb-0`}>
              Looking for a <Link href="/contact" className={linkClass}>Play School Toys Manufacturer in Delhi NCR</Link>? Connect with Maskeen Toys to discuss your requirements and explore suitable play school toys for your institution.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FBF9F3] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <h2 className="text-center font-love text-[#21324A] text-[26px] sm:text-[32px] md:text-[38px]">
            FAQs
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
