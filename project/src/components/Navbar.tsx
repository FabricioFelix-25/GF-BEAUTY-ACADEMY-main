// Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bege text-marrom p-4 shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src="/imagens/logo.png" alt="NL Beauty" className="h-24 w-auto" />
            <span className="text-xl font-bold text-marrom">LÊ FRANCE - BEAUTY CONCEPT</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['inicio', 'servicos', 'detalhes', 'depoimentos', 'contato'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-marrom hover:text-dourado"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-marrom">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['inicio', 'servicos', 'detalhes', 'depoimentos', 'contato'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="block px-3 py-2 text-marrom hover:text-dourado"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

