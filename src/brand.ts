import { Entity, SEOFields } from './common'
import { MediaTDO } from './media'

export interface BrandDTO extends Entity, SEOFields {
  name: string
  slug: string
  website?: string | null
  description?: string | null
  position?: number | null
  is_enabled?: boolean
  image?: MediaTDO | null
}
