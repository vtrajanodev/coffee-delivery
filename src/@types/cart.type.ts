import { Coffee } from "./coffee.type";

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighbourhood: string;
  city: string;
  state: string;
}

export interface Cart {
  items: Coffee[];
  totalItemsValue: number;
  delivery: number;
  totalCartValue: number
  paymentMethod: string;
  address: Address
}