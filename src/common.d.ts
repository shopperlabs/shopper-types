/**
 * @interface
 *
 * Global entity for all the models.
 */
export interface Entity {
  /** The id of the entity. */
  id: number
  /** The created at of the entity. */
  created_at?: DateEntity
  /** The updated at of the entity. */
  updated_at?: DateEntity
  /** The deleted at of the entity. */
  deleted_at?: DateEntity | null
}

/**
 * @interface
 *
 * A date DTO to manage date format.
 */
export interface DateEntity {
  /** The date format of the entity. */
  date: Date
  /** the human readable date. Eg: 2 hours ago. */
  human: string
}

/**
 * @interface
 * 
 * Price interface for entity.
 */
export interface Price {
  /** The original amount for the entity. */
  value: number
  /** The currency for the entity. */
  currency: string
  /** The formatted price for the entity. */
  formatted: string
}

/**
 * @interface
 *
 * Seo Fields interface for entities.
 */
export interface SEOFields {
  seo_title?: string | null
  seo_description?: string | null
}
