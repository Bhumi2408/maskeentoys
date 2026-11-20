// src/app/components/QuoteButton.jsx
"use client";

import { FileText, Mail } from "lucide-react";
import { OPEN_POPUP_EVENT } from "./EnquiryPopup";

const variants = {
  quote: { icon: FileText, colors: "bg-[#FDBE46] hover:bg-[#f3b129]" },
  enquiry: { icon: Mail, colors: "bg-[#F15D87] hover:bg-[#e04578]" },
};

// Click pe layout wala EnquiryPopup khulta hai (same web3forms keys)
// compact: tang jagah (jaise image ke neeche do buttons) ke liye full-width, chhota padding
export default function QuoteButton({ label = "Get Quotation", variant = "quote", compact = false }) {
  const { icon: Icon, colors } = variants[variant];
  const size = compact ? "w-full px-4 py-3 text-sm sm:text-[15px]" : "px-8 py-3 text-sm sm:text-base";

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_POPUP_EVENT))}
      className={`inline-flex items-center justify-center gap-2 rounded-full ${colors} transition text-white font-bold tracking-wide ${size}`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}
