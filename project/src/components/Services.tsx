// ServicesComponent.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const cursosData = [
  { url: '/imagens/cursoDesignIniciante.png', title: 'Design de Sobrancelhas Iniciantes', description: 'Aprenda técnicas profissionais de design' },
  { url: '/imagens/CursoEspecia.jpeg', title: 'Design de Sobrancelhas Especialização', description: 'Do básico ao avançado' },
  { url: '/imagens/CursoMicropig.jpeg', title: 'Micropigmentação 3x1 Iniciantes', description: 'Domine as técnicas essenciais para atuar na área.' },
  { url: '/imagens/CursoEspecShadigline.png', title: 'Micropigmentação Especialização em Shadignline', description: 'Especialização com foco na técnica de Shadignline' },
  { url: '/imagens/CursoEspecVip.png', title: 'Micropigmentação Especialização VIP - 1 técnicas', description: 'Aprimore-se em técnicas exclusivas de micropigmentação com atendimento VIP.' },
  { url: '/imagens/CursoCilios.png', title: 'Extensão de Cílios + Bônus', description: 'Aprenda a aplicar extensão de cílios com técnicas modernas e conteúdos extras.' },
];

const ServicesComponent = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const prevCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === 0 ? cursosData.length - 1 : prevIndex - 1
    );
  };

  const nextCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === cursosData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="servicos" className="py-20 bg-bege">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-marrom">Nossos Serviços</h2>

        {/* Cards de Procedimentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-marrom border-b border-marrom pb-2 mb-4 font-serif">{service.category}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-textoPrimario text-base">{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Carrossel de Cursos */}
        {/* O título "Nossos Cursos" foi removido conforme solicitado */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-[600px] md:h-[700px]">
              {/* A tag <img> foi removida para que não haja imagem de fundo no carrossel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white w-full font-sans"> {/* Adicionado font-sans aqui para garantir que o texto dentro do gradiente use Poppins */}
                  <h3 className="text-2xl font-bold mb-2 font-serif">{cursosData[currentCourseIndex].title}</h3> {/* Título do curso com Playfair */}
                  <p className="text-base">{cursosData[currentCourseIndex].description}</p> {/* Descrição do curso com Poppins (herdado) */}
                </div>
              </div>
            </div>
          </div>
          <button onClick={prevCourse} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextCourse} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full z-10">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {cursosData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCourseIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${index === currentCourseIndex ? 'bg-dourado scale-125' : 'bg-gray-300 hover:bg-gray-400'} transition-all duration-300`}
              />
            ))}
          </div>
        </div>

        {/* Botão WhatsApp */}
        <div className="text-center mt-10">
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
