/**
 * @interface
 *
 * Global entity for all the models.
 */
export interface Entity {
  /** The id of the entity. */
  id: string | number
  /** The created at of the entity. */
  created_at: DateDTO
  /** The updated at of the entity. */
  updated_at: DateDTO
  /** The deleted at of the entity. */
  deleted_at?: DateDTO
}

/**
 * @interface
 *
 * A date DTO to manage date format.
 */
export interface DateDTO {
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
  amount: number
  /** The currency for the entity. */
  currency: string
  /** The formatted price for the entity. */
  formatted: string
}
