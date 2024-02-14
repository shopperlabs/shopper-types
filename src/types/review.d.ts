import type { Entity } from './common'
import type { AvatarType } from './customer'

export interface Review extends Entity {
  is_recommended: boolean
  rating: number
  title: string | null
  content: string | null
  approved: boolean
  author: ReviewAuthor
}

export type ReviewAuthor = {
  last_name: string
  first_name: string
  avatar: AvatarType
}
