import { ChannelDTO } from './channel'
import {
  DateDTO,
  Entity,
  Price,
  SEOFields,
} from './common'
import { MediaTDO } from './media'

export enum ProductType {
  DELIVERABLE = 'deliverable',
  DOWNLOADABLE = 'downloadable',
}

export enum Weight {
  KG = 'kg',
  G = 'g',
  LBS = 'lbs',
}

export enum Length {
  M = 'm',
  CM = 'cm',
  MM = 'mm',
  FT = 'ft',
  IN = 'in',
}

export enum Volume {
  L = 'l',
  ML = 'ml',
  GAL = 'gal',
  FLOZ = 'floz',
}

/**
 * @interface
 *
 * A product's data.
 */
export interface ProductTDO extends Entity, SEOFields {
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
  /** The width_unit of the product. */
  width_unit?: Length
  /** The width_unit of the product. */
  width_value?: number | null
  /** The weight_unit of the product. */
  weight_unit?: Weight
  /** The weight_value of the product. */
  weight_value?: number | null
  /** The height_unit of the product. */
  height_unit?: Length
  /** The height_value of the product. */
  height_value?: number | null
  /** The depth_unit of the product. */
  depth_unit?: Length
  /** The depth_value of the product. */
  depth_value?: string | null
  /** The volume_unit of the product. */
  volume_unit?: Volume
  /** The volume_value of the product. */
  volume_value?: string | null
  parent_id?: number | null
  images?: MediaTDO[] | null
  channels?: ChannelDTO[]
}
