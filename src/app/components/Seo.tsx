import { useEffect } from "react";
import {
  buildAbsoluteUrl,
  getLocalBusinessSchema,
  getWebPageSchema,
  getWebSiteSchema,
  siteConfig,
} from "../siteConfig";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  schema?: object[];
};

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
  element.setAttribute("content", content);
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertJsonLd(graph: object[]) {
  const scriptId = "seo-jsonld";
  let element = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = scriptId;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

export function Seo({
  title,
  description,
  path = "/",
  keywords = [],
  image,
  type = "website",
  schema = [],
}: SeoProps) {
  useEffect(() => {
    const resolvedTitle = title
      ? `${title} | ${siteConfig.name}`
      : siteConfig.defaultTitle;
    const resolvedDescription = description ?? siteConfig.defaultDescription;
    const canonicalUrl = buildAbsoluteUrl(path);
    const resolvedImage = image ?? buildAbsoluteUrl("/beautys-reyyan-logo.png");
    const resolvedKeywords = [...siteConfig.defaultKeywords, ...keywords].join(", ");

    document.title = resolvedTitle;
    document.documentElement.lang = siteConfig.language;

    upsertMeta('meta[name="description"]', { name: "description" }, resolvedDescription);
    upsertMeta('meta[name="keywords"]', { name: "keywords" }, resolvedKeywords);
    upsertMeta(
      'meta[name="robots"]',
      { name: "robots" },
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );
    upsertMeta('meta[name="author"]', { name: "author" }, siteConfig.legalName);
    upsertMeta('meta[name="theme-color"]', { name: "theme-color" }, "#FCFBF9");
    upsertMeta('meta[name="format-detection"]', { name: "format-detection" }, "telephone=yes");
    upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, siteConfig.locale);
    upsertMeta('meta[property="og:type"]', { property: "og:type" }, type);
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, siteConfig.name);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, resolvedTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, resolvedDescription);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, resolvedImage);
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, resolvedTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, resolvedDescription);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, resolvedImage);
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });
    upsertLink('link[rel="alternate"][hreflang="fr-BE"]', {
      rel: "alternate",
      hreflang: "fr-BE",
      href: canonicalUrl,
    });

    upsertJsonLd([
      getLocalBusinessSchema(),
      getWebSiteSchema(),
      getWebPageSchema({
        title: resolvedTitle,
        description: resolvedDescription,
        path,
      }),
      ...schema,
    ]);
  }, [description, image, keywords, path, schema, title]);

  return null;
}
