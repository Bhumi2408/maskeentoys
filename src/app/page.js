
import Hero from "./components/home/Hero";
import CollectionSection from "./components/home/CollectionSection";
import IndoorPlayArea from "./components/home/IndoorPlayArea";
import AboutSection from "./components/home/AboutSection";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Collections from "./components/home/Collections";
import CreativePlaySection from "./components/home/CreativePlaySection";
import IndoorPlaySection from "./components/home/IndoorPlaySection";
import BlogSection from "./components/home/BlogSection";
import FaqSection from "./components/home/FaqSection";

export const metadata = {
  title: "Best Soft Play Area Manufacturer in Delhi NCR | Maskeen",
  description:
    "Maskeen Toys is a trusted Soft Play Area Manufacturer in Delhi NCR, offering safe, durable, and customized play area solutions for schools. Contact us now!",
  keywords: [
    "Play Area Manufacturer",
    "Soft Play Area Manufacturer in Delhi NCR",
    "Maskeen Toys",
  ],
  alternates: {
    canonical: "https://www.playareamanufacturer.com",
  },
};

export default function Home() {
  return (
    <>
    <Hero/>
    <CollectionSection/>
    <AboutSection/>
    <IndoorPlayArea/>
    <WhyChooseUs/>
    <Collections/>
    <CreativePlaySection/>
    <IndoorPlaySection/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
