"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const galleryImages = [
  "/home/rollset-4.png",
  "/home/slider-9.png",
  "/home/rollset-12.png",
  "/home/playarea-4.png",
  "/home/playarea-7.png",
  "/home/playarea-8.png",
];

export default function Collections() {
  return (
    <section
      className="relative overflow-hidden pt-12 sm:pt-16 lg:py-12"
      style={{
        backgroundImage: "url('/home/bg4.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-5 md:px-10 xl:px-20">
        {/* ================= TOP ================= */}

        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-0">
          {/* ================= LEFT ================= */}

          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] aspect-[11/12]">
              {/* Background Shape */}

              <Image
                src="/home/yellow.png"
                alt=""
                fill
                priority
                className="object-contain z-0"
              />

              {/* Mask */}

              <div
                className="absolute left-1/2 top-1/2 w-[90%] h-[95%] -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10"
                style={{
                  WebkitMaskImage: "url('/home/mask2.png')",
                  maskImage: "url('/home/mask2.png')",

                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",

                  WebkitMaskSize: "contain",
                  maskSize: "contain",

                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                <Image
                  src="/home/slider-10.png"
                  alt=""
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="order-2">
            <div className="grid md:grid-cols-[1fr_220px] gap-6 md:gap-10 items-start">
              {/* Content */}

              <div className="text-center md:text-left">
                <span className="font-love text-[#F45A89] uppercase tracking-wide text-sm sm:text-base">
                  Explore Our Collections
                </span>

                <h2
                  className="mt-3 sm:mt-4 font-capriola text-[#21324A]
                  text-[22px]
                  sm:text-[28px]
                  md:text-[36px]
                  xl:text-[44px]
                  leading-[1.15] sm:leading-[1.05]"
                >
                  Discover Soft Play
                  <br />
                  Magic for Little
                  <br />
                  Learners
                </h2>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#666] leading-6 sm:leading-7 tracking-wider">
                  Maskeen’s premium soft play range—safe, colorful, and designed
                  to spark creativity and physical development in young
                  children. Ideal for schools, daycare centers, and home play
                  areas.
                </p>

                <Link
                  href="/our-products"
                  className="inline-flex mt-6 sm:mt-8 bg-[#58C5D7]
                  hover:bg-[#47b4c6]
                  duration-300
                  text-white
                  rounded-full
                  px-6 sm:px-10
                  py-3 sm:py-4
                  text-sm sm:text-base
                  tracking-[1px] sm:tracking-[2px]
                  font-bold"
                >
                  Browse Soft Play Collection
                </Link>
              </div>

              {/* Right Small Image */}

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="hidden md:flex justify-center"
              >
                <div className="relative w-[180px] h-[350px] overflow-hidden rounded-[90px] bg-white">
                  <Image
                    src="/home/soft-corousel.png"
                    fill
                    alt=""
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM START ================= */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 mt-10 lg:mt-0">
          {/* LEFT (Dog + Rabbit) */}

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 lg:mt-14">
            {/* ================= DOG ================= */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative text-center sm:text-left"
            >
              <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-5">
                <Image
                  src="/home/dog.png"
                  alt=""
                  width={100}
                  height={100}
                  className="shrink-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px]"
                />

                <div>
                  <h3 className="font-capriola mt-1 sm:mt-3 text-[#344863] text-[20px] sm:text-[22px] md:text-[25px] leading-none">
                    Soft & Safe
                  </h3>

                  <p className="mt-3 sm:mt-5 text-sm sm:text-base text-[#566273] font-semibold">
                    Built with soft, durable materials for worry-free play.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= RABBIT ================= */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative text-center sm:text-left"
            >
              <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-5">
                <Image
                  src="/home/rabbit.png"
                  alt=""
                  width={100}
                  height={100}
                  className="shrink-0 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px]"
                />

                <div>
                  <h3 className="font-capriola mt-1 sm:mt-3 text-[#344863] text-[20px] sm:text-[22px] md:text-[25px] leading-none">
                    Learn Through Play
                  </h3>

                  <p className="mt-3 sm:mt-5 text-sm sm:text-base text-[#566273] font-semibold">
                    Every piece is crafted to inspire learning through fun.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end lg:-mt-24">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[550px] aspect-[11/12]">
              {/* Orange Background */}

              <Image
                src="/home/orange.png"
                alt=""
                fill
                priority
                className="object-contain z-0"
              />

              {/* Mask */}

              <div
                className="absolute left-1/2 top-1/2 w-[80%] h-[90%] -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10"
                style={{
                  WebkitMaskImage: "url('/home/mask2.png')",
                  maskImage: "url('/home/mask2.png')",

                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",

                  WebkitMaskSize: "contain",
                  maskSize: "contain",

                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                <Image
                  src="/home/rollset-3.png"
                  alt=""
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
      </div>

      <section className="pt-8 sm:pt-6 lg:pt-12">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-5 md:px-8 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[30px]"
              >
                <div className="relative aspect-[1.28/1] overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[30px]">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}