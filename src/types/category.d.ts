import type { Entity, SEOFields } from './common'
import type { Media } from './media'

export interface Category extends Entity, SEOFields {
  name: string
  slug: string
  description: string | null
  position: number
  is_enabled: boolean
  image?: Media | null
  /** The id of the parent category. */
  parent_id: number | null
  /** The children of the category. */
  children?: Category[]
  parent?: Category
}
