import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { categoryLabels, getAllPosts } from "@/data/blog";
import { caseStudies } from "@/data/caseStudies";
import { servicePages } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/blog",
    "/case-studies",
    "/risk-calculator",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    ...servicePages.map((service) => `/${service.slug}`),
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const staticBlogRoutes = [
    "/blog/what-must-be-in-employment-contract-uk",
    ...Object.keys(categoryLabels).map((category) => `/blog/category/${category}`),
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${SITE_URL}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...staticBlogRoutes, ...caseStudyRoutes];
}
