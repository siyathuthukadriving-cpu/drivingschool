/**
 * lib/welcome-quiz.ts — questions and scoring for the welcome popup quiz.
 *
 * The correct answers live here, on the server. The browser only ever gets
 * the questions and options (publicQuestions) and sends its picks back to be
 * scored by POST /api/welcome-quiz.
 */
import {
  SCHOOL_NAME, SCHOOL_PHONE_INTL, SCHOOL_YEARS, SCHOOL_DRIVERS_LICENSED_LABEL,
} from '@/lib/school'

export const WELCOME_QUIZ_PASS_FRACTION = 0.8

interface Option { id: string; label: string; correct?: boolean }
interface Question { id: string; prompt: string; options: Option[] }

const QUESTIONS: Question[] = [
  {
    id: 'name',
    prompt: 'What is the name of the driving school?',
    options: [
      { id: 'a', label: SCHOOL_NAME, correct: true },
      { id: 'b', label: 'Sunrise Driving School' },
      { id: 'c', label: 'Sakhile Driving Academy' },
      { id: 'd', label: 'Safe Roads Driving Centre' },
    ],
  },
  {
    id: 'location',
    prompt: 'Where is the school located?',
    options: [
      { id: 'a', label: 'Cape Town' },
      { id: 'b', label: 'Durban, KwaZulu-Natal', correct: true },
      { id: 'c', label: 'Johannesburg' },
      { id: 'd', label: 'Bloemfontein' },
    ],
  },
  {
    id: 'years',
    prompt: 'How many years has the school been in operation?',
    options: [
      { id: 'a', label: '10 years' },
      { id: 'b', label: '20 years' },
      { id: 'c', label: `${SCHOOL_YEARS} years`, correct: true },
      { id: 'd', label: '50 years' },
    ],
  },
  {
    id: 'phone',
    prompt: 'Which is the school’s contact number?',
    options: [
      { id: 'a', label: '+1 (415) 555-0132 (USA)' },
      { id: 'b', label: SCHOOL_PHONE_INTL, correct: true },
      { id: 'c', label: '+44 20 7946 0958 (UK)' },
      { id: 'd', label: '+49 30 901820 (Germany)' },
    ],
  },
  {
    id: 'drivers',
    prompt: 'How many drivers have got their licence through the school since 1996?',
    options: [
      { id: 'a', label: 'Over 200' },
      { id: 'b', label: SCHOOL_DRIVERS_LICENSED_LABEL, correct: true },
      { id: 'c', label: 'Over 20 000' },
      { id: 'd', label: 'Fewer than 500' },
    ],
  },
]

/** Questions with the answers stripped, safe to send to the browser. */
export function publicQuestions() {
  return QUESTIONS.map(q => ({
    id: q.id,
    prompt: q.prompt,
    options: q.options.map(o => ({ id: o.id, label: o.label })),
  }))
}

/** Score a set of picks ({ questionId: optionId }). */
export function scoreWelcomeQuiz(answers: unknown): { score: number; total: number; passed: boolean } {
  const picks = (answers && typeof answers === 'object' ? answers : {}) as Record<string, unknown>
  let score = 0
  for (const q of QUESTIONS) {
    const chosen = picks[q.id]
    if (typeof chosen === 'string' && q.options.find(o => o.id === chosen)?.correct) score++
  }
  const total = QUESTIONS.length
  return { score, total, passed: score / total >= WELCOME_QUIZ_PASS_FRACTION }
}
