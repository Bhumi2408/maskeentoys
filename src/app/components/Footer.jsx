import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "New Arrival", href: "/new-arrival" },
  { label: "Our Products", href: "/our-products" },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const blogPosts = [
  {
    image: "/home/about-right.jpeg",
    title:
      "Complete Soft Play Area Solutions in Delhi — Build a Safe, Colorful & Fun World for Your Kids",
    href: "/complete-soft-play-area-solutions",
  },
  {
    image: "/home/blog2.png",
    title:
      "Soft Play Equipment for Kids: Complete Guide to Indoor Playgrounds, Play Zones & Choosing the Right Manufacturer in Delhi",
    href: "/soft-play-equipment-for-kids",
  },
  {
    image: "/home/playarea-2.png",
    title:
      "Top Soft Play Area Manufacturer Creating Safe and Engaging Kids Play Zones in Delhi 2026",
    href: "/soft-play-area-manufacturer",
  },
];

const socialLinks = [
  {
    icon: faFacebook,
    href: "https://www.facebook.com/playschooltoy/",
    color: "#EB79A2",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/maskeentoys/",
    color: "#FECE78",
  },
  {
    icon: faYoutube,
    href: "https://www.youtube.com/@maskeentoyspvtltd5668",
    color: "#66CAD6",
  },
  {
    icon: faWhatsapp,
    href: "https://wa.me/919811644688",
    color: "#B795C0",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#FBF9F3]">
      {/* Background pattern */}
      <Image
        src="/home/footerbg.jpg"
        alt=""
        fill
        className="object-cover object-top pointer-events-none select-none -z-0"
      />

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-20 pt-16 sm:pt-20 lg:pt-24">
        {/* ================= TOP ================= */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-start">
          {/* LEFT — heading + bunny */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <h2 className="font-love text-[#EA5288] text-[34px] sm:text-[44px] md:text-[52px] leading-none">
                Spark Little Smiles!
              </h2>

              <Image
                src="/home/doggy.png"
                alt=""
                width={100}
                height={130}
                className="absolute right-10 md:-right-3 w-[55px] sm:w-[75px] md:w-[95px] h-auto shrink-0 -mt-2"
              />
            </div>

            <p className="mt-3 sm:mt-4 text-[#5F5F5F] text-sm sm:text-base">
              Bright ideas, colorful toys, and endless imagination
            </p>
          </div>

          {/* RIGHT — email form */}
          <div className="w-full max-w-[650px] lg:ml-auto">
            <form className="flex flex-col md:flex-row gap-4 sm:gap-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-[#00000020] bg-white px-6 py-2.5 sm:py-3 text-sm sm:text-base placeholder:text-[#8a8a8a] outline-none focus:border-[#7ED3F8] transition"
              />

              <button
                type="submit"
                className="self-start rounded-full bg-[#7ED3F8] hover:bg-[#5fc4ef] transition text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-2.5 sm:py-3"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Icecream decorative — top right, desktop only */}
        <Image
          src="/home/mushroom.png"
          alt=""
          width={70}
          height={140}
          className="hidden xl:block absolute top-8 right-6 w-[55px] h-auto pointer-events-none select-none"
        />

        {/* ================= COLUMNS ================= */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6">
          {/* About */}
          <div>
            <h4 className="font-capriola text-[#21324A] text-xl sm:text-2xl">
              About:
            </h4>

            <p className="mt-4 text-[#5F5F5F] leading-6 sm:leading-7 max-w-[320px]">
              At Maskeen Overseas, we craft toys that inspire creativity and
              support learning. As trusted Play School Toys Suppliers in India,
              we combine fun with development—offering quality furniture and
              playful solutions that help young minds grow.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6FC191]">
                <Phone size={18} className="text-white" />
              </span>

              <div className="text-sm sm:text-base relative">
                <p className="text-[#21324A]">Call Us</p>
                <a
                  href="tel:+919811644688"
                  className="font-medium font-capriola text-[#21324A]"
                >
                  + 91-981-164-4688
                </a>
                {/* Flower decorative */}
                <Image
                  src="/home/flowwer.png"
                  alt=""
                  width={90}
                  height={90}
                  className="absolute top-10 -right-20 w-[90px] h-auto pointer-events-none select-none"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:pl-10">
            <h4 className="font-capriola text-[#21324A] text-xl sm:text-2xl">
              Links:
            </h4>

            <ul className="mt-4 flex flex-col gap-2.5 sm:gap-3">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 sm:text-[17px] text-[#5F5F5F] hover:text-[#FABC4C] transition"
                  >
                    <ChevronRight
                      size={16}
                      className="text-[#FABC4C] font-bold shrink-0"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-capriola text-[#21324A] text-xl sm:text-2xl">
              Contacts:
            </h4>

            <ul className="mt-4 flex flex-col gap-2.5 sm:gap-3 text-sm sm:text-[15px] text-[#5F5F5F]">
              <li className="flex items-start gap-2 text-[17px]">
                <ChevronRight
                  size={16}
                  className="text-[#6FC191] font-bold shrink-0 mt-1"
                />
                Maskeen Toys Pvt. Ltd. 10/62 S.S.J.M.D. Tower Kirti Nagar
                Industrial Area New Delhi-110015
              </li>
              <li className="flex items-center gap-2 text-[17px]">
                <ChevronRight size={14} className="text-[#6FC191] shrink-0" />
                <a
                  href="tel:+919811644688"
                  className="hover:text-[#EA5288] transition"
                >
                  +91-981-164-4688
                </a>
              </li>
              <li className="flex items-center gap-2 text-[17px]">
                <ChevronRight size={14} className="text-[#6FC191] shrink-0" />
                <a
                  href="mailto:sales@maskeentoy.com"
                  className="hover:text-[#EA5288] transition break-all"
                >
                  sales@maskeentoy.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[17px]">
                <ChevronRight size={14} className="text-[#6FC191] shrink-0" />
                <a
                  href="https://www.playschooltoy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] font-medium hover:underline break-all"
                >
                  www.playschooltoy.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[17px]">
                <ChevronRight size={14} className="text-[#6FC191] shrink-0" />
                <a
                  href="https://www.maskeen.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] font-medium hover:underline break-all"
                >
                  www.maskeen.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-[17px]">
                <ChevronRight size={14} className="text-[#6FC191] shrink-0" />
                <a
                  href="https://www.schoolfurnitureindia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] font-medium hover:underline break-all"
                >
                  www.schoolfurnitureindia.in
                </a>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="font-capriola text-[#21324A] text-xl sm:text-2xl">
              Blog:
            </h4>

            <div className="mt-4 flex flex-col gap-4 sm:gap-5">
              {blogPosts.map((post, index) => (
                <Link
                  key={index}
                  href={post.href}
                  className="flex items-start gap-3 group"
                >
                  <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <p className="text-xs sm:text-[14px] font-bold leading-snug text-[#21324A] group-hover:text-[#EA5288] transition">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 sm:mt-14 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/logo.png"
              alt="Maskeen Toys"
              width={200}
              height={100}
              className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
            />
          </div>

          {/* Copyright */}
          <p className="text-center text-[#333]">
            © 2025 Maskeen Overseas. All Rights Reserved |{" "}
            <a
              href="https://www.cybertricksmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EA5288] transition"
            >
              BharatBizmart
            </a>
          </p>

          {/* Social icons */}
          <div className="flex justify-center sm:justify-end gap-1">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: item.color }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-90 transition"
                >
                  <FontAwesomeIcon icon={Icon} size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
