// src/app/components/blog/BlogCard.jsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ blog }) {
  return (
    <article className="group flex flex-col rounded-[20px] sm:rounded-[24px] overflow-hidden bg-white border border-[#F0F0F0] shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1.5">
      <Link
        href={`/blog/${blog.slug}`}
        className="relative w-full aspect-[16/11] overflow-hidden"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {blog.category && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-[#F15D87] text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5">
            {blog.category}
          </span>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs text-[#8a8a8a]">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <User size={13} />
            {blog.author}
          </span>
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <h2 className="mt-3 font-capriola text-[#1a1a1a] text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-[#F15D87] transition-colors">
            {blog.title}
          </h2>
        </Link>

        <p className="mt-3 text-sm text-[#5F5F5F] leading-6 line-clamp-2">
          {blog.excerpt}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F15D87] group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}