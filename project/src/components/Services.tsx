import React from 'react';

const services = [
  {
    category: 'Sobrancelhas',
    items: [
      { name: 'Micropigmentação de Sobrancelhas', price: 'R$ 500' },
      { name: 'Brows Lamination', price: 'R$ 150' },
      { name: 'Remoção a Laser', price: 'R$ 70' },
      { name: 'Extensão de Cílios', price: 'R$ 70' },
      { name: 'Design Personalizado', price: 'R$ 80' },
    ]
  },
  {
    category: 'Lábios',
    items: [
      { name: 'Micropigmentação Labial', price: 'R$ 100' },
    ]
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.category}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="text-pink-600 font-semibold">{item.price}</span>
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
            className="inline-block bg-[#CDAEAE] hover:bg-[#b89494] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Falar Sobre Procedimentos no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
