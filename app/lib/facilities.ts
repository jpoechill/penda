/** Bump when replacing files in /public so browsers skip stale cached JPEGs. */
export const PHOTO_VERSION = "20250830-backyards";
export const SANTA_MONICA_PHOTO_VERSION = "20260919-launch";

export const homeDetails = [
  "5 bedrooms",
  "3 bathrooms",
  "Private & semi-private master rooms",
  "Community area",
  "Dining room",
  "Full kitchen",
  "Patio",
  "Backyard",
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  span: string;
};

export const gallery: GalleryItem[] = [
  {
    src: `/photography/master_bedroom_2_123026.jpg?v=${PHOTO_VERSION}`,
    alt: "Master bedroom living accommodation",
    span: "col-span-2",
  },
  {
    src: `/photography/living_01.jpg?v=${PHOTO_VERSION}`,
    alt: "Living room seating area",
    span: "",
  },
  {
    src: `/photography/two_beds.jpg?v=${PHOTO_VERSION}`,
    alt: "Comfortable bedroom with two beds",
    span: "",
  },
  {
    src: `/photography/living_03.jpg?v=${PHOTO_VERSION}`,
    alt: "Bright shared living space",
    span: "",
  },
  {
    src: `/photography/living_02.jpg?v=${PHOTO_VERSION}`,
    alt: "Home living area at Penda",
    span: "",
  },
  {
    src: `/photography/backyard_01.jpg?v=${PHOTO_VERSION}`,
    alt: "Outdoor backyard space",
    span: "",
  },
  {
    src: `/photography/backyard_02.jpg?v=${PHOTO_VERSION}`,
    alt: "Landscaped outdoor area",
    span: "",
  },
];

/** Curated subset for the landing page - rooms, common areas, and outdoor life. */
export const landingPreviewPhotos: GalleryItem[] = [
  gallery[1],
  gallery[2],
  gallery[6],
];

/** Shared Portis-oriented intro used on the homepage preview. */
export const facilitiesIntro = {
  title: "A place that feels like home",
  description:
    "At Penda Assisted Living, we take pride in providing a comfortable, safe, and welcoming environment for our residents. Our home is thoughtfully designed to meet the unique needs of seniors while fostering community and independence.",
  body:
    "Our home offers comfortable private and semi-private rooms with easy access to welcoming shared spaces. Residents can relax, enjoy meals, and spend time together indoors or outside.",
};

export type HomeLocationId = "portis" | "santa-monica";

export type HomeHighlight = {
  title: string;
  description: string;
};

export type HomeLocation = {
  id: HomeLocationId;
  slug: HomeLocationId;
  navLabel: string;
  street: string;
  cityLine: string;
  address: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  eyebrow: string;
  introTitle: string;
  introDescription: string;
  introBody: string[];
  detailsHeading: string;
  details: string[];
  highlights?: HomeHighlight[];
  availabilityNote?: string;
  availabilityHeading?: string;
  financingNote?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroImagePosition?: string;
  /** When false, the photo gallery shows a Coming soon placeholder. */
  hasGallery: boolean;
  /** Optional per-home gallery. Falls back to the shared Portis gallery when omitted. */
  gallery?: GalleryItem[];
  galleryComingSoonTitle?: string;
  galleryComingSoonBody?: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  ctaTitle: string;
  ctaDescription: string;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  mapPlaceUrl: string;
};

