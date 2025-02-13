export interface Additional {
  id: number;
  name: string;
  description?: string;
  price?: number;
  promoPrice?: number;
  available?: boolean;
  image?: string | any;
}

export interface AdditionalGroup {
  id: number;
  name: string;
  additionals: Additional[];
  additionalsCount: number;
  min: number;
  max: number;
}
