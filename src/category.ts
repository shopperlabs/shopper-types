import { Entity, SEOFields } from './common'
import { MediaTDO } from './media'

export interface CategoryDTO extends Entity, SEOFields {
  name: string
  slug: string
  description?: string
  position?: number
  is_enabled?: boolean
  image?: MediaTDO
  /** The id of the parent category. */
  parent_id?: number | null
  /** The children of the category. */
  children?: CategoryDTO[]
}
