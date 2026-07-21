// src/app/components/products/ProductGrid.jsx
import Image from "next/image";

const labelColors = ["#A277B8", "#DF6D9E", "#8FA83C", "#79C6EC"];

export default function ProductGrid({ products }) {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="rounded-[16px] sm:rounded-[20px] border-2 border-dashed border-[#F3B9C4] bg-[#FDEEF1] p-3 sm:p-4"
            >
              <div className="relative w-full aspect-[4/3] rounded-[10px] sm:rounded-[14px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-contain"
                />
              </div>

              <div
                className="mt-3 sm:mt-4 rounded-[8px] sm:rounded-[10px] py-2.5 sm:py-3 text-center"
                style={{
                  backgroundColor: labelColors[index % labelColors.length],
                }}
              >
                <span className="text-white font-bold font-capriola text-xs sm:text-sm md:text-base tracking-wide">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}