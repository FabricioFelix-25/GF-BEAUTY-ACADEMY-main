{/*import { ChevronLeft, ChevronRight } from 'lucide-react';*/}

const Hero = () => {
  const slides = [
      '/imagens/imagem_redimensionada_1227x925.jpg',

  ];

  return (
    <section id="inicio" className="relative h-screen pt-16">
      <div className="absolute inset-0">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 ${index === 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Gisele França</h1>
          <p className="text-xl md:text-2xl mb-8">
            Realce sua beleza natural com nossos tratamentos exclusivos
          </p>
          <div className="flex justify-center">
            <a
              href="#servicos"
              className="inline-block bg-[#C4A4A4] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E5A89B] transition-colors"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
  
</div>

      {/*<button className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-60 hover:bg-opacity-90 transition">
        <ChevronLeft className="h-6 w-6 text-caramelo" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-60 hover:bg-opacity-90 transition">
        <ChevronRight className="h-6 w-6 text-caramelo" />
      </button>*/}
    </section>
  );
};

export default Hero;
