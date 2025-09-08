import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-blue px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-vibrant-orange mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A página que você está procurando pode ter sido removida, renomeada
            ou está temporariamente indisponível.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-vibrant-orange hover:bg-vibrant-orange/90 text-white rounded-xl font-semibold transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Página inicial
          </Link>

          <Link
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white hover:bg-white hover:text-navy-blue rounded-xl font-semibold transition-colors duration-200"
          >
            <Search className="w-4 h-4" />
            Entre em contato
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          <p>Se você acredita que isso é um erro, entre em contato conosco:</p>
          <p className="mt-2">
            <a
              href="tel:+5573999022030"
              className="text-vibrant-orange hover:text-light-orange transition-colors"
            >
              (73) 99902-2030
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
