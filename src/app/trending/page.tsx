import { getAllDeals } from '@/lib/deals';
import DealCard from '@/components/DealCard';
import Link from 'next/link';

export const metadata = {
  title: 'Trending Deals | DealFairly',
  description: 'Browse our trending deals with the biggest discounts.',
};

export default async function TrendingPage() {
  // Server-side data fetching
  const allDeals = await getAllDeals();
  
  // Sort deals by discount percentage (highest first)
  const sortedDeals = [...allDeals].sort((a, b) => b.discountPercentage - a.discountPercentage);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white">Trending Deals</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trending Deals
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Our most popular deals with the biggest discounts. These offers are moving fast, so don't miss out!
          </p>
        </div>

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Limited Time Offers</h2>
              <p className="mb-0">These trending deals won't last forever. Grab them while you can!</p>
            </div>
            <Link 
              href="#deals-section" 
              className="mt-4 md:mt-0 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Deals
            </Link>
          </div>
        </div>

        {/* Deals Grid */}
        <div id="deals-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
        
        {/* More Deals CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-4">
            Looking for more?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We're constantly adding new deals to our collection. Check back regularly or subscribe to our newsletter to stay updated.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 