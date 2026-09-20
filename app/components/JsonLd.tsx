import {
  LICENSE_CAPACITY,
  LICENSE_NUMBER,
  LICENSE_TYPE,
  SITE_CITY,
  SITE_COUNTRY,
  SITE_EMAIL,
  SITE_MAP_COORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_POSTAL,
  SITE_REGION,
  SITE_SOCIAL,
  SITE_STREET,
  SITE_TAGLINE,
  SITE_URL,
} from "../lib/site";
import { homeLocations } from "../lib/facilities";
import { absoluteUrl } from "../lib/seo";

export default function JsonLd() {
  const santaMonica = homeLocations.find((home) => home.id === "santa-monica");

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: ["Penda Assisted Living", "Penda Home Care"],
    description: SITE_TAGLINE,
    url: SITE_URL,
    image: [
      absoluteUrl(SITE_OG_IMAGE),
      absoluteUrl("/img/about_cover.jpg"),
      absoluteUrl("/img/facilities_hero.jpg"),
      absoluteUrl("/photography/santa_monica_bedroom_01.jpg"),
    ],
    telephone: SITE_PHONE_TEL,
    email: SITE_EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_STREET,
      addressLocality: SITE_CITY,
      addressRegion: SITE_REGION,
      postalCode: SITE_POSTAL,
      addressCountry: SITE_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_MAP_COORDS.lat,
      longitude: SITE_MAP_COORDS.lng,
    },
    hasMap: `https://www.google.com/maps?q=${SITE_MAP_COORDS.lat},${SITE_MAP_COORDS.lng}`,
    department: santaMonica
      ? [
          {
            "@type": "LocalBusiness",
            name: `${SITE_NAME} · ${santaMonica.navLabel}`,
            url: absoluteUrl(santaMonica.path),
            address: {
              "@type": "PostalAddress",
              streetAddress: santaMonica.street,
              addressLocality: SITE_CITY,
              addressRegion: SITE_REGION,
              postalCode: SITE_POSTAL,
              addressCountry: SITE_COUNTRY,
            },
          },
        ]
      : undefined,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [SITE_SOCIAL.facebook, SITE_SOCIAL.instagram],
    areaServed: [
      {
        "@type": "City",
        name: "Maricopa",
        containedInPlace: { "@type": "State", name: "Arizona" },
      },
      { "@type": "AdministrativeArea", name: "Pinal County" },
    ],
    knowsAbout: [
      "Assisted living",
      "Medication management",
      "Senior personal care",
      "AHCCCS",
      "ALTCS",
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "License Type",
        value: LICENSE_TYPE,
      },
      {
        "@type": "PropertyValue",
        name: "ADHS License Number",
        value: LICENSE_NUMBER,
      },
      {
        "@type": "PropertyValue",
        name: "Licensed Resident Capacity",
        value: String(LICENSE_CAPACITY),
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_PHONE_TEL,
      contactType: "customer service",
      areaServed: "US-AZ",
      availableLanguage: ["English"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Penda Home Care located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Penda Home Care operates assisted living homes in Maricopa, AZ, including ${SITE_STREET} and ${santaMonica?.street ?? "W. Santa Monica Drive"}.`,
        },
      },
      {
        "@type": "Question",
        name: "How many residents does Penda Home Care serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Penda is licensed for up to ${LICENSE_CAPACITY} residents per home, allowing for individualized attention in a home-like setting.`,
        },
      },
      {
        "@type": "Question",
        name: "Does Penda Home Care accept AHCCCS or ALTCS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Penda Home Care works with eligible residents through AHCCCS and ALTCS when services are authorized and covered. Availability of public funding may vary by residence; the W. Santa Monica Drive home currently accepts private-pay admissions only.",
        },
      },
      {
        "@type": "Question",
        name: "How do I schedule a tour or care consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Call ${SITE_PHONE} or visit our schedule page to request a care consultation and tour of a Maricopa home.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
