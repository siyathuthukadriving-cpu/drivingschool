import type { Metadata } from 'next'
import ResourcesClient from '@/components/ResourcesClient'
import { SITE_URL } from '@/lib/school'

// All resource data is static — page is pre-rendered once, access gate is client-side.
export const metadata: Metadata = {
  title: 'K53 Resources — Download Study PDFs',
  description: "Download K53 learner's licence study PDFs including test memos, practice quizzes, and the official road signs manual.",
  alternates: { canonical: `${SITE_URL}/resources` },
}

export default function ResourcesPage() {
  return <ResourcesClient />
}
