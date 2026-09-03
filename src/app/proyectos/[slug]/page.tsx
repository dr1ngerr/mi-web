import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Proyecto no encontrado" };

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: {
      canonical: `/proyectos/${study.slug}`,
    },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: `/proyectos/${study.slug}`,
      type: "article",
      images: [
        {
          url: study.coverImage,
          alt: study.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,
      images: [study.coverImage],
    },
  };
}

export default async function ProyectoCasoPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyPage study={study} />;
}
