import React from 'react';

function Cursos() {
  const cursos = [
    { nome: 'Design de Sobrancelhas Iniciantes', preco: 'R$ 300' },
    { nome: 'Design de Sobrancelhas Especialização', preco: 'R$ 450' },
    { nome: 'Micropigmentação 3x1 Iniciantes', preco: 'R$ 350' },
    { nome: 'Micropigmentação Especialização em Shadignline', preco: 'R$ 650' },
    { nome: 'Micropigmentação Especialização VIP - 1 técnicas', preco: 'R$ 850' },
    { nome: 'Extensão de Cílios + Bônus', preco: 'R$ 550' },
  ];

  return (
    <section id="cursos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cursos.map((curso, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{curso.nome}</h3>
              <p className="text-pink-600 font-bold">{curso.preco}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
              <a
        href="https://wa.me/5571988287504?text=Olá! Gostaria de saber mais sobre os cursos disponíveis."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#CDAEAE] hover:bg-[#b89494] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
      >
        Falar sobre Cursos no WhatsApp
      </a>

        </div>
      </div>
    </section>
  );
}

export default Cursos;
