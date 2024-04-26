export interface Coffee {
  id: number;
  name: string;
  tags: string[]
  description: string;
  price: number;
  quantity: number
  isOnCart?: boolean
}