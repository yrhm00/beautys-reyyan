export const siteConfig = {
  name: "Beauty's Reyyan",
  legalName: "Institut Beauty's Reyyan",
  baseUrl: "https://beautysreyyan.be",
  domain: "beautysreyyan.be",
  locale: "fr_BE",
  language: "fr-BE",
  phoneDisplay: "+32 489 14 17 81",
  phoneHref: "tel:+32489141781",
  email: "institut.beautysreyyan@hotmail.com",
  emailHref: "mailto:institut.beautysreyyan@hotmail.com",
  instagramUrl: "https://www.instagram.com/beautys_reyyan",
  facebookUrl:
    "https://www.facebook.com/profile.php?id=100087902018001&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  address: {
    street: "Rue des Hauchies 93",
    postalCode: "6060",
    city: "Gilly",
    region: "Hainaut",
    country: "Belgique",
    countryCode: "BE",
  },
  experienceYears: 4,
  openingHours: {
    display: "Lundi au samedi, de 9h00 a 19h00",
    opens: "09:00",
    closes: "19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  defaultTitle: "Beauty's Reyyan | Centre d'epilation laser a Gilly, Belgique",
  defaultDescription:
    "Beauty's Reyyan est un centre d'epilation laser a Gilly en Belgique. Soins laser, cryolipolyse, Hydra-Face, formations professionnelles et accompagnement personnalise.",
  defaultKeywords: [
    "epilation laser Gilly",
    "epilation definitive Belgique",
    "centre laser Charleroi",
    "epilation diode Gilly",
    "Beauty's Reyyan",
    "Hydra-Face Belgique",
    "cryolipolyse Gilly",
    "formation laser Belgique",
  ],
} as const;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildAbsoluteUrl(path = "/") {
  if (!path.startsWith("/")) {
    return `${siteConfig.baseUrl}/${path}`;
  }

  return `${siteConfig.baseUrl}${path}`;
}

export function buildMailto(subject: string, body: string) {
  return `${siteConfig.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getLocalBusinessSchema() {
  return {
    "@type": "BeautySalon",
    "@id": `${siteConfig.baseUrl}/#business`,
    name: siteConfig.legalName,
    description: siteConfig.defaultDescription,
    url: siteConfig.baseUrl,
    image: buildAbsoluteUrl("/beautys-reyyan-logo.png"),
    logo: buildAbsoluteUrl("/beautys-reyyan-logo.png"),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "BE",
      availableLanguage: ["fr-BE"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.days,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
    areaServed: [
      { "@type": "City", name: siteConfig.address.city },
      { "@type": "AdministrativeArea", name: "Charleroi" },
      { "@type": "Country", name: siteConfig.address.country },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.baseUrl}/#website`,
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    inLanguage: siteConfig.language,
  };
}

export function getWebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${buildAbsoluteUrl(path)}#webpage`,
    url: buildAbsoluteUrl(path),
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": `${siteConfig.baseUrl}/#website` },
    about: { "@id": `${siteConfig.baseUrl}/#business` },
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  };
}

export function getFaqSchema(entries: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}
