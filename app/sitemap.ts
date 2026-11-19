import type { MetadataRoute } from 'next'
import { RULES_CHAPTERS } from '@/lib/rules-of-the-road'
import { CANONICAL_URL, LEARNER_PAGES, LESSON_PAGES } from '@/lib/school'
import { LOCATIONS } from '@/lib/locations'

const BASE = CANONICAL_URL

/** Date the school, lesson and learner's-licence pages were last edited. Update it when their content changes. */
const SCHOOL_PAGES_UPDATED = new Date('2026-11-19')

const PROVINCES = [
  'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape',
  'Mpumalanga', 'Limpopo', 'Free State', 'North West', 'Northern Cape',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const schoolEntries: MetadataRoute.Sitemap = [
    { path: '', priority: 1 },
    ...LOCATIONS.map(l => ({ path: l.path, priority: 0.9 })),
    ...LESSON_PAGES.map(p => ({ path: p.href, priority: 0.9 })),
    ...LEARNER_PAGES.map(p => ({ path: p.href, priority: 0.8 })),
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.7 },
    { path: '/pricing', priority: 0.6 },
    { path: '/courses', priority: 0.6 },
    { path: '/resources', priority: 0.5 },
  ].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: SCHOOL_PAGES_UPDATED,
    changeFrequency: 'monthly',
    priority,
  }))

  const otherEntries: MetadataRoute.Sitemap = ['/live-notes', '/live-notes/rules', '/videos', '/affiliate'].map(p => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  const provinceEntries: MetadataRoute.Sitemap = PROVINCES.map(prov => ({
    url: `${BASE}/centers?province=${encodeURIComponent(prov)}`,
    lastModified: SCHOOL_PAGES_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: prov === 'KwaZulu-Natal' ? 0.6 : 0.3,
  }))

  const ruleEntries: MetadataRoute.Sitemap = RULES_CHAPTERS.map(c => ({
    url: `${BASE}/live-notes/rules/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  const schoolProvinceEntries: MetadataRoute.Sitemap = PROVINCES.map(prov => ({
    url: `${BASE}/driving-schools?province=${encodeURIComponent(prov)}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.2,
  }))

  return [...schoolEntries, ...otherEntries, ...provinceEntries, ...ruleEntries, ...schoolProvinceEntries]
}
