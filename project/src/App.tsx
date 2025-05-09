import React from 'react';
import { Phone, Instagram, Facebook, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Detalhes from './components/Detalhes';

function App() {
  return (
    <div className="min-h-screen bg-bege text-textoPrimario">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Detalhes />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
      
      {/* Novo rodapé integrado à identidade visual */}
      <footer className="bg-bege text-marrom py-10 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Beauty Academy</h3>
              <p className="text-dourado font-medium">Transformando sua beleza em arte</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-marrom hover:text-dourado transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-marrom hover:text-dourado transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="mailto:contato@beautyacademy.com" className="text-marrom hover:text-dourado transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horário</h3>
              <div className="flex items-center space-x-2 text-textoSecundario">
                <Clock size={16} />
                <span>Seg - Sáb: 9h às 19h</span>
              </div>
              <div className="flex items-center space-x-2 text-textoSecundario mt-2">
                <MapPin size={16} />
                <span>Av. Oceânica, 3638 - Sala 301, Rio Vermelho/Ondina</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="flex items-center space-x-2 text-textoSecundario">
                <Phone size={16} />
                <span>(71) 98828-7504</span>
              </div>
              <div className="flex items-center space-x-2 text-textoSecundario mt-2">
                <MessageCircle size={16} />
                <span>contato@beautyacademy.com</span>
              </div>
            </div>
          </div>

          <hr className="border-t border-dourado w-1/2 mx-auto" />

          <p className="text-center text-sm text-textoSecundario mt-6">
            &copy; {new Date().getFullYear()} Beauty Academy. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
