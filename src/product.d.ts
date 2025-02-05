import { Brand } from './brand'
import type { Channel } from './channel'
import type {
  DateEntity,
  Entity,
  Price,
  ShippingFields,
  SEOFields,
} from './common'
import {Category} from "./category";
import {Attribute} from "./attribute";
import {Collection} from "./collection";
import type { Media } from './media'
import type { Review } from './review'
import {ProductVariant} from "./product_variant";

export enum ProductType {
  External = 'external',
  Virtual = 'virtual',
  Standard = 'standard',
  Variant = 'variant'
}

/**
 * @interface
 *
 * A product's data.
 */
export interface Product extends Entity, SEOFields, ShippingFields {
  /** The name of the product. */
  name: string
  /** The Stock Keeping Unit (SKU) code of the product. */
  sku?: string | null
  /** The barcode of the product. */
  barcode: string | null
  /** The slug of the product. The slug can be used to create slug URL paths. */
  slug: string
  /** The description of the product. */
  description: string | null
  /** The security stock of the product. */
  security_stock: number | null
  /** The variants stock of the product. */
  variants_stock: number
  /** The feature status of the product. This field can be used to highlight the product. */
  featured: boolean
  /** The is visible status of the product. This field can be use to disabled a product. */
  is_visible: boolean
  /** The old price amount of the product. */
  old_price_amount: Price | null
  /** The price amount of the product. */
  price_amount: Price | null
  /** The cost amount of the product. */
  cost_amount: Price | null
  /** The type of the product. */
  type: ProductType
  /** The required shipping of the product. */
  require_shipping: boolean
  /** The published at of the product. */
  published_at: DateEntity | null
  /** The external_id of the product. */
  external_id: string | null
  /** The number  of the product. */
  stock : number
  /** The brand  of the product. */
  brand?: Brand
  /** The summary  of the product. */
  summary: string
  /** The variants  of the product. */
  variants?: ProductVariant[]
  /** The brand_id  of the product. */
  brand_id: number | null
  /** The channels  of the product. */
  channels?: Channel[]
  /** The category  of the product. */
  category?: Category[]
  /** The options  of the product. */
  options?: Attribute[]
  /** The collection  of the product. */
  collection?: Collection[]
  /** The images  of the product. */
  images?: Media[] | null
  /** The reviews  of the product. */
  reviews?: Review[]
  /** The prices  of the product. */
  prices: Price[]
  /** The metadata  of the product. */
  metadata: Array<any> | null
}
