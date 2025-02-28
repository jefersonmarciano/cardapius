import { useState } from 'react';

interface Adicional {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoPromocional: number;
  imagem: string;
  minimo: number;
  maximo: number;
  obrigatorio: "Sim" | "Não";
  disponibilidade: "Disponível" | "Indisponível";
}

export function useAdditionals() {
  const [adicionais, setAdicionais] = useState<Adicional[]>([
    {
      id: "1",
      nome: "Maionese",
      descricao: "Maionese caseira da casa",
      preco: 50.00,
      precoPromocional: 50.00,
      imagem: "/images/maionese.png",
      minimo: 1,
      maximo: 2,
      obrigatorio: "Não",
      disponibilidade: "Disponível"
    },
    {
        id: "2",
        nome: "Maioneseaaaaaaaaaaaaaaaaa",
        descricao: "Maionese caseira da casaaaaaaaaaaaaaaaaaa",
        preco: 50.00,
        precoPromocional: 50.00,
        imagem: "/images/maionese.png",
        minimo: 1,
        maximo: 2,
        obrigatorio: "Não",
        disponibilidade: "Disponível"
      },
    
    // Você pode adicionar mais itens aqui para teste
  ]);

  const addAdicional = (adicional: Omit<Adicional, 'id'>) => {
    const newId = (adicionais.length + 1).toString();
    setAdicionais([...adicionais, { ...adicional, id: newId }]);
  };

  const removeAdicional = (id: string) => {
    setAdicionais(adicionais.filter(item => item.id !== id));
  };

  const updateAdicional = (id: string, data: Partial<Adicional>) => {
    setAdicionais(adicionais.map(item => 
      item.id === id ? { ...item, ...data } : item
    ));
  };

  return {
    adicionais,
    addAdicional,
    removeAdicional,
    updateAdicional
  };
}
