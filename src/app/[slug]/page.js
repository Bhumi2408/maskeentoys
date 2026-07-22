// src/app/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "../components/PageBanner";
import ServiceContentRenderer from "../components/ServiceContentRenderer";
import { getLandingPageBySlug } from "../data/landingPages";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `https://www.playareamanufacturer.com/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.playareamanufacturer.com/${page.slug}`,
      siteName: "Maskeen Toys",
      images: [{ url: page.image, width: 1200, height: 630 }],
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function LandingPage({ params }) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) notFound();

  return (
    <>

      <PageBanner title={page.title} bgImage={page.image} compactTitle />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          {/* Product image card with CTA overlay */}
          <div className="relative w-full aspect-[16/8] mb-10 sm:mb-14 rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
            <Image
              src={page.image}
              alt={page.title}
              fill
              sizes="1100px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#FDBE46] hover:bg-[#f3b129] transition text-white text-sm sm:text-base font-bold tracking-widest px-6 sm:px-8 py-2.5 sm:py-3"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          <ServiceContentRenderer content={page.content} />

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 rounded-[20px] sm:rounded-[24px] bg-[#FDEEF1] px-6 sm:px-10 py-10 sm:py-14 text-center">
            <h3 className="font-love text-[#21324A] text-2xl sm:text-3xl mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base text-[#5F5F5F] mb-6 max-w-[500px] mx-auto">
              Reach out today for a free consultation, custom design, and
              accurate quotation for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#F15D87] hover:bg-[#e04578] transition text-white text-sm sm:text-base font-bold tracking-widest px-8 sm:px-10 py-3 sm:py-[17px]"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}