'use client';

import {
  TrendingUp,
  Users,
  Building,
  Award,
  Home,
  MapPin,
  Clock,
  Shield,
  ArrowRight,
} from 'lucide-react';

const stats = [
  {
    icon: Building,
    number: '20',
    label: 'Lançamentos',
    description: 'Empreendimentos exclusivos entregues',
  },
  {
    icon: Users,
    number: '987',
    label: 'Unidades Vendidas',
    description: 'Famílias realizando sonhos',
  },
  {
    icon: TrendingUp,
    number: '90mi',
    label: 'VGV Realizado',
    description: 'Valor geral de vendas alcançado',
  },
  {
    icon: MapPin,
    number: '805k',
    label: 'Metros Quadrados',
    description: 'Área total desenvolvida na região',
  },
  {
    icon: Clock,
    number: '30+',
    label: 'Anos de História',
    description: 'Três décadas de experiência no mercado',
  },
  {
    icon: Shield,
    number: '100%',
    label: 'Projetos Entregues',
    description: 'Pontualidade e qualidade garantidas',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Prêmios Recebidos',
    description: 'Reconhecimento do mercado imobiliário',
  },
  {
    icon: Home,
    number: '98%',
    label: 'Satisfação',
    description: 'Clientes que recomendariam nossos serviços',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-vibrant-orange/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-orange/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">
            Números que{' '}
            <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
              Inspiram Confiança
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três décadas de experiência em investimentos imobiliários na Costa
            do Descobrimento. Nossos resultados refletem o compromisso com a
            rentabilidade e segurança.
          </p>
        </div>

        {/* Enhanced stats grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:border-vibrant-orange/30 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-vibrant-orange/5 to-light-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating particles effect on hover */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-vibrant-orange/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-light-orange/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200 transition-all duration-300"></div>

                {/* Enhanced icon with glow effect */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-light-orange rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-vibrant-orange to-light-orange rounded-full mx-auto w-16 h-16 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>

                {/* Enhanced number with counter animation effect */}
                <div className="text-4xl font-bold text-navy-blue mb-2 group-hover:text-vibrant-orange transition-colors duration-300 relative z-10">
                  {stat.number}
                </div>

                {/* Enhanced label */}
                <div className="text-lg font-semibold text-navy-blue mb-3 relative z-10 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>

                {/* Enhanced description */}
                <p className="text-gray-600 text-sm leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors">
                  {stat.description}
                </p>

                {/* Subtle border glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-vibrant-orange/20 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced bottom CTA with better design */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-vibrant-orange/10 to-light-orange/10 rounded-3xl p-8 border border-vibrant-orange/20 overflow-hidden group hover:from-vibrant-orange/15 hover:to-light-orange/15 transition-all duration-500">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-orange/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-light-orange/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 delay-200"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                Pronto para fazer parte desta{' '}
                <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
                  história de sucesso?
                </span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Junte-se aos mais de 500 investidores que já confiaram na
                InvestBA para fazer seus investimentos na Costa do
                Descobrimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-vibrant-orange to-light-orange text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-vibrant-orange/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-light-orange to-vibrant-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    Quero Investir Agora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group bg-gradient-to-r from-vibrant-orange to-light-orange text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-vibrant-orange/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-light-orange to-vibrant-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    Agendar Consulta
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
