import ResourcesClient from '@/components/ResourcesClient'
import { pageMetadata } from '@/lib/seo'

// All resource data is static — page is pre-rendered once, access gate is client-side.
export const metadata = pageMetadata({
  path: '/resources',
  title: 'K53 Study Resources and PDFs | Sathuthuka',
  description: "Download K53 learner's licence study PDFs including test memos, practice quizzes, and the official road signs manual.",
})

export default function ResourcesPage() {
  return <ResourcesClient />
}
