import AboutIntroSection from "../components/about/AboutIntroSection";
import BusinessGallerySection from "../components/about/BusinessGallerySection";
import InflatablePlaySection from "../components/about/InflatablePlaySection";
import PageBanner from "../components/PageBanner";
import SetupCategoriesSection from "../components/about/SetupCategoriesSection";
import TextImageSection from "../components/about/TextImageSection";

export const metadata = {
    title: "About Maskeen Toys | Kids Indoor Playground Manufacturer",
    description:
        "Maskeen Toys is a trusted manufacturer of indoor playground equipment, soft play sets, and kids play solutions designed for safety, durability, and fun.",
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
        bgImage="/about/house-set.png"
      />

            <AboutIntroSection />
            <BusinessGallerySection/>
            <TextImageSection/>
            <InflatablePlaySection/>
            <SetupCategoriesSection/>
        </>
    );
}