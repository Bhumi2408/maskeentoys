"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Sparkles, Heart } from "lucide-react";

import "swiper/css";

const slides = [
  "/home/beam-set.png",
  "/home/soft-rocker.png",
];

const topFeatures = [
  { icon: Sparkles, text: "Creative Play Areas" },
  { icon: Heart, text: "Safe Indoor Adventures" },
  { icon: Sparkles, text: "Early Skill Exploration" },
  { icon: Heart, text: "Designed Specially for Kids" },
];

const bottomFeatures = [
  { icon: Sparkles, text: "Foam Climbers" },
  { icon: Heart, text: "Soft Blocks" },
  { icon: Sparkles, text: "Smooth Edges" },
];

export default function CreativePlaySection() {
  return (
    <section className="relative overflow-hidden py-10 sm:pt-10 lg:pt-14 px-4 sm:px-5 md:px-20">
      {/* Background */}
      <Image
        src="/home/bg2.jpg"
        alt=""
        fill
        priority
        className="-z-10 object-cover pointer-events-none select-none"
      />

      <div className="mx-auto max-w-[1700px] px-3 sm:px-5 lg:px-16">
        {/* Top Small Heading */}
        <p className="mb-3 sm:mb-5 text-center uppercase text-[#EF4D86] font-love text-sm sm:text-base">
          JOYFUL SPACES, HAPPY FACES
        </p>

        {/* Main Heading */}
        <h2
          className="
          mx-auto max-w-[1400px] text-center
          leading-[1.15] sm:leading-[1.1] lg:leading-[1.05]
          text-[#343434]
          text-[26px] sm:text-[36px] md:text-[48px] lg:text-[54px] xl:text-[64px]
          px-2
          "
          style={{ fontFamily: "var(--font-love)" }}
        >
          Where Imagination Comes Alive
          <br />
          Through Every Little
          <br />
          Adventure
        </h2>

        {/* Top Features */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-3 sm:gap-y-5 px-2">
          {topFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <Icon size={16} strokeWidth={2.3} className="text-[#A778C8] shrink-0 sm:w-5 sm:h-5" />
                <span className="font-bold text-[#2C4968] text-sm sm:text-base">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-8 sm:mt-10 grid items-center gap-8 lg:gap-14 md:grid-cols-2">
          {/* LEFT — self-contained slider, no external CSS dependency */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[550px] aspect-[11/12]">
              {/* background shape */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: "url('/home/bg1.png')" }}
              />

              {/* masked slider */}
              <div
                className="absolute inset-0 w-[90%] h-[95%] mx-auto overflow-hidden"
                style={{
                  WebkitMaskImage: "url('/home/mask.png')",
                  maskImage: "url('/home/mask.png')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                <Swiper
                  modules={[Autoplay]}
                  loop
                  speed={900}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className="h-full w-full"
                >
                  {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full">
                        <Image
                          src={item}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 450px, 550px"
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-full bg-[#EF4D86] px-4 sm:px-5 py-1 text-sm sm:text-base font-medium text-white">
              Little Movers, Big Moments
            </span>

            <h3
              className="
              mt-4 leading-[1.15] sm:leading-[1.1]
              text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[48px]
              font-capriola
              "
            >
              Creative Soft Play
              <br />
              Toys for Curious
              <br />
              Kids
            </h3>

            <p className="mt-5 sm:mt-8 max-w-[700px] mx-auto md:mx-0 text-[#5F5F5F] text-sm sm:text-base tracking-wide">
              From cuddly rockers to colorful shapes, our soft play range is
              crafted for endless fun and safe discovery. As a trusted{" "}
              <span className="font-bold text-[#2D63F6]">
                Play Area Manufacturer
              </span>
              , every product is designed to encourage imagination, confidence
              and active learning while ensuring complete safety.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center md:justify-start gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-5">
              {bottomFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <Icon size={16} strokeWidth={2.3} className="text-[#EF4D86] shrink-0 sm:w-[18px] sm:h-[18px]" />
                    <span className="font-bold text-[#2C4968] text-sm sm:text-base">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}