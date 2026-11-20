/**
 * QuizGate — what a practice-quiz page shows to a visitor who has not yet
 * passed the welcome quiz. The welcome popup (WelcomeQuizPopup) opens on top
 * of this page and can't be dismissed, so this is only the content behind it.
 */
export default function QuizGate() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md">
        <div className="mb-3 text-5xl" aria-hidden="true">🔒</div>
        <h1 className="mb-2 text-2xl font-extrabold text-gray-900">Pass the welcome quiz to start practising</h1>
        <p className="text-sm text-gray-600">
          Give us your details and pass the short welcome quiz (80% or more) and the practice quizzes are free.
          If the quiz doesn’t appear, refresh this page.
        </p>
      </div>
    </div>
  )
}
