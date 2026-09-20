import type { Metadata } from "next";
import HomeFacilityPage from "../../components/HomeFacilityPage";
import { getHomeLocation } from "../../lib/facilities";
import { pageMetadata } from "../../lib/seo";

const home = getHomeLocation("portis")!;

export const metadata: Metadata = pageMetadata({
  title: home.metaTitle,
  description: home.metaDescription,
  path: home.path,
  image: "/img/facilities_hero.jpg",
});

export default function PortisHomePage() {
  return <HomeFacilityPage home={home} />;
}
