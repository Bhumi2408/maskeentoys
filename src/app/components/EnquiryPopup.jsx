// src/app/components/EnquiryPopup.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { submitToWeb3Forms } from "../data/web3forms";

// localStorage me popup ka state save hota hai:
// "submitted" → form bhar diya, dobara kabhi mat dikhao
// "closed-1"  → ek baar band kiya, 30 sec baad phir dikhao
// "closed-2"  → do baar band kiya, dobara kabhi mat dikhao
const STORAGE_KEY = "maskeen_enquiry_popup";
const FIRST_DELAY = 7000;
const SECOND_DELAY = 30000;

// In pages pe popup nahi dikhega (yaha already form hai)
const HIDDEN_ON = ["/contact", "/thank-you"];

const readState = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const saveState = (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // private mode / storage blocked — ignore
  }
};

const inputClass =
  "w-full rounded-md border border-[#00000020] bg-white px-4 py-3 text-sm outline-none focus:border-[#F15D87] transition";

export default function EnquiryPopup() {
  const router = useRouter();
  const pathname = usePathname();
  const [due, setDue] = useState(false);
  const [status, setStatus] = useState("idle");
  const timerRef = useRef(null);

  const schedule = (delay) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setDue(true), delay);
  };

  // Pehli visit pe 7 sec, ek baar band karne ke baad 30 sec
  useEffect(() => {
    const state = readState();
    if (state !== "submitted" && state !== "closed-2") {
      schedule(state === "closed-1" ? SECOND_DELAY : FIRST_DELAY);
    }
    return () => clearTimeout(timerRef.current);
  }, []);

  const open = due && !HIDDEN_ON.includes(pathname);

  const handleClose = () => {
    const closedOnce = readState() === "closed-1";
    saveState(closedOnce ? "closed-2" : "closed-1");
    setDue(false);
    setStatus("idle");
    if (!closedOnce) schedule(SECOND_DELAY);
  };

  // Esc se band + background scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // handleClose sirf refs aur localStorage use karta hai, isliye purana closure bhi sahi chalta hai
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Honeypot — bot ne bhara hai to submit mat karo
    if (formData.get("botcheck")) {
      return;
    }

    setStatus("loading");

    const payload = {
      subject: "Popup Enquiry - Maskeen Toys Website",
      from_name: "Maskeen Toys Website",
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      page: pathname,
    };

    try {
      await submitToWeb3Forms(payload);
      saveState("submitted");
      setDue(false);
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-6"
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        className="relative w-full max-w-[460px] max-h-full overflow-y-auto rounded-[20px] bg-[#FBF3E9] px-5 sm:px-8 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full text-[#5F5F5F] hover:bg-black/5 transition"
        >
          <X size={20} />
        </button>

        <p className="text-center font-love uppercase text-[#EF4E74] text-sm">
          Free Consultation
        </p>
        <h2
          id="enquiry-popup-title"
          className="mt-2 text-center font-capriola text-[#1a1a1a] text-[22px] sm:text-[26px] leading-tight"
        >
          Planning a Play Area?
        </h2>
        <p className="mt-2 text-center text-sm text-[#5F5F5F]">
          Share your details and our team will call you with the right
          equipment and a quote.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="What are you looking for?"
            rows={3}
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-1 rounded-full bg-[#F15D87] hover:bg-[#e04578] transition text-white text-sm sm:text-base font-bold px-8 py-3 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Get a Call Back"}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm font-medium text-center">
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
