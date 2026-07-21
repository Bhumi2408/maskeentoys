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
    { image: "/products/product57.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product34.png", title: "PLAYAREA 9" },
    { image: "/products/product56.png", title: "SLIDER-7 PCS" },
    { image: "/products/product33.png", title: "PLAYAREA 8" },
    { image: "/products/product55.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product32.png", title: "PLAYAREA 7" },
    { image: "/products/product54.png", title: "SLIDER-7 PCS" },
    { image: "/products/product31.png", title: "PLAYAREA 6" },
    { image: "/products/product53.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product30.png", title: "PLAYAREA 5" },
    { image: "/products/product52.png", title: "SLIDER-7 PCS" },
    { image: "/products/product29.png", title: "PLAYAREA 4" },
    { image: "/products/product51.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product28.png", title: "PLAYAREA 3" },
    { image: "/products/product50.png", title: "SLIDER-7 PCS" },
    { image: "/products/product27.png", title: "PLAYAREA 2" },
    { image: "/products/product49.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product26.png", title: "PLAYAREA 1" },
    { image: "/products/product48.png", title: "SLIDER-7 PCS" },
    { image: "/products/product25.png", title: "SOFT COROUSEL" },
    { image: "/products/product47.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product24.png", title: "MULTI CLIMBER" },
    { image: "/products/product46.png", title: "SLIDER-7 PCS" },
    { image: "/products/product23.png", title: "SOFT COROUSEL" },
    { image: "/products/product45.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product22.png", title: "STEP SLIDE SET-5 PCS" },
    { image: "/products/product44.png", title: "SLIDER-7 PCS" },
    { image: "/products/product21.png", title: "HOUSE SET" },
    { image: "/products/product43.png", title: "SLIDER-7 PCS" },
    { image: "/products/product20.png", title: "SOFT CRESCENT" },
    { image: "/products/product42.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product19.png", title: "CENTER SET" },
    { image: "/products/product41.png", title: "SLIDER-7 PCS" },
    { image: "/products/product18.png", title: "CURVE SET-9 PCS" },
    { image: "/products/product40.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product17.png", title: "BALL POOL COMBO" },
    { image: "/products/product39.png", title: "SLIDER-7 PCS" },
    { image: "/products/product16.png", title: "NAVY SHIP PLAY SET" },
    { image: "/products/product38.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product15.png", title: "FOAM HUT-14 PCS" },
    { image: "/products/product37.png", title: "SLIDER-7 PCS" },
    { image: "/products/product14.png", title: "BALL POOL SET" },
    { image: "/products/product36.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product13.png", title: "SLIDER-4 PCS" },
    { image: "/products/product35.png", title: "SLIDER-7 PCS" },
    { image: "/products/product12.png", title: "ROLL SET-6 PCS" },
    { image: "/products/product11.png", title: "TODDLER SET" },
    { image: "/products/product10.png", title: "CLIMBER SET" },
    { image: "/products/product9.png", title: "TUBE SIDE SET" },
    { image: "/products/product8.png", title: "ROUND SET-6 PCS" },
    { image: "/products/product7.png", title: "SOFT ROCKER" },
    { image: "/products/product6.png", title: "HEXAGON SET" },
    { image: "/products/product5.png", title: "4 STEP SLIDER" },
    { image: "/products/product4.png", title: "BEAM SET-6 PCS" },
    { image: "/products/product3.png", title: "HURDLE CLIMBER" },
    { image: "/products/product2.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product1.png", title: "SLIDER-7 PCS" },
    { image: "/products/product58.png", title: "TUNNEL SET" },
    { image: "/products/product59.png", title: "PLAYAREA 10" },
];


export default function OurProductsPage() {
    return (
        <>
            <PageBanner
                title="Our Products"
                bgImage="/products/toddler-set.png"
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