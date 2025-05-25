import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const dados = [
  { tipo: 'Procedimento', nome: 'Micropigmentação de Sobrancelhas', descricao: 'Realça e redefine o formato das sobrancelhas com pigmento, proporcionando um visual natural e harmonioso.', imagem: '/imagens/Micropigmentação de sobran.png' },
  { tipo: 'Procedimento', nome: 'Brows Lamination', descricao: 'Alinha e levanta os fios das sobrancelhas, oferecendo um efeito mais cheio e definido.', imagem: '/imagens/brows_lamination.png' },
  { tipo: 'Procedimento', nome: 'Remoção a Laser', descricao: 'Remove pigmentos antigos com segurança, preparando a pele para novas aplicações.', imagem: '/imagens/laserr.png' },
  { tipo: 'Procedimento', nome: 'Extensão de Cílios', descricao: 'Aplicação de cílios fio a fio para um olhar marcante e volumoso.', imagem: '/imagens/Along.png' },
  { tipo: 'Procedimento', nome: 'Design Personalizado', descricao: 'Análise individual para um design de sobrancelhas que combina com seu rosto.', imagem: 'imagens/DesignPerso.jpg' },
  { tipo: 'Procedimento', nome: 'Micropigmentação Labial', descricao: 'Realça a cor natural dos lábios com um toque de pigmento, garantindo uma aparência saudável.', imagem: '/imagens/MicropigLabial.png' },
];

const courses = [

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

const Detalhes = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const prevCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const nextCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="detalhes" className="py-20 bg-bege px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-marrom">
          Detalhes de Procedimentos e Cursos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dados.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition group"
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-full h-96 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-marrom uppercase">
                  {item.tipo}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-1 text-marrom">
                  {item.nome}
                </h3>
                <p className="text-textoSecundario text-sm">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12 mt-16 text-marrom">
          Nossos Cursos
        </h2>
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[400px] transition-transform duration-500 ease-out">
              <img
                src={courses[currentCourseIndex].url}
                alt={courses[currentCourseIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {courses[currentCourseIndex].title}
                  </h3>
                  <p className="mb-2">{courses[currentCourseIndex].description}</p>
                  <p className="text-xl font-semibold">
                    {/* {courses[currentCourseIndex]} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          

          <button
            onClick={prevCourse}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextCourse}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCourseIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentCourseIndex ? 'bg-pink-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detalhes;