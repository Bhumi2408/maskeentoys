// src/app/components/products/ProductsInfoSection.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Hammer,
  Palette,
  Sparkles,
  Headphones,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const range = [
  {
    title: "Slider sets",
    desc: "4-piece, 7-piece and 4-step sliders for confident climbing and sliding",
  },
  {
    title: "Roll and beam sets",
    desc: "build balance, coordination and core strength",
  },
  {
    title: "Climbers",
    desc: "hurdle climber, multi climber and climber sets for active play",
  },
  {
    title: "Ball pool sets and combos",
    desc: "a favourite in every indoor playground",
  },
  {
    title: "Foam huts, house sets and tunnel sets",
    desc: "perfect for imaginative and role play",
  },
  {
    title: "Soft rocker, carousel, crescent and hexagon sets",
    desc: "fun shapes that add variety to any layout",
  },
  {
    title: "Toddler sets",
    desc: "gentle, low-height equipment designed for the youngest players",
  },
  {
    title: "Ready-made play area layouts",
    desc: "complete setups you can order as they are or modify",
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Safety comes first.",
    desc: "Our children soft play equipment uses soft-edged, non-toxic materials with sturdy internal structures and cushioned exteriors. This reduces the risk of bumps and gives parents and teachers peace of mind.",
  },
  {
    icon: Hammer,
    title: "Built to last.",
    desc: "Play areas see hundreds of children every week. Our equipment is made for that kind of daily use, with reinforced stitching, anti-skid surfaces and washable covers.",
  },
  {
    icon: Palette,
    title: "Custom designs.",
    desc: "Every space is different. We help you plan layouts according to your area, age group, budget and theme, whether you want a jungle, ocean, space or simple colour-blocked look.",
  },
  {
    icon: Sparkles,
    title: "Real developmental value.",
    desc: "Soft play builds balance, motor skills, confidence, teamwork and imagination. Children enjoy it as play, and parents see it as healthy activity.",
  },
  {
    icon: Headphones,
    title: "Support beyond delivery.",
    desc: "We offer installation guidance, maintenance tips and after-sales assistance, so your play area stays safe and attractive for years.",
  },
];

const applications = [
  "Pre-schools, daycares and Montessori setups",
  "Schools and learning centres",
  "Indoor playgrounds and kids’ activity centres",
  "Shopping malls and family entertainment zones",
  "Play cafés and restaurants",
  "Resorts, clubs and community centres",
];

const chooseTips = [
  {
    title: "Age group:",
    desc: "Choose lower, gentler pieces for toddlers and add climbers and slides for older children.",
  },
  {
    title: "Available space:",
    desc: "Measure your area first. A good layout leaves open walking space around the equipment.",
  },
  {
    title: "Footfall:",
    desc: "Busy venues like malls and play cafés should pick heavy-duty sets.",
  },
  {
    title: "Theme and budget:",
    desc: "Start with core pieces like a slider, roll set and ball pool, then add more over time.",
  },
];

