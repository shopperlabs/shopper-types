import { DateDTO, Entity, Price } from './common'
import { MediaTDO } from './media'

export enum ProductType {
  DELIVERABLE = 'deliverable',
  DOWNLOADABLE = 'downloadable',
}

/**
 * @interface
 *
 * A product's data.
 */
export interface ProductTDO extends Entity {
  /** The name of the product.  */
  name: string
  /** The slug of the product. The slug can be used to create slug URL paths. */
  slug: string | null
  /** The Stock Keeping Unit (SKU) code of the product. */
  sku: string | null
  /** The barcode of the product. */
  barcode: string | null
  /** The description of the product. */
  description?: string | null
  /** The security stock of the product. */
  security_stock?: number
  /** The feature status of the product. This field can be used to highlight the product. */
  featured: boolean
  /** The is visible status of the product. This field can be use to disabled a product. */
  is_visible: boolean
  /** The old price amount of the product. */
  old_price_amount?: Price | null
  /** The price amount of the product. */
  price_amount?: Price | null
  /** The cost amount of the product. */
  cost_amount?: Price | null
  /** The type of the product */
  type: ProductType
  /** The back order of the product. */
  backorder: boolean
  /** The required shipping of the product. */
  required_shipping: boolean
  /** The published at of the product */
  published_at?: DateDTO
  /** The width of the product. */
  width?: number | null
  /** The weight of the product. */
  weight?: number | null
  /** The length of the product. */
  length?: number | null
  /** The height of the product. */
  height?: number | null
  /** The product's Images */
  images?: MediaTDO[] | null
}
