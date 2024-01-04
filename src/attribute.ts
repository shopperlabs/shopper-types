import { Entity } from './common'

export interface AttributeDTO extends Entity {
  name: string
  slug: string
  type: string
  icon?: string | null
  description?: string | null
  is_enabled?: boolean
  is_searchable?: boolean
  is_filterable?: boolean
  values?: AttributeValueDTO[]
}

export interface AttributeValueDTO {
  id: string | number
  value: string
  key: string
  position: number
}
