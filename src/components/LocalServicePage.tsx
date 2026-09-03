import { SeoLandingPage } from "@/components/SeoLandingPage";
import { localLandings } from "@/lib/content";

export function LocalServicePage({ page }: { page: (typeof localLandings)[number] }) {
  return <SeoLandingPage page={page} />;
}
