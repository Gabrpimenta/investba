import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'InvestBA - Investimentos Imobiliários',
    short_name: 'InvestBA',
    description:
      'Há 30 anos transformando oportunidades em investimentos seguros na Costa do Descobrimento',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A192F',
    theme_color: '#FF9200',
    orientation: 'portrait-primary',
    categories: ['business', 'finance'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
