// src/app/components/about/BusinessGallerySection.jsx
import Image from "next/image";

const gridItems = [
  {
    type: "text",
    title: "Business",
    desc: "We are a global manufacturer, supplier, and exporter of high-quality play products",
  },
  { type: "image", src: "/about/soft-corousels.png" },
  { type: "image", src: "/about/ball-pool-set.png" },
  {
    type: "text",
    title: "Established",
    desc: "We began our journey in 1988 to craft innovative and fun learning play tools.",
  },
  { type: "image", src: "/home/soft-corousel.png" },
  { type: "image", src: "/home/about-left.png" },
  {
    type: "text",
    title: "Legal Status of Firm",
    desc: "We operate as an Individual – Proprietor, ensuring direct accountability and personalized service in every business interaction.",
  },
  { type: "image", src: "/about/navy-ship-play-set.png" },
];

export default function BusinessGallerySection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {gridItems.map((item, index) => {
          if (item.type === "text") {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-white h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] px-5 sm:px-8"
              >
                <h3 className="font-capriola text-[#EF4D86] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-[#333] text-xs sm:text-sm md:text-base leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            );
          }


          return (
            <div
              key={index}
              className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] overflow-hidden"
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}