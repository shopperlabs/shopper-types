import { Entity } from './common';

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping',
}

/**
 * @interface
 *
 * The Address interface
 */
export interface AddressDTO extends Entity {
  first_name: string
  last_name: string
  company_name?: string | null
  country_code: string
  street_address: string
  street_address_plus?: string | null
  postal_code: string
  city: string
  phone_number?: string | null
  /** The is_default value for the address. The field is used to set the customer address as default. */
  is_default: boolean
  /** The type of the customer address. */
  type: AddressType
}
