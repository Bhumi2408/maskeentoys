// src/app/components/products/IndoorPlayAreaInfoSection.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Pencil,
  Wrench,
  MapPin,
  Wallet,
  ChevronDown,
} from "lucide-react";

const whyChooseUs = [
  "High-quality, non-toxic, and child-safe materials",
  "Customized design as per space and concept",
  "Durable construction for long-term usage",
  "Safety-focused layout planning",
  "Professional installation and after-sales support",
  "Affordable solutions for commercial and residential projects",
];

const locations = [
  "Play Schools and Preschools",
  "Cafés and Family Restaurants",
  "Shopping Malls and Gaming Zones",
  "Creches and Daycares",
  "Indoor Activity Centers",
  "Residential Communities and Villas",
  "Birthday Party and Kids' Theme Spaces",
];

const benefits = [
  "Encourages early learning through play",
  "Helps develop motor and sensory skills",
  "Promotes physical fitness in a safe environment",
  "Reduces screen time and builds social interaction",
  "Creates a positive and playful atmosphere for kids",
];

const process = [
  { icon: MapPin, title: "Space Analysis" },
  { icon: Pencil, title: "Concept and Theme Planning" },
  { icon: ShieldCheck, title: "3D Layout and Design Approval" },
  { icon: Wrench, title: "Manufacturing and Customization" },
  { icon: ShieldCheck, title: "Installation and Safety Check" },
  { icon: Wallet, title: "Maintenance Support" },
];

const faqs = [
  {
    q: "What is the cost of an indoor play area setup?",
    a: "The cost depends on size, theme, and equipment. Contact us for a customized quote.",
  },
  {
    q: "Do you offer customized designs?",
    a: "Yes, every project is designed as per available space and requirements.",
  },
  {
    q: "Are the materials safe for kids?",
    a: "Yes, we use high-quality, non-toxic, child-friendly materials.",
  },
  {
    q: "How much time does installation take?",
    a: "Time varies by project size, usually from a few days to a few weeks.",
  },
  {
    q: "Can indoor play areas be installed in homes?",
    a: "Yes, we create dedicated play areas for home use as well.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes, we offer maintenance and support services.",
  },
  {
    q: "What age group can use the play area?",
    a: "Play setups are suitable for ages 1 to 10, depending on design.",
  },
  {
    q: "Do you offer theme-based play zones?",
    a: "Yes, we provide cartoon, jungle, underwater, space, and many other themes.",
  },
  {
    q: "Are soft flooring and safety mats included?",
    a: "Yes, flooring options are provided as part of the project.",
  },
  {
    q: "Can you help with business setup guidance?",
    a: "Yes, we assist with planning, layout, and play concept development.",
  },
];

export default function IndoorPlayAreaInfoSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 md:px-12 text-center">
          <h2 className="font-love text-[#21324A] text-[26px] sm:text-[36px] md:text-[42px] leading-[1.15]">
            Best Indoor Play Area Setup in Delhi - Maskeen Toys
          </h2>

          <p className="mt-6 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
            If you are planning to build a fun, interactive, and safe indoor
            play zone for kids, Maskeen Toys is the perfect partner for your
            project. As a trusted name for{" "}
            <Link
              href="/contact"
              className="font-bold text-[#F15D87] hover:underline"
            >
              Indoor Play Area Setup in Delhi
            </Link>
            , we offer complete turnkey solutions including design, equipment
            manufacturing, installation, and support. Our goal is to create play
            spaces that inspire creativity, learning, and joy while ensuring the
            highest safety standards.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
            Indoor play areas have become essential in schools, malls, daycares,
            gaming arenas, cafés, and residential spaces, offering children a
            protected environment to move, explore, and develop skills. At
            Maskeen Toys, we understand this need deeply and provide carefully
            planned play setups with age-appropriate play modules, soft
            flooring, and engaging themes.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12">
          <h2 className="text-center font-capriola text-[#21324A] text-xl sm:text-2xl md:text-[32px] mb-8 sm:mb-10">
            Why Choose{" "}
            <span className="text-[#F15D87] italic">Maskeen Toys?</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-[14px] bg-[#FDEEF1] px-5 sm:px-6 py-4 sm:py-5"
              >
                <span className="w-2 h-2 rounded-full bg-[#F15D87] shrink-0" />
                <span className="text-sm sm:text-base text-[#21324A] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center">
            Whether you need a small toddler play corner or a complete
            multi-level indoor play zone, we design according to your space,
            budget, and purpose.
          </p>
        </div>
      </section>

      {/* ================= WHERE INSTALLED ================= */}
      <section className="bg-[#F8F5EF] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 md:px-12">
          <h2 className="text-center font-capriola text-[#21324A] text-xl sm:text-2xl md:text-[32px] mb-8 sm:mb-10">
            Where Our Indoor Play Areas Can Be Installed
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {locations.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-white border border-[#EAEAEA] text-sm sm:text-base text-[#21324A] font-medium px-5 sm:px-6 py-2.5 sm:py-3"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-center text-sm sm:text-base text-[#5F5F5F]">
            Every space is uniquely designed to keep children engaged, active,
            and entertained.
          </p>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8 md:px-12 text-center">
          <h2 className="font-capriola text-[#21324A] text-xl sm:text-2xl md:text-[32px] mb-8 sm:mb-10">
            Benefits of Indoor Play Areas
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-[12px] bg-[#FDEEF1] px-5 sm:px-6 py-4 text-left"
              >
                <span className="w-2 h-2 rounded-full bg-[#F15D87] shrink-0" />
                <span className="text-sm sm:text-base text-[#21324A]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-[#5F5F5F]">
            Parents appreciate indoor play zones because they provide a safe
            outlet for energy while improving learning and development.
          </p>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#F8F5EF] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12">
          <h2 className="text-center font-capriola text-[#21324A] text-xl sm:text-2xl md:text-[32px] mb-10 sm:mb-12">
            Our Process
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F15D87] mb-3 sm:mb-4">
                    <Icon size={24} className="text-white" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#21324A]">
                    {index + 1}. {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-10 sm:mt-12 text-center text-sm sm:text-base text-[#5F5F5F] max-w-[800px] mx-auto">
            This structured approach ensures quality delivery and a smooth
            project execution experience.
          </p>
          <p className="mt-5 text-center text-sm sm:text-base text-[#5F5F5F] max-w-[800px] mx-auto">
            If you are looking for a professional and trusted{" "}
            <strong>Indoor Play Area Setup in Delhi</strong>, Maskeen Toys is
            ready to help you build an engaging and safe play environment.
          </p>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#FDBE46] hover:bg-[#f3b129] transition duration-300 text-white text-sm sm:text-base font-bold tracking-widest px-8 sm:px-10 py-3 sm:py-[17px]"
            >
              Get In Touch Today
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8 md:px-12">
          <h2 className="text-center font-capriola text-[#21324A] text-xl sm:text-2xl md:text-[32px] mb-8 sm:mb-10">
            FAQs
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="rounded-[14px] sm:rounded-[16px] bg-[#FDEEF1] border border-[#F6D3DE] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#1a1a1a]">
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
