// src/app/components/contact/ContactFormSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactFormSection() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        {/* ================= LEFT (image) ================= */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-auto">
          <Image
            src="/about/navy-ship-play-set.png"
            alt="Soft play equipment"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* ================= RIGHT (form) ================= */}
        <div className="relative bg-[#FBF3E9] px-5 sm:px-10 md:px-14 lg:px-16 py-10 sm:py-12 lg:py-14">
          {/* Background decorative pattern */}
          <Image
            src="/home/footerbg.jpg"
            alt=""
            fill
            className="object-cover pointer-events-none select-none -z-0"
          />

          <div className="relative z-10">
            <h2 className="text-center font-capriola text-[#1a1a1a] text-[26px] sm:text-[38px] md:text-[48px] leading-tight">
              Got questions? We&apos;re
              <br />
              here to help!
            </h2>

            {/* Contact info row */}
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-8 sm:gap-14 text-center">
              <div>
                <p className="font-medium text-2xl text-[#1a1a1a] font-capriola">
                  Phone:
                </p>
                <a
                  href="tel:+919811644688"
                  className=" text-[#5F5F5F]"
                >
                  +91-981-164-4688
                </a>
              </div>
              <div>
                <p className="font-medium text-2xl text-[#1a1a1a] font-capriola">
                  Email:
                </p>
                <a
                  href="mailto:sales@maskeentoy.com"
                  className="text-[#5F5F5F]"
                >
                  sales@maskeentoy.com
                </a>
              </div>
              <div>
                <p className="font-medium text-2xl text-[#1a1a1a] font-capriola">
                  Website:
                </p>
                <span className=" text-[#5F5F5F]">
                  Maskeentoys.com
                </span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 sm:mt-10 max-w-[700px] mx-auto flex flex-col gap-4"
            >
              <input type="hidden" name="subject" value="New Contact Form Submission - Maskeen Toys" />
              <input type="hidden" name="from_name" value="Maskeen Toys Website" />

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                className="rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition"
              />

              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                className="rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start rounded-full bg-[#F15D87] hover:bg-[#e04578] transition text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-3 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm font-medium">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}