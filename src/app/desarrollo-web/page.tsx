import { SeoLandingPage } from "@/components/SeoLandingPage";
import { servicePages } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const page = servicePages[0];

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
});

export default function DesarrolloWebPage() {
  return <SeoLandingPage page={page} />;
}
