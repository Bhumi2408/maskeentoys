// src/app/sitemap.js
import { blogs } from "./blog/data/blogs";

const BASE_URL = "https://www.playareamanufacturer.com";

export default function sitemap() {
  // Static pages
  const staticRoutes = [
    "",
    "/about",
    "/new-arrival",
    "/our-products",
    "/our-clients",
    "/blog",
    "/contact",
    "/indoor-play-area-setup-in-delhi",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog detail pages — blogs.js se automatically aa jayenge
  const blogRoutes = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}