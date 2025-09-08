export const dynamic = 'force-static';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-blue">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-vibrant-orange mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-white mb-2">InvestBA</h2>
        <p className="text-gray-300">Carregando...</p>
      </div>
    </div>
  );
}
