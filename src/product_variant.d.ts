import { Entity, Price, ShippingFields } from './common'
import { AttributeValue } from './attribute';
import type { Media } from './media'
import { Product } from "./product";

/**
 * @interface
 *
 * A product's data.
 */
export interface ProductVariant extends Entity, ShippingFields
{
  /** The name of the product_variants. */
  name: string
  /** The Stock Keeping Unit (SKU) code of the product_variants. */
  sku?: string | null
  /** The barcode of the product_variants. */
  barcode: string | null
  /** The external_id of the product_variants. */
  position : number
  /** The product_id of the product_variants. */
  product_id : number
  /** The variants of the product_variants. */
  product?: Product
  /** The images of the product_variants. */
  images?: Media[] | null
  /** The prices of the product_variants. */
  prices?: Price[]
  /** The metadata of the product_variants. */
  metadata: Array<any> | null
}
