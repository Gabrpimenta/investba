import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail, User, ChevronDown } from 'lucide-react';

export default function HeaderStatic() {
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

          <div className="relative">
            <button className="flex items-center gap-2 px-3 py-1 rounded-md bg-vibrant-orange/10 border border-vibrant-orange/20 hover:bg-vibrant-orange/20 transition-all duration-200 group">
              <User className="w-4 h-4 text-vibrant-orange" />
              <span className="text-vibrant-orange font-medium whitespace-nowrap">
                Área do Corretor
              </span>
              <ChevronDown className="w-4 h-4 text-vibrant-orange transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-navy-blue">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="#inicio"
                className="text-2xl font-bold text-white hover:text-vibrant-orange transition-colors duration-200"
              >
                InvestBA
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-vibrant-orange transition-colors duration-200 font-medium whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-vibrant-orange text-vibrant-orange hover:bg-vibrant-orange hover:text-white whitespace-nowrap"
              >
                (73) 99902-2030
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-vibrant-orange to-light-orange hover:from-vibrant-orange/90 hover:to-light-orange/90 whitespace-nowrap"
              >
                Falar com Especialista
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-navy-blue/80 transition-colors duration-200">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
