import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TrendingUp, Bitcoin, Coins } from 'lucide-react';
import StockSection from './components/StockSection';
import CryptoSection from './components/CryptoSection';
import GoldSection from './components/GoldSection';
import NewsBanner from './components/NewsBanner';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 border-b border-gray-700">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              MyFinance
            </h1>
          </div>
        </header>
        
        <main className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-green-400" />
                <h2 className="text-xl font-semibold">Stocks</h2>
              </div>
              <StockSection />
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Bitcoin className="text-yellow-400" />
                <h2 className="text-xl font-semibold">Cryptocurrencies</h2>
              </div>
              <CryptoSection />
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Coins className="text-yellow-600" />
                <h2 className="text-xl font-semibold">Gold</h2>
              </div>
              <GoldSection />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Latest Financial News</h2>
            <NewsBanner />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App