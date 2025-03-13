export type Deal = {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  category: string;
  imageUrl: string;
};

// Simulated database of deals
const dealsData: Deal[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'Noise-cancelling wireless headphones with 40-hour battery life',
    price: 199.99,
    originalPrice: 349.99,
    discountPercentage: 43,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    description: 'Track your fitness goals with heart rate monitoring and GPS',
    price: 149.99,
    originalPrice: 249.99,
    discountPercentage: 40,
    category: 'Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    title: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support for your home office',
    price: 249.99,
    originalPrice: 399.99,
    discountPercentage: 38,
    category: 'Home Office',
    imageUrl: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '4',
    title: 'Electric Coffee Grinder',
    description: 'Professional-grade electric coffee grinder for the perfect brew',
    price: 79.99,
    originalPrice: 129.99,
    discountPercentage: 38,
    category: 'Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '5',
    title: 'Portable Bluetooth Speaker',
    description: 'Waterproof Bluetooth speaker with 24-hour playtime',
    price: 89.99,
    originalPrice: 159.99,
    discountPercentage: 44,
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '6',
    title: 'Yoga Mat Bundle',
    description: 'Premium yoga mat with blocks and strap for your practice',
    price: 49.99,
    originalPrice: 89.99,
    discountPercentage: 44,
    category: 'Fitness',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

// Server-side function to get all deals
export async function getAllDeals(): Promise<Deal[]> {
  // Simulate a server delay to demonstrate SSR
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return dealsData;
}

// Server-side function to get a single deal by ID
export async function getDealById(id: string): Promise<Deal | undefined> {
  // Simulate a server delay to demonstrate SSR
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return dealsData.find(deal => deal.id === id);
}

// Server-side function to get deals by category
export async function getDealsByCategory(category: string): Promise<Deal[]> {
  // Simulate a server delay to demonstrate SSR
  await new Promise(resolve => setTimeout(resolve, 400));
  
  return dealsData.filter(deal => deal.category === category);
}

// Get unique categories from deals data
export function getCategories(): string[] {
  const categories = new Set(dealsData.map(deal => deal.category));
  return Array.from(categories);
} 