export const homeLocations: HomeLocation[] = [
  {
    id: "portis",
    slug: "portis",
    navLabel: "W. Portis Drive",
    street: "40968 W. Portis Drive",
    cityLine: "Maricopa, AZ 85138",
    address: "40968 W. Portis Drive, Maricopa, AZ 85138",
    path: "/facilities/portis",
    metaTitle: "W. Portis Drive Assisted Living Home",
    metaDescription:
      "Tour Penda Home Care LLC’s assisted living home on W. Portis Drive in Maricopa, AZ: 5 bedrooms, 3 bathrooms, private and semi-private rooms, community areas, patio, and backyard.",
    heroTitle: "W. Portis Drive",
    heroDescription:
      "Our established assisted living home in Maricopa: comfortable rooms, shared spaces, and care that feels personal every day.",
    eyebrow: "Established Maricopa home",
    introTitle: "A place that feels like home",
    introDescription:
      "Our Portis Drive home is a warm, private residence created for families who want personalized assisted living in a calm, home-like setting, without the feel of a large facility.",
    introBody: [
      "From the first walk-through, you’ll notice the difference: soft light, inviting common areas, and a care team focused on dignity, routine, and genuine connection. This is a place where mornings can begin slowly, meals are shared around a real table, and evenings feel quiet and safe.",
      "Residents enjoy comfortable private and semi-private rooms with easy access to welcoming shared spaces. Inside or outside, there is room to relax, connect, and feel at home.",
    ],
    detailsHeading: "What you’ll find here",
    details: [...homeDetails],
    highlights: [
      {
        title: "Established home",
        description:
          "Our Portis Drive residence is a trusted Maricopa assisted living home families know and return to for tours and care conversations.",
      },
      {
        title: "Small by design",
        description:
          "With room for only a handful of residents, care stays personal and the house keeps the feel of a real home.",
      },
      {
        title: "Spaces that work",
        description:
          "Five bedrooms, three bathrooms, shared living and dining areas, a full kitchen, patio, and backyard support daily life with ease.",
      },
    ],
    hasGallery: true,
    primaryCtaLabel: "Schedule a Visit",
    secondaryCtaLabel: "Ask about availability",
    ctaTitle: "Come see the home for yourself",
    ctaDescription:
      "A visit is the best way to feel the atmosphere at our Portis Drive home and decide whether it is the right fit for your loved one.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Penda+Home+Care+LLC,+40968+W.+Portis+Drive,+Maricopa,+AZ+85138&hl=en&z=16&output=embed",
    mapDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=40968+W.+Portis+Drive,+Maricopa,+AZ+85138",
    mapPlaceUrl:
      "https://www.google.com/maps/place/Penda+Home+Care+LLC/@33.0464864,-112.0078846,783m/data=!3m2!1e3!4b1!4m6!3m5!1s0x872afbc1cf494cd5:0xde2649a99cea38be!8m2!3d33.0464864!4d-112.0078846!16s%2Fg%2F11n47z4q1v?entry=ttu",
  },
  {
    id: "santa-monica",
    slug: "santa-monica",
    navLabel: "W. Santa Monica Drive",
    street: "35166 W. Santa Monica Drive",
    cityLine: "Maricopa, AZ 85138",
    address: "35166 W. Santa Monica Drive, Maricopa, AZ 85138",
    path: "/facilities/santa-monica",
    metaTitle: "W. Santa Monica Drive: New Assisted Living Home",
    metaDescription:
      "Penda Home Care’s new assisted living home on W. Santa Monica Drive in Maricopa, AZ is open and welcoming residents. Private financing only. Space is available. Schedule a visit today.",
    heroTitle: "W. Santa Monica Drive",
    heroDescription:
      "A brand-new Maricopa assisted living home with rooms available now.",
    eyebrow: "New home · Rooms available",
    introTitle: "A fresh start in a warm, private home",
    introDescription:
      "Our Santa Monica Drive home is our newest residence, created for families who want personalized assisted living in a calm, home-like setting, without the feel of a large facility.",
    introBody: [
      "From the first walk-through, you’ll notice the difference: soft light, inviting common areas, and a care team focused on dignity, routine, and genuine connection. This is a place where mornings can begin slowly, meals are shared around a real table, and evenings feel quiet and safe.",
      "We are open and currently accepting new residents. If you are looking for available space in a small Maricopa assisted living home, we welcome you to schedule a visit.",
    ],
    detailsHeading: "What you’ll find here",
    details: [
      "Newly opened Maricopa residence",
      "Rooms available for new residents",
      "Private & semi-private rooms",
      "Comfortable shared living areas",
      "Home-style dining",
      "Outdoor patio and yard space",
      "Personalized daily support",
      "Small-home atmosphere",
    ],
    highlights: [
      {
        title: "New home",
        description:
          "Santa Monica Drive is our newest Maricopa residence, thoughtfully prepared for families seeking a fresh start in care.",
      },
      {
        title: "Spaces available",
        description:
          "Rooms are open now. Reach out to reserve a tour and discuss current availability.",
      },
      {
        title: "Private financing only",
        description:
          "This location accepts private-pay admissions only. We are happy to walk through options during a visit.",
      },
    ],
    availabilityHeading: "New home with rooms available",
    availabilityNote:
      "Our W. Santa Monica Drive residence is open and accepting residents. Spaces are available now for private-pay admissions.",
    heroImageSrc: `/photography/santa_monica_bedroom_01.jpg?v=${SANTA_MONICA_PHOTO_VERSION}`,
    heroImageAlt: "Warm, modern bedroom at Penda Home Care on W. Santa Monica Drive",
    heroImagePosition: "object-[center_45%]",
    hasGallery: true,
    gallery: [
      {
        src: `/photography/santa_monica_bedroom_01.jpg?v=${SANTA_MONICA_PHOTO_VERSION}`,
        alt: "Bright bedroom with soft linens and warm lamp light at the Santa Monica Drive home",
        span: "",
      },
      {
        src: `/photography/santa_monica_bedroom_02.jpg?v=${SANTA_MONICA_PHOTO_VERSION}`,
        alt: "Cozy bedroom corner with reading chair and window light at the Santa Monica Drive home",
        span: "",
      },
    ],
    primaryCtaLabel: "Schedule a Visit",
    secondaryCtaLabel: "Ask about openings",
    ctaTitle: "We’d love to welcome you",
    ctaDescription:
      "Space is available at our new Santa Monica Drive home. Schedule a tour and see whether this warm, private residence is the right fit for your family.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=35166+W.+Santa+Monica+Drive,+Maricopa,+AZ+85138&hl=en&z=16&output=embed",
    mapDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=35166+W.+Santa+Monica+Drive,+Maricopa,+AZ+85138",
    mapPlaceUrl:
      "https://www.google.com/maps/search/?api=1&query=35166+W.+Santa+Monica+Drive,+Maricopa,+AZ+85138",
  },
];

export function getHomeLocation(slug: string): HomeLocation | undefined {
  return homeLocations.find((home) => home.slug === slug);
}
