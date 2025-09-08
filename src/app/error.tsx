'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-blue px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">⚠️</span>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">Algo deu errado!</h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Ocorreu um erro inesperado. Nossa equipe foi notificada e está
          trabalhando para resolver o problema.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="flex items-center gap-2 bg-vibrant-orange hover:bg-vibrant-orange/90"
          >
            <RefreshCw className="w-4 h-4" />
            Tentar novamente
          </Button>

          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
            className="flex items-center gap-2 border-white/30 text-white hover:bg-white hover:text-navy-blue"
          >
            <Home className="w-4 h-4" />
            Página inicial
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-gray-400 cursor-pointer hover:text-white">
              Detalhes técnicos (desenvolvimento)
            </summary>
            <pre className="mt-4 p-4 bg-gray-900 text-red-400 text-sm rounded-lg overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
