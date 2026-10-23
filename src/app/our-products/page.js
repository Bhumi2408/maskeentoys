// src/app/new-arrival/page.js
import Image from "next/image";
import PageBanner from "../components/PageBanner";
import ProductsInfoSection from "../components/ProductsInfoSection";

export const metadata = {
    title: "Commercial & Children Soft Play Area Equipment supplier",
    description:
        "Maskeen Toys offers Commercial Soft Play Equipment & School Play Area Equipment. Safe, durable & customizable play solutions. Contact us for best deals!",
    alternates: {
        canonical: "https://www.playareamanufacturer.com/our-products",
    },
};

const labelColors = ["#A277B8", "#DF6D9E", "#8FA83C", "#79C6EC", "#F37675"];

const products = [
    { image: "/products/product57.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product34.webp", title: "PLAYAREA 9" },
    { image: "/products/product56.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product33.webp", title: "PLAYAREA 8" },
    { image: "/products/product55.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product32.webp", title: "PLAYAREA 7" },
    { image: "/products/product54.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product31.webp", title: "PLAYAREA 6" },
    { image: "/products/product53.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product30.webp", title: "PLAYAREA 5" },
    { image: "/products/product52.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product29.webp", title: "PLAYAREA 4" },
    { image: "/products/product51.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product28.webp", title: "PLAYAREA 3" },
    { image: "/products/product50.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product27.webp", title: "PLAYAREA 2" },
    { image: "/products/product49.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product26.webp", title: "PLAYAREA 1" },
    { image: "/products/product48.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product25.webp", title: "SOFT COROUSEL" },
    { image: "/products/product47.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product24.webp", title: "MULTI CLIMBER" },
    { image: "/products/product46.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product23.webp", title: "SOFT COROUSEL" },
    { image: "/products/product45.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product22.webp", title: "STEP SLIDE SET-5 PCS" },
    { image: "/products/product44.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product21.webp", title: "HOUSE SET" },
    { image: "/products/product43.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product20.webp", title: "SOFT CRESCENT" },
    { image: "/products/product42.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product19.webp", title: "CENTER SET" },
    { image: "/products/product41.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product18.webp", title: "CURVE SET-9 PCS" },
    { image: "/products/product40.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product17.webp", title: "BALL POOL COMBO" },
    { image: "/products/product39.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product16.webp", title: "NAVY SHIP PLAY SET" },
    { image: "/products/product38.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product15.webp", title: "FOAM HUT-14 PCS" },
    { image: "/products/product37.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product14.webp", title: "BALL POOL SET" },
    { image: "/products/product36.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product13.webp", title: "SLIDER-4 PCS" },
    { image: "/products/product35.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product12.webp", title: "ROLL SET-6 PCS" },
    { image: "/products/product11.webp", title: "TODDLER SET" },
    { image: "/products/product10.webp", title: "CLIMBER SET" },
    { image: "/products/product9.webp", title: "TUBE SIDE SET" },
    { image: "/products/product8.webp", title: "ROUND SET-6 PCS" },
    { image: "/products/product7.webp", title: "SOFT ROCKER" },
    { image: "/products/product6.webp", title: "HEXAGON SET" },
    { image: "/products/product5.webp", title: "4 STEP SLIDER" },
    { image: "/products/product4.webp", title: "BEAM SET-6 PCS" },
    { image: "/products/product3.webp", title: "HURDLE CLIMBER" },
    { image: "/products/product2.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product1.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product58.webp", title: "TUNNEL SET" },
    { image: "/products/product59.webp", title: "PLAYAREA 10" },
];


export default function OurProductsPage() {
    return (
        <>
            <PageBanner
                title="Our Products"
                bgImage="/products/toddler-set.webp"
            />

            {/* ================= PRODUCTS ================= */}
            <section className="bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-[1900px] px-4 sm:px-5 md:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
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

        <ProductsInfoSection/>
        </>
    );
}