// src/app/blog/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { blogs, getBlogBySlug, getSortedBlogs } from "../data/blogs";
import BlogContentRenderer from "../BlogContentRenderer";
import BlogCard from "../BlogCard";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// src/app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  const seoTitle = blog.metaTitle || `${blog.title} | Maskeen Toys`;
  const seoDescription = blog.metaDescription || blog.excerpt;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `https://www.playareamanufacturer.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://www.playareamanufacturer.com/blog/${blog.slug}`,
      siteName: "Maskeen Toys",
      images: [{ url: blog.image, width: 1200, height: 630 }],
      type: "article",
      publishedTime: blog.date,
      locale: "en_US",
    },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const related = getSortedBlogs()
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      {/* ================= HEADER IMAGE ================= */}
      <section className="relative w-full h-[260px] sm:h-[360px] md:h-[440px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-2 text-white text-sm hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <h1 className="font-capriola text-white text-[22px] sm:text-[32px] md:text-[40px] leading-tight max-w-[900px]">
            {blog.title}
          </h1>

          <div className="mt-4 flex items-center gap-5 text-white text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(blog.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {blog.author}
            </span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[850px] px-5 sm:px-8">
          <BlogContentRenderer content={blog.content} />
        </div>
      </section>

      {/* ================= RELATED BLOGS ================= */}
      {related.length > 0 && (
        <section className="bg-[#FBF9F3] py-12 sm:py-16">
          <div className="mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <h2 className="text-center font-capriola text-[#1a1a1a] text-xl sm:text-2xl md:text-[28px] mb-8 sm:mb-10">
              More Articles You&apos;ll Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {related.map((b) => (
                <BlogCard key={b.slug} blog={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}