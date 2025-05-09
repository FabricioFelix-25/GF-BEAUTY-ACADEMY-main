// Detalhes.tsx
import React from 'react';

const dados = [
  { tipo: 'Procedimento', nome: 'Micropigmentação de Sobrancelhas', descricao: 'Realça e redefine o formato das sobrancelhas com pigmento, proporcionando um visual natural e harmonioso.', imagem: '/imagens/Micropigmentação de sobran.png' },
  { tipo: 'Procedimento', nome: 'Brows Lamination', descricao: 'Alinha e levanta os fios das sobrancelhas, oferecendo um efeito mais cheio e definido.', imagem: '/imagens/brows_lamination.png' },
  { tipo: 'Procedimento', nome: 'Remoção a Laser', descricao: 'Remove pigmentos antigos com segurança, preparando a pele para novas aplicações.', imagem: '/imagens/laserr.png' },
  { tipo: 'Procedimento', nome: 'Extensão de Cílios', descricao: 'Aplicação de cílios fio a fio para um olhar marcante e volumoso.', imagem: '/imagens/Along.png' },
  { tipo: 'Procedimento', nome: 'Design Personalizado', descricao: 'Análise individual para um design de sobrancelhas que combina com seu rosto.', imagem: 'imagens/DesignPerso.jpg' },
  { tipo: 'Procedimento', nome: 'Micropigmentação Labial', descricao: 'Realça a cor natural dos lábios com um toque de pigmento, garantindo uma aparência saudável.', imagem: '/imagens/MicropigLabial.png' },
  { tipo: 'Curso', nome: 'Design de Sobrancelhas Iniciantes', descricao: 'Curso introdutório para quem deseja aprender técnicas básicas de design de sobrancelhas.', imagem: '/imagens/cursoDesignIniciante.png' },
  { tipo: 'Curso', nome: 'Design de Sobrancelhas Especialização', descricao: 'Aprofunde seus conhecimentos com técnicas avançadas e prática profissional.', imagem: '/imagens/CursoEspecia.jpeg' },
  { tipo: 'Curso', nome: 'Micropigmentação 3x1 Iniciantes', descricao: 'Domine as técnicas essenciais para atuar na área de micropigmentação.', imagem: '/imagens/CursoMicropig.jpeg' },
  { tipo: 'Curso', nome: 'Micropigmentação Especialização em Shadignline', descricao: 'Especialização com foco na técnica de Shadignline, voltada para profissionais.', imagem: '/imagens/CursoEspecShadigline.png' },
  { tipo: 'Curso', nome: 'Micropigmentação Especialização VIP - 1 técnicas', descricao: 'Aprimore-se em técnicas exclusivas de micropigmentação com atendimento VIP.', imagem: '/imagens/CursoEspecVip.png' },
  { tipo: 'Curso', nome: 'Extensão de Cílios + Bônus', descricao: 'Aprenda a aplicar extensão de cílios com técnicas modernas e conteúdos extras.', imagem: '/imagens/CursoCilios.png' },
];

const Detalhes = () => {
  return (
    <section id="detalhes" className="py-20 bg-bege px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-marrom">Detalhes de Procedimentos e Cursos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dados.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition group">
              <div className="overflow-hidden bg-white">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-full h-96 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-marrom uppercase">{item.tipo}</span>
                <h3 className="text-xl font-semibold mt-2 mb-1 text-marrom">{item.nome}</h3>
                <p className="text-textoSecundario text-sm">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detalhes;
