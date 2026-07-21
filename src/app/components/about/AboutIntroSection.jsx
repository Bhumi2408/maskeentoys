// src/app/components/about/AboutIntroSection.jsx
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  "/about/slider-1.png",
  "/about/slider-6.png",
  "/about/slider-2.png",
  "/about/slider-12.png",
];

export default function AboutIntroSection() {
  return (
    <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
      <div className=" px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
          {/* ================= LEFT ================= */}
          <div>
            <span className="font-love text-[#F15D87] tracking-wide">
              Where Curiosity Meets Creativity
            </span>

            <h2
              className="
              mt-3 sm:mt-4
              font-love
              leading-[1.1]
              text-[36px]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[64px]
              xl:text-[64px]
              "
            >
              <span className="text-[#21324A] block">
                Welcome to a World of
              </span>
              <span className="text-[#F15D87] italic block mt-1 sm:mt-2">
                Joyful Learning
              </span>
            </h2>

            <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-5 sm:gap-6">
              <p className="tracking-wider text-[#5F5F5F] leading-6 sm:leading-7">
                At Maskeen Overseas, we understand that every corner of a
                playschool should spark imagination and joy. Our products are
                designed to blend fun with function — whether it&apos;s a
                brightly colored activity mat, engaging learning stations, or
                soft play structures that ensure complete safety. We bring
                spaces to life where children not only play but also grow.
              </p>

              <p className="tracking-wider text-[#5F5F5F] leading-6 sm:leading-7">
                All our educational toys and furniture are crafted using
                high-quality, child-safe materials that meet global safety
                standards. From modular storage units to interactive play zones,
                our solutions are perfect for kindergartens, daycares, and
                preschool classrooms looking to create a vibrant and stimulating
                learning environment.
              </p>
            </div>

            <Link
              href="/our-products"
              className="
              inline-flex
              mt-7
              sm:mt-8
              rounded-full
              bg-[#FDBE46]
              hover:bg-[#f3b129]
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

            {/* Gallery strip */}
            {/* Gallery strip */}
            <div className="mt-8 sm:mt-10 grid grid-cols-4 gap-3">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-[60px] sm:h-[75px] md:h-[100px] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Playschool setup ${index + 1}`}
                    fill
                    sizes="(max-width: 600px) 20vw, 130px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT (video) ================= */}
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] lg:h-full lg:min-h-[560px] rounded-[24px] sm:rounded-[32px] overflow-hidden">
            <video
              src="/about/about.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
