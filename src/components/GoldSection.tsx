import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { FiArrowUp as ArrowUp, FiArrowDown as ArrowDown } from 'react-icons/fi';

const GoldSection = () => {
  const { data, isLoading, error } = useQuery(
    'gold',
    async () => {
      const response = await axios.get('', {
        headers: {
          'x-access-token': ''
        }
      });
      return {
        price: response.data.price,
        timestamp: new Date(response.data.timestamp * 1000).toLocaleTimeString(),
        change: response.data.ch
      };
    },
    {
      refetchInterval: 6000000 
    }
  );

  if (isLoading) return <div className="animate-pulse h-32 bg-gray-700 rounded"></div>;
  if (error) return <div className="text-red-400">Unable to load gold price</div>;

  const isPositive = (data?.change || 0) >= 0;

  return (
    <div className="grid gap-4">
      <div className="bg-gray-700 p-4 rounded-lg">
        <div className="text-lg font-semibold mb-2">Gold (XAU)</div>
        <div className="text-2xl font-bold mb-2">${data?.price.toFixed(2)}</div>
        <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'} mb-2`}>
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span className="ml-1">{Math.abs(data?.change || 0).toFixed(2)}%</span>
        </div>
        <div className="text-sm text-gray-400">per troy ounce</div>
        <div className="mt-2 text-xs text-gray-500">
          Last updated: {data?.timestamp}
        </div>
      </div>
    </div>
  );
};

export default GoldSection