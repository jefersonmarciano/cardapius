export interface FlavorSize {
  size: string;
  price: string;
  promotionalPrice: string;
  available: boolean;
}

export interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes: FlavorSize[];
}

export interface FlavorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (flavor: Flavor) => void;
}

export interface Category {
  id: number;
  name: string;
  parentId?: number;
}

export interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedCategories: string[]) => void;
}

export interface Edge {
  flavor: string;
  price: string;
  available: boolean;
}

export interface EdgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (edge: Edge) => void;
}
