import { ProductCard } from "./ProductCard";

export function ProductList() {
  const products = [
    {
      id: 1,
      name: "X-Burger",
      description: "Hambúrguer artesanal, queijo, alface e tomate",
      price: 25.90,
      image: "/burger.jpg"
    },
    {
      id: 2,
      name: "Pizza Margherita",
      description: "Molho de tomate, mussarela, manjericão fresco",
      price: 45.90,
      image: "/pizza.jpg"
    },
    {
      id: 3,
      name: "Salada Caesar",
      description: "Alface romana, croutons, parmesão e molho caesar",
      price: 29.90,
      image: "/salad.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
