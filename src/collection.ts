import { DateDTO, Entity, SEOFields } from './common'
import { MediaTDO } from './media'

export enum CollectionType {
  MANUAL = 'manual',
  AUTO = 'auto',
}

export enum CollectionCondition {
  ALL = 'all',
  ANY = 'any',
}

export interface CollectionDTO extends Entity, SEOFields {
  name: string
  slug: string
  description?: string | null
  type?: CollectionType
  sort?: string | null
  match_conditions?: CollectionCondition
  published_at?: DateDTO | null
  image?: MediaTDO | null
}
