import { Coffee } from "./coffee.type";

export interface Cart {
  items: Coffee[];
  totalItemsValue: number;
  delivery: number;
  totalCartValue: number
}