import { useState, useEffect } from 'react';

interface Order {
  id: {
    number: string;
    time: string;  // Tempo relativo (ex: "há 15 min")
  };
  customer: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  status: 'pending' | 'accepted' | 'preparing' | 'delivered';
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const mockOrders: Order[] = [
          {
            id: {
              number: '999',
              time: 'há 15 min'
            },
            customer: 'João Silva',
            items: [
              { name: 'Pizza Grande', price: 45.90, quantity: 1 },
              { name: 'Refrigerante 2L', price: 12.00, quantity: 1 }
            ],
            status: 'pending'
          },
          {
            id: {
              number: '998',
              time: 'há 20 min'
            },
            customer: 'Maria Santos',
            items: [
              { name: 'Hambúrguer', price: 25.90, quantity: 2 },
              { name: 'Batata Frita', price: 15.00, quantity: 1 }
            ],
            status: 'accepted'
          },
          {
            id: {
              number: '997',
              time: 'há 25 min'
            },
            customer: 'Pedro Oliveira',
            items: [
              { name: 'Hot Dog Especial', price: 18.90, quantity: 2 },
              { name: 'Milk Shake', price: 14.90, quantity: 1 }
            ],
            status: 'preparing'
          },
          {
            id: {
              number: '996',
              time: 'há 30 min'
            },
            customer: 'Ana Costa',
            items: [
              { name: 'Açaí 500ml', price: 22.90, quantity: 1 },
              { name: 'Pastel', price: 8.90, quantity: 3 }
            ],
            status: 'delivered'
          }
        ];

        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrders(mockOrders);
      } catch (err) {
        setError('Erro ao carregar pedidos');
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrders();
  }, []);

  return { orders, isLoading, error };
}
