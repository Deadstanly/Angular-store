import {Product} from "./product";

export interface Order {
  id?: string;
  name: string;
  phone: number;
  address: string;
  payment: string;
  orders: Product[];
}
