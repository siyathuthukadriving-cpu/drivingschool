import Image from 'next/image'

/**
 * Sathuthuka Driving School lockup: the "S" arrow mark plus the banner wordmark
 * (white SATHUTHUKA with a red final A, red tracked DRIVING SCHOOL beneath).
 * Set `compact` to drop the wordmark on very small screens.
 */
export default function Logo({
  size = 'md',
  compact = false,
}: {
  size?: 'md' | 'lg'
  compact?: boolean
}) {
  const mark = size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  const name = size === 'lg' ? 'text-[1.35rem]' : 'text-[1.05rem]'
  const sub = size === 'lg' ? 'text-[0.6rem] tracking-[0.42em]' : 'text-[0.5rem] tracking-[0.4em]'
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo-mark.jpg"
        alt=""
        width={96}
        height={96}
        className={`${mark} rounded-lg shrink-0`}
        priority
      />
      <span className={`flex-col leading-none ${compact ? 'hidden min-[360px]:flex' : 'flex'}`}>
        <span className={`${name} font-extrabold uppercase tracking-[0.14em] text-white`}>
          Sathuthuk<span className="text-brand-600">a</span>
        </span>
        <span className={`${sub} mt-1.5 font-bold uppercase text-brand-500`}>
          Driving School
        </span>
      </span>
      <span className="sr-only">Sathuthuka Driving School</span>
    </span>
  )
}
