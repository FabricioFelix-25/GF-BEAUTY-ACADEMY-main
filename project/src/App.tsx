import React from 'react';
import { Phone, Instagram, Facebook, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Cursos from './components/Cursos';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Detalhes from './components/Detalhes';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cursos />
        <Detalhes />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
      <footer className="bg-marromEscuro text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Beauty Academy</h3>
        <p className="text-gray-400">Transformando sua beleza em arte</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-white hover:text-caramelo">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-caramelo">
            <Facebook size={20} />
          </a>
          <a href="mailto:contato@beautyacademy.com" className="text-white hover:text-caramelo">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Horário</h3>
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock size={16} />
          <span>Seg - Sáb: 9h às 19h</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 mt-2">
          <MapPin size={16} />
          <span>Av. Oceânica, 3638 Edifício Qualidados Empresarial, sala 301 Rio Vermelho/Ondina</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Contato</h3>
        <div className="flex items-center space-x-2 text-gray-400">
          <Phone size={16} />
          <span>(71) 98828-7504</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400 mt-2">
          <MessageCircle size={16} />
          <span>contato@beautyacademy.com</span>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Beauty Academy. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;
