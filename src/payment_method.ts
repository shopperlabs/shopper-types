import { Entity } from './common'

export interface PaymentMethod extends Entity {
  title: string
  slug: string
  logo?: string | null
  link_url?: string | null
  description?: string | null
  instructions?: string | null
  is_enabled?: boolean
}
