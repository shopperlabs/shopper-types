import type { Address } from './address'
import type { DateEntity, Entity } from './common'

/**
 * @enum
 *
 * The Gender Type for the customer.
 */
export enum GenderType {
  MALE = 'male',
  FEMALE = 'female',
}

/**
 * @interface
 * 
 * The Avatar interface for the customer.
 */
export interface AvatarType {
  type: string
  url: string
  default: string
}

/**
 * @interface
 *
 * A customer's data.
 */
export interface Customer extends Entity {
  /** The first name of the customer. */
  first_name: string | null
  /** The last name of the customer. */
  last_name: string
  /** The gender of the customer. */
  gender: GenderType
  /** The phone number of the customer. */
  phone_number: string | null
  /** The birth date of the customer. */
  birth_date: Date | null
  /** The avatar of the customer. */
  avatar: AvatarType
  /** The timezone of the customer. */
  timezone?: Date | null
  /** The opt_in field of the customer. This field */
  opt_in: boolean
  last_login_at: DateEntity
  last_login_ip?: string | null
  /** The customer's addresses */
  addresses?: Address[]
}
