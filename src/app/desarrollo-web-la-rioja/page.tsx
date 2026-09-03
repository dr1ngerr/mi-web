import { LocalServicePage } from "@/components/LocalServicePage";
import { localLandings } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const page = localLandings[0];

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
});

export default function DesarrolloWebLaRiojaPage() {
  return <LocalServicePage page={page} />;
}
