import { useState, useEffect } from 'react';

interface Offer {
  id: string;
  name: string;
  description: string;
  price: number;
  promotionalPrice: number;
  imageUrl: string;
}

export function useOffers() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const mockOffers: Offer[] = [
          { id: '1', name: 'Coca-cola 2L', description: 'Refrigerante Coca-cola 2L', price: 50.00, promotionalPrice: 50.00, imageUrl: '/images/products/coca.svg' },
          { id: '2', name: 'Fanta Laranja 2L', description: 'Refrigerante Fanta Laranja 2L', price: 45.00, promotionalPrice: 40.00, imageUrl: '/images/products/coca.svg' },
          { id: '3', name: 'Guaraná 2L', description: 'Refrigerante Guaraná 2L', price: 48.00, promotionalPrice: 45.00, imageUrl: '/images/products/coca.svg' },
          { id: '4', name: 'Água Mineral 1L', description: 'Água Mineral 1L', price: 5.00, promotionalPrice: 4.50, imageUrl: '/images/products/coca.svg' },
          { id: '5', name: 'Suco de Laranja 1L', description: 'Suco de Laranja 1L', price: 20.00, promotionalPrice: 18.00, imageUrl: '/images/products/coca.svg' },
          // Adicione mais ofertas conforme necessário
        ];

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulando delay
        setOffers(mockOffers);
      } catch (err) {
        setError('Erro ao carregar ofertas');
      } finally {
        setIsLoading(false);
      }
    }

    fetchOffers();
  }, []);

  return { offers, isLoading, error };
} 