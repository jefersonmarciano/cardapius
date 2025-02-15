export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  promotionalPrice: string;
  available: boolean;
  image?: string;
  quantity?: string;
  unit?: string;
}
