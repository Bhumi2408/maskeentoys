// src/app/components/WhatsAppButton.jsx
"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919811644688"
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
      fixed
      bottom-5
      right-5
      sm:bottom-8
      sm:right-8
      z-50
      flex
      items-center
      "
    >
      {/* Text pill — hidden by default, expands on hover */}
      <span
        className="
        max-w-0
        overflow-hidden
        opacity-0
        group-hover:max-w-[140px]
        group-hover:opacity-100
        group-hover:mr-2
        group-hover:px-4
        transition-all
        duration-300
        ease-in-out
        whitespace-nowrap
        bg-white
        text-[#1f1f1f]
        text-sm
        font-medium
        rounded-full
        py-2.5
        shadow-md
        "
      >
        WhatsApp
      </span>

      {/* Icon circle */}
      <span
        className="
        flex
        items-center
        justify-center
        w-12 h-12
        sm:w-14 sm:h-14
        rounded-full
        bg-[#25D366]
        shadow-lg
        shrink-0
        hover:scale-105
        transition-transform
        duration-300
        "
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl sm:text-3xl" />
      </span>
    </a>
  );
}