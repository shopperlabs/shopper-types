import type { Entity } from './common'

export interface Channel extends Entity {
  name: string
  slug: string
  description: string | null
  timezone: string | null
  url: string | null
  is_default: boolean
}
