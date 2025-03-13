import { getAllDeals, getDealsByCategory, getDealById } from '@/lib/deals';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // This makes the route dynamic and not cached by default

export async function GET(request: NextRequest) {
  // Get the search parameters
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  
  try {
    let data;

    // Fetch deal by ID if provided
    if (id) {
      data = await getDealById(id);
      
      // If deal not found, return 404
      if (!data) {
        return NextResponse.json(
          { error: 'Deal not found' },
          { status: 404 }
        );
      }
    } 
    // Fetch deals by category if provided
    else if (category) {
      data = await getDealsByCategory(category);
    } 
    // Otherwise fetch all deals
    else {
      data = await getAllDeals();
    }
    
    // Return the data
    return NextResponse.json({ data });
  } catch (error) {
    // Handle any errors
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deals data' },
      { status: 500 }
    );
  }
} 