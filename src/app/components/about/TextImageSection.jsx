// src/app/components/about/TextImageSection.jsx
import Image from "next/image";

const sections = [
  {
    tag: "Stimulate Learning Through Movement in Our Custom-Built Indoor Play Areas",
    heading: "Endless Fun Begins with Safe Soft Play Zones",
    paragraphs: [
      "Designed to delight and engage, our Soft Play & Playarea setups create a safe space where kids can climb, slide, crawl, and explore freely. Every component — from colorful tunnels to cushioned ball pits — is crafted to boost gross motor skills while encouraging creativity and teamwork. Perfect for preschools, daycares, and indoor recreation centers.",
      "We prioritize safety just as much as fun. Our play areas are built with high-density foam padding, child-safe materials, and reinforced structures that ensure durability and comfort. Whether you’re looking to build a cozy corner for toddlers or a multi-level adventure zone, our modular designs can be tailored to fit any space and theme.",
    ],
    image: "/home/playarea-7.png",
    reverse: false,
  },
  {
    tag: "Creative Play, Endless Joy",
    heading: "Fun Spaces for Active Learning",
    paragraphs: [
      "Our play areas are thoughtfully designed to combine entertainment and education. With vibrant structures, safe materials, and engaging activities, children can explore, climb, and create while developing essential skills.",
      "From colorful ball pits to exciting slides, every element encourages imagination and social interaction. We ensure each space is safe, comfortable, and tailored to inspire joyful learning experiences for young minds.",
    ],
    image: "/about/colorful-playroom.jpeg",
    reverse: true,
  },
];

export default function TextImageSection() {
  return (
    <>
      {sections.map((item, index) => (
        <section key={index} className="bg-white py-14 sm:py-16 lg:pt-14 pb-10">
          <div className="mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* IMAGE */}
              <div
                className={`relative w-full h-[240px] sm:h-[340px] md:h-[420px] lg:h-[600px] rounded-[16px] sm:rounded-[24px] overflow-hidden ${
                  item.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div className={item.reverse ? "lg:order-2" : "lg:order-1"}>
                <span className="font-love text-[#F15D87] text-sm sm:text-base tracking-wide">
                  {item.tag}
                </span>

                <h2
                  className="
                  mt-3 sm:mt-4
                  font-love
                  text-[#21324A]
                  leading-[1.15]
                  text-[30px]
                  sm:text-[40px]
                  md:text-[46px]
                  lg:text-[64px]
                  "
                >
                  {item.heading}
                </h2>

                <div className="mt-5 sm:mt-6 flex flex-col gap-4 sm:gap-5">
                  {item.paragraphs.map((para, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}