const faqs = [
  {
    q: "Who is the best children soft play equipment manufacturer and supplier in Delhi NCR?",
    a: "The best manufacturer is one with proven experience, quality materials, custom designs, installation support and a visible client list. Maskeen Toys, based in Kirti Nagar Industrial Area, New Delhi, is a trusted children soft play equipment manufacturer and supplier serving schools, daycares, indoor playgrounds and play cafés across Delhi NCR.",
  },
  {
    q: "Where can I buy children soft play equipment in Delhi?",
    a: "You can buy children soft play equipment directly from manufacturers in Delhi’s industrial areas, such as Kirti Nagar. Buying direct from a manufacturer like Maskeen Toys gives you factory pricing, custom sizes and colours, and installation support, compared to buying from a middleman or online marketplace.",
  },
  {
    q: "Which is the best soft play equipment supplier near me in Delhi NCR?",
    a: "Choose a supplier that delivers and installs in your area, such as Delhi, Noida, Gurgaon, Ghaziabad or Faridabad. Maskeen Toys supplies children soft play equipment from its New Delhi facility and can guide you on layout, delivery and installation. Call +91-981-164-4688 to confirm service in your location.",
  },
  {
    q: "What is the price of children soft play equipment in Delhi?",
    a: "Prices vary by number of pieces, size, material quality and customization. Individual items like a slider or ball pool cost much less than a complete themed play area. Share your space size, age group and budget with the manufacturer to receive an accurate quote for your setup.",
  },
  {
    q: "Which is better, a soft play manufacturer or a trader?",
    a: "A manufacturer is usually better because it controls material quality, offers custom designs, quotes factory-direct prices and provides after-sales support. A trader depends on another maker and often cannot customize or fix issues quickly. For long-term use in schools and play zones, buying directly from a manufacturer is safer.",
  },
  {
    q: "How do I choose a reliable kids amusement play equipment supplier?",
    a: "Check the supplier’s experience, material quality (PU foam, anti-skid vinyl, reinforced frames), customization options, installation support, after-sales service and client portfolio. Ask to see previous installations. A reliable supplier will explain safety features clearly and give you a transparent quote instead of vague promises.",
  },
  {
    q: "Which soft play equipment is best for pre-schools and daycares in Delhi?",
    a: "For pre-schools and daycares, choose low-height, gentle sets such as toddler sets, roll sets, tunnels, ball pools, foam huts and small sliders. These support balance and motor development while keeping risk low. Maskeen Toys offers children soft play equipment designed for play schools, Montessori setups and daycare centres.",
  },
  {
    q: "Can I get a complete soft play area setup from one supplier in Delhi?",
    a: "Yes. A full-service supplier handles design, manufacturing, delivery, installation and after-sales support together. Maskeen Toys offers ready-made play area layouts as well as custom designs, so you can get everything from sliders and ball pools to complete play zones from a single source.",
  },
  {
    q: "Does Maskeen Toys supply soft play equipment outside Delhi?",
    a: "Yes, Maskeen Toys supplies play school and soft play products beyond Delhi, including other cities in India. Delivery and installation depend on your location and order size, so contact the team on +91-981-164-4688 or WhatsApp to confirm availability for your city.",
  },
  {
    q: "Why should I buy soft play equipment from Maskeen Toys?",
    a: "Maskeen Toys offers safe, soft-edged and non-toxic children soft play equipment, customizable designs, durable materials and installation guidance with after-sales support. Its wide range includes sliders, climbers, ball pools, foam huts and ready play areas, suited to schools, indoor playgrounds and play cafés.",
  },
  {
    q: "How long does it take to manufacture and install a soft play area?",
    a: "Timelines depend on order size, customization and your location. Standard items are usually faster, while custom themed play areas take longer for design and production. Ask the manufacturer for a clear delivery and installation schedule when you confirm your order, and share your opening date early.",
  },
  {
    q: "Is soft play equipment a good business for indoor playgrounds and play cafés?",
    a: "Yes. Soft play zones draw families, birthday parties and repeat visits, which makes them popular in malls, cafés and activity centres. Durable, easy-to-clean equipment keeps running costs low. Success depends on good layout, safety, hygiene and choosing equipment suited to your target age group.",
  },
];

const sectionTitle =
  "text-center font-love text-[#21324A] text-[28px] sm:text-[36px] md:text-[42px] leading-[1.15]";
const bodyText = "text-[15px] sm:text-[17px] text-[#4a4a4a] leading-[1.8]";

