import { getDealById, getAllDeals } from '@/lib/deals';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all deals (for building static pages at build time)
export async function generateStaticParams() {
  const deals = await getAllDeals();
  
  return deals.map((deal) => ({
    id: deal.id,
  }));
}

export default async function DealPage({ params }: { params: { id: string } }) {
  // Server-side data fetching
  const deal = await getDealById(params.id);
  
  // If no deal found, show 404
  if (!deal) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          {/* Breadcrumb */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <Link href={`/category/${encodeURIComponent(deal.category.toLowerCase())}`} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                {deal.category}
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-900 dark:text-white">{deal.title}</span>
            </nav>
          </div>
          
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 relative h-72 md:h-full">
                <Image
                  src={deal.imageUrl}
                  alt={deal.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg font-bold">
                  {deal.discountPercentage}% OFF
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                {deal.category}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {deal.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${deal.price.toFixed(2)}
                </span>
                <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                  ${deal.originalPrice.toFixed(2)}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                  Save ${(deal.originalPrice - deal.price).toFixed(2)}
                </span>
              </div>
              
              <div className="prose prose-blue dark:prose-invert mb-8">
                <p className="text-gray-600 dark:text-gray-300">
                  {deal.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Free shipping</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">30-day return policy</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Satisfaction guaranteed</span>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <button className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Buy Now
                </button>
                <button className="flex-grow border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Deals Section would go here */}
      </div>
    </div>
  );
} 