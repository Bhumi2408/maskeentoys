// src/app/sitemap.js
import { blogs } from "./blog/data/blogs";
import { landingPages } from "./data/landingPages";

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
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog detail pages — blogs.js se automatically aa jayenge
  const blogRoutes = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // Dynamic product/service landing pages — landingPages.js se automatically aa jayenge
  const landingPageRoutes = landingPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...landingPageRoutes];
}