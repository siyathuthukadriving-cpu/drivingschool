import type { Metadata } from 'next'
import LocationPage from '@/components/LocationPage'
import { locationMetadata } from '@/lib/locations'

export const metadata: Metadata = locationMetadata('durban-north')

export default function Page() {
  return <LocationPage slug="durban-north" />
}
