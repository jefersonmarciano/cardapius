export interface Offer {
  id: number;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  image: string;
  available?: boolean;
}
