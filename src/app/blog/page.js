// src/app/blog/page.js
import PageBanner from "../components/PageBanner";
import BlogCard from "./BlogCard";
import { getSortedBlogs } from "./data/blogs";

export const metadata = {
  title: "Blog | Maskeen Toys - Soft Play Area Manufacturer in Delhi",
  description:
    "Read the latest articles, guides, and insights on soft play equipment, indoor playgrounds, and playschool furniture from Maskeen Toys — trusted soft play area manufacturer in Delhi.",
  alternates: {
    canonical: "https://www.playareamanufacturer.com/blog",
  },
};

export default function BlogPage() {
  const sortedBlogs = getSortedBlogs();

  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Insights, Guides & Ideas on Soft Play & Indoor Playgrounds"
        bgImage="/home/rollset-12.png"
      />

      <section className="bg-[#FBF9F3] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1700px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}