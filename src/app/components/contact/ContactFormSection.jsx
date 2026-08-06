// src/app/components/contact/ContactFormSection.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WEB3FORMS_ACCESS_KEY = "1680d147-2056-4ce8-98de-053b43b71a59";

// const WEB3FORMS_ACCESS_KEY_2 = "YOUR_SECOND_WEB3FORMS_ACCESS_KEY_HERE";

const submitToWeb3Forms = async (payload, accessKey) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...payload, access_key: accessKey }),
  });
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
};

export default function ContactFormSection() {
  const router = useRouter();
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    //  Bot check (honeypot) — agar ye field bhara hua hai to ye bot hai,
    // form submit hi mat karo, silently success dikha do.
    if (formData.get("botcheck")) {
      return;
    }

    setStatus("loading");

    // Selected subject ke aage site context add kar diya, taki email me clear pata chale
    const selectedSubject = formData.get("subject") || "General Inquiry";

    const payload = {
      subject: `${selectedSubject} - Maskeen Toys Website`,
      from_name: "Maskeen Toys Website",
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      await submitToWeb3Forms(payload, "1680d147-2056-4ce8-98de-053b43b71a59");

      //  FUTURE USE: jab 2nd access key add karni ho, upar wali
      // WEB3FORMS_ACCESS_KEY_2 line uncomment karo aur try block ko
      // isse replace kar do, taaki dono inbox me ek saath jaaye aur
      // ek fail ho tab bhi doosra chal jaaye:
      //
      // const results = await Promise.allSettled([
      //   submitToWeb3Forms(payload, WEB3FORMS_ACCESS_KEY),
      //   submitToWeb3Forms(payload, WEB3FORMS_ACCESS_KEY_2),
      // ]);
      // const atLeastOneSucceeded = results.some((r) => r.status === "fulfilled");
      // if (!atLeastOneSucceeded) throw new Error("Both submissions failed");

      setStatus("success");
      e.target.reset();
      // ✅ Custom thank-you page pe redirect
      router.push("/thank-you");
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
                <a href="tel:+919811644688" className=" text-[#5F5F5F]">
                  +91-981-164-4688
                </a>
              </div>
              <div>
                <p className="font-medium text-2xl text-[#1a1a1a] font-capriola">
                  Email:
                </p>
                <a href="mailto:sales@maskeentoy.com" className="text-[#5F5F5F]">
                  sales@maskeentoy.com
                </a>
              </div>
              <div>
                <p className="font-medium text-2xl text-[#1a1a1a] font-capriola">
                  Website:
                </p>
                <span className=" text-[#5F5F5F]">Maskeentoys.com</span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 sm:mt-10 max-w-[700px] mx-auto flex flex-col gap-4"
            >
              {/* 🛑 Honeypot / Bot-check field — screen reader + real users ko nahi dikhega */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

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

              <select
                name="subject"
                required
                defaultValue=""
                className="rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition text-[#5F5F5F]"
              >
                <option value="" disabled>
                  Select Subject
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Bulk / Wholesale Order">Bulk / Wholesale Order</option>
                <option value="Indoor Play Area Setup">Indoor Play Area Setup</option>
                <option value="Franchise / Business Inquiry">Franchise / Business Inquiry</option>
                <option value="Support / After-Sales">Support / After-Sales</option>
                <option value="Other">Other</option>
              </select>

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