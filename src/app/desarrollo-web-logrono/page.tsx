import { LocalServicePage } from "@/components/LocalServicePage";
import { localLandings } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const page = localLandings.find((item) => item.slug === "desarrollo-web-logrono")!;

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
});

export default function DesarrolloWebLogronoPage() {
  return <LocalServicePage page={page} />;
}
