import { Entity } from './common'

export interface DiscountDTO extends Entity {
  is_active: boolean
  code: string
  type: string
  value: string
  apply_to: string
  min_required: string
  min_required_value: string
  eligibility: string
  usage_limit: number
  usage_limit_per_user: boolean
  total_use: number
  start_at: Date
  end_at?: Date | null
  discountable?: Discountable[]
}

export enum DiscountableCondition {
  APPLY_TO = 'apply_to',
  ELIGIBILITY = 'eligibility',
}

export interface Discountable extends Entity {
  condition?: DiscountableCondition | null
  total_use: number
  discountable_id: string | number
  discountable_type: string
}
