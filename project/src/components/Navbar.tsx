import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rosaEscuro text-white p-4 shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src="/imagens/logo.png" alt="NL Beauty" className="h-24 w-auto" />
            <span className="text-xl font-bold text-[#E5A89B]">Gisele França Beauty Academy</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-[#E5A89B] hover:text-pink-600">Início</a>
            <a href="#servicos" className="text-[#E5A89B] hover:text-pink-600">Serviços</a>
            <a href="#detalhes" className="text-[#E5A89B] hover:text-pink-600">Detalhes</a>
            <a href="#depoimentos" className="text-[#E5A89B] hover:text-pink-600">Depoimentos</a>
            <a href="#contato" className="text-[#E5A89B] hover:text-pink-600">Contato</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#E5A89B]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#inicio" className="block px-3 py-2 text-[#E5A89B] hover:text-pink-600">Início</a>
            <a href="#servicos" className="block px-3 py-2 text-[#E5A89B] hover:text-pink-600">Serviços</a>
            <a href="#detalhes" className="block px-3 py-2 text-[#E5A89B] hover:text-pink-600">Detalhes</a>
            <a href="#depoimentos" className="block px-3 py-2 text-[#E5A89B] hover:text-pink-600">Depoimentos</a>
            <a href="#contato" className="block px-3 py-2 text-[#E5A89B] hover:text-pink-600">Contato</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
