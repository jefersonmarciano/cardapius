"use client"

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

export function RecentOrders() {
  const orders: Order[] = [
    {
      id: '999',
      customer: 'Allan Vieira',
      items: [
        { name: 'Cheese Burger', price: 50.00, quantity: 1 },
        { name: 'Coca-cola 350ml', price: 8.00, quantity: 1 },
      ],
      status: 'pending',
      time: 'há 15 min'
    },
    {
      id: '999',
      customer: 'Allan Vieira',
      items: [
        { name: 'Cheese Burger', price: 50.00, quantity: 1 },
        { name: 'Coca-Cola 350ml', price: 8.00, quantity: 1 },
      ],
      status: 'accepted',
      time: 'há 25 min'
    },
    {
      id: '999',
      customer: 'Allan Vieira',
      items: [
        { name: 'Cheese Burger', price: 50.00, quantity: 1 },
        { name: 'Coca-Cola 350ml', price: 8.00, quantity: 1 },
      ],
      status: 'preparing',
      time: 'há 25 min'
    },
    {
      id: '999',
      customer: 'Allan Vieira',
      items: [
        { name: 'Cheese Burger', price: 50.00, quantity: 1 },
        { name: 'Coca-Cola 350ml', price: 8.00, quantity: 1 },
      ],
      status: 'delivered',
      time: 'há 25 min'
    }
  ];

  const getStatusInfo = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return {
          label: 'Em aberto',
          badge: 'bg-amber-400 text-black rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Aceitar pedido', color: 'bg-emerald-500' }
        };
      case 'accepted':
        return {
          label: 'Em preparo',
          badge: 'bg-orange-400/20 text-orange-600 rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Pedido pronto', color: 'bg-emerald-500' }
        };
      case 'preparing':
        return {
          label: 'Aguardando envio',
          badge: 'bg-blue-400/20 text-blue-600 rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Enviar pedido', color: 'bg-emerald-500' }
        };
      case 'delivered':
        return {
          label: 'Pedido enviado',
          badge: 'bg-green-400/20 text-green-600 rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Pedido entregue', color: 'bg-zinc-200 text-zinc-500' }
        };
    }
  };

  return (
    <div className="w-[400px] p-6 bg-white border-l border-t border-zinc-100 rounded-tl-[32px]">
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-lg p-1 bg-zinc-100">
          <button className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-medium transition-colors">
            Loja aberta
          </button>
          <button className="px-4 py-1.5 rounded-lg text-zinc-400 font-medium transition-colors">
            Loja fechada
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-zinc-900">Últimos pedidos</h2>
        <button className="text-[#FF3F00] text-sm font-medium">Ver mais</button>
      </div>

      <div className="space-y-4 max-h-[calc(100vh-240px)] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
        {orders.map((order, index) => {
          const statusInfo = getStatusInfo(order.status);
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-4 border border-zinc-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-md text-sm font-medium ${statusInfo.badge}`}>
                  {statusInfo.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-300 text-lg">⎯</span>
                  <span className="text-zinc-400">{order.id}</span>
                  <span className="font-medium text-amber-400">{order.time}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#FF3F00] text-xl font-medium">{order.customer}</h3>
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between">
                    <span className="text-zinc-400">{item.name}</span>
                    <span className="text-zinc-400">R$ {item.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="text-zinc-400">+2 itens</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total</span>
                  <span className="text-zinc-400">
                    R$ {order.items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-[#FF3F00] text-white py-2 rounded-xl text-sm font-medium">
                  Ver detalhes
                </button>
                <button className={`flex-1 ${statusInfo.button.color} py-2 rounded-xl text-sm font-medium`}>
                  {statusInfo.button.text}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
