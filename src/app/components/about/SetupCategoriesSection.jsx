// src/app/components/about/SetupCategoriesSection.jsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const sliderImages = ["/about/center-set.png", "/home/soft-corousel.png"];

const categories = [
  {
    icon: "/about/school.png",
    title: "Setup For Schools",
    tag: "New",
  },
  {
    icon: "/about/society.png",
    title: "Setup For Societies",
    tag: "Best",
  },
  {
    icon: "/about/park.png",
    title: "Setup For Amusement Parks",
    tag: "New",
  },
  {
    icon: "/about/hotel.png",
    title: "Setup For Hotels & Resorts",
    tag: "Popular",
    active: true,
  },
];

export default function SetupCategoriesSection() {
  return (
    <section className="bg-[#FAFAFA] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ================= LEFT (independent slider) ================= */}
          <div className="relative w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-[16px] sm:rounded-[24px] overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".setup-prev",
                nextEl: ".setup-next",
              }}
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="h-full w-full"
            >
              {sliderImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Setup example ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom nav arrows */}
            <button
              className="setup-prev absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white"
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              className="setup-next absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white"
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>
          </div>

          {/* ================= RIGHT (static category list) ================= */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {categories.map((item, index) => (
              <div
                key={index}
                className={`
                flex items-center justify-between gap-4
                rounded-[14px] sm:rounded-[18px]
                border
                px-5 sm:px-8
                py-5 sm:py-6
                ${
                  item.active
                    ? "bg-[#7ED3F8] border-[#7ED3F8]"
                    : "bg-white border-[#EAEAEA]"
                }
                `}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <Image
                    src={item.icon}
                    alt=""
                    width={56}
                    height={56}
                    className={`w-14 h-14 sm:w-20 sm:h-20 shrink-0 ${
                      item.active ? "brightness-0 invert" : ""
                    }`}
                  />

                  <h3
                    className={`font-capriola text-base sm:text-xl md:text-2xl leading-tight ${
                      item.active ? "text-white" : "text-[#21324A]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                <span className="shrink-0 rounded-full text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 text-white bg-[#FC6F3C]">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
