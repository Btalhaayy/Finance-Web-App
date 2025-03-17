import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ArrowUp, ArrowDown } from 'lucide-react';

const CRYPTOCURRENCIES = [
  { id: 'bitcoin', name: 'Bitcoin' },
  { id: 'ethereum', name: 'Ethereum' },
  { id: 'ripple', name: 'XRP' }
];

const CryptoCard = ({ id, name }: { id: string; name: string }) => {
  const { data, isLoading, error } = useQuery(
    ['crypto', id],
    async () => {
      const response = await axios.get(
        ``
      );
      const cryptoData = response.data[id];
      return {
        price: cryptoData?.usd || 0,
        change: cryptoData?.usd_24h_change || 0
      };
    },
    {
      refetchInterval: 3000000 
    }
  );

  if (isLoading) return <div className="animate-pulse h-24 bg-gray-700 rounded"></div>;
  if (error) return null;

  const isPositive = (data?.change || 0) >= 0;

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <div className="text-lg font-semibold mb-2">{name}</div>
      <div className="text-2xl font-bold mb-2">${data?.price.toLocaleString()}</div>
      <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="ml-1">{Math.abs(data?.change || 0).toFixed(2)}%</span>
      </div>
    </div>
  );
};

const CryptoSection = () => {
  return (
    <div className="grid gap-4">
      {CRYPTOCURRENCIES.map(crypto => (
        <CryptoCard key={crypto.id} {...crypto} />
      ))}
    </div>
  );
};

export default CryptoSection;