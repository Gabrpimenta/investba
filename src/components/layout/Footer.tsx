'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025); // Default fallback

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Invest</span>
              <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
                BA
              </span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Há 30 anos transformando oportunidades em investimentos seguros na
              Costa do Descobrimento, Bahia.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>CRECI J-2716</span>
              <span>•</span>
              <span>CNPJ 40.960.970/0001-53</span>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-vibrant-orange">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-vibrant-orange" />
                <span className="text-gray-300">(73) 99902-2030</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-vibrant-orange" />
                <span className="text-gray-300">investbaadm@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-vibrant-orange mt-1" />
                <div className="text-gray-300">
                  <div>Belmonte - BA</div>
                  <div>Av. Marechal Deodoro, 177, Sala 01 - Centro</div>
                  <div className="mt-1">Santa Cruz Cabrália - BA</div>
                  <div>Vila do Guaiú</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-vibrant-orange">
              Serviços
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Realize seu Lançamento</li>
              <li>• Desenvolva seu Projeto</li>
              <li>• Consultoria Jurídica</li>
              <li>• Investimentos Imobiliários</li>
              <li>• Análise de Viabilidade</li>
              <li>• Gestão de Vendas</li>
            </ul>
          </div>

          {/* Business hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-vibrant-orange">
              Horário
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-vibrant-orange" />
                <div className="text-gray-300">
                  <div>Segunda a Sexta</div>
                  <div className="text-sm">8h às 18h</div>
                </div>
              </div>
              <div className="text-gray-300">
                <div>Sábado</div>
                <div className="text-sm">8h às 14h</div>
              </div>
              <div className="text-gray-300">
                <div>Domingo</div>
                <div className="text-sm">Plantão WhatsApp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} InvestBA - Todos os direitos reservados
            </div>
            <div className="text-gray-400 text-sm">
              Costa do Descobrimento • Belmonte • Santa Cruz Cabrália
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
