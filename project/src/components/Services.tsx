import React from 'react';

const services = [
  {
    category: 'Sobrancelhas',
    items: [
      { name: 'Micropigmentação de Sobrancelhas' },
      { name: 'Brows Lamination' },
      { name: 'Remoção a Laser' },
      { name: 'Extensão de Cílios' },
      { name: 'Design Personalizado' },
    ]
  },
  {
    category: 'Lábios',
    items: [
      { name: 'Micropigmentação Labial' },
    ]
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-bege">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-marrom">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 justify-center">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
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

export default Services;
