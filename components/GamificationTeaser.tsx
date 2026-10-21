import Link from 'next/link'
import Button from './Button'
import Card from './Card'

const badges = [
  {
    emoji: '🔥',
    title: 'Practice Streak',
    desc: 'Study a little every day and watch your streak grow — consistency beats cramming for the K53.',
  },
  {
    emoji: '🏆',
    title: 'Best Score',
    desc: 'Every retake is tracked against your personal best, so you can see real improvement over time.',
  },
  {
    emoji: '✅',
    title: 'Section Badges',
    desc: 'Earn a badge for Road Signs, Vehicle Controls and Rules of the Road as you complete each one.',
  },
]

export default function GamificationTeaser() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50 border-t border-gray-100">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full mb-3">
            Stay motivated
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Your progress, tracked every step</h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Your account keeps score so you always know what to study next.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {badges.map(badge => (
            <Card key={badge.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-2xl mb-4 shadow-sm">
                {badge.emoji}
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">{badge.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{badge.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/account">
            <Button variant="primary" className="px-7 py-3.5 text-sm">
              Track Your Progress
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
