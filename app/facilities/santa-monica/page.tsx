import type { Metadata } from "next";
import HomeFacilityPage from "../../components/HomeFacilityPage";
import { getHomeLocation } from "../../lib/facilities";
import { pageMetadata } from "../../lib/seo";

const home = getHomeLocation("santa-monica")!;

export const metadata: Metadata = pageMetadata({
  title: home.metaTitle,
  description: home.metaDescription,
  path: home.path,
  image: "/photography/santa_monica_bedroom_01.jpg",
});

export default function SantaMonicaHomePage() {
  return <HomeFacilityPage home={home} />;
}
