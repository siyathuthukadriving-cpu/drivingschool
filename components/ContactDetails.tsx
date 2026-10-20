import {
  SCHOOL_ADDRESS_LINES,
  SCHOOL_EMAIL,
  SCHOOL_ENQUIRY_URL,
  SCHOOL_MAP_URL,
  SCHOOL_PHONE_DISPLAY,
  SCHOOL_PHONE_INTL,
  SCHOOL_PHONE_TEL,
} from '@/lib/school'

type Tone = 'light' | 'dark'

const ICONS = {
  pin: 'M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8.2A2.2 2.2 0 1110 5.8a2.2 2.2 0 010 4.4z',
  phone: 'M2 3a1 1 0 011-1h2.15a1 1 0 01.99.84l.5 3a1 1 0 01-.55 1.05l-1.3.65a11.04 11.04 0 005.02 5.02l.65-1.3a1 1 0 011.05-.55l3 .5a1 1 0 01.84.99V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z',
  whatsapp: 'M10 1.8a8.2 8.2 0 00-7.07 12.35L1.8 18.2l4.15-1.09A8.2 8.2 0 1010 1.8zm4.2 11.6c-.18.5-1.04.96-1.43 1.02-.37.06-.83.08-1.34-.08-.31-.1-.7-.23-1.2-.45-2.1-.9-3.47-3.02-3.58-3.16-.1-.14-.85-1.13-.85-2.16 0-1.03.54-1.54.73-1.75.19-.2.41-.25.55-.25h.4c.13 0 .3-.05.47.36.18.43.6 1.48.65 1.59.05.1.09.23.02.37-.07.14-.1.23-.2.35-.1.12-.22.27-.31.36-.1.1-.2.21-.09.41.12.2.52.86 1.12 1.39.77.69 1.42.9 1.62 1 .2.1.32.08.44-.05.12-.14.5-.58.64-.78.13-.2.27-.17.45-.1.19.06 1.19.56 1.4.66.2.1.34.16.39.25.05.08.05.5-.13 1z',
  mail: 'M2.5 5A1.5 1.5 0 014 3.5h12A1.5 1.5 0 0117.5 5v.4l-7.5 4.7L2.5 5.4V5zm0 2.15V15A1.5 1.5 0 004 16.5h12a1.5 1.5 0 001.5-1.5V7.15l-7.1 4.46a.8.8 0 01-.8 0L2.5 7.15z',
} as const

function Row({
  icon,
  label,
  tone,
  children,
}: {
  icon: keyof typeof ICONS
  label: string
  tone: Tone
  children: React.ReactNode
}) {
  const dark = tone === 'dark'
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          dark ? 'bg-brand-600/20 text-brand-400' : 'bg-brand-50 text-brand-600'
        }`}
      >
        <svg viewBox="0 0 20 20" className="h-[1.05rem] w-[1.05rem] fill-current" aria-hidden="true">
          <path d={ICONS[icon]} />
        </svg>
      </span>
      <div className="min-w-0">
        <p className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
        <div className={`text-sm sm:text-base font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>{children}</div>
      </div>
    </li>
  )
}

/** Address, phone, WhatsApp and email — shared by the home page, contact page and footer. */
export default function ContactDetails({ tone = 'light' }: { tone?: Tone }) {
  const link = tone === 'dark' ? 'hover:text-brand-400' : 'hover:text-brand-700'
  return (
    <ul className="space-y-5">
      <Row icon="pin" label="Visit us" tone={tone}>
        <a href={SCHOOL_MAP_URL} target="_blank" rel="noopener noreferrer" className={`${link} transition-colors`}>
          {SCHOOL_ADDRESS_LINES.map(line => (
            <span key={line} className="block">{line}</span>
          ))}
        </a>
      </Row>
      <Row icon="phone" label="Call us" tone={tone}>
        <a href={`tel:${SCHOOL_PHONE_TEL}`} className={`${link} transition-colors`}>{SCHOOL_PHONE_DISPLAY}</a>
      </Row>
      <Row icon="whatsapp" label="WhatsApp" tone={tone}>
        <a href={SCHOOL_ENQUIRY_URL} target="_blank" rel="noopener noreferrer" className={`${link} transition-colors`}>
          {SCHOOL_PHONE_INTL}
        </a>
      </Row>
      <Row icon="mail" label="Email" tone={tone}>
        <a href={`mailto:${SCHOOL_EMAIL}`} className={`${link} transition-colors break-all`}>{SCHOOL_EMAIL}</a>
      </Row>
    </ul>
  )
}
