"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/home/about-right.jpeg",
    title:
      "Complete Soft Play Area Solutions In Delhi — Build A Safe, Colorful & Fun World For Your Kids",
    desc: "Are you planning to set up a play area for",
    slug: "/blog/complete-soft-play-area-solutions",
  },
  {
    id: 2,
    image: "/home/blog2.png",
    title:
      "Soft Play Equipment For Kids: Complete Guide To Indoor Playgrounds, Play Zones & Choosing The Right Manufacturer In Delhi",
    desc: "You have a space — a school corner, a mall",
    slug: "/blog/soft-play-equipment-for-kids",
  },
  {
    id: 3,
    image: "/home/playarea-2.png",
    title:
      "Top Soft Play Area Manufacturer Creating Safe And Engaging Kids Play Zones In Delhi 2026",
    desc: "You just opened a kids café. Or maybe you're setting",
    slug: "/blog/soft-play-area-manufacturer",
  },
];

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-14">
      <Image
        src="/home/bg1.jpg"
        alt=""
        fill
        className="-z-10 object-cover object-center pointer-events-none"
      />

      <div className="mx-auto max-w-[1750px] px-5 lg:px-20">
        {/* Heading */}

        <p className="mb-4 text-center font-love uppercase text-[#EF4E74]">
          KID-APPROVED INSIGHTS
        </p>

        <h2
          className="
          mx-auto
          max-w-[1200px]
          text-center
          leading-[1]
          text-[#333]
          text-[34px]
          sm:text-[40px]
          md:text-[58px]
          lg:text-[64px]
          font-love
          "
        >
          Discover Creative Ideas &
          <br />
          Toy Tips
        </h2>

        <p
          className="
          mx-auto
          mt-6
          max-w-[900px]
          text-center
          text-[#5F6774]
          tracking-[1px]
          leading-[1.5]
          "
        >
          Explore expert guides, playtime inspiration, and toy care tips that{" "}
          <br /> make learning and fun go hand in hand.
        </p>

        <div className="mt-5 flex justify-center">
          <Link
            href="/blog"
            className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#F6B741]
            px-10
            py-4
            text-sm
            font-semibold
            tracking-[2px]
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#EDA629]
            "
          >
            Read More
          </Link>
        </div>

        {/* BLOG GRID */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={blog.slug}
              className="
              group
              relative
              overflow-hidden
              rounded-[22px]
              h-[450px]
              "
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="
                object-cover
                duration-700
                group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 duration-500" />

              <div
                className="
                absolute
                inset-x-0
                bottom-0
                p-7
                lg:p-9
                text-white
                z-10
                "
              >
                <h3
                  className="
                  text-[18px]
                  lg:text-[22px]
                  leading-[1.4]
                  font-bold
                  "
                >
                  {blog.title}
                </h3>

                <p
                  className="
                  mt-3
                  text-white/90
                  "
                >
                  {blog.desc}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span
                    className="
                    text-base
                    font-medium
                    tracking-wide
                    text-white/90
                    transition-all
                    duration-300
                    group-hover:text-white
                    "
                  >
                    Read Article
                  </span>

                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/70
                    bg-white/10
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    group-hover:bg-[#F6B741]
                    group-hover:border-[#F6B741]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M5 12H19" />
                      <path d="M12 5L19 12L12 19" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Gradient */}

              <div
                className="
                absolute
                inset-x-0
                bottom-0
                h-[70%]
                bg-gradient-to-t
                from-black/90
                via-black/45
                to-transparent
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
