/**
 * lib/seo.ts — per-page metadata and structured-data helpers.
 *
 * Next.js replaces (does not merge) a parent's openGraph/twitter objects, so every page builds
 * the full set here: absolute title, description, canonical, Open Graph and Twitter card.
 */
import type { Metadata } from 'next'
import { CANONICAL_URL, SCHOOL_NAME } from './school'

export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: `${SCHOOL_NAME} — Learn to Drive. Learn to Arrive.`,
}

export function canonical(path: string): string {
  return path === '/' || path === '' ? CANONICAL_URL : `${CANONICAL_URL}${path}`
}

export function pageMetadata({
  path,
  title,
  description,
  type = 'website',
  keywords,
}: {
  path: string
  title: string
  description: string
  type?: 'website' | 'article'
  keywords?: string[]
}): Metadata {
  const url = canonical(path)
  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: SCHOOL_NAME,
      locale: 'en_ZA',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}

export type Faq = { q: string; a: string }

export function faqSchema(faqs: readonly Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** Home is always the first crumb; pass the remaining crumbs in order. */
export function breadcrumbSchema(crumbs: readonly { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonical(c.path),
    })),
  }
}
