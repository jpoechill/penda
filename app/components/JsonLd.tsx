import {
  LICENSE_CAPACITY,
  LICENSE_NUMBER,
  SITE_CITY,
  SITE_COUNTRY,
  SITE_EMAIL,
  SITE_MAP_COORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_PHONE_TEL,
  SITE_POSTAL,
  SITE_REGION,
  SITE_SOCIAL,
  SITE_STREET,
  SITE_TAGLINE,
  SITE_URL,
} from "../lib/site";
import { absoluteUrl } from "../lib/seo";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: "Penda Assisted Living",
    description: SITE_TAGLINE,
    url: SITE_URL,
    image: absoluteUrl(SITE_OG_IMAGE),
    telephone: SITE_PHONE_TEL,
    email: SITE_EMAIL,
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
    areaServed: {
      "@type": "City",
      name: "Maricopa",
      containedInPlace: {
        "@type": "State",
        name: "Arizona",
      },
    },
    additionalProperty: [
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
    </>
  );
}
