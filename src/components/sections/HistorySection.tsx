'use client';

import { Calendar, Award, Users, TrendingUp } from 'lucide-react';

const milestones = [
  {
    icon: Calendar,
    number: '30+',
    label: 'Anos de História',
    description: 'Décadas de experiência consolidada',
  },
  {
    icon: TrendingUp,
    number: '20',
    label: 'Lançamentos',
    description: 'Projetos realizados com excelência',
  },
  {
    icon: Users,
    number: '987',
    label: 'Unidades Vendidas',
    description: 'Famílias realizando sonhos',
  },
  {
    icon: Award,
    number: '90',
    label: 'Milhões em VGV',
    description: 'Valor geral de vendas gerado',
  },
];

export default function HistorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">
            Compromisso com a{' '}
            <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
              evolução contínua
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Com uma trajetória enraizada na excelência, a{' '}
                <strong className="text-vibrant-orange">InvestBA</strong>{' '}
                carrega um legado de mais de três décadas de experiência no
                setor. Nossa história reflete o compromisso com a evolução
                contínua, consolidando-nos como um símbolo de confiabilidade.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Durante esse período, aprimoramos nosso foco nos processos de
                lançamentos imobiliários e projetos, dedicando esforços à
                criação de empreendimentos que transcendem o convencional.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Essa trajetória é impulsionada por valores inegociáveis:{' '}
                <strong className="text-navy-blue">
                  ética, transparência e respeito
                </strong>{' '}
                são os alicerces de todas as nossas interações. Com décadas de
                experiência e princípios sólidos, construímos não só edifícios,
                mas também relações duradouras de confiança com clientes e
                parceiros.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-navy-blue mb-4">
                Nossa História
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mais de{' '}
                <span className="text-vibrant-orange font-semibold">
                  805 mil m²
                </span>{' '}
                de área desenvolvida, representando nosso compromisso com a
                transformação da Costa do Descobrimento através de projetos
                inovadores e sustentáveis.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-vibrant-orange to-light-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-navy-blue mb-2">
                    {milestone.number}
                  </div>
                  <div className="text-lg font-semibold text-navy-blue mb-2">
                    {milestone.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {milestone.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
