
import Hero from "./components/home/Hero";
import CollectionSection from "./components/home/CollectionSection";
import IndoorPlayArea from "./components/home/IndoorPlayArea";
import AboutSection from "./components/home/AboutSection";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Collections from "./components/home/Collections";
import CreativePlaySection from "./components/home/CreativePlaySection";
import IndoorPlaySection from "./components/home/IndoorPlaySection";
import BlogSection from "./components/home/BlogSection";

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
    <BlogSection/>
    </>
  );
}
