import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const dynamic = 'force-static';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'InvestBA - Costa do Descobrimento | Investimentos Imobiliários',
  description:
    'Há 30 anos transformando oportunidades em investimentos seguros na Costa do Descobrimento. Belmonte, Santa Cruz Cabrália e região.',
  keywords:
    'investimentos imobiliários, costa do descobrimento, belmonte, santa cruz cabrália, bahia, propriedades, terrenos',
  authors: [{ name: 'InvestBA' }],
  robots: 'index, follow',
  openGraph: {
    title: 'InvestBA - Investimentos Imobiliários na Costa do Descobrimento',
    description:
      'Há 30 anos transformando oportunidades em investimentos seguros',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://investba.com.br',
    siteName: 'InvestBA',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'InvestBA - Investimentos Imobiliários',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvestBA - Investimentos Imobiliários na Costa do Descobrimento',
    description:
      'Há 30 anos transformando oportunidades em investimentos seguros',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
