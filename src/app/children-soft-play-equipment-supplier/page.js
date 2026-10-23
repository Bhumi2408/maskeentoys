import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, HelpCircle } from "lucide-react";
import PageBanner from "../components/PageBanner";

const PAGE_URL =
  "https://www.playareamanufacturer.com/children-soft-play-equipment-supplier";

export const metadata = {
  title: "Best Children Soft Play Equipment Supplier for Schools | Maskeen",
  description:
    "Maskeen Toys is a Delhi-based children soft play equipment supplier and school play area equipment supplier. Safe foam sets, slides & ball pools. Get a quote.",
  keywords: [
    "Children Soft Play Equipment Supplier",
    "School Play Area Equipment Supplier",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
};

const whySoftPlay = [
  "**Safe for toddlers** — no hard surfaces, rounded edges, low heights",
  "**Builds motor skills** — crawling, climbing and balancing strengthen muscles and coordination",
  "**Encourages social play** — children learn to share, take turns and play in groups",
  "**Works indoors, all year** — no dependence on weather, heat or pollution",
  "**Easy to clean** — covers wipe down in minutes",
  "**Flexible** — pieces can be moved, stacked and rearranged for different activities",
];

const productRange = [
  {
    title: "Soft Slider Sets",
    text: "Our most popular range for play schools. A soft slider set combines steps, a gentle slope and a cushioned landing, so toddlers can climb up and slide down on their own. Available in 4-piece and 7-piece sets, plus the 4 Step Slider and Step Slide Set (5 pieces) for slightly older children.",
  },
  {
    title: "Soft Roll Sets",
    text: "Roll sets are cylinders, half-rounds and wedges that children roll, climb over and balance on. They are excellent for crawling practice and core strength in children aged 1 to 5. Available as 6-piece and 7-piece sets in a wide choice of colour combinations.",
  },
  {
    title: "Climbers, Beam Sets and Hurdle Climbers",
    text: "For children ready for more challenge, our Multi Climber, Climber Set, Hurdle Climber and Beam Set (6 pieces) build balance, strength and confidence. Each piece has an anti-skid base so it stays in place during play.",
  },
  {
    title: "Ball Pool Sets and Combos",
    text: "Soft-walled ball pools filled with colourful plastic balls are a favourite in every play room. Choose a standalone Ball Pool Set or a Ball Pool Combo that adds a slide or climbing steps.",
  },
  {
    title: "Soft Rockers, Carousels and Crescents",
    text: "Soft Rockers, the Soft Carousel and the Soft Crescent help the youngest children develop balance through gentle rocking and spinning movement. Perfect for playgroup and toddler rooms.",
  },
  {
    title: "Role-Play and Theme Sets",
    text: "The Foam Hut (14 pieces), House Set, Navy Ship Play Set, Tunnel Set, Hexagon Set, Center Set and Curve Set (9 pieces) turn any corner into a space for imaginative play.",
  },
  {
    title: "Complete Custom Soft Play Areas",
    text: "Need a full play room? We design multi-piece soft play areas around your floor plan — with zones for crawling, climbing, sliding and ball play, soft flooring and a theme of your choice.",
  },
];

const introImages = [
  {
    src: "/children-soft-play/kids-adventure-soft-play-equipment.webp",
    alt: "Kids adventure soft play equipment",
  },
  {
    src: "/children-soft-play/kids-soft-cube-pit-climbing-wall.webp",
    alt: "Kids soft cube pit with climbing wall",
  },
  {
    src: "/children-soft-play/multi-activity-soft-play-ball-pool.webp",
    alt: "Multi activity soft play area with ball pool",
  },
];

const gallery = [
  {
    src: "/children-soft-play/hexagon-soft-play-double-slide.webp",
    alt: "Hexagon indoor soft play area with double slide",
  },
  {
    src: "/children-soft-play/indoor-soft-play-ball-pool-slides.webp",
    alt: "Premium indoor soft play playground with ball pool and slides",
  },
  {
    src: "/children-soft-play/multi-activity-indoor-play-area.webp",
    alt: "Multi activity indoor play area equipment",
  },
];

function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-square overflow-hidden rounded-[14px] sm:rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

const schoolBenefits = [
  "**Age-wise planning** — separate zones for playgroup, nursery and KG so toddlers and older children play safely",
  "**Equipment that fits your building** — pieces sized to pass through classroom doors and fit low-ceiling rooms",
  "**Movable, modular sets** — rearrange the room for annual day, PTMs or activity periods",
  "**Washable covers** — wipe-clean vinyl that stands up to daily use and cleaning",
  "**Your school colours** — match the play room to your brand or theme",
  "**One supplier for everything** — soft play, play-school furniture and educational toys from the same manufacturer",
  "**After-sales support** — help with repairs, cover replacement and adding new pieces later",
];

const usedIn = [
  "Play schools and preschools",
  "Kindergartens and nursery wings of CBSE / ICSE schools",
  "Montessori and early-learning centres",
  "Daycares and crèches",
  "Activity rooms in primary schools",
  "Corporate crèches and hospital play corners",
];

const ageGuide = [
  {
    age: "1–2 years",
    level: "Toddler / Playgroup",
    equipment: "Soft rockers, low roll sets, crawling tunnels, small ball pool",
    skills: "Crawling, balance, sensory play",
  },
  {
    age: "2–4 years",
    level: "Nursery",
    equipment: "Soft slider sets, step slide sets, foam huts, ball pool combos",
    skills: "Climbing, sliding, imaginative play",
  },
  {
    age: "4–6 years",
    level: "LKG / UKG",
    equipment: "Climbers, hurdle climbers, beam sets, curve sets",
    skills: "Strength, coordination, confidence",
  },
  {
    age: "6–8 years",
    level: "Primary activity room",
    equipment: "Multi climbers, obstacle sets, larger custom play areas",
    skills: "Agility, teamwork, problem-solving",
  },
];

const materials = [
  "**Soft PU foam** — high-density foam that holds its shape and absorbs impact",
  "**Anti-skid vinyl fabric** — tough, non-toxic, wipeable covers with a grip-friendly finish",
  "**Reinforced frames** — internal support in larger pieces like slides and climbers for long-term stability",
  "**Washable, wear-resistant coverings** — built for daily use in busy classrooms",
  "**Rounded edges and corners** — no hard or sharp surfaces anywhere",
  "**Anti-skid bases** — pieces stay in place on tiled or marble floors",
];

const steps = [
  "**Tell us your requirement** — share your room size, age groups and budget on call or WhatsApp.",
  "**Get a layout and quote** — we suggest the right products and send a layout with pricing.",
  "**Approve colours and design** — choose standard colours or your school theme.",
  "**Manufacturing** — your equipment is made at our unit in Kirti Nagar, New Delhi.",
  "**Delivery and installation** — on-site setup in Delhi NCR; secure packing and setup guidance for the rest of India.",
  "**After-sales support** — we stay available for maintenance, repairs and future additions.",
];

const whyChooseUs = [
  "**Manufacturer, not a trader** — made in our own Delhi unit, so you get factory-direct pricing",
  "**In business since 1948** — decades of experience making play-school furniture and soft play",
  "**Complete range under one roof** — soft play, play-school furniture and educational toys",
  "**Custom sizes and colours** — equipment built for your room, not the other way around",
  "**Pan-India supply** — Delhi, Noida, Gurugram, Ghaziabad, Faridabad and schools across India",
  "**Visit before you buy** — see [our products](/contact) at Kirti Nagar Industrial Area, New Delhi",
];

const faqs = [
  {
    question: "How do I choose the right children soft play equipment supplier?",
    answer:
      "Choose a supplier that manufactures its own equipment, uses high-density foam with non-toxic covers, offers custom sizes and colours, and includes installation and after-sales support. Before ordering, ask to see finished products or a past school project. A manufacturer can usually offer better prices and quicker changes than a trader reselling another company's range.",
  },
  {
    question: "What should I ask a school play area equipment supplier before buying?",
    answer:
      "Ask six things: what foam density and cover material they use, whether the products have safety test reports, how long manufacturing and delivery take, whether installation is included, what warranty they give, and whether you can visit their unit or a past installation. A reliable supplier will answer all six clearly and in writing.",
  },
  {
    question: "Who is a trusted soft play equipment manufacturer in Delhi?",
    answer:
      "Maskeen Toys is a soft play equipment manufacturer based in Kirti Nagar Industrial Area, New Delhi, in business since 1948. It makes soft slider sets, roll sets, climbers, ball pools and complete custom play areas for preschools, schools and indoor play zones, and supplies schools across India.",
  },
  {
    question: "How much does a soft play area cost in India?",
    answer:
      "A complete indoor soft play area in India typically costs around ₹1,000 to ₹1,200 per sq ft, while individual soft play sets for schools cost much less. The final price depends on the area, the number of pieces, foam thickness, and any custom colours or theme. Share your room size with us for an exact quote.",
  },
  {
    question: "What is the price of a soft play set for a play school?",
    answer:
      "A play school soft play set is priced by its size and number of pieces, so a 4-piece slider set costs less than a 7-piece set or a ball pool combo. Most play schools start with two or three sets and add more as admissions grow. Message us on WhatsApp for current prices.",
  },
  {
    question: "What foam is used in good quality soft play equipment?",
    answer:
      "Good quality soft play equipment uses high-density PU foam, which holds its shape, absorbs impact and does not sag after months of daily use. It is covered with thick, non-toxic, anti-skid vinyl fabric that wipes clean easily. Low-density foam is cheaper, but it flattens quickly and stops protecting children.",
  },
  {
    question: "Is soft play equipment safe for toddlers?",
    answer:
      "Yes. Soft play made with high-density foam, non-toxic vinyl covers, rounded edges and anti-skid bases is one of the safest ways for toddlers to climb and slide indoors. For full safety, place it on soft flooring, keep toddlers in a separate zone from older children, and always have an adult supervise.",
  },
  {
    question: "Which soft play equipment is best for a play school?",
    answer:
      "For playgroup and nursery children (1–4 years), the best choices are soft rockers, low roll sets, slider sets and a small ball pool. For LKG and UKG children (4–6 years), add climbers, hurdle climbers and beam sets. Separate zones for each age group make play safer and more fun.",
  },
  {
    question: "How much space is needed for a soft play area in a preschool?",
    answer:
      "A soft play corner can fit into part of a classroom, while a dedicated play room lets children move freely between zones. Leave clear walking space around every piece and keep equipment away from doors and hard furniture. Share your room's length, width and ceiling height, and we will plan a layout that fits.",
  },
  {
    question: "How do I clean and maintain soft play equipment in a school?",
    answer:
      "Wipe the covers daily with a mild soap solution or a child-safe disinfectant and let them air-dry. Avoid harsh chemicals and direct high heat. Check stitching, zips and seams once a week, and replace worn covers early so the foam stays protected and the equipment stays safe.",
  },
  {
    question: "How long does it take to set up a soft play area?",
    answer:
      "Setting up a soft play area takes from a few days for standard sets to a few weeks for a large custom play room, including manufacturing time. Schools in Delhi NCR get on-site installation as soon as the equipment is ready, while schools elsewhere receive packed equipment with setup guidance.",
  },
];

const linkClass = "font-bold text-[#F15D87] hover:underline";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// **bold** aur [text](/link) dono support karta hai
function renderBold(text) {
  return text
    .split(/(\*\*.+?\*\*|\[.+?\]\(.+?\))/g)
    .map((part, i) => {
      const bold = part.match(/^\*\*(.+)\*\*$/);
      if (bold) {
        return (
          <strong key={i} className="font-bold text-[#1a1a1a]">
            {bold[1]}
          </strong>
        );
      }
      const link = part.match(/^\[(.+)\]\((.+)\)$/);
      if (link) {
        return (
          <Link key={i} href={link[2]} className={linkClass}>
            {link[1]}
          </Link>
        );
      }
      return part;
    });
}

function H2({ children, id }) {
  return (
    <h2
      id={id}
      className="font-love text-[#21324A] text-2xl sm:text-3xl md:text-[34px] mt-12 mb-5 leading-tight scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function H3({ children }) {
  return (
    <h3 className="font-capriola text-[#F15D87] text-base sm:text-lg md:text-xl mt-8 mb-3">
      {children}
    </h3>
  );
}

function P({ children }) {
  return (
    <p className="text-sm sm:text-base text-[#5F5F5F] leading-7 mb-5">
      {children}
    </p>
  );
}

function CheckList({ items }) {
  return (
    <div className="mb-8 grid sm:grid-cols-2 gap-3 sm:gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-[12px] bg-[#F8F5EF] px-4 sm:px-5 py-3 sm:py-4"
        >
          <CheckCircle2 size={18} className="text-[#6EBE45] shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base text-[#21324A] leading-6">
            {renderBold(item)}
          </span>
        </div>
      ))}
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
      <a
        href="tel:+919811644688"
        className="inline-flex justify-center rounded-full bg-[#F15D87] hover:bg-[#e04578] transition text-white text-sm sm:text-base font-bold tracking-widest px-8 py-3"
      >
        Call +91-98116-44688
      </a>
      <a
        href="https://wa.me/919811644688"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center rounded-full bg-[#25D366] hover:bg-[#1fb857] transition text-white text-sm sm:text-base font-bold tracking-widest px-8 py-3"
      >
        WhatsApp Us
      </a>
      <Link
        href="/contact"
        className="inline-flex justify-center rounded-full bg-[#FDBE46] hover:bg-[#f3b129] transition text-white text-sm sm:text-base font-bold tracking-widest px-8 py-3"
      >
        Request a Quote
      </Link>
    </div>
  );
}

