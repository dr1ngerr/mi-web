import { SeoLandingPage } from "@/components/SeoLandingPage";
import { servicePages } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const page = servicePages.find((item) => item.slug === "landing-page-para-empresas")!;

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
});

export default function LandingPageParaEmpresasPage() {
  return <SeoLandingPage page={page} />;
}
