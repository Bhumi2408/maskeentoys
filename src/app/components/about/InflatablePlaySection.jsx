// src/app/components/about/InflatablePlaySection.jsx
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Adventure Starts Here",
    desc: "Bright, colorful, and full of adventure — our soft play zones encourage kids to climb, slide, and explore while building confidence through fun activities.",
  },
  {
    title: "A Safe Haven for Active Play",
    desc: "Crafted with cushioned, non-toxic materials, our play areas keep children safe as they enjoy active play, learn teamwork, and stay happily engaged.",
  },
];

export default function InflatablePlaySection() {
  return (
    <section>
      <div className="grid lg:grid-cols-2">
        {/* ================= LEFT ================= */}
        <div className="flex flex-col">
          {/* Intro text */}
          <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16">
            <span className="font-love text-[#F15D87] text-sm sm:text-base tracking-wide">
              Where Fun Meets Learning
            </span>

            <h2
              className="
              mt-3 sm:mt-4
              font-love
              text-[#21324A]
              leading-[1.1]
              text-[36px]
              sm:text-[48px]
              md:text-[54px]
              lg:text-[64px]
              xl:text-[64px]
              "
            >
              Exciting
         
              <span className="text-[#F15D87] italic"> Inflatable</span> Play
          
              Zones
            </h2>

            <p className="mt-5 max-w-[560px] text-sm sm:text-base text-[#5F5F5F] tracking-wider leading-6 sm:leading-7">
              Our inflatable slides and play structures bring endless joy to
              kids while ensuring complete safety. Designed to spark curiosity
              and boost energy, these vibrant setups help children develop
              balance, confidence, and social skills through active play.
              Built for durability and fun, they make every playtime
              unforgettable.
            </p>

            <Link
              href="/our-products"
              className="
              inline-flex
              mt-7
              sm:mt-8
              rounded-full
              bg-[#F15D87]
              hover:bg-[#e04578]
              transition
              duration-300
              text-white
              text-sm
              font-bold
              tracking-widest
              px-8
              sm:px-10
              py-3
              sm:py-[17px]
              "
            >
              Explore Now
            </Link>
          </div>

          {/* Bottom row: image + feature list */}
          <div className="grid sm:grid-cols-2 mt-auto">
            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[450px]">
              <Image
                src="/home/blog2.png"
                alt="Climbing frame with slide"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="bg-[#F8F5EF] px-6 sm:px-8 md:px-14 py-8 sm:py-10 flex flex-col justify-center gap-6 sm:gap-8">
              {features.map((item, index) => (
                <div key={index}>
                  <h3 className="font-medium text-[#21324A] text-base sm:text-lg underline underline-offset-4 font-capriola">
                    {item.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[#5F5F5F] leading-6 tracking-wider">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT (full-height video) ================= */}
        <div className="relative w-full h-[300px] sm:h-[420px] lg:h-auto">
          <video
            src="/about/about-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}