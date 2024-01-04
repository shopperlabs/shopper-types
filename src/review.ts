import { Entity } from './common';
import { AvatarType } from './customer';

export interface ReviewDTO extends Entity {
  is_recommended: boolean
  rating: number
  title?: string | null
  content?: string | null
  approved?: boolean
  author: ReviewAuthor
}

export type ReviewAuthor = {
  last_name: string
  first_name: string
  avatar: AvatarType
}
