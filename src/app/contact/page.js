// src/app/contact/page.js
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactHeroSection from "../components/contact/ContactHeroSection";
import JoyfulSpacesSection from "../components/contact/JoyfulSpacesSection";
import PageBanner from "../components/PageBanner";

export const metadata = {
  title: "Contact Us | Maskeen Toys - Soft Play Area Manufacturer in Delhi",
  description:
    "Get in touch with Maskeen Toys for custom soft play equipment, quotations, and installation support. Visit us at our Delhi manufacturing unit or reach out online.",
  alternates: {
    canonical: "https://www.playareamanufacturer.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" bgImage="/about/slider-1.png" />

      <ContactHeroSection />

      <ContactFormSection/>

      <JoyfulSpacesSection/>

    </>
  );
}