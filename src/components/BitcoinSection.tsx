import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ArrowUp, ArrowDown } from 'lucide-react';

const BitcoinSection = () => {
  const { data, isLoading, error } = useQuery(
    'bitcoin',
    async () => {
      const response = await axios.get(
        ''
      );
      const bitcoinData = response.data.bitcoin;
      
      return {
        price: bitcoinData?.usd || 0,
        change: bitcoinData?.usd_24h_change || 0
      };
    },
    {
      refetchInterval: 3000000, 
    }
  );

  if (isLoading) return <div className="animate-pulse">Loading Bitcoin data...</div>;
  if (error) return <div className="text-red-400">Error loading Bitcoin data</div>;

  const isPositive = (data?.change || 0) >= 0;

  return (
    <div>
      <div className="text-3xl font-bold mb-4">${data?.price.toLocaleString()}</div>
      <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
        <span className="ml-1">{Math.abs(data?.change || 0).toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default BitcoinSection;