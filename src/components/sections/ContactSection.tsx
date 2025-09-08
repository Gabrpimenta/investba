'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../ui/button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-navy-blue relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-orange opacity-5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-light-orange opacity-5 rounded-full translate-y-32 -translate-x-32"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Entre em{' '}
                <span className="bg-gradient-to-r from-vibrant-orange to-light-orange bg-clip-text text-transparent">
                  contato
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Estamos prontos para ajudar você a realizar seus objetivos no
                mercado imobiliário. Nossa equipe está disponível para
                esclarecer dúvidas e apresentar as melhores soluções.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vibrant-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Telefone
                  </h3>
                  <p className="text-gray-300">(73) 3268-8600</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Segunda à sexta, 8h às 18h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vibrant-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    E-mail
                  </h3>
                  <p className="text-gray-300">contato@investba.com.br</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Resposta em até 2 horas úteis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-vibrant-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Endereço
                  </h3>
                  <p className="text-gray-300">Avenida Beira Mar, 123</p>
                  <p className="text-gray-300">Porto Seguro - BA, 45810-000</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Agendar Reunião
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-navy-blue"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-navy-blue mb-6">
              Envie sua mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                    placeholder="(73) 99999-9999"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="lancamento">
                      Lançamento de Empreendimento
                    </option>
                    <option value="projeto">Desenvolvimento de Projeto</option>
                    <option value="consultoria">Consultoria Imobiliária</option>
                    <option value="juridico">Serviços Jurídicos</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vibrant-orange focus:border-transparent resize-none"
                  placeholder="Conte-nos mais sobre seu projeto ou dúvida..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
