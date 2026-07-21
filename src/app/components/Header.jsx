"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faWhatsapp,
  faSquareFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "NEW ARRIVAL", href: "/new-arrival" },
  { name: "OUR PRODUCTS", href: "/our-products" },
  { name: "OUR CLIENTS", href: "/our-clients" },
  { name: "BLOG", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#E54B86] hidden md:block">
        <div className="flex items-center justify-between h-[40px] px-10">
          <a
            href="tel:+919811644688"
            className="flex items-center gap-2 text-white font-bold text-[15px] transition-all duration-300 hover:text-[#6a4176]"
          >
            <FontAwesomeIcon icon={faWhatsapp} size={20} />
            91-981-164-4688
          </a>

          <div className="hidden md:flex items-center gap-2 text-white">
            <Link
              href="https://www.facebook.com/playschooltoy/"
              target="_blank"
              className="hover:text-[#6a4176]"
            >
              {" "}
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="text-[15px]"
              />
            </Link>
            <Link
              href="https://www.instagram.com/maskeentoys/"
              target="_blank"
              className="hover:text-[#6a4176]"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[15px]" />
            </Link>
            <Link
              href="https://www.youtube.com/@maskeentoyspvtltd5668"
              target="_blank"
              className="hover:text-[#6a4176]"
            >
              <FontAwesomeIcon icon={faYoutube} className="text-[15px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="shadow-sm bg-white">
        <div className="grid lg:grid-cols-[220px_1fr_400px] justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start px-2 md:px-4 py-1 md:py-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={90}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium font-capriola text-[#334765] hover:text-[#E54B86] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex bg-[#F7BA42] h-full items-center justify-center gap-5 px-3">
            <Link
              href="/contact"
              className="bg-[#F37675] text-white rounded-full px-5 py-2 font-capriola flex items-center gap-3 font-medium text-[15px]"
            >
              <FontAwesomeIcon icon={faPhone} size={15} />
              Contact Us
            </Link>

            <Image src="/dragon.png" alt="Dragon" width={55} height={55} />

            <div className="text-white">
              <p className="text-lg leading-none">Call Us</p>
              <a
                href="tel:+919811644688"
                className="text-[15px] mt-1 font-semibold"
              >
                +91-981-164-4688
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden absolute right-5 top-[28px]">
            <button onClick={() => setOpen(!open)}>
              <Menu size={34} />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-white">
            <div className="flex flex-col p-5 gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
