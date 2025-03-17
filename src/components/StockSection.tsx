import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Stock {
  symbol: string;
  name: string;
}

interface StockData {
  price: number;
  change: number;
  changePercent: number;
}

const STOCKS: Stock[] = [
  { symbol: 'SPY', name: 'S&P 500 ETF' },
  { symbol: 'QQQ', name: 'Nasdaq 100 ETF' },
  { symbol: 'DIA', name: 'Dow Jones ETF' },
  { symbol: 'IWM', name: 'Russell 2000 ETF' },
  { symbol: 'VGK', name: 'European Stocks ETF' }
];

const exampleData: Record<string, StockData> = {
  SPY: { price: 450.00, change: 2.00, changePercent: 0.45 },
  QQQ: { price: 370.00, change: -1.50, changePercent: -0.40 },
  DIA: { price: 350.00, change: 1.20, changePercent: 0.34 },
  IWM: { price: 220.00, change: 0.80, changePercent: 0.36 },
  VGK: { price: 60.00, change: -0.50, changePercent: -0.83 }
};

const StockCard: React.FC<Stock> = ({ symbol, name }) => {

  const [lastData, setLastData] = useState<StockData | null>(exampleData[symbol]);

  const { data, isLoading, error } = useQuery<StockData>(
    ['stock', symbol],
    async () => {
      const response = await axios.get(
        ``
      );
      const quote = response.data['Global Quote'];
      return {
        price: parseFloat(quote?.['05. price'] || '0'),
        change: parseFloat(quote?.['09. change'] || '0'),
        changePercent: parseFloat(quote?.['10. change percent']?.replace('%', '') || '0')
      };
    },
    {
      refetchInterval: 5000000000, 
      onSuccess: (data) => {
        setLastData(data); 
      }
    }
  );

  const displayData = data || lastData; 

  if (isLoading && !lastData) return <div className="animate-pulse h-24 bg-gray-700 rounded"></div>;
  if (error && !lastData) return <div>Error loading data</div>;

  const isPositive = (displayData?.change || 0) >= 0;

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <div className="text-lg font-semibold mb-2">{name}</div>
      <div className="text-2xl font-bold mb-2">${displayData?.price.toFixed(2)}</div>
      <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="ml-1">{Math.abs(displayData?.changePercent || 0).toFixed(2)}%</span>
      </div>
    </div>
  );
};

const StockSection: React.FC = () => {
  return (
    <div className="grid gap-4">
      {STOCKS.map(stock => (
        <StockCard key={stock.symbol} {...stock} />
      ))}
    </div>
  );
};

export default StockSection;