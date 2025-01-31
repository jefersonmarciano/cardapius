export const menuOptions = {
  simpleRegister: {
    id: 1,
    title: 'Cadastro simples',
    description: 'Ideal para lanches, pratos, sobremesas, bebidas, etc.',
    icon: '/images/icons/burgeCadastro.png'
  },
  categories: {
    id: 2,
    title: 'Categorias',
    description: 'As categorias ajudam seus clientes a encontrarem os produtos mais rápido.',
    items: []
  }
};

// Simulando uma chamada de API
export async function fetchMenuData() {
  // Aqui você poderia adicionar um delay para simular uma chamada real
  // await new Promise(resolve => setTimeout(resolve, 1000));
  
  return menuOptions;
}
