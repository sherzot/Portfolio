import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://sherdev.netlify.app/", lastModified: new Date() }];
}