export default function ChildrenSoftPlayEquipmentSupplierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageBanner
        title="Children Soft Play Equipment Supplier for Schools & Play Areas"
        bgImage="/children-soft-play/hexagon-soft-play-double-slide.webp"
        compactTitle
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          {/* Intro */}

          <h2 className="font-love text-[#21324A] text-2xl sm:text-3xl md:text-[34px] mb-5 leading-tight">
            Best School Play Area Equipment Supplier in Delhi NCR
          </h2>
          <P>
            Maskeen Toys is a{" "}
            <Link href="/" className={linkClass}>
              children soft play equipment supplier and manufacturer
            </Link>{" "}
            based in Kirti Nagar Industrial Area, New Delhi. Since
            1948, our family business has been making play-school furniture,
            educational toys and soft play equipment for schools across India.
            Today we design and manufacture complete soft play ranges — slides,
            roll sets, climbers, ball pools, rockers and custom play areas — for
            preschools, kindergartens, daycares, play cafés and residential
            societies.
          </P>
          <P>
            Because we make every piece ourselves, schools get factory-direct
            prices, sizes that fit their rooms, and colours that match their
            brand. From a single toddler slider set to a fully planned school
            play room, we handle design, manufacturing, delivery and
            installation.
          </P>
          <ImageGrid images={introImages} />

          {/* What is soft play */}

          <H2>What Is Children Soft Play Equipment?</H2>
          <P>
            Children soft play equipment is play furniture made from
            high-density foam and covered with soft, wipeable vinyl or
            PVC-coated fabric. It is designed for young children, usually
            between 1 and 8 years old, to climb, crawl, roll, balance and slide
            indoors without hard edges or sharp corners.
          </P>
          <P>
            Unlike plastic or metal playground equipment, soft play pieces are
            lightweight, cushioned on every side and easy to rearrange. That
            makes them ideal for classrooms, activity rooms and indoor play
            zones where space is limited and safety comes first.
          </P>
          <H3>Why schools and parents prefer soft play:</H3>
          <CheckList items={whySoftPlay} />

          {/* Product range */}

          <H2>Our Children Soft Play Equipment Range</H2>
          <P>
            Every product below is manufactured at our Delhi unit and can be
            made in custom colours or sizes.
          </P>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
            {productRange.map((product) => (
              <div
                key={product.title}
                className="rounded-[16px] border border-[#F6D3DE] bg-[#FDEEF1] px-5 sm:px-6 py-5"
              >
                <h3 className="font-capriola text-[#F15D87] text-base sm:text-lg mb-2">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
                  {product.text}
                </p>
              </div>
            ))}
          </div>

          <ImageGrid images={gallery} />

          <div className="text-center mb-4">
            <Link
              href="/our-products"
              className="inline-flex rounded-full bg-[#FDBE46] hover:bg-[#f3b129] transition text-white text-sm sm:text-base font-bold tracking-widest px-8 sm:px-10 py-3 sm:py-[17px]"
            >
              View All Products
            </Link>
          </div>

          {/* School supplier */}

          <H2>School Play Area Equipment Supplier in Delhi & Across India</H2>
          <P>
            As a school play area equipment supplier, Maskeen Toys helps
            preschools, kindergartens, Montessori centres and primary schools
            create safe indoor play rooms that children love and parents trust.
            We understand how schools work — tight budgets, fixed session dates,
            mixed age groups and daily cleaning routines — and we plan every
            play area around those realities.
          </P>
          <P>
            Our team studies your room size, ceiling height, door width and the
            age groups who will use the space. We then suggest the right mix of
            equipment, share a layout for approval, manufacture the pieces in
            our Delhi unit and deliver them ready to use. Schools in Delhi NCR
            get on-site installation; schools elsewhere in India receive
            carefully packed equipment with setup guidance.
          </P>

          <H3>What Schools Get from Maskeen Toys</H3>
          <CheckList items={schoolBenefits} />

          <H3>Where Our School Play Equipment Is Used</H3>
          <ul className="mb-8 flex flex-wrap gap-x-8 gap-y-2.5">
            {usedIn.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm sm:text-base text-[#5F5F5F]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F15D87] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Age guide */}

          <H2>Choosing the Right Soft Play Equipment by Age</H2>
          <div className="mb-8 overflow-x-auto rounded-[16px] border border-[#F6D3DE]">
            <table className="w-full min-w-[640px] text-left text-sm sm:text-base">
              <thead className="bg-[#F15D87] text-white">
                <tr>
                  <th className="px-4 sm:px-5 py-3 font-bold">Age group</th>
                  <th className="px-4 sm:px-5 py-3 font-bold">Class</th>
                  <th className="px-4 sm:px-5 py-3 font-bold">
                    Recommended equipment
                  </th>
                  <th className="px-4 sm:px-5 py-3 font-bold">
                    Skills it builds
                  </th>
                </tr>
              </thead>
              <tbody>
                {ageGuide.map((row, i) => (
                  <tr
                    key={row.age}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FDEEF1]"}
                  >
                    <td className="px-4 sm:px-5 py-3 font-bold text-[#21324A] whitespace-nowrap">
                      {row.age}
                    </td>
                    <td className="px-4 sm:px-5 py-3 text-[#5F5F5F]">
                      {row.level}
                    </td>
                    <td className="px-4 sm:px-5 py-3 text-[#5F5F5F]">
                      {row.equipment}
                    </td>
                    <td className="px-4 sm:px-5 py-3 text-[#5F5F5F]">
                      {row.skills}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Materials */}

          <H2>Materials and Safety</H2>
          <P>
            Safety is the first thing a school asks about, and it is the first
            thing we design for. Every piece of our children soft play equipment
            is made with:
          </P>
          <CheckList items={materials} />
          <P>
            <strong className="font-bold text-[#1a1a1a]">
              Safety tips we share with every school:
            </strong>{" "}
            place soft play on soft flooring or mats, keep separate zones for
            younger and older children, ensure a teacher supervises play time,
            and check stitching and zips every week.
          </P>

          {/* Steps */}

          <H2>How We Supply and Install — Step by Step</H2>
          <ol className="mb-8 flex flex-col gap-3 sm:gap-4">
            {steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-[12px] bg-[#F8F5EF] px-4 sm:px-5 py-3 sm:py-4"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F15D87] text-white text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm sm:text-base text-[#21324A] leading-6 pt-1">
                  {renderBold(step)}
                </span>
              </li>
            ))}
          </ol>

          {/* Why choose us */}

          <H2>Why Schools Choose Maskeen Toys</H2>
          <CheckList items={whyChooseUs} />

          {/* CTA */}

          <div className="mt-12 sm:mt-16 rounded-[20px] sm:rounded-[24px] bg-[#FDEEF1] px-6 sm:px-10 py-10 sm:py-14 text-center">
            <h2 className="font-love text-[#21324A] text-2xl sm:text-3xl mb-3">
              Planning a Play Room for Your School?
            </h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] mb-6 max-w-[620px] mx-auto">
              Tell us your room size and the age groups you teach. We will
              suggest the right children soft play equipment, share a layout
              and send you a quote — with no obligation.
            </p>
            <CtaButtons />
          </div>

          {/* FAQs */}

          <H2 id="faq">Frequently Asked Questions</H2>
          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-[14px] sm:rounded-[16px] bg-[#FDEEF1] border border-[#F6D3DE] px-5 sm:px-6 py-4 sm:py-5"
              >
                <h3 className="flex items-start gap-2.5 font-bold text-[#1a1a1a] text-sm sm:text-base leading-6">
                  <HelpCircle
                    size={18}
                    className="text-[#F15D87] shrink-0 mt-0.5"
                  />
                  {faq.question}
                </h3>
                <p className="mt-2.5 pl-[26px] text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
