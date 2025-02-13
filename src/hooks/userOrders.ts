import { useState, useEffect } from 'react';

interface Order {
  id: string;
  customer: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  status: 'pending' | 'accepted' | 'preparing' | 'delivered';
  time: string;
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        // Dados mockados para teste
        const mockOrders: Order[] = [
          {
            id: '#12345',
            customer: 'João Silva',
            items: [
              { name: 'Pizza Grande', price: 45.90, quantity: 1 },
              { name: 'Refrigerante 2L', price: 12.00, quantity: 1 }
            ],
            status: 'pending', // Em aberto
            time: '15:30'
          },
          {
            id: '#12346',
            customer: 'Maria Santos',
            items: [
              { name: 'Hambúrguer', price: 25.90, quantity: 2 },
              { name: 'Batata Frita', price: 15.00, quantity: 1 }
            ],
            status: 'accepted', // Em preparo
            time: '15:45'
          },
          {
            id: '#12347',
            customer: 'Pedro Oliveira',
            items: [
              { name: 'Hot Dog Especial', price: 18.90, quantity: 2 },
              { name: 'Milk Shake', price: 14.90, quantity: 1 }
            ],
            status: 'preparing', // Aguardando envio
            time: '16:00'
          },
          {
            id: '#12348',
            customer: 'Ana Costa',
            items: [
              { name: 'Açaí 500ml', price: 22.90, quantity: 1 },
              { name: 'Pastel', price: 8.90, quantity: 3 }
            ],
            status: 'delivered', // Pedido enviado
            time: '16:15'
          }
        ];

        // Simula um delay de rede
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
