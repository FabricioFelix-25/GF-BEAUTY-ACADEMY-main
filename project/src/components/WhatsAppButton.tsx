import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
<a
  href="https://wa.me/5571988287504"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <img
    src="/imagens/icons8-whatsapp.gif"
    alt="Fale conosco no WhatsApp"
    className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
  />
</a>

  );
};

export default WhatsAppButton;