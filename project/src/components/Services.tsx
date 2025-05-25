

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Dados para a lista de serviços (procedimentos)
const servicesData = [
  {
    category: 'Sobrancelhas',
    items: [
      { name: 'Micropigmentação de Sobrancelhas' },
      { name: 'Brows Lamination' },
      { name: 'Remoção a Laser' },
      { name: 'Design Personalizado' },
    ]
  },
  {
    category: 'Lábios',
    items: [
      { name: 'Micropigmentação Labial' },
    ]
  },
  {
    category: 'Cílios',
    items: [
      { name: 'Extensão de Cílios' },
      { name: 'Lash Lifting' },
      { name: 'Remoção de Extensão de Cílios' },
    ]
  },
];

// Dados para o carrossel de serviços (cursos)
const cursosData = [
  {
    url: '/imagens/cursoDesignIniciante.png',
    title: 'Design de Sobrancelhas Iniciantes',
    description: 'Aprenda técnicas profissionais de design',
    // price: 'R$ 1.200',
  },
  {
    url: '/imagens/CursoEspecia.jpeg',
    title: 'Design de Sobrancelhas Especialização',
    description: 'Do básico ao avançado',
    // price: 'R$ 1.500',
  },
  {
    url: '/imagens/CursoMicropig.jpeg',
    title: 'Micropigmentação 3x1 Iniciantes',
    description: 'Domine as técnicas essenciais para atuar na área.',
    // price: 'R$ 1.800',
  },
  {
    url: '/imagens/CursoEspecShadigline.png',
    title: 'Micropigmentação Especialização em Shadignline',
    description: 'Especialização com foco na técnica de Shadignline',
    // price: 'R$ 2.500',
  },
  {
    url: '/imagens/CursoEspecVip.png',
    title: 'Micropigmentação Especialização VIP - 1 técnicas',
    description: 'Aprimore-se em técnicas exclusivas de micropigmentação com atendimento VIP.',
    // price: 'R$ 2.500',
  },
  {
    url: '/imagens/CursoCilios.png',
    title: 'Extensão de Cílios + Bônus',
    description: 'Aprenda a aplicar extensão de cílios com técnicas modernas e conteúdos extras.',
    // price: 'R$ 2.500',
  },
];

// Componente principal que renderiza a seção de serviços e cursos
const ServicesComponent = () => {
  // Estado para controlar o índice atual do carrossel de cursos
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  // Função para ir para o curso anterior no carrossel
  const prevCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === 0 ? cursosData.length - 1 : prevIndex - 1
    );
  };

  // Função para ir para o próximo curso no carrossel
  const nextCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === cursosData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="servicos" className="py-20 bg-bege">
      <div className="container mx-auto px-4">
        {/* Seção de Lista de Serviços (Procedimentos) */}
        <h2 className="text-3xl font-bold text-center mb-12 text-marrom">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-items-center"> {/* Alterado para justify-items-center para melhor centralização dos cards */}
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full max-w-md"> {/* Adicionado max-w-md para consistência */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-marrom border-b-2 border-marrom">{service.category}</h3>
                <ul className="space-y-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center text-lg text-textoPrimario">
                      <span className="font-bold">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>



        {/* Seção de Carrossel de Cursos */}
        <div className="container mx-auto px-4 mt-20"> {/* Adicionado container e margem superior */}

          <div className="relative max-w-5xl mx-auto"> {/* Centraliza o carrossel e limita sua largura */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[600px] md:h-[700px] transition-transform duration-500 ease-out"> {/* Altura responsiva opcional */}
                <img
                  src={cursosData[currentCourseIndex].url}
                  alt={cursosData[currentCourseIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {cursosData[currentCourseIndex].title}
                    </h3>
                    <p className="mb-2">{cursosData[currentCourseIndex].description}</p>
                    {/* Se o preço for adicionado aos dados, descomente abaixo */}
                    {/* {cursosData[currentCourseIndex].price && (
                    <p className="text-xl font-semibold">
                      {cursosData[currentCourseIndex].price}
                    </p>
                  )} */}
                  </div>
                </div>
              </div>
            </div>
            {/* Botão Anterior do Carrossel */}
            <button
              onClick={prevCourse}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors duration-300 z-10" // Adicionado z-10
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            {/* Botão Próximo do Carrossel */}
            <button
              onClick={nextCourse}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors duration-300 z-10" // Adicionado z-10
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Indicadores de Posição do Carrossel */}
            <div className="flex justify-center mt-4 space-x-2">
              {cursosData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCourseIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${ // Aumentado tamanho para melhor clique
                    index === currentCourseIndex ? 'bg-dourado scale-125' : 'bg-gray-300 hover:bg-gray-400' // Destaque dourado e efeito hover
                    }`}
                  aria-label={`Ir para o curso ${index + 1}`} // Adicionado aria-label para acessibilidade
                />
              ))}
            </div>
          </div>
        </div>
        <br />



        {/* Botão WhatsApp para Procedimentos */}
        <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5571988287504?text=Olá! Gostaria de saber mais sobre os serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dourado hover:opacity-90 text-marrom px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Falar Sobre Procedimentos no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
export default ServicesComponent; 
