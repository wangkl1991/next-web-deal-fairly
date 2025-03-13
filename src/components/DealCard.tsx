import Image from 'next/image';
import Link from 'next/link';
import { type Deal } from '@/lib/deals';

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image
          src={deal.imageUrl}
          alt={deal.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg font-bold text-sm">
          {deal.discountPercentage}% OFF
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
          {deal.category}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
          {deal.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-grow">
          {deal.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ${deal.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              ${deal.originalPrice.toFixed(2)}
            </span>
          </div>
          
          <Link 
            href={`/deals/${deal.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            View Deal
          </Link>
        </div>
      </div>
    </div>
  );
} 