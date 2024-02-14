import type { DateEntity, Entity, SEOFields } from './common'
import type { Media } from './media'

export enum CollectionType {
  MANUAL = 'manual',
  AUTO = 'auto',
}

export enum CollectionCondition {
  ALL = 'all',
  ANY = 'any',
}

export interface Collection extends Entity, SEOFields {
  name: string
  slug: string
  description?: string | null
  type: CollectionType
  sort: string | null
  match_conditions: CollectionCondition
  published_at: DateEntity | null
  image?: Media | null
}
