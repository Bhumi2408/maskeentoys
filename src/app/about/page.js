import AboutIntroSection from "../components/about/AboutIntroSection";
import BusinessGallerySection from "../components/about/BusinessGallerySection";
import InflatablePlaySection from "../components/about/InflatablePlaySection";
import PageBanner from "../components/PageBanner";
import SetupCategoriesSection from "../components/about/SetupCategoriesSection";
import TextImageSection from "../components/about/TextImageSection";

export const metadata = {
    title: "About Maskeen Toys | Top Kids Play Area Designing Company",
    description:
        "Maskeen Toys is a trusted Kids Play Area Designing Company offering indoor playground equipment, soft play sets, and kids' play solutions. We design fun, safe, and durable play areas. Contact us now!",
    keywords: [
        "About Maskeen Toys",
        "Kids Play Area Designing Company",
        "Soft Play Construction Company",
        "Play Zone Interior Designing Company",
    ],
    alternates: {
        canonical: "https://www.playareamanufacturer.com/about",
    },
}

export default function AboutPage() {
    return (
        <>
             <PageBanner
        title="About US"
        subtitle="Pioneering Excellence in Soft Play Design & Play Area Installations"
        bgImage="/about/house-set.webp"
      />

            <AboutIntroSection />
            <BusinessGallerySection/>
            <TextImageSection/>
            <InflatablePlaySection/>
            <SetupCategoriesSection/>
        </>
    );
}