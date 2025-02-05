import type { Entity } from "./common";


export interface Currency extends Entity {
  name: string
  code: string
  symbol: string
  format: string
  exchange_rate: number
}
