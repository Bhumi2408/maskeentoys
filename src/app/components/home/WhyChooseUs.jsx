"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const progressData = [
  {
    title: "Trusted By Schools, Developers, Institutions & Architects",
    value: 100,
    color: "#A474B3",
  },
  {
    title: "Thousands Of Successful Installations Across India & Abroad",
    value: 100,
    color: "#F17676",
  },
  {
    title: "End-To-End Project Support – Design To Installation",
    value: 100,
    color: "#7ED3F8",
  },
];

const stats = [
  {
    value: 4.9,
    suffix: "",
    decimals: 1,
    title: "Client Rating",
  },
  {
    value: 346,
    suffix: "+",
    decimals: 0,
    title: "Playareas Installed",
  },
  {
    value: 750,
    suffix: "+",
    decimals: 0,
    title: "Happy Clients",
  },
  {
    value: 75,
    suffix: "+",
    decimals: 0,
    title: "Years Of Experience",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [progress, setProgress] = useState([0, 0, 0]);

  useEffect(() => {
    if (!inView) return;

    progressData.forEach((item, index) => {
      let current = 0;

      const timer = setInterval(() => {
        current++;

        setProgress((prev) => {
          const arr = [...prev];
          arr[index] = current;
          return arr;
        });

        if (current >= item.value) clearInterval(timer);
      }, 18);
    });
  }, [inView]);

  return (
    <>
      <section
        ref={ref}
        className="relative overflow-hidden bg-[#FCF8EF] py-10 lg:py-16"
        style={{
          backgroundImage: "url('/home/bg2.jpg')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
      >
        <div className="relative z-10 max-w-[1700px] mx-auto px-5 md:px-10 lg:px-16">
          <p className="text-center uppercase text-[#F15D87] mb-4 font-love">
            WHY CHOOSE US?
          </p>

          <h2
            className="
          text-center
          text-[#364866]
          leading-[1.08]
          font-normal
          lg:max-w-5xl
          mx-auto
          text-[30px]
          sm:text-[38px]
          md:text-[54px]
          lg:text-[64px]
          "
            style={{ fontFamily: "var(--font-love)" }}
          >
            Quality{" "}
            <Image
              src="/home/lion.png"
              width={95}
              height={95}
              alt=""
              className="inline-block align-middle w-12 md:w-16 lg:w-20 xl:w-24 mx-2"
            />
            play Solutions, trusted
          
            for generations across
           
            India and beyond
            <Image
              src="/home/sun.png"
              width={82}
              height={82}
              alt=""
              className="inline-block align-middle w-10 md:w-14 lg:w-16 ml-2"
            />
          </h2>

          <div
            className="
          mt-10
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          px-5
          md:px-20
          xl:gap-24
          items-center
          "
          >
            <div>
              {progressData.map((item, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <div className="flex justify-between items-center mb-3 gap-5">
                    <h4
                      className="
                    font-medium
                    text-black
                    font-capriola
                    text-sm
                    "
                    >
                      {item.title}
                    </h4>

                    <span
                      className="
                    font-medium
                    font-source
                    text-sm
                    whitespace-nowrap
                    "
                    >
                      {progress[index]}%
                    </span>
                  </div>

                  <div className="h-6 overflow-hidden bg-[#ECECEC]">
                    <div
                      className="h-full transition-all duration-200"
                      style={{
                        width: `${progress[index]}%`,
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center items-center lg:pl-8 xl:pl-16">
              <h3
                className="
              text-[#EF4F87]
              leading-none
              font-normal
              text-[60px]
              sm:text-[80px]
              md:text-[120px]
              lg:text-[144px]
              font-love
              "
              >
                {inView ? <CountUp end={75} duration={2.5} suffix="+" /> : "0+"}
              </h3>

              <p
                className="
              mt-2
              max-w-[620px]
              text-[#596171]
              leading-relaxed
              "
              >
                Maskeen – India’s Legacy Brand in Educational and Recreational
                Play Solutions Since 1948
              </p>

              <div className="mt-7">
                <Link href="/our-products"
                  className="
                bg-[#FABC4C]
                hover:bg-[#eda82b]
                duration-300
                rounded-full
                text-white
                font-semibold
                tracking-[2px]
                px-10
                py-4
                shadow-lg
                hover:scale-105
                "
                >
                  See Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="relative overflow-hidden rounded-b-[65px] bg-[#59B548] px-6 py-7 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div key={index} className="text-center">
                <h3
                  className="
            text-[#21442A]
            leading-none
            text-[65px]
            sm:text-[80px]
            md:text-[110px]
            lg:text-[144px]
            "
                  style={{ fontFamily: "var(--font-love)" }}
                >
                  {inView ? (
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      decimals={item.decimals}
                      suffix={item.suffix}
                    />
                  ) : (
                    0
                  )}
                </h3>

                <p
                  className="
            -mt-3
            text-white
            font-semibold
            text-lg
            md:text-xl
            lg:text-[26px]
            "
                  style={{ fontFamily: "var(--font-source)" }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <Image
            src="/home/flower.png"
            alt=""
            width={110}
            height={110}
            className="
      absolute
      right-4
      bottom-2
      w-14
      md:w-20
      lg:w-24
      pointer-events-none
      select-none
      "
          />
        </div>
      </div>
    </>
  );
}
