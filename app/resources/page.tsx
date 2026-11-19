import ResourcesClient from '@/components/ResourcesClient'
import { pageMetadata } from '@/lib/seo'

// All resource data is static — page is pre-rendered once, access gate is client-side.
export const metadata = pageMetadata({
  path: '/resources',
  title: 'K53 Study Resources and PDFs | Sathuthuka',
  description: "Download K53 learner's licence study PDFs including test memos, practice quizzes, and the official road signs manual.",
})

export default function ResourcesPage() {
  return (
    <>
      <header className="section-container max-w-6xl pt-12">
        <h1 className="text-3xl font-extrabold text-gray-900">K53 Study Resources</h1>
        <p className="mt-2 text-gray-500">Download K53 practice tests, memos with highlighted answers, and reference manuals.</p>
      </header>
      <ResourcesClient />
    </>
  )
}
