import { Entity } from './common'

export interface InventoryDTO extends Entity {
  name: string
  code: string
  email: string
  is_default?: boolean
  country_code: string
  description?: string | null
  street_address: string
  street_address_plus?: string | null
  postal_code: string
  city: string
  phone_number?: string | null
  priority?: number | null
  latitude?: number | null
  longitude?: number | null
}

export interface InventoryHistory extends Entity {
  stockable_id: string | number
  stockable_type: string
  quantity: number
  old_quantity: number
  inventory_id: string | number
  description?: string | null
  event?: string | null
  reference_id?: string | number | null
  reference_type?: string | null
}