export default function ProductsInfoSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ================= WHAT IS ================= */}
      <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className={sectionTitle}>
            What Is{" "}
            <span className="text-[#F15D87] italic">
              Children Soft Play Equipment?
            </span>
          </h2>

          <p className={`mt-6 ${bodyText}`}>
            Children&apos;s soft play equipment includes foam-filled,
            vinyl-covered play structures such as sliders, climbers, roll sets,
            beam sets, tunnels, ball pools, and soft houses. The cushioned
            surfaces and rounded shapes let children climb, crawl, roll and
            slide with far less risk of injury than hard play structures.
            Reinforced frames, thick PU foam and wear-resistant covers help each
            piece keep its shape and colour even after months of daily play.
          </p>
        </div>
      </section>

      {/* ================= RANGE ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className={sectionTitle}>
            Our Range of{" "}
            <span className="text-[#F15D87] italic">
              Kids Amusement Play Equipment
            </span>
          </h2>

          <p className={`mt-4 text-center ${bodyText}`}>
            Our collection covers different age groups and different kinds of
            spaces:
          </p>

          <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
            {range.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-[14px] bg-[#FDEEF1] px-5 py-4"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#F15D87] shrink-0 mt-1"
                />
                <p className={bodyText}>
                  <strong className="font-bold text-[#21324A]">
                    {item.title}:
                  </strong>{" "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className={`mt-8 text-center ${bodyText}`}>
            Every product can be combined with others, so you can start small
            and expand your play zone later.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#F8F5EF] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className={sectionTitle}>
            Why Choose{" "}
            <span className="text-[#F15D87] italic">Maskeen Toys?</span>
          </h2>

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[20px] bg-white p-6 sm:p-7 shadow-sm"
                >
                  <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F15D87]">
                    <Icon size={22} className="text-white" />
                  </span>
                  <h3 className="mt-4 font-capriola text-[#21324A] text-lg sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] sm:text-base text-[#5F5F5F] leading-7">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHERE TO USE ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className={sectionTitle}>
            Where Can You Use Our{" "}
            <span className="text-[#F15D87] italic">Soft Play Equipment?</span>
          </h2>

          <p className={`mt-4 text-center ${bodyText}`}>
            Our kids amusement play equipment suits a wide range of spaces:
          </p>

          <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {applications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full bg-[#F8F5EF] px-5 sm:px-6 py-3 sm:py-4"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#F15D87] shrink-0" />
                <span className="font-capriola text-sm sm:text-base text-[#21324A]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className={`mt-8 sm:mt-10 text-center max-w-[900px] mx-auto ${bodyText}`}>
            Each installation is planned with clear entry and exit paths, soft
            flooring and age-appropriate zoning, so children can play freely and
            staff can supervise easily.
          </p>
        </div>
      </section>

      {/* ================= MATERIALS ================= */}
      <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className={sectionTitle}>
            Materials and{" "}
            <span className="text-[#F15D87] italic">Build Quality</span>
          </h2>

          <p className={`mt-6 ${bodyText}`}>
            Quality is visible in the details. We use premium soft PU foam,
            anti-skid vinyl fabric, reinforced frames and washable,
            wear-resistant coverings. These materials stay firm under pressure,
            resist daily wear and clean up quickly, which matters in any busy
            play area.
          </p>
        </div>
      </section>

      {/* ================= HOW TO CHOOSE ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className={sectionTitle}>
            How to Choose the{" "}
            <span className="text-[#F15D87] italic">
              Right Soft Play Equipment
            </span>
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {chooseTips.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[16px] bg-[#FDEEF1] px-5 sm:px-6 py-5"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F15D87] text-white font-bold shrink-0">
                  {index + 1}
                </span>
                <p className={bodyText}>
                  <strong className="font-bold text-[#21324A]">
                    {item.title}
                  </strong>{" "}
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className={`mt-8 text-center ${bodyText}`}>
            Not sure where to begin? Our team will suggest a layout that fits
            your space and budget.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#F8F5EF] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 text-center">
          <div className="rounded-[24px] bg-[#FDEEF1] px-6 sm:px-12 py-10 sm:py-14">
            <h2 className={sectionTitle}>
              Plan Your Play Area with{" "}
              <span className="text-[#F15D87] italic">Maskeen Toys</span>
            </h2>

            <p className={`mt-5 ${bodyText}`}>
              Whether you are opening a new indoor playground or upgrading your
              school’s play zone, Maskeen Toys is ready to help. Share your
              space size and requirements, and we will recommend the right
              combination of products. Call{" "}
              <a
                href="tel:+919811644688"
                className="font-bold text-[#F15D87] hover:underline"
              >
                +91-981-164-4688
              </a>{" "}
              or message us on WhatsApp to get your quote today.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="tel:+919811644688"
                className="inline-flex justify-center rounded-full bg-[#F15D87] hover:bg-[#e04578] transition text-white text-sm sm:text-base font-bold tracking-widest px-8 py-3"
              >
                Call +91-981-164-4688
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
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className={sectionTitle}>Frequently Asked Questions</h2>

          <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="rounded-[16px] bg-[#FBF9F3] border border-[#EAEAEA] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left"
                  >
                    <h3 className="font-capriola text-[15px] sm:text-[17px] text-[#21324A] leading-snug">
                      {index + 1}. {item.q}
                    </h3>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#F15D87] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer DOM me hamesha rahta hai (SEO), sirf CSS se hide hota hai */}
                  <p
                    className={`px-5 sm:px-7 pb-4 sm:pb-5 text-[15px] sm:text-base text-[#5F5F5F] leading-7 ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    {item.a}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
