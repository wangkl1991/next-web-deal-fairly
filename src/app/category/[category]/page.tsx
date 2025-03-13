import { getDealsByCategory, getCategories } from '@/lib/deals';
import DealCard from '@/components/DealCard';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all categories (for building static pages at build time)
export async function generateStaticParams() {
  const categories = getCategories();
  
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  // Decode the category parameter
  const categoryName = decodeURIComponent(params.category);
  
  // Get all available categories for validation
  const validCategories = getCategories().map(c => c.toLowerCase());
  
  // Check if the requested category exists
  if (!validCategories.includes(categoryName)) {
    notFound();
  }
  
  // Get the properly cased category name for display
  const displayCategory = getCategories().find(c => c.toLowerCase() === categoryName) || categoryName;
  
  // Server-side data fetching - get deals for this category
  const deals = await getDealsByCategory(
    // Find the original case for the category
    getCategories().find(c => c.toLowerCase() === categoryName) || ''
  );

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
            <span className="text-gray-900 dark:text-white">{displayCategory}</span>
          </nav>
        </div>

        {/* Category Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {displayCategory} Deals
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Browse our selection of amazing {typeof displayCategory === 'string' ? displayCategory.toLowerCase() : displayCategory} deals. 
            We've handpicked the best discounts so you can save on quality products.
          </p>
        </div>

        {/* Deals Grid */}
        {deals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              No deals found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              We couldn't find any deals in this category. Please check back later.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 