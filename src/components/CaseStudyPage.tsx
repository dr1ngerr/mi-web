import { existsSync } from "fs";
import path from "path";
import type { CaseStudy } from "@/lib/content";
import { CaseStudyContent } from "./CaseStudyContent";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { WhatsAppFloat } from "./WhatsAppFloat";

function availableScreenshotSrcs(study: CaseStudy) {
  return study.screenshots
    .map((shot) => shot.src)
    .filter((src) =>
      existsSync(path.join(process.cwd(), "public", src.replace(/^\//, ""))),
    );
}

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <>
      <Navbar />
      <main className="border-b border-slate-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <CaseStudyContent
          study={study}
          availableScreenshotSrcs={availableScreenshotSrcs(study)}
        />
      </main>
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
