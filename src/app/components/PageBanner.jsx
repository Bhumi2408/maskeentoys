// src/app/components/PageBanner.jsx
import Image from "next/image";

export default function PageBanner({ title, subtitle, bgImage }) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[550px]">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <h1
            className="
            font-love
            text-white
            max-w-[1000px]
            leading-none
            text-[48px]
            sm:text-[64px]
            md:text-[80px]
            lg:text-[96px]
            "
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="
              mt-3
              sm:mt-4
              font-love
              text-white
              max-w-[90%]
              sm:max-w-[600px]
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}