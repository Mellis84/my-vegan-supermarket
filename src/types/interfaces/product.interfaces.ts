/**
 * Product Interfaces
 */

export interface Product {
  name: string;
  sku: string;
  stock: number;
  price: number;
  weight: string;
  image: string;
  description: string;
  qty: number;
}

export interface CartProduct {
  name: string;
  sku: string;
  price: number;
  image: string;
  qty?: number;
}
