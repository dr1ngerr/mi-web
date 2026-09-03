import { SeoLandingPage } from "@/components/SeoLandingPage";
import { servicePages } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const page = servicePages[2];

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
});

export default function InteligenciaArtificialPage() {
  return <SeoLandingPage page={page} />;
}
