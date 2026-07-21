// src/app/components/contact/JoyfulSpacesSection.jsx
import Image from "next/image";

const cards = [
  {
    image: "/home/soft-rocker.png",
    title: "Playful Designs",
    desc: "Colorful, safe, and engaging toys that spark early curiosity.",
    bgShape: "/home/yellow.png",
    mask: "/home/mask2.png",
  },
  {
    image: "/home/about-left.png",
    title: "Smart Learning",
    desc: "Help children build, imagine, and explore with hands-on play.",
    bgShape: null,
    mask: null,
  },
  {
    image: "/home/beam-set.png",
    title: "Creative Growth",
    desc: "Vibrant blocks that boost motor skills and problem-solving.",
    bgShape: "/home/back.png",
    mask: "/home/mask.png",
  },
];

export default function JoyfulSpacesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Background decorative pattern */}
      <Image
        src="/home/bg1.jpg"
        alt="background"
        fill
        className="object-cover pointer-events-none select-none -z-0"
      />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-capriola text-[#1a1a1a] text-[26px] sm:text-[36px] md:text-[42px] leading-[1.2] max-w-[800px] mx-auto">
            Let&apos;s Connect &amp; Create Joyful Spaces for Learning
          </h2>

          <p className="mt-4 font-love text-[#F15D87] text-sm sm:text-base max-w-[700px] mx-auto">
            Whether You&apos;re Planning A Play School, Upgrading Your
            Furniture, Or Exploring Fun Learning Toys - We&apos;re Just A
            Message Away
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 items-center">
          {cards.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {item.mask ? (
                /* ============ Masked (blob) shape — left & right cards, bigger ============ */
                <div className="relative w-full max-w-[340px] sm:max-w-[300px] aspect-square">
                  {/* Background blob shape */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('${item.bgShape}')`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  {/* Masked image */}
                  <div
                    className="absolute inset-0 w-[95%] h-[95%] m-auto overflow-hidden"
                    style={{
                      WebkitMaskImage: `url('${item.mask}')`,
                      maskImage: `url('${item.mask}')`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="360px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              ) : (
                /* ============ Plain rounded card — middle card ============ */
                <div className="relative w-full max-w-[280px] aspect-square rounded-[24px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
              )}

              <h3 className="mt-5 sm:mt-6 font-capriola text-[#1a1a1a] text-lg sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[#5F5F5F] leading-6 max-w-[260px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}