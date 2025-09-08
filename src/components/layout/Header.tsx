'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail, X, User, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCorretorDropdownOpen, setIsCorretorDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent hydration issues by only showing interactive elements after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!mounted) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCorretorDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mounted]);

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Investimentos', href: '#investimentos' },
    { name: 'Desenvolva seu Projeto', href: '#desenvolva' },
    { name: 'Realize seu Lançamento', href: '#realize' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      {/* Top contact bar */}
      <div className="bg-navy-blue text-white text-sm py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-vibrant-orange transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span className="whitespace-nowrap">(73) 99902-2030</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 hover:text-vibrant-orange transition-colors duration-200">
              <Mail className="w-4 h-4" />
              <span className="whitespace-nowrap">investbaadm@gmail.com</span>
            </div>
          </div>
          <div
            className="hidden md:flex items-center relative"
            ref={dropdownRef}
          >
            <button
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-vibrant-orange/10 border border-vibrant-orange/20 hover:bg-vibrant-orange/20 transition-all duration-200 group"
              onClick={() =>
                mounted && setIsCorretorDropdownOpen(!isCorretorDropdownOpen)
              }
            >
              <User className="w-4 h-4 text-vibrant-orange" />
              <span className="text-vibrant-orange font-medium whitespace-nowrap">
                Área do Corretor
              </span>
              <ChevronDown
                className={`w-4 h-4 text-vibrant-orange transition-transform duration-200 ${mounted && isCorretorDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {mounted && isCorretorDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a
                  href="#login"
                  className="block px-4 py-2 text-navy-blue hover:bg-gray-50 hover:text-vibrant-orange transition-colors duration-200"
                  onClick={() => setIsCorretorDropdownOpen(false)}
                >
                  Fazer Login
                </a>
                <a
                  href="#cadastro"
                  className="block px-4 py-2 text-navy-blue hover:bg-gray-50 hover:text-vibrant-orange transition-colors duration-200"
                  onClick={() => setIsCorretorDropdownOpen(false)}
                >
                  Cadastrar-se
                </a>
                <div className="border-t border-gray-200 my-1"></div>
                <a
                  href="#materiais"
                  className="block px-4 py-2 text-navy-blue hover:bg-gray-50 hover:text-vibrant-orange transition-colors duration-200"
                  onClick={() => setIsCorretorDropdownOpen(false)}
                >
                  Materiais de Venda
                </a>
                <a
                  href="#comissoes"
                  className="block px-4 py-2 text-navy-blue hover:bg-gray-50 hover:text-vibrant-orange transition-colors duration-200"
                  onClick={() => setIsCorretorDropdownOpen(false)}
                >
                  Relatório de Comissões
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-navy-blue">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-white">Invest</span>
                <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
                  BA
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-vibrant-orange transition-colors duration-200 font-medium whitespace-nowrap text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                (73) 99902-2030
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-vibrant-orange to-light-orange hover:from-vibrant-orange/90 hover:to-light-orange/90 transition-colors duration-200 whitespace-nowrap"
              >
                Falar com Especialista
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-navy-blue/80 transition-colors duration-200"
              onClick={() => mounted && setIsMenuOpen(!isMenuOpen)}
            >
              {mounted && isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mounted && isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-600 bg-navy-blue">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-vibrant-orange transition-colors duration-200 font-medium px-4 py-2 whitespace-nowrap"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 pt-4 border-t border-gray-600">
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange hover:text-white whitespace-nowrap"
                    >
                      (73) 99902-2030
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-vibrant-orange to-light-orange hover:from-vibrant-orange/90 hover:to-light-orange/90 whitespace-nowrap">
                      Falar com Especialista
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
