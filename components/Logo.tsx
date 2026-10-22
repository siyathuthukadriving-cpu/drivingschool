/**
 * Thompho’s Driving Academy lockup: an orange "T" badge and a two-line wordmark.
 * The badge is a stand-in until the academy's own logo file is added to /public.
 * Set `compact` to drop the wordmark on very small screens.
 */
export default function Logo({
  size = 'md',
  compact = false,
}: {
  size?: 'md' | 'lg'
  compact?: boolean
}) {
  const mark = size === 'lg' ? 'h-12 w-12 text-2xl' : 'h-10 w-10 text-xl'
  const name = size === 'lg' ? 'text-[1.3rem]' : 'text-[1.05rem]'
  const sub = size === 'lg' ? 'text-[0.62rem] tracking-[0.34em]' : 'text-[0.52rem] tracking-[0.32em]'
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`${mark} flex shrink-0 items-center justify-center rounded-xl bg-accent-500 font-black leading-none text-white shadow-md`}
      >
        T
      </span>
      <span className={`flex-col leading-none ${compact ? 'hidden min-[360px]:flex' : 'flex'}`}>
        <span className={`${name} font-extrabold uppercase tracking-[0.12em] text-white`}>Thompho’s</span>
        <span className={`${sub} mt-1.5 font-bold uppercase text-accent-300`}>Driving Academy</span>
      </span>
      <span className="sr-only">Thompho’s Driving Academy</span>
    </span>
  )
}
