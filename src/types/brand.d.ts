import type { Entity, SEOFields } from './common'
import type { Media } from './media'

export interface Brand extends Entity, SEOFields {
  name: string
  slug: string
  website: string | null
  description: string | null
  position: number | null
  is_enabled: boolean
  image?: Media | null
}
