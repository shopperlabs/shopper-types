import type { Address } from './address'
import type { Entity, Price } from './common'
import type { PaymentMethod } from './payment_method'
import type { Product } from './product'

export interface Order extends Entity {
  number: string
  price_amount: Price
  status: string
  currency: string
  shipping_total: Price
  shipping_method: string
  customer_id: string | number
  notes: string | null
  items?: OrderItem[]
  payment_method_id: string | number
  payment_method?: PaymentMethod | null
  shipping_address_id: string | number
  shipping_address?: Address | null
}

export interface OrderItem extends Entity {
  name: string | null
  sku: string | null
  quantity: number
  product_id: number
  product?: Omit<Product, 'channels' | 'reviews'>
  unit_price_amount: number
}
