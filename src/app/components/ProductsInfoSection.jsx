// src/app/components/products/ProductsInfoSection.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Palette,
  Building2,
  School,
  ChevronDown,
} from "lucide-react";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Safe & Child-Friendly",
    desc: "All materials used in our Children Soft Play Equipment are soft-edged, non-toxic, durable, and compliant with child safety standards. We focus on sturdy internal structures combined with cushioned exteriors to prevent injury and ensure worry-free play.",
  },
  {
    icon: Palette,
    title: "Custom-Made Designs",
    desc: "From colourful ball pits and crawl tunnels to climbing frames, foam blocks, soft slides, and learning-themed structures, we provide complete flexibility to design your play area based on available space and theme.",
  },
  {
    icon: Building2,
    title: "Perfect for Commercial Spaces",
    desc: "Our Commercial Soft Play Equipment is engineered for high-traffic usage and long-term performance. Shopping malls, play cafés, amusement centers, and clubs trust Maskeen Toys because our equipment is built to last.",
  },
  {
    icon: School,
    title: "Ideal for Schools & Educational Spaces",
    desc: "Soft play is more than entertainment — it supports emotional and cognitive growth. As a School Play Area Equipment Supplier, we ensure each product helps children learn balance, movement, decision-making, teamwork, and confidence.",
  },
];

const applications = [
  "Indoor Play Areas",
  "Pre-Schools & Daycares",
  "Schools & Montessori Setups",
  "Play Cafés & Restaurants",
  "Kids' Activity Clubs",
  "Resorts & Community Centers",
];

const qualityMaterials = [
  "Soft PU Foam",
  "Anti-Skid Vinyl Fabric",
  "Reinforced Frames",
  "Washable & Wear-Resistant Coverings",
];

const faqs = [
  {
    q: "What is the ideal age group for soft play equipment?",
    a: "Soft play equipment is suitable for children aged 1 to 8 years depending on the layout and design.",
  },
  {
    q: "How much space do I need for a commercial soft play setup?",
    a: "We customize based on available space — from small corner installations to large indoor play zones.",
  },
  {
    q: "Does Maskeen Toys provide installation support?",
    a: "Yes, we offer complete installation guidance and layout planning.",
  },
  {
    q: "Can the equipment be customized for themes?",
    a: "Absolutely — we offer colours and themes like jungle, ocean, cartoon, educational and more.",
  },
  {
    q: "Is the soft play equipment safe and washable?",
    a: "Yes, all products are made from soft, durable, and easy-to-clean materials suitable for long-term use.",
  },
];

export default function ProductsInfoSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2
            className="
            font-love
            text-[#21324A]
            leading-[1.15]
            text-[28px]
            sm:text-[38px]
            md:text-[44px]
            "
          >
            Commercial & Children Soft Play Equipment,
            <br className="hidden sm:block" /> and School Play Area Equipment
            Supplier
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
            Creating safe, engaging, and development-friendly play environments
            is essential for schools, commercial spaces, indoor playgrounds,
            malls, clubs, daycares, and learning centers. At{" "}
            <Link
              href="/contact"
              className="text-[#2563eb] font-bold hover:underline"
            >
              Maskeen Toys
            </Link>
            , we specialize in{" "}
            <strong>
              Commercial Soft Play Equipment, Children Soft Play Equipment,
            </strong>{" "}
            and <strong>School Play Area Equipment</strong> designed to inspire
            creativity, enhance physical growth, and promote safe play for all
            age groups.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
            Our soft play solutions are thoughtfully designed to encourage
            balance, coordination, motor skill development, and imaginative
            learning. Whether you are building a small indoor play zone or a
            full-scale commercial soft play project, Maskeen Toys brings
            experience, innovation, and quality together to deliver value.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className="text-center font-love text-[#21324A] text-[28px] sm:text-[36px] md:text-[42px]">
            Why Choose{" "}
            <span className="text-[#F15D87] italic">Maskeen Toys?</span>
          </h2>

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-5 rounded-[20px] bg-[#FDEEF1] p-5 sm:p-7"
                >
                  <span className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-[#F15D87]">
                    <Icon size={22} className="text-white" />
                  </span>

                  <div>
                    <h3 className="font-capriola text-[#21324A] text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5F5F5F] leading-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="bg-[#F8F5EF] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className="text-center font-love text-[#21324A] text-[28px] sm:text-[36px] md:text-[42px]">
            Applications
          </h2>

          <p className="mt-3 text-center text-sm sm:text-base text-[#5F5F5F] max-w-[700px] mx-auto">
            Our soft play systems are suitable for:
          </p>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {applications.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-full bg-white px-5 sm:px-6 py-3 sm:py-4 shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#F15D87] shrink-0" />
                <span className="font-capriola text-sm sm:text-base text-[#21324A]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-center text-sm sm:text-base text-[#5F5F5F] max-w-[800px] mx-auto leading-6 sm:leading-7">
            Every play zone is installed with proper planning, ensuring safe
            entry/exit paths, soft flooring, and age-appropriate equipment.
          </p>
        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className="font-love text-[#21324A] text-[28px] sm:text-[36px] md:text-[42px]">
            Quality That{" "}
            <span className="text-[#F15D87] italic">Speaks for Itself</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#5F5F5F]">
            Maskeen Toys manufactures using premium materials like:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {qualityMaterials.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-[#7ED3F8] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
            We also provide after-sales support, installation guidance, and
            maintenance assistance.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
            If you&apos;re planning to set up a safe, colourful, fun-filled play
            area,<strong>Maskeen Toys</strong> is your trusted partner.
          </p>

          <Link
            href="/contact"
            className="
            inline-flex
            mt-7
            sm:mt-8
            rounded-full
            bg-[#FDBE46]
            hover:bg-[#f3b129]
            transition
            duration-300
            text-white
            text-sm
            sm:text-base
            font-bold
            tracking-widest
            px-8
            sm:px-10
            py-3
            sm:py-[17px]
            "
          >
            📞 Contact Us Today
          </Link>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8 md:px-12 lg:px-16">
          <h2 className="text-center font-love text-[#21324A] text-[28px] sm:text-[36px] md:text-[42px]">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="rounded-[16px] bg-white border border-[#EAEAEA] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left"
                  >
                    <span className="font-capriola text-sm sm:text-base text-[#21324A]">
                      {index + 1}. {item.q}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#F15D87] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="px-5 sm:px-7 pb-4 sm:pb-5 text-sm text-[#5F5F5F] leading-6">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
