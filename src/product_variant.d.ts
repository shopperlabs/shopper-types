import {Entity, Price, ShippingFields} from './common'
import { AttributeValue } from "./attribute";
import type { Media } from './media'
import { Product } from "./product";

/**
 * @interface
 *
 * A product's data.
 */
export interface ProductVariant extends Entity, ShippingFields
{
  /** The name of the product. */
  name: string
  /** The Stock Keeping Unit (SKU) code of the product. */
  sku?: string | null
  /** The barcode of the product. */
  barcode: string | null
  /** The external_id of the product. */
  position : number
  /** The product_id of the product. */
  product_id : number
  /** The variants  of the product. */
  product?: Product
  /** The images  of the product. */
  images?: Media[] | null
  /** The attributesValues  of the product. */
  $values: AttributeValue
  /** The prices  of the product. */
  prices: Price[]
  /** The metadata  of the product. */
  metadata: Array<any> | null
}
