import { AddressDTO } from './address'
import { Entity, Price } from './common'
import { PaymentMethod } from './payment_method'
import { ProductTDO } from './product'

export interface OrderDTO extends Entity {
  number: string
  price_amount: Price
  status: string
  currency: string
  shipping_total: Price
  shipping_method: string
  customer_id: string | number
  notes?: string | null
  payment_method_id: string | number
  payment_method?: PaymentMethod | null
  shipping_address_id: string | number
  shipping_address?: AddressDTO | null
  items?: OrderItemDTO[]
}

export interface OrderItemDTO extends Entity {
  name?: string | null
  sku?: string | null
  quantity: number
  product: Omit<ProductTDO, 'channels' | 'reviews'>
  unit_price_amount: number
}
