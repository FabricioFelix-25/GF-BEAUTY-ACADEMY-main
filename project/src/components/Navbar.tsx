// Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#E7E0D8] text-marrom p-4 shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src="/imagens/MARCA D'AGUA_LOGOTIPO.1.png" alt="NL Beauty" className="h-24 w-auto" />
            <span className="text-xl font-gerhona bg-gradient-to-r from-[#b2892b] to-[#C49B43] bg-clip-text text-transparent">LÊ FRANCE - BEAUTY CONCEPT</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['inicio', 'servicos', 'detalhes', 'depoimentos', 'contato'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="font-gerhona bg-gradient-to-r from-[#b2892b] to-[#C49B43] bg-clip-text text-transparent hover:text-[#B7903E]"  // Alteração aqui para a cor marrom e dourada no hover
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#B7903E]">
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
                className="block px-3 py-2 font-gerhona bg-gradient-to-r from-[#b2892b] to-[#C49B43] bg-clip-text text-transparent hover:text-[#B7903E]"  // Alteração aqui também para a cor marrom e dourada no hover
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
