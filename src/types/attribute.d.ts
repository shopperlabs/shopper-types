import type { Entity } from './common'

export interface Attribute extends Entity {
  name: string
  slug: string
  type: string
  icon: string | null
  description: string | null
  is_enabled: boolean
  is_searchable: boolean
  is_filterable: boolean
  values?: AttributeValue[]
}

export interface AttributeValue {
  id: number
  value: string
  key: string
  position: number
}
