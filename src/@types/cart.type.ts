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

export type PaymentMethod = '' | 'creditCard' | 'debitCard' | 'money'

export interface Cart {
  items: Coffee[];
  totalItemsValue: number;
  delivery: number;
  totalCartValue: number
  paymentMethod: string | PaymentMethod;
  address: Address
}