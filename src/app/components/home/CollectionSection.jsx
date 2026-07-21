import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    image: "/home/slider-7.png",
    title: "Slider",
    description: "Durable soft sliders for safe indoor fun",
    imageHeight: "h-[140px] sm:h-[160px] md:h-[175px]",
    color: "#A277B8",
  },
  {
    image: "/home/playarea-2.png",
    title: "Playarea",
    description: "Custom indoor play areas for kids",
    imageHeight: "h-[220px] sm:h-[260px] md:h-[300px]",
    color: "#F8BC4D",
  },
  {
    image: "/home/rollser-13.png",
    title: "Roll Set",
    description: "Colorful roll sets for toddler activities",
    imageHeight: "h-[140px] sm:h-[160px] md:h-[175px]",
    color: "#79C6EC",
  },
  {
    image: "/home/slider-3.png",
    title: "Slider",
    description: "Premium soft play setups for playschools",
    imageHeight: "h-[220px] sm:h-[260px] md:h-[300px]",
    color: "#DF6D9E",
  },
];

export default function CollectionSection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-[50px]">
      <div className="mx-auto max-w-[1820px] px-4 sm:px-5 md:px-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-x-5 sm:gap-x-6 xl:gap-x-[38px] gap-y-5 sm:gap-y-6">
          {collections.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[20px] sm:rounded-[24px] xl:rounded-[28px] group flex flex-col"
            >
              <div className={`relative w-full ${item.imageHeight}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-fill"
                />
              </div>

              <div
                className="flex flex-col items-center text-center py-4 sm:py-5 px-2.5 flex-1"
                style={{ backgroundColor: item.color }}
              >
                <h3 className="text-[26px] sm:text-[30px] md:text-[35px] leading-none text-white font-capriola">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 md:mt-5 leading-[24px] sm:leading-[27px] md:leading-[30px] text-sm sm:text-base text-white max-w-[290px]">
                  {item.description}
                </p>

                <Link
                  href="/our-products"
                  className="mt-3 sm:mt-4 py-2.5 sm:py-3 px-5 sm:px-6 rounded-full bg-white flex items-center justify-center text-[13px] sm:text-[15px] font-bold"
                  style={{
                    color: item.color,
                  }}
                >
                  Our Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}