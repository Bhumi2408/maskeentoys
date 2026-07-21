// src/app/components/contact/ContactHeroSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { ChevronDown } from "lucide-react";

const highlights = [
  {
    title: "Central Location",
    desc: "Maskeen Toys Pvt. Ltd. 10/62 S.S.J.M.D. Tower Kirti Nagar Industrial Area New Delhi-110015",
  },
  {
    title: "Customer Support",
    desc: "Our dedicated support team is always ready to assist you with any queries related to our products, orders, or partnerships. Whether you’re a school representative, distributor, or parent, feel free to reach out — we ensure quick and helpful responses.",
  },
  {
    title: "Business & Bulk Enquiries",
    desc: "Are you looking for bulk purchases, dealership opportunities, or school setup packages? We specialize in large-scale toy and furniture supplies tailored to preschools, daycare centers, and institutions across India. Contact our sales team at sales@maskeentoys.com for catalogues and quotations.",
  },
];

const stats = [
  { count: 346, label: "Playareas Installed", color: "#6EBE45" },
  { count: 750, label: "Happy Clients", color: "#7ED3F8" },
];

export default function ContactHeroSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Background decorative image */}
      <Image
        src="/bg.jpg"
        alt="background"
        fill
        className="object-cover pointer-events-none select-none -z-0"
      />

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ================= LEFT ================= */}
          <div>
            <span className="font-love text-[#F15D87] text-sm sm:text-base tracking-wide">
              Find US Here
            </span>

            <h2
              className="
              mt-3 sm:mt-4
              font-capriola
              text-[#1a1a1a]
              leading-[1.1]
              text-[32px]
              sm:text-[42px]
              md:text-[48px]
              "
            >
              Reach Out and Connect
            </h2>

            {/* Dropdown/Accordion items */}
            <div className="mt-8 sm:mt-10 flex flex-col">
              {highlights.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center gap-3 py-4 sm:py-5 text-left"
                    >
                      <ChevronDown
                        size={20}
                        className={`text-[#1a1a1a] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span className="font-medium text-sm sm:text-base text-[#1a1a1a] font-capriola">
                        {item.title}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="pl-8 pb-4 sm:pb-5 text-[#5F5F5F] leading-6">
                        {item.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[8px] px-6 sm:px-8 py-8 text-center"
                  style={{ backgroundColor: item.color }}
                >
                  <h3 className="font-love text-white text-[36px] sm:text-[44px] md:text-[64px] leading-none">
                    <CountUp end={item.count} duration={2} enableScrollSpy />+
                  </h3>
                  <p className="mt-2 sm:mt-3 text-white text-sm sm:text-base font-medium font-capriola">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT (map) ================= */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[600px] rounded-[16px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Maskeen+Toys+Pvt+Ltd,+SSJMD+tower,+10/62,+Block+10,+Kirti+Nagar+Industrial+Area,+New+Delhi,+Delhi+110015&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maskeen Toys Location"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}