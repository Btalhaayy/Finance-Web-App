import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ExternalLink } from 'lucide-react';

const NewsBanner = () => {
  const { data, isLoading, error } = useQuery(
    'news',
    async () => {
      const response = await axios.get(
        ''
      );
      return response.data.articles.slice(0, 6) || [];
    },
    {
      refetchInterval: 300000 
    }
  );

  if (isLoading || error || !data?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {data.map((article: any, index: number) => (
        <a
          key={index}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-sm mb-2 line-clamp-2">{article.title}</h3>
          <div className="flex items-center text-xs text-gray-400">
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            <ExternalLink size={12} className="ml-2" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default NewsBanner;