// src/app/our-clients/page.js
import PageBanner from "../components/PageBanner";
import Image from "next/image";

export const metadata = {
    title: "Our Clients - Maskeentoys",
    description:
        "Serving Visionaries Who Believe in Safe & Happy Childhoods.",
    alternates: {
        canonical: "https://www.playareamanufacturer.com/our-clients",
    },
};

const clients = [
    { logo: "/clients/euro.jpg", name: "EuroKids Pre-School" },
    { logo: "/clients/bn.jpg", name: "Bharat National Public School" },
    { logo: "/clients/bharat.jpg", name: "Bharatnagar International School" },
    { logo: "/clients/dav.jpg", name: "D.A.V. Public School" },
    { logo: "/clients/jnd.jpg", name: "Delhi Public School" },
    { logo: "/clients/cubs.jpg", name: "Curious Cubs" },
];

const videos = [
    "/clients/client1.mp4",
    "/clients/client2.mp4",
    "/clients/client3.mp4",
    "/clients/client4.mp4",
];

export default function OurClientsPage() {
    return (
        <>
            <PageBanner
                title="Our Clients"
                subtitle="Trusted by Leading Preschools & Institutions Across India"
                bgImage="/clients/tube-side-set.png"
            />

            {/* ================= CLIENTS (video bg) ================= */}
            <section className="relative overflow-hidden">
                {/* Background video */}
                <video
                    src="/home/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Content */}
                <div className="relative z-10 py-16 sm:py-20 lg:py-28">
                    <div className="mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                        <div className="text-center">
                            <span className="font-love text-[#FFD966] text-sm sm:text-base tracking-wide">
                                Proud Partnerships
                            </span>

                            <h2
                                className="
                mt-3 sm:mt-4
                font-love
                text-white
                leading-[1.1]
                text-[30px]
                sm:text-[42px]
                md:text-[50px]
                "
                            >
                                Brands That Trust Maskeen Toys
                            </h2>
                        </div>

                        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {clients.map((client, index) => (
                                <div
                                    key={index}
                                    className="
                  group
                  relative
                  bg-white
                  rounded-[20px]
                  sm:rounded-[24px]
                  h-[130px]
                  sm:h-[150px]
                  md:h-[160px]
                  flex
                  items-center
                  justify-center
                  px-8
                  sm:px-10
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                  transition-transform
                  duration-300
                  hover:-translate-y-2
                  "
                                >
                                    <div className="relative w-full h-[70%]">
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <h2 className="text-center font-love text-[#F15D87] text-[32px] sm:text-[44px] md:text-[52px] leading-none">
                        Our Trending Videos
                    </h2>

                    <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {videos.map((src, index) => (
                            <div
                                key={index}
                                className="relative w-full aspect-[9/16] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-black"
                            >
                                <video
                                    src={src}
                                    controls
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}