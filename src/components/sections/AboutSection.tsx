'use client';

import { Briefcase, Target, Home, Scale, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Realizamos seu Lançamento',
    description:
      'Abrangemos desde a apresentação do conceito até a comercialização, oferecendo expertise incomparável em cada fase do processo.',
  },
  {
    icon: Target,
    title: 'Desenvolvemos seu Projeto',
    description:
      'Somos especialistas em projetos, guiando desde a seleção da área até análise documental e estudos de viabilidade, assegurando excelência em cada etapa.',
  },
  {
    icon: Home,
    title: 'Propriedades Premium',
    description:
      'Descubra as melhores propriedades urbanas e rurais no Sul da Bahia para viver ou investir. Sua busca pelo imóvel ideal termina aqui!',
  },
  {
    icon: Scale,
    title: 'Assessoria Jurídica',
    description:
      'Temos uma sólida assessoria jurídica com foco imobiliário. Nossa expertise legal potencializa seus negócios, dando mais eficiência para seu investimento.',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">
            Porque somos os{' '}
            <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
              melhores
            </span>{' '}
            no que fazemos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Morar ou investir? Com mais de 30 anos de experiência na Costa do
            Descobrimento, oferecemos soluções completas para transformar seus
            sonhos em realidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-light-orange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-blue mb-3 group-hover:text-vibrant-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-navy-blue to-navy-blue/90 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-vibrant-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-light-orange/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Entre em contato conosco e descubra como podemos transformar
                seus sonhos imobiliários em realidade na Costa do Descobrimento.
              </p>
              <button className="bg-gradient-to-r from-vibrant-orange to-light-orange text-white px-10 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                Falar com Especialista
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
