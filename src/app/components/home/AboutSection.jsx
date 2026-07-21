"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";

export default function AboutSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const beeY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 300], // jitna niche le jana ho
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{
        backgroundImage: "url('/home/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="grid lg:grid-cols-[2fr_1fr] items-center gap-10 lg:gap-14">
          <div>
            <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-14">
              {/* LEFT */}

              <div className="relative mx-auto w-[240px] h-[280px] sm:w-[300px] sm:h-[340px] md:w-[320px] md:h-[370px] lg:w-[350px] lg:h-[400px]">
                <Image
                  src="/home/back.png"
                  alt=""
                  fill
                  priority
                  className="object-contain scale-[1.05]"
                />

                <div
                  className="absolute inset-0"
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
                  <Image
                    src="/home/about-left.png"
                    alt="Soft Play Area"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* CENTER */}

              <div className="text-center md:text-left px-2 sm:px-5">
                <span className="font-love text-[#ff4d88] text-sm sm:text-base">
                  ABOUT US
                </span>

                <h2 className="font-capriola text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] leading-[1.1] sm:leading-[1.05] mt-3 sm:mt-5">
                  Soft Play area
                  <br />
                  manufacturer
                </h2>

                <p className="mt-2 text-sm sm:text-base text-[#5F5F5F] tracking-wide leading-6 sm:leading-7">
                  Maskeen Toys, a trusted
                  <Link
                    href="soft-play-area-manufacturer-in-delhi/"
                    className="text-[#2563eb] font-bold"
                  >
                    {" "}
                    Soft Play Area Manufacturer,
                  </Link>{" "}
                  is committed to redefining play through thoughtfully designed,
                  safe, and high-quality soft play and indoor play area
                  solutions.
                </p>

                <button className="mt-5 sm:mt-7 py-3 sm:py-[17px] px-8 sm:px-10 rounded-full bg-[#FDBE46] hover:bg-[#f3b129] transition text-white text-xs sm:text-sm tracking-widest font-bold">
                  <Link href="/about-us">Know More</Link>
                </button>
              </div>
            </div>
            {/* ===================== STATS ===================== */}

            <div className="mt-12 sm:mt-16 lg:mt-24 relative px-4 sm:px-10 lg:pl-20">
              {/* Flower */}

              <Image
                src="/home/flower.png"
                alt=""
                width={90}
                height={90}
                className="absolute left-1/2 -translate-x-1/2 top-5 z-20 hidden lg:block"
              />

              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                {/* Card 1 */}

                <div className="text-left">
                  <h3 className="font-love text-[#6EBE45] text-[42px] sm:text-[56px] md:text-[70px] leading-none">
                    <CountUp end={346} duration={2} enableScrollSpy />+
                  </h3>

                  <h4 className="mt-3 sm:mt-5 font-capriola text-[#17355F] text-[16px] sm:text-[22px] md:text-[28px] leading-snug">
                    Playareas Installed
                  </h4>
                </div>

                {/* Card 2 */}

                <div className="text-left">
                  <h3 className="font-love text-[#FF5A84] text-[42px] sm:text-[56px] md:text-[70px] leading-none">
                    <CountUp end={750} duration={2} enableScrollSpy />+
                  </h3>

                  <h4 className="mt-3 sm:mt-5 font-capriola text-[#17355F] text-[16px] sm:text-[22px] md:text-[28px] leading-snug">
                    Happy Clients
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative mx-auto px-2 md:px-0 mt-4 lg:mt-0 max-w-[280px] sm:max-w-[340px] lg:max-w-none">
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-xl">
              <Image
                src="/home/about-right.jpeg"
                alt="Play Area"
                width={420}
                height={660}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Bee */}

            <motion.div
              style={{ y: beeY }}
              className="absolute -left-6 sm:-left-10 lg:-left-20 top-24 sm:top-32 lg:top-40 hidden sm:block z-20"
            >
              <Image
                src="/home/bee.png"
                alt="Bee"
                width={80}
                height={80}
                className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}