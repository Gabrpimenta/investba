'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-navy-blue overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-navy-blue/75 backdrop-blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/60 via-navy-blue/40 to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          {/* Trust badges */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-full px-8 py-3 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <span className="text-sm font-medium">
                ✨ Líder no mercado • CRECI J-2716 • Costa do Descobrimento
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Morar ou{' '}
            <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
              Investir?
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-2xl md:text-3xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              <strong className="text-vibrant-orange text-3xl md:text-4xl">
                A escolha é sua, a solução é nossa!
              </strong>
            </p>
            <p className="text-xl md:text-2xl">
              Há mais de{' '}
              <strong className="text-vibrant-orange">30 anos</strong> na Costa
              do Descobrimento, oferecendo as melhores oportunidades
              imobiliárias da Bahia.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-light-orange rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-vibrant-orange">
                  30+
                </div>
                <div className="text-sm text-gray-300">Anos de Experiência</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-light-orange rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-vibrant-orange">
                  4.897
                </div>
                <div className="text-sm text-gray-300">Famílias Atendidas</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-vibrant-orange to-light-orange rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-vibrant-orange">
                  95%
                </div>
                <div className="text-sm text-gray-300">De satisfação</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="xl"
              className="text-lg px-12 py-6 h-auto bg-gradient-to-r from-vibrant-orange to-light-orange hover:from-vibrant-orange/90 hover:to-light-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Descobrir Oportunidades
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="text-white border-2 border-white/30 hover:bg-white hover:text-navy-blue text-lg px-12 py-6 h-auto backdrop-blur-lg transition-all duration-300 hover:scale-105"
            >
              Desenvolva seu Projeto
            </Button>
          </div>

          {/* Additional info */}
          <div className="mt-16 text-sm text-gray-400 max-w-4xl mx-auto">
            <p className="leading-relaxed">
              🏆 Especialistas em <strong>Belmonte</strong> e{' '}
              <strong>Santa Cruz Cabrália</strong> • 💼 Soluções completas para
              investidores e desenvolvedores • 📞 Atendimento personalizado{' '}
              <strong>(73) 99902-2030</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
