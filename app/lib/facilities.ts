/** Bump when replacing files in /public so browsers skip stale cached JPEGs. */
export const PHOTO_VERSION = "20250830-backyards";

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

/** Curated subset for the landing page—rooms, common areas, and outdoor life. */
export const landingPreviewPhotos: GalleryItem[] = [
  gallery[1],
  gallery[2],
  gallery[6],
];

export const facilitiesIntro = {
  title: "A place that feels like home",
  description:
    "At Penda Assisted Living, we take pride in providing a comfortable, safe, and welcoming environment for our residents. Our home is thoughtfully designed to meet the unique needs of seniors while fostering community and independence.",
  body:
    "Our home offers comfortable private and semi-private rooms with easy access to welcoming shared spaces. Residents can relax, enjoy meals, and spend time together indoors or outside.",
};
