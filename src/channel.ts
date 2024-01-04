import { Entity } from './common'

export interface ChannelDTO extends Entity {
  name: string
  slug?: string | null
  description?: string | null
  timezone?: string | null
  url?: string | null
  is_default?: boolean
}
