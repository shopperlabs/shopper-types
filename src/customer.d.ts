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
  first_name: string | null
  last_name: string
  email: string
  /** The gender of the customer. */
  gender: GenderType
  phone_number: string | null
  birth_date: Date | null
  /** The avatar of the customer. */
  avatar: AvatarType
  timezone?: Date | null
  /** The opt_in field of the customer. This field is to know even if the customer accept marketing newsletter list */
  opt_in: boolean
  last_login_at: DateEntity
  last_login_ip?: string | null
  /** The customer's addresses */
  addresses?: Address[]
}
