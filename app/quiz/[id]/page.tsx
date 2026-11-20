import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { hasQuizAccess } from '@/lib/access'
import QuizClient from '@/components/QuizClient'
import QuizGate from '@/components/QuizGate'
import type { Course, QuizQuestion } from '@/lib/types'

// Per-visitor paywall state (reads cookies) — must render dynamically.
export const dynamic = 'force-dynamic'

interface Props {
  params:      { id: string }
  searchParams: { test?: string }
}

export default async function QuizPage({ params, searchParams }: Props) {
  const testNumber = Number(searchParams.test ?? 1)

  // The welcome quiz is compulsory: practising needs full access or a passed
  // welcome quiz. Anyone else sees the gate (and the welcome popup on top).
  const premium = await hasQuizAccess()
  if (!premium) return <QuizGate />

  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('*')
    .eq('id', params.id)
    .single()

  if (courseError || !course) notFound()

  const { data: questions, error: qError } = await supabase
    .from('quiz_questions')
    .select('*')
    .eq('course_id', params.id)
    .eq('test_number', testNumber)
    .order('id')

  if (qError) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-red-500 text-center">Failed to load questions: {qError.message}</p>
      </div>
    )
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No questions found for this test.</p>
          <a href={`/courses/${params.id}`} className="text-brand-600 hover:underline">← Back to Course</a>
        </div>
      </div>
    )
  }

  const c = course as Course

  return (
    <QuizClient
      questions={questions as QuizQuestion[]}
      courseTitle={c.title}
      courseId={c.id}
      testNumber={testNumber}
      isPremium={premium}
      splitScoring={testNumber === 2 && ['code8', 'code10'].includes(c.code)}
    />
  )
}
