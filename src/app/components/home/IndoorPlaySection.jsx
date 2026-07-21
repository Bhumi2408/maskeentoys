"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function IndoorPlaySection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.6,
  });

  // Bahut chhota hold-zone (0.03) — jaldi trigger, lekin achanak nahi
  // Movement distance bhi chhoti ki — subtle shift, text kabhi cut nahi hogi
  const neckY = useTransform(smoothProgress, [0, 0.03, 0.9, 1], [0, 0, 25, 25]);
  const creamX = useTransform(smoothProgress, [0, 0.03, 0.9, 1], [0, 0, -50, -50]);
  const blueX = useTransform(smoothProgress, [0, 0.03, 0.9, 1], [0, 0, 50, 50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <div>
        {/* ================= TOP ================= */}
        <div className="grid lg:grid-cols-2 items-center">
          {/* ================= LEFT ================= */}
          <div className="px-5 sm:px-8 md:px-10 xl:px-24 py-8 sm:py-10 lg:py-0 text-center md:text-left">
            <span className="font-love uppercase text-[#F15D87] tracking-wide text-sm sm:text-base">
              Fun-Filled Play Zone
            </span>

            <h2 className="mt-3 sm:mt-5 font-love text-[#373737] leading-[1.1] sm:leading-[1] text-[30px] sm:text-[38px] md:text-[48px] xl:text-[62px]">
              Indoor Play Areas
              <br />
              Kids Love
            </h2>

            <p className="mt-3 sm:mt-4 max-w-[720px] mx-auto md:mx-0 text-sm sm:text-base text-[#505050] leading-6 sm:leading-[1.5] tracking-wide">
              Transform any space into a safe, interactive zone where
              imagination meets active play. Designed for dynamic exploration
              and social fun, our play areas inspire creativity while ensuring
              total safety.
            </p>

            {/* Progress */}
            <div className="mt-6 sm:mt-8">
              <div className="flex justify-between mb-2 sm:mb-3">
                <span className="font-capriola text-sm sm:text-base">
                  Activity & Engagement
                </span>
              </div>
              <div className="h-4 sm:h-5 rounded-sm overflow-hidden bg-[#ECECEC]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4 }}
                  className="h-full bg-[#A474B3]"
                />
              </div>
            </div>

            <Link
              href="/our-products"
              className="inline-flex mt-6 sm:mt-8 rounded-full bg-[#59C7D8] hover:bg-[#48b7c9] duration-300 text-white tracking-[1px] sm:tracking-[2px] font-bold px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base"
            >
              View Playarea Collection
            </Link>
          </div>

          {/* ================= RIGHT (image column) ================= */}
          <div className="relative mt-8 md:mt-0">
            <Image
              src="/home/playarea-2.png"
              alt=""
              width={950}
              height={760}
              className="w-full h-full object-cover"
            />

            {/* Giraffe — isi image-column ke andar, apne corner se position */}
            <div
              className="
              absolute
              -bottom-4
              -left-[3%]
              z-10
              w-[85px]
              h-[170px]
              hidden lg:block
              pointer-events-none
              "
            >
              <motion.div style={{ y: neckY }} className="w-full h-full">
                <Image
                  src="/home/giraffe.png"
                  alt=""
                  width={85}
                  height={170}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= CREAM STRIP ================= */}
        <div className="relative z-20 overflow-hidden bg-[#F8F5EF] border-t border-[#ececec] py-5 sm:py-6 md:py-8">
          <motion.div
            style={{ x: creamX }}
            className="flex w-full justify-center items-center gap-6 sm:gap-10 md:gap-20 lg:gap-56 px-2 sm:px-4"
          >
            <h3 className="font-love text-[22px] sm:text-[32px] md:text-[48px] lg:text-[70px] whitespace-nowrap">
              <span className="text-[#F15D87] mr-1 sm:mr-3">#</span>
              Play Area
            </h3>
            <h3 className="font-love text-[22px] sm:text-[32px] md:text-[48px] lg:text-[70px] whitespace-nowrap">
              <span className="text-[#F15D87] mr-1 sm:mr-3">#</span>
              Roll Set
            </h3>
            <h3 className="font-love text-[22px] sm:text-[32px] md:text-[48px] lg:text-[70px] whitespace-nowrap hidden sm:block">
              <span className="text-[#F15D87] mr-1 sm:mr-3">#</span>
              Ball Pool
            </h3>
          </motion.div>
        </div>

        {/* ================= BLUE STRIP ================= */}
        <div className="relative z-30 overflow-hidden rounded-b-[30px] sm:rounded-b-[40px] lg:rounded-b-[55px] bg-[#6EC4EA] py-5 sm:py-6 md:py-8">
          <motion.div
            style={{ x: blueX }}
            className="
            flex
            w-full
            flex-wrap
            justify-center
            items-center
            gap-x-4 gap-y-2 sm:gap-x-8 md:gap-x-14 lg:gap-x-20
            text-white
            font-capriola
            text-[13px] sm:text-[18px] md:text-[26px] lg:text-[32px]
            whitespace-nowrap
            px-3 sm:px-4
            "
          >
            <span>* Climber</span>
            <span>* Jumper</span>
            <span>* Slider</span>
            <span>* Rocker</span>
            <span>* Carousel</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}