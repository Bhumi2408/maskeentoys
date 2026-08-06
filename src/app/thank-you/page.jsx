// src/app/thank-you/page.jsx
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You | Maskeen Toys",
  description:
    "Thank you for contacting Maskeen Toys. Our team will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-[#FBF3E9] min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-[700px] px-5 sm:px-8 py-16 sm:py-20 text-center w-full">
        {/* Icon badge */}
        <div className="mx-auto mb-6 sm:mb-8 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F15D87]">
          <CheckCircle2 size={44} className="text-white" strokeWidth={2} />
        </div>

        <h1 className="font-capriola text-[#1a1a1a] text-[26px] sm:text-[38px] md:text-[44px] leading-tight">
          Thank You!
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#5F5F5F] leading-6 sm:leading-7">
          Your message has been received. Our team at Maskeen Toys will
          review it and get back to you as soon as possible.
        </p>

        {/* Contact info row - same as contact section for consistency */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-8 sm:gap-14 text-center">
          <div>
            <p className="font-medium text-lg sm:text-xl text-[#1a1a1a] font-capriola">
              Phone:
            </p>
            <a href="tel:+919811644688" className="text-[#5F5F5F]">
              +91-981-164-4688
            </a>
          </div>
          <div>
            <p className="font-medium text-lg sm:text-xl text-[#1a1a1a] font-capriola">
              Email:
            </p>
            <a href="mailto:sales@maskeentoy.com" className="text-[#5F5F5F]">
              sales@maskeentoy.com
            </a>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex rounded-full bg-[#F15D87] hover:bg-[#e04578] transition text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-3"
          >
            Back to Home
          </Link>
          <Link
            href="/our-products"
            className="inline-flex rounded-full bg-[#FDBE46] hover:bg-[#f3b129] transition text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-3"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}