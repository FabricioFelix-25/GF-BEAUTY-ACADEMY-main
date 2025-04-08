import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rosangela Bouzas',
      text: 'Amei muito. Superou minhas expectativas, parabéns pelo seu trabalho e Deus abençoe.',
      rating: 5
    },
    {
      name: 'Gabriela Galindo',  
      text: 'Atendimento 5 estrelas sempre! Giselle e toda equipe são excelentes, sempre muito atenciosas e dispostas a fazer o melhor por cada cliente. Recomendo pra todo mundo.',
      rating: 5
    },
    {
      name: 'Thais Bispo',
      text: 'Fiz a micropigmentação de sobrancelhas com Gisele e foi a melhor profissional que eu poderia ter escolhido. Acompanhei o trabalho dela por 4 anos até me sentir confiante para realizar o procedimento. Eu queria algo bem discreto e natural, e ela fez exatamente o que eu esperava. Hoje sou constantemente elogiada pelas minhas sobrancelhas. Enfim, tô extremamente satisfeita e indico de olhos fechados.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;