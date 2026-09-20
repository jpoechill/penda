/** Shared site details for Penda Home Care (Maricopa, AZ). */

export const SITE_NAME = "Penda Home Care";
export const SITE_NAME_SHORT = "Penda Home Care";
export const SITE_LOCATION = "Maricopa, AZ";
export const SITE_LOCATION_FULL = "Maricopa, Arizona";
export const SITE_TAGLINE =
  "Licensed assisted living in a warm private home in Maricopa, AZ, with personalized care, dignity, and peace of mind for your family.";

/** Production site URL. Override with NEXT_PUBLIC_SITE_URL when deploying. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.pendahomecare.com";

export const SITE_ADDRESS = "40968 W. Portis Drive, Maricopa, AZ 85138";
export const SITE_STREET = "40968 W. Portis Drive";
export const SITE_CITY = "Maricopa";
export const SITE_REGION = "AZ";
export const SITE_POSTAL = "85138";
export const SITE_COUNTRY = "US";
export const SITE_MAP_COORDS = { lat: 33.0464864, lng: -112.0078846 };

export const SITE_PHONE = "(520) 457-7645";
export const SITE_PHONE_TEL = "+15204577645";
export const SITE_FAX = "(520) 423-3363";
export const SITE_EMAIL = "pendacare2023@gmail.com";

export const SITE_OG_IMAGE = "/img/cover_03.jpg";

export const SITE_SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61568741845327",
  instagram: "https://www.instagram.com/pendahomecare",
} as const;

export const SITE_KEYWORDS = [
  "assisted living Maricopa AZ",
  "Penda Home Care",
  "assisted living home Maricopa",
  "senior care Maricopa Arizona",
  "private assisted living Arizona",
  "AHCCCS ALTCS assisted living Maricopa",
  "small assisted living home",
  "elderly care Maricopa AZ",
  "medication management assisted living",
  "schedule assisted living tour Maricopa",
];

export const LICENSE_TYPE = "Arizona Licensed Assisted Living Home";
export const LICENSE_NUMBER = "AL13024H";
export const LICENSE_CAPACITY = 6;
export const LICENSING_STATEMENT =
  "Our care team is committed to meeting applicable Arizona Department of Health Services (ADHS) assisted living requirements and maintaining high standards of safety, dignity, and resident-centered care.";

export const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/Penda+Home+Care/@33.0464864,-112.0078846,783m/data=!3m2!1e3!4b1!4m6!3m5!1s0x872afbc1cf494cd5:0xde2649a99cea38be!8m2!3d33.0464864!4d-112.0078846!16s%2Fg%2F11n47z4q1v?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Penda+Home+Care,+40968+W.+Portis+Drive,+Maricopa,+AZ+85138&hl=en&z=16&output=embed";

export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=40968+W.+Portis+Drive,+Maricopa,+AZ+85138";

export const NAV_ROUTES = [
  { path: "/", label: "Home", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", label: "About", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services", label: "Services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/facilities/portis", label: "W. Portis Drive", changeFrequency: "monthly" as const, priority: 0.8 },
  {
    path: "/facilities/santa-monica",
    label: "W. Santa Monica Drive",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  { path: "/testimonials", label: "Stories", changeFrequency: "weekly" as const, priority: 0.6 },
  { path: "/schedule", label: "Schedule", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/contact", label: "Contact", changeFrequency: "monthly" as const, priority: 0.8 },
];
